import { useMemo, useState } from 'react';

const categories = [
  'Produtos',
  'Telemóveis',
  'Computadores',
  'Carros',
  'Imóveis',
  'Serviços',
  'Equipamentos',
  'Viagens',
  'Compras empresariais',
  'Outros'
];

const offerSeed = [
  {
    id: 1,
    title: 'Smartphone Samsung Galaxy A35 5G',
    category: 'Telemóveis',
    location: 'Maputo',
    price: 14990,
    priceLabel: 'MZN 14.990',
    provider: 'Jumbo Moçambique',
    delivery: 'Entrega em 48h',
    sourceUrl: 'https://www.jumbo.co.mz',
    verifiedAt: 'Hoje, 09:32',
    commission: '4.5%',
    badge: 'Preço verificado',
    stock: 'Disponível'
  },
  {
    id: 2,
    title: 'Laptop Lenovo IdeaPad 5 15IAH7',
    category: 'Computadores',
    location: 'Maputo',
    price: 42900,
    priceLabel: 'MZN 42.900',
    provider: 'Technologia 4U',
    delivery: 'A retirar ou enviar',
    sourceUrl: 'https://tecnologia4u.co.mz',
    verifiedAt: 'Hoje, 10:15',
    commission: '6%',
    badge: 'Fonte validada',
    stock: 'Em stock'
  },
  {
    id: 3,
    title: 'Toyota Corolla 2021',
    category: 'Carros',
    location: 'Beira',
    price: 975000,
    priceLabel: 'MZN 975.000',
    provider: 'Carros & Cia',
    delivery: 'Vista e documentação',
    sourceUrl: 'https://carrosecia.co.mz',
    verifiedAt: 'Ontem, 18:40',
    commission: '3.5%',
    badge: 'Verificação documental',
    stock: 'Disponível'
  },
  {
    id: 4,
    title: 'Apartamento 2 quartos em Matola',
    category: 'Imóveis',
    location: 'Matola',
    price: 680000,
    priceLabel: 'MZN 680.000',
    provider: 'Casa Nova',
    delivery: 'Visita agendada',
    sourceUrl: 'https://casanova.co.mz',
    verifiedAt: 'Ontem, 14:10',
    commission: '5%',
    badge: 'Listagem validada',
    stock: 'Disponível'
  },
  {
    id: 5,
    title: 'Serviço de entrega expressa para Maputo',
    category: 'Serviços',
    location: 'Maputo',
    price: 2500,
    priceLabel: 'MZN 2.500',
    provider: 'MKT Express',
    delivery: '24 a 72h',
    sourceUrl: 'https://mktexpress.co.mz',
    verifiedAt: 'Hoje, 08:20',
    commission: '7%',
    badge: 'Tempo real',
    stock: 'Disponível'
  },
  {
    id: 6,
    title: 'Pacote de viagem para Inhambane',
    category: 'Viagens',
    location: 'Maputo',
    price: 18500,
    priceLabel: 'MZN 18.500',
    provider: 'MZ Travel',
    delivery: 'Agendamento por WhatsApp',
    sourceUrl: 'https://mztravel.co.mz',
    verifiedAt: 'Hoje, 12:45',
    commission: '8%',
    badge: 'Oferta activa',
    stock: 'Disponível'
  },
  {
    id: 7,
    title: 'Monitor Dell 24" Full HD',
    category: 'Equipamentos',
    location: 'Beira',
    price: 17500,
    priceLabel: 'MZN 17.500',
    provider: 'Soluções Tech',
    delivery: 'Entrega em 72h',
    sourceUrl: 'https://solucoes.tech',
    verifiedAt: 'Hoje, 11:00',
    commission: '5%',
    badge: 'Disponibilidade confirmada',
    stock: 'Em stock'
  },
  {
    id: 8,
    title: 'Capa e proteção para iPhone 15 Pro',
    category: 'Produtos',
    location: 'Nampula',
    price: 2200,
    priceLabel: 'MZN 2.200',
    provider: 'CellFix',
    delivery: 'Entrega local',
    sourceUrl: 'https://cellfix.co.mz',
    verifiedAt: 'Hoje, 07:10',
    commission: '9%',
    badge: 'Acesso rápido',
    stock: 'Disponível'
  }
];

