# Ammukutty Pradeep — Portfolio

Personal portfolio site of Ammukutty Pradeep, a PHP & WordPress developer
with 3+ years of experience, also writing Python and Java, and using AI
tools as part of a daily dev workflow.

Built with **React + Vite**.

## Project structure

```
my-portfolio/
└── react-version/        # the React + Vite app (this is the site)
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── App.css
        ├── data.js
        ├── assets/
        └── components/
            ├── Nav.jsx
            ├── Hero.jsx
            ├── About.jsx
            ├── Skills.jsx
            ├── WordPress.jsx
            ├── AITools.jsx
            ├── Projects.jsx
            ├── Contact.jsx
            └── Footer.jsx
```

## Run locally

```bash
cd react-version
npm install
npm run dev
```

Then open <http://localhost:5173> in your browser.

## Build for production

```bash
cd react-version
npm run build
npm run preview
```

The production-ready static files are emitted to `react-version/dist/`.

## Adding your profile photo

Drop your JPG portrait at `react-version/src/assets/profile.jpg`, then
update the imports in:

- `react-version/src/components/Nav.jsx`
- `react-version/src/components/Hero.jsx`

Change `import profileImg from '../assets/profile.svg';` to
`import profileImg from '../assets/profile.jpg';`.

## Sections

Home · About · Skills · WordPress · AI Workflow · Projects · Contact

## Contact

Email: [ammukutty@mozilor.com](mailto:ammukutty@mozilor.com)
