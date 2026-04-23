# Portfolio

A complete, production-ready single-page personal portfolio built with React + Vite.

## Tech Stack

- React (functional components + hooks)
- React Router DOM
- Framer Motion
- React Icons
- CSS (custom, mobile-first)

## Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Setup

```bash
npm install
npm start
```

## Available Scripts

- `npm start` - Starts the Vite development server
- `npm run build` - Builds a production bundle
- `npm run lint` - Runs ESLint
- `npm run preview` - Previews the production build locally

## Content Editing

All portfolio content is centralized in:

- `src/data/portfolioData.js`

Update your name, bio, projects, skills, links, and timeline there without changing component code.
