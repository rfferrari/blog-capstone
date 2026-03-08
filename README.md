# Projeto Capstone: Aplicacao Web de Blog

## Sobre
Este e o meu primeiro projeto em Node.js, criado como parte de um trabalho final (capstone) de curso. O objetivo e construir uma aplicacao web simples de blog usando Node.js, Express.js e EJS. Este projeto foca no aprendizado de fundamentos de backend, template engine e estilizacao web.

## O que sao Projetos Capstone?
Projetos capstone sao atividades abrangentes criadas para consolidar e aplicar as habilidades aprendidas ao longo de um curso. Em geral, envolvem a construcao de uma aplicacao completa do zero, demonstrando entendimento dos conceitos principais e das boas praticas.

## Descricao do Projeto
Esta aplicacao permite que usuarios criem, visualizem, editem e excluam posts do blog. Os posts sao lidos de um arquivo JSON e as rotas de criacao/edicao/exclusao estao em modo fake (simulacao), sem persistencia real. Assim, ao recarregar a pagina, os dados retornam ao estado original do JSON. O app foi estilizado para oferecer boa experiencia ao usuario e e responsivo em dispositivos desktop e mobile.

## Entregaveis
- Um projeto Node.js para a funcionalidade do site
- Pelo menos um arquivo EJS para a estrutura do site
- Pelo menos um arquivo CSS para a estilizacao do site

## Funcionalidades
1. **Criacao de Posts:** Usuarios podem criar novos posts no blog.
2. **Visualizacao de Posts:** A pagina inicial exibe todos os posts.
3. **Atualizacao/Exclusao de Posts:** Usuarios podem editar e excluir posts.
4. **Estilizacao:** O app e bem estilizado e responsivo, usando Tailwind CSS para um design moderno.

## Requisitos Tecnicos
- **Node.js & Express.js:** O backend e construido com Node.js e Express.js, cuidando de rotas e middlewares.
- **EJS:** O EJS e usado como motor de templates para renderizacao dinamica de HTML.
- **Tailwind CSS:** O Tailwind CSS e usado para estilizacao, com classes utility-first e design responsivo. Veja `views/partials/header.ejs` para a configuracao do Tailwind.

## Como Iniciar
1. Instale as dependencias:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   node index.js
   ```
3. Abra o navegador e acesse `http://localhost:3000` (ou a porta especificada no seu codigo).

## Deploy no Netlify
Este projeto esta preparado para rodar no Netlify Functions com Express + EJS.

1. Instale a CLI do Netlify (opcional, se ainda nao tiver):
  ```bash
  npm i -g netlify-cli
  ```
2. Faca login:
  ```bash
  netlify login
  ```
3. Inicialize o site no diretorio do projeto:
  ```bash
  netlify init
  ```
4. Publique em producao:
  ```bash
  netlify deploy --prod
  ```

### Configuracao usada
- `netlify/functions/api.js`: handler serverless para o app Express.
- `netlify.toml`: define pasta de functions, arquivos incluidos no bundle e rewrite para a function.
- `app.js`: app Express compartilhado entre ambiente local e Netlify.

## Estrutura de Pastas
```
app.js
index.js
netlify.toml
netlify/
  functions/
    api.js
package.json
public/
  assets/
    posts.json
  images/
  js/
    post.js
  styles/
    main.css
views/
  index.ejs
  post-edit.ejs
  post-new.ejs
  post-view.ejs
  partials/
    footer.ejs
    header.ejs
```

## Observacoes
- Este projeto **nao** usa banco de dados.
- As rotas `POST /add`, `POST /update/:id` e `DELETE /delete/:id` estao em modo fake e nao gravam em arquivo.
- Os posts sao lidos de `public/assets/posts.json`; ao recarregar, os dados voltam ao estado inicial.
- A estilizacao e uma parte importante do projeto; revise e melhore o CSS para proporcionar melhor experiencia de usuario.
- O Tailwind CSS e carregado via CDN e configurado em `header.ejs`.
