<p align="center">
  <img alt="Naver" title="Naver" src=".github/logo.png" width="200px" />
</p>

<h4 align = "center">
  Plataforma navers
</h4>

## 💻 Projeto

Este projeto tem como objetivo cumprir o desafio proposto pela empresa [Nave](https://nave.rs/), ele consiste em criar um aplicativo com react native, no qual a aplicação deve fazer a visualização/criação/edição de navers, possuindo informações como: nome, idade, cargo, tempo de empresa e projetos que participou.

Para contrução do layout foi disponibilizado um [link no figma](https://www.figma.com/file/MIh7DeADz8M3mmcQwpcFdD/Teste-Mobile?node-id=1253%3A0) com as prototipação das telas. E também foi disponibilizado um link de uma API REST para integração.

Para mais detalhes do desafio acesse o [README](https://github.com/naveteam/react-native-challenge) do desafio.

## :rocket: Tecnologias

-  [Yup](https://github.com/jquense/yup)
-  [Expo](https://expo.io/)
-  [Date-fns](https://date-fns.org/)
-  [React Native](https://reactnative.dev/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Styled Components](https://styled-components.com/)
-  [React Navigation v5](https://reactnavigation.org/)

## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:LeeonardoVargas/navedex.git && cd navedex
```
Agora basta instalar as dependências e executar o expo. Caso você não tenha o expo-cli instalado basta seguir esse [tutorial](https://expo.io/learn).

```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ expo start

```

## 📝 Funcionalidades Propostas

- [x] **Controle de autenticação e Login**: O app deverá possuir um fluxo de autenticação, onde o usuário só pode acessar as telas internas (listagem, formulários) passando pela tela de login com as credenciais.

- [x] **Listagem dos Navers**: A página inicial do app terá uma lista dos navers.

- [x] **Visualizar um Naver**: Ao clicar em algum naver da listagem, o usuário terá uma visualização completa das informações do mesmo.

- [x] **Cadastrar um Naver**: O usuário precisa ter a possibilidade de criar um novo naver.

- [x] **Editar um Naver**: O usuário precisa ter a possibilidade de editar um naver já existente.

- [x] **Menu Drawer**: Criar um menu drawer para fazer a navegação entre as rotas.
