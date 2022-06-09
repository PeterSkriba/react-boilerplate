# React Boilerplate

Node.js - React, TypeScript, Styled Components boilerplate.

## Project structure

```text
.
├── .storybook/
├── blueprints
│   ├── component/
│   └── ...
├── public/
│   ├── assets/
│   ├── _redirects
│   └── index.template.html
├── src/
│   ├── components/
│   ├── config/
│   │   └── routes.tsx
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   │   ├── global.ts
│   │   └── theme.ts
│   ├── ui/
│   ├── utils/
│   ├── global.d.ts
│   ├── styled.d.ts
│   ├── env.d.ts
│   ├── App.tsx
│   └── index.tsx
├── .babelrc
├── .env.template
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```

## Getting Started

```bash
# Get the latest snapshot
git clone https://github.com/PeterSkriba/react-boilerplate.git myproject

# Change directory
cd myproject

# Install NPM dependencies
yarn install

# Then simply start your app
yarn start
```

Project is running at ***localhost*** using port ***8080***.

## Netlify build settings

Base Directory: `<empty>`

Publish directory: `dist/`

Build command:

```bash
# Commant to install all dependencies and run build script
npm i && npm run build
```

Copy content of `.env` file created from [`.env.template`](.env.template) file to **Netlify Environment variables**.