const adminOrders = [
  { id: 'SOL-000182', client: 'Ana B.', product: 'Samsung Galaxy A35', total: 14990, status: 'Pago', commission: 675 },
  { id: 'SOL-000183', client: 'Joel M.', product: 'Laptop Lenovo', total: 42900, status: 'Em validação', commission: 2574 },
  { id: 'SOL-000184', client: 'Lina C.', product: 'Entrega expressa', total: 2500, status: 'Pago', commission: 175 },
  { id: 'SOL-000185', client: 'Pedro G.', product: 'Apartamento', total: 680000, status: 'Aguardando', commission: 34000 }
];

const supplierCards = [
  { id: 1, name: 'Jumbo Moçambique', segment: 'Retalho', location: 'Maputo' },
  { id: 2, name: 'Technologia 4U', segment: 'Tecnologia', location: 'Beira' },
  { id: 3, name: 'Carros & Cia', segment: 'Automóveis', location: 'Nampula' },
  { id: 4, name: 'Casa Nova', segment: 'Imóveis', location: 'Maputo' },
  { id: 5, name: 'MKT Express', segment: 'Logística', location: 'Quelimane' },
  { id: 6, name: 'MZ Travel', segment: 'Viagens', location: 'Maputo' }
];

const transactions = [
  { id: 'TX-401', buyer: 'Ana B.', vendor: 'Jumbo', total: 14990, status: 'Concluído' },
  { id: 'TX-402', buyer: 'Joel M.', vendor: 'Technologia 4U', total: 42900, status: 'Em revisão' },
  { id: 'TX-403', buyer: 'Lina C.', vendor: 'MKT Express', total: 2500, status: 'Concluído' }
];

const defaultRequest = {
  need: 'Quero comprar um smartphone para uso diário',
  location: 'Maputo',
  category: 'Telemóveis',
  budget: '15000'
};

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-MZ', {
    style: 'currency',
    currency: 'MZN',
    maximumFractionDigits: 0
  }).format(value);
}

