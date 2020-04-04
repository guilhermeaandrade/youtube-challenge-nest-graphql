<h1 align="center">
Code Challenge - NestJS + TypeORM + GraphQL
</h1>
<p align="center">Simple GraphQL API with NestJS in Back-end. React and Apollo Client for Front-end.</p>

## Requisitos funcionais

- [x] O usuário precisa se cadastrar apenas usando o e-mail
- [x] O usuário precisa autenticar por e-mail
- [x] O usuário pode postar uma mensagem no mural (Back-end)
- [ ] O usuário pode postar uma mensagem no mural (Front-end)
- [x] (Opcional) O usuário pode deletar a mensagem (Back-end)
- [ ] (Opcional) O usuário pode deletar a mensagem (Front-end)
- [x] Usuário precisa ver em tempo real novas mensagens (Back-end)
- [ ] Usuário precisa ver em tempo real novas mensagens (Front-end)
- [ ] Gerar documentação final com Swagger
- [x] Integrar dataloader

## Requisitos não-funcionais

- [x] Nest.js
- [x] GraphQL
- [x] TypeORM
- [x] React + Apollo Client (or another library)

## Regras de negócio

- [x] Usuário não pode deletar mensagens de outros usuários

## O que pode ser melhorado?
- Autenticação JWT

## Dependências

- [Node](https://nodejs.org/en/) = 10

## Getting started

1. Clone this repository;<br />
2. Run `npm or yarn install` at each project in order to install dependencies.<br />
3. Run `yarn start` for `backend` and `yarn start` for `frontend` folder.<br />
4. Access `localhost:3000` in your browser. GraphQL playground: `localhost:3333/graphql`.<br />