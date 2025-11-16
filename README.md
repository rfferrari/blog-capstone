# Capstone Project: Blog Web Application

## About
This is my first project in Node.js, created as part of a course capstone assignment. The goal is to build a simple blog web application using Node.js, Express.js, and EJS. This project focuses on learning backend fundamentals, templating, and web styling.

## What are Capstone Projects?
Capstone projects are comprehensive assignments designed to consolidate and apply the skills learned throughout a course. They typically involve building a complete application from scratch, demonstrating understanding of core concepts and best practices.

## Project Description
This application allows users to create, view, edit, and delete blog posts. Posts are stored in memory only (no database), so they do not persist between sessions. The app is styled for a good user experience and is responsive for both desktop and mobile devices.

## Deliverables
- One Node.js project for the website functionality
- At least one EJS file for website structure
- At least one CSS file for website styling

## Features
1. **Post Creation:** Users can create new blog posts.
2. **Post Viewing:** The home page displays all posts.
3. **Post Update/Delete:** Users can edit and delete posts.
4. **Styling:** The app is well-styled and responsive, using Tailwind CSS for modern design.


## Technical Requirements
- **Node.js & Express.js:** The backend is built with Node.js and Express.js, handling routing and middleware.
- **EJS:** EJS is used as the templating engine for dynamic HTML rendering.
- **Tailwind CSS:** Tailwind CSS is used for styling, providing utility-first classes and responsive design. See `views/partials/header.ejs` for Tailwind setup.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```
3. Open your browser and go to `http://localhost:3000` (or the port specified in your code).

## Folder Structure
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


## Notes
- This project does **not** use a database; posts are not saved after the server restarts.
- Styling is an important part of the project—make sure to review and improve the CSS for a better user experience.
- Tailwind CSS is loaded via CDN and configured in `header.ejs`.

---

Feel free to explore, modify, and learn from this project as you continue your journey in Node.js development!