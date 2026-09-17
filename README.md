# SOLVE ZERO — MVP marketplace para Moçambique

## Estado real do projecto
A aplicação web está implementada e o repositório contém uma API Express funcional para ofertas, fornecedores, pedidos e transações.

Os pagamentos mKesh, M-Pesa e e-Mola aparecem no fluxo e o backend aceita pedidos com o método seleccionado. **Nenhum pagamento é marcado como pago automaticamente**: a confirmação deve vir do webhook oficial do provedor, com credenciais, assinatura e contrato de integração válidos.

Não é possível activar pagamentos financeiros reais apenas pelo código. São necessários:
- conta comercial/aprovação de cada provedor;
- credenciais de produção e URLs oficiais;
- número/conta de recebimento da SOLVE ZERO;
- configuração de webhooks e validação de assinatura;
- testes de sandbox e conformidade local.

## Executar
```bash
npm install
npm run dev:server
npm run dev
```

Abrir `http://localhost:3000`.

## Variáveis de ambiente
Copiar `.env.example` para `.env`. Nunca guardar segredos no GitHub.

## Endpoints
- `GET /api/health`
- `GET /api/categories`
- `GET /api/offers`
- `GET /api/suppliers`
- `GET /api/orders`
- `GET /api/transactions`
- `POST /api/orders`
- `POST /api/payments/:provider/webhook`

## Segurança antes do lançamento
- trocar arrays em memória por PostgreSQL/SQLite;
- autenticação e autorização de admin;
- validação dos webhooks com documentação oficial;
- idempotência, auditoria, reconciliação e logs;
- HTTPS, rate limiting, validação de telefone e proteção de dados;
- substituir ofertas de demonstração por fontes realmente verificadas.
