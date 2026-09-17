import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import crypto from 'node:crypto';

const app = express();
const port = Number(process.env.PORT || 4000);
const orders = [];
const transactions = [];

const categories = ['Produtos', 'Telemóveis', 'Computadores', 'Carros', 'Imóveis', 'Serviços', 'Equipamentos', 'Viagens', 'Compras empresariais', 'Outros'];
const suppliers = [
  { id: 1, name: 'Jumbo Moçambique', segment: 'Retalho', location: 'Maputo' },
  { id: 2, name: 'Technologia 4U', segment: 'Tecnologia', location: 'Beira' },
  { id: 3, name: 'Carros & Cia', segment: 'Automóveis', location: 'Nampula' },
  { id: 4, name: 'Casa Nova', segment: 'Imóveis', location: 'Maputo' },
  { id: 5, name: 'MKT Express', segment: 'Logística', location: 'Quelimane' },
  { id: 6, name: 'MZ Travel', segment: 'Viagens', location: 'Maputo' }
];
const offers = [
  { id: 1, title: 'Smartphone Samsung Galaxy A35 5G', category: 'Telemóveis', location: 'Maputo', price: 14990, priceLabel: 'MZN 14.990', provider: 'Jumbo Moçambique', delivery: 'Entrega em 48h', sourceUrl: 'https://www.jumbo.co.mz', verifiedAt: 'Hoje, 09:32', commission: '4.5%', badge: 'Preço verificado', stock: 'Disponível' },
  { id: 2, title: 'Laptop Lenovo IdeaPad 5 15IAH7', category: 'Computadores', location: 'Maputo', price: 42900, priceLabel: 'MZN 42.900', provider: 'Technologia 4U', delivery: 'A retirar ou enviar', sourceUrl: 'https://tecnologia4u.co.mz', verifiedAt: 'Hoje, 10:15', commission: '6%', badge: 'Fonte validada', stock: 'Em stock' },
  { id: 3, title: 'Toyota Corolla 2021', category: 'Carros', location: 'Beira', price: 975000, priceLabel: 'MZN 975.000', provider: 'Carros & Cia', delivery: 'Vista e documentação', sourceUrl: 'https://carrosecia.co.mz', verifiedAt: 'Ontem, 18:40', commission: '3.5%', badge: 'Verificação documental', stock: 'Disponível' },
  { id: 4, title: 'Apartamento 2 quartos em Matola', category: 'Imóveis', location: 'Matola', price: 680000, priceLabel: 'MZN 680.000', provider: 'Casa Nova', delivery: 'Visita agendada', sourceUrl: 'https://casanova.co.mz', verifiedAt: 'Ontem, 14:10', commission: '5%', badge: 'Listagem validada', stock: 'Disponível' },
  { id: 5, title: 'Serviço de entrega expressa para Maputo', category: 'Serviços', location: 'Maputo', price: 2500, priceLabel: 'MZN 2.500', provider: 'MKT Express', delivery: '24 a 72h', sourceUrl: 'https://mktexpress.co.mz', verifiedAt: 'Hoje, 08:20', commission: '7%', badge: 'Tempo real', stock: 'Disponível' },
  { id: 6, title: 'Pacote de viagem para Inhambane', category: 'Viagens', location: 'Maputo', price: 18500, priceLabel: 'MZN 18.500', provider: 'MZ Travel', delivery: 'Agendamento por WhatsApp', sourceUrl: 'https://mztravel.co.mz', verifiedAt: 'Hoje, 12:45', commission: '8%', badge: 'Oferta activa', stock: 'Disponível' }
];

app.use(cors());
app.use(express.json({ limit: '32kb' }));

const id = (prefix) => `${prefix}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
const json = (res, data) => res.json({ data });

app.get('/api/health', (req, res) => res.json({ ok: true, service: 'solve-zero-api', payments: ['mKesh', 'M-Pesa', 'e-Mola'] }));
app.get('/api/categories', (req, res) => json(res, categories));
app.get('/api/offers', (req, res) => {
  const { query = '', category = '', location = '', budget = '' } = req.query;
  const q = String(query).toLowerCase();
  const data = offers.filter((item) =>
    (!q || `${item.title} ${item.provider}`.toLowerCase().includes(q)) &&
    (!location || item.location.toLowerCase().includes(String(location).toLowerCase())) &&
    (!category || category === 'Outros' || item.category === category) &&
    (!budget || item.price <= Number(budget))
  );
  json(res, data);
});
app.get('/api/suppliers', (req, res) => json(res, suppliers));
app.get('/api/orders', (req, res) => json(res, orders));
app.get('/api/transactions', (req, res) => json(res, transactions));

app.post('/api/orders', (req, res) => {
  const { product, provider, amount, paymentMethod, phoneNumber } = req.body || {};
  if (!product || !provider || !Number.isFinite(Number(amount)) || !paymentMethod || !phoneNumber) {
    return res.status(400).json({ error: 'product, provider, amount, paymentMethod e phoneNumber são obrigatórios.' });
  }
  if (!['mKesh', 'M-Pesa', 'e-Mola'].includes(paymentMethod)) {
    return res.status(400).json({ error: 'Método de pagamento não suportado.' });
  }

  const order = { id: id('SOL'), product, provider, total: Number(amount), paymentMethod, phoneNumber, status: 'Aguardando pagamento', createdAt: new Date().toISOString() };
  orders.unshift(order);
  transactions.unshift({ id: id('TX'), buyer: 'Cliente novo', vendor: provider, total: Number(amount), status: 'Aguardando pagamento', orderId: order.id });
  return res.status(201).json({ ok: true, data: order, message: 'Pedido criado. O pagamento só será confirmado por webhook do provedor.' });
});

app.post('/api/payments/:provider/webhook', (req, res) => {
  const provider = req.params.provider;
  if (!['mkesh', 'mpesa', 'emola'].includes(provider)) return res.status(404).json({ error: 'Provedor não suportado.' });
  // Production: validate provider signature here before changing any order status.
  return res.status(202).json({ received: true, provider, verified: false, message: 'Webhook recebido; configure a assinatura oficial do provedor antes de confirmar pagamentos.' });
});

app.listen(port, () => console.log(`SOLVE ZERO API listening on http://localhost:${port}`));