function App() {
  const [request, setRequest] = useState(defaultRequest);
  const [selectedOffer, setSelectedOffer] = useState(offerSeed[0]);
  const [searched, setSearched] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [activeTab, setActiveTab] = useState('Buscar');

  const results = useMemo(() => {
    const query = request.need.toLowerCase();
    return offerSeed.filter((item) => {
      const matchesText = !query || item.title.toLowerCase().includes(query) || item.provider.toLowerCase().includes(query);
      const matchesLocation = !request.location || item.location.toLowerCase().includes(request.location.toLowerCase());
      const matchesCategory = request.category === 'Outros' || item.category === request.category;
      const matchesBudget = !request.budget || Number(item.price) <= Number(request.budget || 999999999);
      return matchesText && matchesLocation && matchesCategory && matchesBudget;
    });
  }, [request]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearched(true);
    if (results[0]) {
      setSelectedOffer(results[0]);
    }
  };

  const handleConfirmOrder = () => {
    setOrderComplete(true);
    setActiveTab('Pedido');
  };

  const orderNumber = 'SOL-000186';

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <div>
            <div className="brand-name">SOLVE ZERO</div>
            <div className="brand-subtitle">Moçambique</div>
          </div>
        </div>

        <nav className="nav">
          <span>Pedido</span>
          <span>Pesquisa</span>
          <span>Pagamentos</span>
          <span>Admin</span>
        </nav>

        <button className="primary small">Entrar</button>
      </header>

      <main className="page">
        <section className="hero card">
          <div className="hero-copy">
            <span className="eyebrow">Marketplace inteligente · 24/7</span>
            <h1>Encontre qualquer produto ou serviço em Moçambique.</h1>
            <p>
              O utilizador pede o que precisa, informa a localização e o orçamento, e a SOLVE ZERO
              encontra opções reais, verificáveis, com comparação de preço e fornecedor.
            </p>

            <div className="quick-stats">
              <div>
                <strong>2.4k</strong>
                <span>Pedidos</span>
              </div>
              <div>
                <strong>94%</strong>
                <span>Match</span>
              </div>
              <div>
                <strong>mKesh</strong>
                <span>Pago</span>
              </div>
            </div>
          </div>

          <form className="search-panel" onSubmit={handleSearch}>
            <label>
              O que precisa?
              <textarea
                value={request.need}
                onChange={(e) => setRequest({ ...request, need: e.target.value })}
                rows="3"
              />
            </label>

            <div className="row">
              <label>
                Localização
                <input
                  value={request.location}
                  onChange={(e) => setRequest({ ...request, location: e.target.value })}
                />
              </label>
              <label>
                Orçamento (MZN)
                <input
                  type="number"
                  value={request.budget}
                  onChange={(e) => setRequest({ ...request, budget: e.target.value })}
                />
              </label>
            </div>

            <label>
              Categoria
              <select
                value={request.category}
                onChange={(e) => setRequest({ ...request, category: e.target.value })}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </label>

            <button type="submit" className="primary wide">Pesquisar opções reais</button>
          </form>
        </section>

        <section className="steps">
          <div className="step active"><span>1</span><strong>Pedido</strong></div>
          <div className="step active"><span>2</span><strong>Pesquisa</strong></div>
          <div className="step active"><span>3</span><strong>Opções</strong></div>
          <div className="step active"><span>4</span><strong>Pagamento</strong></div>
          <div className="step"><span>5</span><strong>Transação</strong></div>
        </section>

        <div className="tabbar">
          {['Buscar', 'Pedido', 'Admin'].map((tab) => (
            <button
              key={tab}
              type="button"
              className={activeTab === tab ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Buscar' && (
          <section className="content-grid">
            <div className="panel">
              <div className="panel-header">
                <h2>Opções verificáveis</h2>
                <span className="tag success">Fonte validada</span>
              </div>

              {results.length === 0 ? (
                <div className="empty-state">
                  Nenhuma opção encontrada para este pedido. Ajuste orçamento ou localização.
                </div>
              ) : (
                <div className="offers-list">
                  {results.map((offer) => (
                    <button
                      key={offer.id}
                      type="button"
                      className={`offer-card ${selectedOffer?.id === offer.id ? 'selected' : ''}`}
                      onClick={() => setSelectedOffer(offer)}
                    >
                      <div className="offer-head">
                        <div>
                          <div className="offer-type">{offer.category}</div>
                          <h3>{offer.title}</h3>
                        </div>
                        <span className="badge">{offer.badge}</span>
                      </div>

                      <div className="offer-meta">
                        <span>{offer.provider}</span>
                        <span>{offer.location}</span>
                      </div>

                      <div className="offer-price-row">
                        <strong>{offer.priceLabel}</strong>
                        <span>{offer.stock}</span>
                      </div>

                      <div className="offer-footer">
                        <span>Comissão: {offer.commission}</span>
                        <span>Verificado: {offer.verifiedAt}</span>
                      </div>

                      <a href={offer.sourceUrl} target="_blank" rel="noreferrer" className="link-inline">
                        Ver fonte
                      </a>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <aside className="panel sidebar">
              <div className="panel-header">
                <h2>Escolha e confirmação</h2>
                <span className="tag neutral">{searched ? 'Encontrado' : 'Em busca'}</span>
              </div>

              {selectedOffer && (
                <div className="summary-card">
                  <div className="divider" />
                  <div className="summary-row"><span>Produto</span><strong>{selectedOffer.title}</strong></div>
                  <div className="summary-row"><span>Fornecedor</span><strong>{selectedOffer.provider}</strong></div>
                  <div className="summary-row"><span>Preço</span><strong>{selectedOffer.priceLabel}</strong></div>
                  <div className="summary-row"><span>Entrega</span><strong>{selectedOffer.delivery}</strong></div>
                  <div className="summary-row"><span>Comissão SOLVE ZERO</span><strong>{selectedOffer.commission}</strong></div>
                  <div className="summary-row"><span>Valor da comissão</span><strong>{formatCurrency(selectedOffer.price * (Number.parseFloat(selectedOffer.commission) / 100))}</strong></div>

                  <button className="primary wide" onClick={handleConfirmOrder}>Confirmar pedido</button>
                </div>
              )}

              <div className="payment-box">
                <div className="panel-header tiny">
                  <h3>Pagamento via mKesh</h3>
                  <span className="mkesh">mKesh</span>
                </div>
                <div className="payment-state">
                  <span className="dot" />
                  <span>{orderComplete ? 'Pagamento confirmado' : 'Pendente'}</span>
                </div>

                {orderComplete && (
                  <div className="confirmation-box">
                    <strong>Pedido: {orderNumber}</strong>
                    <p>Transação em processamento. A confirmação do fornecedor será enviada em breve.</p>
                  </div>
                )}
              </div>
            </aside>
          </section>
        )}

        {activeTab === 'Pedido' && (
          <section className="panel transaction-panel">
            <div className="panel-header">
              <h2>Fluxo do pedido</h2>
              <span className="tag success">PEDIDO → PESQUISA → OPÇÕES REAIS → ESCOLHA → PAGAMENTO → TRANSAÇÃO → COMISSÃO</span>
            </div>

            <div className="flow-boxes">
              <div className="flow-box"><strong>1. Pedido</strong><span>{request.need}</span></div>
              <div className="flow-box"><strong>2. Pesquisa</strong><span>{request.location} · {request.category}</span></div>
              <div className="flow-box"><strong>3. Opção escolhida</strong><span>{selectedOffer?.title}</span></div>
              <div className="flow-box"><strong>4. Pagamento</strong><span>{orderComplete ? 'mKesh confirmado' : 'Pendente'}</span></div>
            </div>

            <div className="transaction-grid">
              {transactions.map((item) => (
                <div key={item.id} className="transaction-card">
                  <div className="transaction-top">
                    <strong>{item.id}</strong>
                    <span className="status-pill">{item.status}</span>
                  </div>
                  <div className="transaction-body">
                    <span>Comprador: {item.buyer}</span>
                    <span>Fornecedor: {item.vendor}</span>
                    <span>Total: {formatCurrency(item.total)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'Admin' && (
          <section className="admin-section">
            <div className="panel">
              <div className="panel-header">
                <h2>Painel administrativo</h2>
                <span className="tag neutral">Pedidos + fornecedores</span>
              </div>

              <div className="admin-grid">
                <div className="mini-card success"><span>Total de vendas</span><strong>MZN 1.197.100</strong></div>
                <div className="mini-card warning"><span>Comissões</span><strong>MZN 59.650</strong></div>
                <div className="mini-card info"><span>Fornecedores activos</span><strong>36</strong></div>
                <div className="mini-card dark"><span>Pedidos hoje</span><strong>182</strong></div>
              </div>

              <div className="supplier-row">
                {supplierCards.map((supplier) => (
                  <div className="supplier-card" key={supplier.id}>
                    <div className="supplier-name">{supplier.name}</div>
                    <small>{supplier.segment}</small>
                    <span>{supplier.location}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h2>Pedidos recentes</h2>
                <span className="tag success">Transações</span>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Pedido</th>
                    <th>Cliente</th>
                    <th>Produto</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Comissão</th>
                  </tr>
                </thead>
                <tbody>
                  {adminOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.client}</td>
                      <td>{order.product}</td>
                      <td>{formatCurrency(order.total)}</td>
                      <td><span className="status-pill">{order.status}</span></td>
                      <td>{formatCurrency(order.commission)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
