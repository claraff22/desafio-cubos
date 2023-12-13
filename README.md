# Desafio Cubos Pessoa Backend Junior

### Introdução
Este projeto foi desenvolvido como parte do desafio técnico proposto.

### Tecnologias utilizadas
1. Node.js
2. TypeScript
3. Express
4. Sequelize
5. Postgres

### Instruções
1. Substituir dados no arquivo ".env";
2. Execução dos comandos:
   npm install
   npm run build
   npx sequelize-cli db:migrate
   npm run dev

##### Observações
A rota POST /accounts/:accountId/transactions, foi levemente alterada para atender aos requisitos de funcionalidade. Sendo adcionado a coluna "type" com valores possíveis de "debit" ou 
"credit".
Request: 

{
  "value": 100.00,
  "type": "debit"
  "description": "Pizzaria São Tomé"
}
