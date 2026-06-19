# Restaurant Landing Page

A single-page restaurant website built with React, Vite, and Tailwind CSS. It includes a hero section, special dishes menu, "about" section, chef showcase, and footer with contact/social links.

## Tech Stack

- **React 19** – UI library
- **Vite** – build tool and dev server
- **Tailwind CSS 3** – utility-first styling
- **ESLint** – linting

## Project Structure

```
my-app/
├── public/                 # Static images used by the page (dishes, decorative graphics, chef photo)
├── src/
│   ├── components/
│   │   ├── Button.jsx      # Reusable styled button
│   │   └── DishCard.jsx    # Card used to display a single dish in the menu grid
│   ├── data/
│   │   ├── dishesData.js   # Menu items (image, title, description, price)
│   │   ├── navbarData.js   # Nav links and CTA button config
│   │   └── socialIcons.js  # Social media icons/links
│   ├── sections/
│   │   ├── Navbar.jsx      # Sticky/responsive top navigation
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── Menu.jsx        # "Our Special Dishes" section
│   │   ├── Welcome.jsx     # "Welcome to Our Restaurant" intro section
│   │   ├── Chef.jsx        # "Our Expert Chef" section
│   │   └── Footer.jsx      # Footer with hours, links, and socials
│   ├── App.jsx              # Composes all sections into the page
│   ├── main.jsx              # React app entry point
│   └── index.css             # Tailwind imports / global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Start the local dev server with hot reload:

```bash
npm run dev
```

The app will be available at the URL printed in the terminal (typically `http://localhost:5173`).

### Build

Create a production build:

```bash
npm run build
```

Output is written to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Live Preview

🔗 [View Live Demo] https://restaurant-sepia-kappa.vercel.app