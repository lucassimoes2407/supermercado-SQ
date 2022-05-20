# Projeto - 🛒*Supermercado SQ* 

## Sumário
* [Problemática do Projeto](#problematica)
* [Atores do Sistema](#atores)
* [Elicitação de Requisitos](#elicitacao)
* [Requisitos Funcionais](#requisitos-funcionais)
* [Requisitos Não-Funcionais](#requisitos-nao-funcionais)
* [Regras de Negócio](#regras-negocio)
* [Visão Geral da Aplicação](#visao-aplicacao)
* [Modelagem Conceitual - ER](#modelagem-conceitual)
* [Modelagem Lógica](#modelagem-logica)
* [Requisitos desenvolvidos](#requisitos-desenvolvidos)
* [Em desenvolvimento](#em-desenvolvimento)
* [Equipe DevHub](#equipe-devhub)


## <a id="problematica"></a> 🤔 Problemática do Projeto
O *Supermercado SQ* necessita de um sistema de gerenciamento de alimentos e composições alimentares que auxilie seus clientes a saber quais compostos alergênicos estão contidos nos alimentos que serão comprados.

## <a id="atores"></a> 📋 Atores do Sistema

<div width=50% height=50%>

![Tipos de Usuários e Permissões](./planejamento/atores-sistema.png)

</div>

## <a id="elicitacao"></a> 🤯 Elicitação de Requisitos

### <a id="requisitos-funcionais"></a> 📑 Requisitos Funcionais

ID|Descrição|
:---:|:---|
RF-01| O sistema deve permitir o cadastro de dados pelos usuários.
RF-02| O sistema deve permitir a visualização dos dados cadastrados
RF-03| O sistema deve permitir a edição dos dados cadastrados
RF-04| O sistema deve permitir a remoção dos dados cadastrados
RF-05| O sistema deve conter dados sobre o produto, como o seu nome e ingredientes
RF-06| O sistema deve permitir a pesquisa de produtos e seus ingredientes
RF-07| O sistema deve permitir a pesquisa de um ingrediente que possa conter o produto em questão
RF-08| O sistema deve permitir a busca por alimentos que não contenham certos ingredientes
RF-09| O sistema deve permitir a busca por alimentos que contenham certos ingredientes

### <a id="requisitos-nao-funcionais"></a> 📑 Requisitos Não-Funcionais

ID|Descrição|
:---:|:---|
RF-01| A interface do sistema deve se adaptar aos diferentes dispositivos que possam acessá-lo
RF-02| O sistema deve garantir a integridade dos dados de todos os usuários

### <a id="regras-negocio"></a> 📑 Regras de Negócio

ID|Descrição|
:---:|:---|
RN-01| 
RN-02| 

## <a id="visao-aplicacao"></a> 👀 Visão Geral da Aplicação
![Diagrama de Caso de Uso](./planejamento/diagrama-caso-uso.png)

<!---
## 💻 Telas identificadas até o Momento

### Home

* Slide com Noticias relacionadas
* Mini tutorial de uso do sistema
* Login
* Rodapé

### Consulta de Produto *(sem Cadastro)*

* Consulta de Produtos
    * Detalhes *=> Direciona Detalhes Produto*
* Filtrar Alergênicos para ocultar
* Filtrar Alergênico para mostrar
* Cadastrar Produto *=> Direciona para Login*

### Login

* Usuário
* Senha
* Esqueci a senha
* Criar conta

### Cadastro de Usuário

* Nome
* CPF
* Telefone
* Solicitar cadastro Administrativo ou de Fornecedor
    * Nome Representante
    * CNPJ da empresa representada
    * Telefone

### Home Cliente Logado

* Consulta de Produtos
    * Detalhes *=> Direciona Detalhes Produto* 
* Filtrar Alergênicos para ocultar
* Filtrar Alergênico para mostrar
* Cadastrar Novo Produto
* Definições de Conta e Preferencias
* Logout

### Home Fornecedor 

* Consulta de Produtos
    * Detalhes *=> Direciona Detalhes Produto*
* Filtrar Alergênicos para ocultar
* Filtrar Alergênico para mostrar
* Cadastrar Novo Produto
* Definições de Conta e Preferencias
* Logout

### Home Administrador 

* Painel Estatisticas
* Consulta de Produtos
    * Detalhes *=> Direciona Detalhes Produto*
* Gerenciar Usuarios *=> Gerencia de Usuários*
* Definições de Conta e Preferencias
* Logout


### Cadastro de Produto *(Cliente Logado)*

* Nome produto
* Marca
* Lista igredientes
* Possíveis Alergênicos
* Imagem
* Salvar

### Detalhes de Produto *(Cliente Logado)*

* Nome produto
* Marca
* Lista igredientes
    * Pesquisar na Lista
* Possíveis Alergênicos
    * Pesquisar na lista
* Imagem
* Salvar

### Tela Alteração Perfil
* Nome
* CPF/CNPJ
* Telefone
* Solicitar Deleção de Conta e Dados

### Detalhes de Produto *(Adm ou Fornecedor Logado)*

* Cod Produto
* Nome produto
* Marca
* Lista igredientes
    * Pesquisar na Lista
* Possíveis Alergênicos
    * Pesquisar na lista
* Imagem
* Salvar
* Imagem Produto
    * Cod Usuário que cadastrou
    * Nome Usuário que cadastrou
* Botão para Editar *=> Direciona edição produto
* Remover Produto da Base de Dados

### Cadastro/Edição de Produto *(Adm ou Fornecedor Logado)*

* Cod Produto
* Nome Produto
* Marca
* Lista Ingredientes
* Possiveis Alergênicos
* Imagem Produto
    * Cod Usuário que cadastrou
    * Nome Usuário que cadastrou
* Salvar Alterações
* Remover Produto da Base de Dados

### Gerencia Usuários *(Adm Logado)*

* Solicitações de Cadastros como Fornecedores
  * Modal Detalhes Usuário
  * Aprovar/Rejeitar
* Campo Pesquisa Usuario
  * Modal Detalhes Usuário
  * Deletar Cadastro

-->

## <a id="modelagem-conceitual"></a> 🎲 Modelagem Conceitual - ER
![Modelo Conceitual - ER](./planejamento/modelo-conceitual.png)
## <a id="modelagem-logica"></a> 🎲 Modelagem Lógica
![Modelo Lógico](./planejamento/modelo-logico.png)

## <a id="requisitos-desenvolvidos"></a> ✅ Requisitos desenvolvidos

### <a id="em-desenvolvimento"></a> 🚧 Em desenvolvimento 🚧


---
<!-- Tabela com Integrantes do Grupo -->
<div align=center>
<a id="equipe-devhub"></a>

![Logo DevHub](./planejamento/logo-devhub-darkmode.png)

| | | | |
|:---|:---|:---|:---|
| <img  src="https://avatars.githubusercontent.com/u/86008336?v=4" width=50px/> | <a href="https://github.com/ismaelzaccah">Ismael Zaccah | <img  src="https://avatars.githubusercontent.com/u/42359787?v=4" width=50px/> | <a href="https://github.com/javelfreitas">Javel Freitas |
| <img  src="https://avatars.githubusercontent.com/u/78852666?v=4" width=50px/> | <a href="https://github.com/Elaine-G-L">Elaine-G-L | <img  src="https://avatars.githubusercontent.com/u/56098754?v=4" width=50px/> | <a href="https://github.com/AglailsonSantiago">Aglailson Santiago |
| <img  src="https://avatars.githubusercontent.com/u/47800237?v=4" width=50px/> | <a href="https://github.com/andreinamendes">Andreina Mendes | <img  src="https://avatars.githubusercontent.com/u/96750112?v=4" width=50px/> | <a href="https://github.com/lucassimoes2407">Lucas Simoes |
| <img  src="https://avatars.githubusercontent.com/u/78513841?v=4" width=50px/> | <a href="https://github.com/BrunoSTB">Bruno Braga | <img  src="https://avatars.githubusercontent.com/u/59093848?v=4" width=50px/> | <a href="https://github.com/wiwiaR">Vitória Ribeiro |

 **DevHub ©** Atlântico Academy Bootcamp
 </div>

---