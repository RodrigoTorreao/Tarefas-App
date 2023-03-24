# Informativos API
O backend foi desenvolvido utilizando a técnica de Test-driven development (TDD)
### Requisitos
- Node (˜18.0.0)
- Postgress Server

### Técnologias
- Sequelize
- Express
- jsonwebtoken
- Jest

## Endpoint padrão

localhost:3000

## Configuração Variáveis de Ambiente

Antes de iniciar o projeto é necessário configurar as variáveis de ambiente, segue o template:

```
PORT 
DB_HOST
DB_PASS 
DB_USER
DB_NAME
TOKEN_SECRET
```

Esse template deve ser colocado em um arquivo `.env` dentro da root do projeto backend.

## Instruções para iniciar a API

Para rodar a API basta rodar o seguinte comando:

```shell
npm start
```
A API estará rodando na porta 3000 e você pode acessa-lá no endpoint:
`localhost:3000`

É possível testar aplicação através do seguinte comando:

```shell
npm test
```
