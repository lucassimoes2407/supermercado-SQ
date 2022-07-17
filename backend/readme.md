# Como começar a usar
Primeiro de tudo, certifique-se que na sua máquina você tem instalado as seguintes ferramentas:

- Insomnia: [Link para Download](https://insomnia.rest/download)

A aplicação está hospedada no seguinte link: https://supermercado-sq-backend.herokuapp.com/

Para realizar requisições, você pode tanto realizar direto pelo link, chamando, por exemplo: 
https://supermercado-sq-backend.herokuapp.com/products
Para trazer todos os produtos cadastrados.

Entretanto a melhor forma de realizar requisições no backend são através do Insomnia.

### Testando através do Insomnia 
Para testar as requisições abra o Insomnia e clique no menu `Application > Preferences`, vá até a guia `Data` e clique em `Import Data`, depois em `From File` e escolha o arquivo [Testes HTTP - Insomnia.json](./Testes%20HTTP%20-%20Insomnia.json) localizado dentro da pasta `/supermercado-SQ/backend`, na dashboard do Insomnia escolha o projeto que foi importado e vá até a guia `DEBUG`, as requisições estão nomeadas e organizadas em pastas ao lado esquerdo com os nomes das tabelas que correspondem.


***

# Arquitetura

| Pasta/Arquivo     | Responsabilidade                                                                      |
|-------------------|---------------------------------------------------------------------------------------|
| ./app             | Onde se define a rota de entrada pro endpoint de cada entidade.                       |
| ./src/bin/www     | Principais configurações do servidor.                                                 |
| ./src/config/db   | Principais configurações do banco de dados.                                           |
| ./src/routes      | Responsável por definir as rotas de cada entidade.                                    |
| ./src/controllers | Onde são definidas as regras de negócio, manipulação de dados e verificação de erros. |
| ./src/models      | Responsável por definir as querys SQL de cada entidade do sistema.                    |

***

# Entidades do Sistema

## Usuários
#### Regras de negócio
ID|Descrição|
:---:|:---|
RNeg-01| O sistema deve garantir que os dados username e email, de usuário, devem ser únicos 
RNeg-02| O sistema deve garantir que um usuário não seja apagado e sim deixado como inativo
RNeg-03| O sistema deve garantir que ao atualizar os dados de um usuário as regras RNeg-01 e RNeg-02, sejam mantidas

#### Endpoints
| Rota                              | Método | Função                                                       |
|-----------------------------------|--------|--------------------------------------------------------------|
| /users/                           | GET    | Lista todos os usuários                                      |
| /users/username/:username         | GET    | Lista um usuário a partir do username                        |
| /users/id/:id                     | GET    | Lista um usuário a partir do id                              |
| /users/findUsersActive            | GET    | Lista todos os usuários definidos como ativos                |
| /users/findUsersInactive          | GET    | Lista todos os usuários definidos como inativos              |
| /users/                           | POST   | Cria um usuário                                              |
| /users/login                      | POST   | Rota para login                                              |
| /users/logout                     | POST   | Rota para logout                                             |
| /users/setUserActiveAttribute/:id | PUT    | Muda um usuário para ativo ou inativo a partir de um id      |
| /users/:id                        | PUT    | Atualiza um usuário a partir do id   
| /users/:username                  | DELETE | Deleta um usuário a partir do username                       |
| /users/id/:id                     | DELETE | Deleta um usuário a partir do id   

***

## Produtos

#### Regras de negócio
| Id      | Descrição                                                                  |
|---------|----------------------------------------------------------------------------|
| RNeg-01 | Deve ser registrado quem criou qual produto.                               |
| RNeg-02 | Os campos 'Nome' e 'Ingredientes' devem, obrigatoriamente, conter valores. |
| RNeg-03 | Um usuário pode cadastrar até 06 imagens por produto.                      |


#### EndPoints
| Rota                              | Método | Função                                                       |
|-----------------------------------|--------|--------------------------------------------------------------|
| /products/                        | GET    | Lista todos os produtos                                      |
| /products/:productCode            | GET    | Lista um produto a partir do id                              |
| /products/name/:productName       | GET    | Lista produtos com determinado nome                          |
| /products/ingredient/:productIngredient       | GET    | Lista produtos com determinado ingrediente       |
| /products/brand/:productBrand     | GET    | Lista produtos de determinada marca                          |
| /products/                        | POST   | Cria um produto                                              |
| /products/filtered/               | POST   | Filtra produtos com base em nome, e com/sem ingredientes especificos|
| /products/                        | PUT    | Atualiza os dados de um produto                              |
| /products/:productCode            | DELETE | Deleta um produto a partir do id  

***

## Restrições

#### Regras de negócio
ID|Descrição|
:---:|:---|
RNeg-01| O sistema deve permitir o cadastro de dados pelos usuários
RNeg-02| O sistema deve permitir a visualização dos dados cadastrados
RNeg-03| O sistema deve permitir a remoção dos dados cadastrados
RNeg-04| O sistema deve permitir a edição dos dados cadastrados

#### EndPoints
| Rota                              | Método | Função                                                       |
|-----------------------------------|--------|--------------------------------------------------------------|
| /restriction/                     | GET    | Lista todas as restrições                                    |
| /restriction/cod/:cod_restricao   | GET    | Lista uma restição a partir do id                            |
| /restriction/name/                | GET    | Lista uma restrição a partir o seu nome                      |
| /restriction/                     | POST   | Cria uma restrição                                           |
| /restriction/:cod_restricao       | PUT    | Atualiza uma restrição a partir do id                        |
| /restriction/:cod_restricao       | DELETE | Deleta uma restriçãoa partir do id                           |

***

## Usuários X Restrições

#### Regras de negócio
| Id      | Descrição                                                                    |
|---------|------------------------------------------------------------------------------|
| RNeg-01 | Cada entrada na tabela deve conter apenas um cod_usuario e um cod_restricao. |
| RNeg-02 | Podem haver diversas entradas para o mesmo usuário, variando as restrições.  |
| RNeg-03 | Podem haver diversas entradas para uma mesma restrição, variando os usuários.  |

#### EndPoints
| Rota                              | Método | Função                                                       |
|-----------------------------------|--------|--------------------------------------------------------------|
| /user-restriction/:cod_usuario    | GET    | Pega todas as restrições de um usuário                       |
| /user-restriction/:cod_usuario    | POST   | Adicionar uma restrição de um usuário                        |
| /user-restriction/:cod_usuario    | DELETE | Deleta uma restrição de um usuário                           |

***

## Produtos X Restrições

#### Regras de negócio
| Id      | Descrição                                                                    |
|---------|------------------------------------------------------------------------------|
| RNeg-01 | Cada entrada na tabela deve conter apenas um cod_produto e um cod_restricao. |
| RNeg-02 | Podem haver diversas entradas para o mesmo produto, variando as restrições.  |
| RNeg-03 | Pordem haver diversas entradas para a mesma restrição, variando os produtos. |

#### EndPoints
| Rota                              | Método | Função                                                       |
|-----------------------------------|--------|--------------------------------------------------------------|
| /product-restriction/:cod_produto | GET    | Mosta todas as restrições que um produto pode estar inserido |
| /product-restriction/:cod_produto | POST   | Cria uma nova restição associada a um produto                |
| /product-restriction/:cod_produto | DELETE | Apaga uma restrição associada a um produto                   |

***