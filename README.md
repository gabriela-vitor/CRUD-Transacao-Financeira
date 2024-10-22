# Projeto CRUD Transações Financeiras

Desenvolver uma aplicação web para gerenciar transações financeiras, permitindo o cadastro,
listagem, edição e exclusão de receitas e despesas. O mesmo formulário deve ser usado para registrar
tanto receitas quanto despesas, com um campo que indique o tipo de transação e outro que diferencie
entre despesa (valor negativo) e receita (valor positivo).

## Funcionalidades:
- Um único formulário para registrar tanto receitas quanto despesas.
- Campo para indicar se a transação é uma despesa ou receita.
- Se a transação for uma despesa, o valor é salvo como negativo no banco de dados.
- Possibilidade de categorizar a transação com tipos como Aluguel, Pagamento, Prolabore, etc.
- Listar todas as transações com a opção de filtrar por tipo (receita ou despesa).
- Permitir a edição das transações cadastradas.

## Tecnologias Utilizadas:
- **Backend**: PHP com Laravel
- **Frontend**: Angular (versão 16 ou superior)
- **Banco de Dados**: MySQL 

## Como rodar este projeto?
- Front End:
```bash
Navegue até a pasta frontend/.

#Intalar dependências do Angular usando o NPM:
npm install

#Inicie o servidor de desenvolvimento:
ng serve
```
- Back End:
```bash
Navegue até a pasta `backend/`.

#Instale as dependências do PHP usando o Composer:
composer install

#Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente (como detalhes do banco de dados).

#Gere a chave de aplicação:
php artisan key:generate

#Inicie o servidor:
php artisan serve

```
- Banco de Dados:
```bash
#Crie um banco de dados no MySQL ou PostgreSQL.

#Importe os scripts contidos na pasta `banco/` para criar as tabelas necessárias.
```
## Pessoa Autora:
Gabriela Vitor Siqueira

- [Linkedin](www.linkedin.com/in/gabriela-siqueiraa)
