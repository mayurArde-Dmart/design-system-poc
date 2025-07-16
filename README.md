# design-system-poc
# 📦 How to Build and Use a Private React Component Library with GitHub Packages

## Document 1: Building and Publishing a Library

### ✅ Prerequisites

- Node.js & PNPM installed
- GitHub Personal Access Token (PAT) with `write:packages`, `read:packages`, and `repo` scopes
- Monorepo structure (e.g., Turborepo) like this:
  ```bash
  packages/
    button/
    chip/
    design-system/
  ```

---

### 1. Folder Structure Example

```
packages/
├── button/
│   ├── src/index.tsx
│   ├── rollup.config.mjs
│   └── package.json
├── chip/
├── design-system/
```

---

### 2. Sample Component: `button/src/index.tsx`

```tsx
import React from 'react';
import { Button as MuiButton } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  return <MuiButton variant="contained">{children}</MuiButton>;
};
```

---

### 3. Rollup Config: `rollup.config.mjs`

```js
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.tsx',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
  ],
  external: ['react', 'react-dom', '@mui/material'],
  plugins: [resolve(), commonjs(), typescript()],
};
```

---

### 4. `package.json` Example

```json
{
  "name": "@your-scope/button",
  "version": "0.1.0",
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "rollup -c"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "@mui/material": "^5.0.0"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  }
}
```

---

### 5. Build the Package

```bash
pnpm run build
```

---

### 6. Login to GitHub NPM

```bash
npm login --registry=https://npm.pkg.github.com
```

Use your GitHub username and PAT as the password.

---

### 7. Publish to GitHub Packages

```bash
GITHUB_TOKEN=ghp_YourTokenHere pnpm publish --access=restricted
```

---

## Document 2: Using a Private GitHub Package in a React Project

### 1. Configure `.npmrc`

Create a `.npmrc` file in your project root:

```
@your-scope:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=ghp_YourTokenHere
```

---

### 2. Install the Package

```bash
pnpm add @your-scope/button
```

---

### 3. Align React Versions

```bash
pnpm add react@18.3.1 react-dom@18.3.1
pnpm add -D @types/react@18.2.44 @types/react-dom@18.2.19
```

---

### 4. Use the Component

```tsx
import React from 'react';
import { Button } from '@your-scope/button';

function App() {
  return <Button>Click Me</Button>;
}
```

---

### 5. Install Peer Dependencies

```bash
pnpm add @mui/material @emotion/react @emotion/styled
```

---

✅ Your app is now using your private design system! 🎉
