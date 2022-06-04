# COMO COMEÇAR A USAR
Ao dar checkout na branch, no terminal, acesse a pasta backend/src e execute o comando 'npm install'.
Em seguida, é só executar o comando 'npm start'.


# Arquitetura

## Arquivos
App.JS -> Router -> Controller -> Service -> Api
| Pasta | Responsabilidade |
|---|---|
| Router | Mapear rotas | 
| Controller | Redireciona para responsáveis pelas operações |
| Service | Realiza operações de acordo com regras de negócio |
| config/db.js | Conexão com banco | 