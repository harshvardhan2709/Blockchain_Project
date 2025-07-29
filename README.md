# 🌿 ClimCarbon – Carbon Tokenization Frontend

This project provides a React + TypeScript + Vite frontend setup for a carbon credit platform. It features company login, profile input, and emission tracking using a modular, scalable structure and TailwindCSS styling.

---

## 🛠️ Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **ESLint + Prettier**

---

## 📁 Directory Structure

```
carbon-tokenization-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── LoginPage.tsx
│   │   └── CompanyProfile.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

---

## 🔧 Setup & Installation

```bash
# Clone the repository
git clone https://github.com/harshvardhan2709/carbon-tokenization-frontend.git
cd carbon-tokenization-frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

App runs at: [http://localhost:5173](http://localhost:5173)

---

## ✨ Pages Implemented

### 🔐 Login Page (`/`)

- Simple login interface
- Redirects to profile page on login success
- Uses `useNavigate` from `react-router-dom`

### 🏢 Company Profile (`/company-profile`)

- Accepts user/company details
- Inputs for:
  - Industry Type
  - Energy Consumption (Electricity, Diesel, Petrol)
  - Scope 1, 2, and 3 emissions
  - Waste generation

---

## 🎨 Styling: Tailwind CSS

Tailwind utility classes are used throughout components.  
Global styles can be updated in `src/index.css`.

---

## 🧪 ESLint Setup (Recommended for Production)

To enable strict type-aware linting:

````ts
// eslint.config.js
```ts
// eslint.config.js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
````

Optional Plugins:
Optional Plugins:

````ts
```ts
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

	@@ -51,19 +116,27 @@ export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
````

---

## 🗺️ Roadmap

- Backend API integration
- Emission visualization graphs
- Tokenization logic with ERC-1155
- QR generation & verification

---
