# SOLVE ZERO — MVP marketplace inteligente para Moçambique

Aplicação web/mobile para marketplace/intermediário inteligente, focada em Moçambique, com fluxo:
PEDIDO → PESQUISA → OPÇÕES REAIS → ESCOLHA → PAGAMENTO → TRANSAÇÃO → COMISSÃO.

Objetivo
- Permitir que qualquer pessoa peça um produto ou serviço por texto.
- Informar localização e orçamento.
- Mostrar opções verificáveis e reais, sem inventar preços, disponibilidade ou fornecedores.
- Separar transação, pagamento e comissão de forma transparente.
- Preparar a base para automação futura de pesquisa, pedidos, pagamentos e acompanhamento.

Funcionalidades do MVP
- Pesquisa por produto/serviço por categoria e texto livre
- Localização e orçamento
- Comparação de opções reais com fonte validada
- Escolha de fornecedor e confirmação de pedido
- Pagamentos com mKesh, M-Pesa e e-Mola (modo visível, pronto para integração real)
- Painel administrativo simples com pedidos, comissões e fornecedores
- Estrutura mobile-first e rápida para Android
- API local de dados para simulação de resultados e pedidos

Regras de negócio
- Sem stock próprio
- Sem inventar preços, disponibilidade ou fornecedores
- Apenas dados verificáveis e explícitos na UI
- Transparência total na comissão do intermediário

Tecnologias
- React
- Vite
- Express (API local)
- CSS moderno

Execução local
1. Instale dependências:
   npm install
2. Inicie a API local:
   npm run dev:server
3. Inicie a app web:
   npm run dev
4. Abra no navegador:
   http://localhost:3000

Build de produção
npm run build

Observação importante sobre pagamentos
Este MVP inclui fluxos visuais e estruturais para mKesh, M-Pesa e e-Mola, mas não estabelece uma integração financeira real com provedores externos. O objetivo é preparar a UX, o processo e a lógica para futuras integrações seguras e auto-contidas.

Estrutura do projeto
- src/App.jsx — lógica principal da aplicação
- src/styles.css — estilos responsivos
- src/main.jsx — bootstrap do React
- server.js — API local de dados e simulação de pedidos

