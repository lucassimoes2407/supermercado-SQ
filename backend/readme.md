# COMO COMEÇAR A USAR

Na pasta backend, crie um arquivo .env e defina as variáveis de ambiente como exemplificado no arquivo .env-sample.
Feito isso, rode os seguintes comandos:
`npm i`
em seguida é só iniciar com:
`npm start`


# Arquitetura



## Arquivos
App.JS -> Router -> Controller -> Service -> Api
| Pasta | Responsabilidade |
|---|---|
| Router | Mapear rotas | 
| Controller | Redireciona para responsáveis pelas operações |
| Service | Realiza operações de acordo com regras de negócio |
| config/db.js | Conexão com banco | 