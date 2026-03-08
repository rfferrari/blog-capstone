# Projeto Capstone: Aplicacao Web de Blog

## Sobre
Este e o meu primeiro projeto em Node.js, criado como parte de um trabalho final (capstone) de curso. O objetivo e construir uma aplicacao web simples de blog usando Node.js, Express.js e EJS. Este projeto foca no aprendizado de fundamentos de backend, template engine e estilizacao web.

<img width="1100" height="582" alt="image" src="https://github.com/rfferrari/blog-capstone/blob/main/docs/images/blog-post.gif" />

## O que sao Projetos Capstone?
Projetos capstone sao atividades abrangentes criadas para consolidar e aplicar as habilidades aprendidas ao longo de um curso. Em geral, envolvem a construcao de uma aplicacao completa do zero, demonstrando entendimento dos conceitos principais e das boas praticas.

## Descricao do Projeto
Esta aplicacao permite que usuarios criem, visualizem, editem e excluam posts do blog. Os posts sao armazenados apenas em memoria (sem banco de dados), portanto nao persistem entre sessoes. O app foi estilizado para oferecer boa experiencia ao usuario e e responsivo em dispositivos desktop e mobile.

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

## Estrutura de Pastas
```
index.js
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
- Este projeto **nao** usa banco de dados; os posts nao sao salvos apos reiniciar o servidor.
- A estilizacao e uma parte importante do projeto; revise e melhore o CSS para proporcionar melhor experiencia de usuario.
- O Tailwind CSS e carregado via CDN e configurado em `header.ejs`.

## Demo
(blog-capstone)[https://blog-capstone.netlify.app/]
