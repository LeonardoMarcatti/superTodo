# superTodo 🌐

Este projeto é uma aplicação web full-stack utilizando React.js para o frontend e Laravel para o backend. Ele foi desenvolvido para gerenciamento de tarefas com funcionalidades de autenticação.

## Componentes Frontend

### Home

* Exibe a página inicial da aplicação.
* Orienta os usuários a selecionarem uma tarefa no painel lateral.

### Login

* Fornece um formulário de login para usuários existentes.
* Inclui campos para inserção de email e senha.

### Cadastro (Logup)

* Oferece um formulário de registro para novos usuários.
* Requer campos para inserção de nome, email e senha.

### Root

* Define o layout principal da aplicação.
* Inclui um cabeçalho, uma barra lateral para listagem de tarefas, área principal de conteúdo e rodapé.

## Backend (Laravel)
* Endpoints da API
* Gerencia autenticação de usuários (login, registro).
* Realiza operações CRUD de tarefas (criar, ler, atualizar, deletar).


## Tecnologias Utilizadas

* ### Frontend

* React.js
* React Router DOM
* Bootstrap 5
* Font Awesome


* ### Backend

* Laravel (framework PHP)
* MySQL 

## Executando a Aplicação
Para rodar este projeto localmente

#### Clone o repositório.
```bash
git clone https://github.com/LeonardoMarcatti/superTodo.git

cd superTodo
```


### Configure o backend Laravel

* Configure a conexão com o banco de dados no arquivo .env.
* Execute as migrações para criar as tabelas necessárias no banco de dados.
* Inicie o servidor de desenvolvimento do Laravel.

### Configure o frontend React

* Instale as dependências utilizando npm.
* Inicie o servidor de desenvolvimento do React.

## Observações Adicionais
* Esta aplicação integra tecnologias frontend e backend para fornecer uma experiência de usuário contínua para gerenciamento de tarefas com autenticação.

* Personalize e estenda a funcionalidade com base nos requisitos do projeto, como adicionar mais endpoints de API ou melhorar recursos no frontend.