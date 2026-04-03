# FlowerShop

A minimal editorial-style React e-commerce demo built with Vite + Tailwind CSS.

## 💡 About

This repository implements a boutique flower shop UI inspired by "The Botanical Editorial" design language (no hard borders, soft tonal layers, organic spacing, premium typography). It includes:

- React 19 + React Router v7 navigation
- Tailwind CSS v4 styling in `src/index.css`
- Home, Product, and Product Detail pages
- Basic cart page skeleton
- Docker + Docker Compose development and production setup

## 🧱 Tech stack

- `react`, `react-dom`, `react-router-dom`
- `vite` + `@vitejs/plugin-react`
- `tailwindcss` + `@tailwindcss/vite`
- `eslint` + `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`

## 🚀 Run locally

1. Install deps:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open `http://localhost:5173`

4. Run lint:

```bash
npm run lint
```

5. Build for production:

```bash
npm run build
npm run preview
```

## 🐳 Docker

### Development container

```bash
docker compose -f docker-compose.dev.yml up --build
```

- `localhost:5173`
- Hot reload enabled

### Production container

```bash
docker compose -f docker-compose.yml up --build -d
```

- `localhost:3000`

## 🗂️ Project structure

- `src/App.jsx` - layout + routes
- `src/main.jsx` - entry point, router mount
- `src/layouts/Header.jsx`, `Intro.jsx`, `Body.jsx`
- `src/pages/Home.jsx`, `Product.jsx`, `ProductDetail.jsx`, `Cart.jsx`
- `src/components/Button.jsx`, `Input.jsx`, `Label.jsx`

## 🎨 Design system highlights

Aligned with `DESIGN.md`:

- `background` light cream (#fbf9f5), layered cards with soft contrasts
- no rigid 1px border cards; use background elevation
- primary deep emerald `#2b6954`, secondary sage `#566342`, tertiary blush `#715953`
- rounded corners, generous spacing, ambient shadows
- typography: Noto Serif for headlines + Manrope for bodies

## 🛠️ Contribution

1. Fork the repository
2. Create feature branch `feature/whatever`
3. Commit & push
4. Open a PR

---

Enjoy building your floral editorial experience 🌿

