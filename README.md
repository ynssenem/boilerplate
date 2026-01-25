# Modern Monorepo Boilerplate

A production-ready monorepo template featuring **Next.js** (Web) and **NestJS** (API), powered by **Turborepo**.

[![CI/Registry](https://github.com/ynssenem/boilerplate/actions/workflows/ci-registry.yml/badge.svg)](https://github.com/ynssenem/boilerplate/actions/workflows/ci-registry.yml)

## 🚀 Features

- **Monorepo Management**: Efficient build system with [Turborepo](https://turbo.build/).
- **Frontend**: [Next.js](https://nextjs.org/) 15+ (App Router).
- **Backend**: [NestJS](https://nestjs.com/) for robust API development.
- **Type Safety**: End-to-end type safety with [TypeScript](https://www.typescriptlang.org/).
- **UI Library**: Shared React component library.
- **Linting & Formatting**: Pre-configured ESLint and Prettier.
- **CI/CD**: GitHub Actions for automated building, linting, and Docker registry pushing.
- **Containerization**: Docker support for all applications.

## 📂 Project Structure

```bash
.
├── apps
│   ├── api                 # NestJS Application
│   └── web                 # Next.js Application
├── packages
│   ├── @repo/api           # Shared Backend DTOs/Interfaces
│   ├── @repo/ui            # Shared React UI Components
│   ├── @repo/eslint-config # Shared ESLint Configuration
│   ├── @repo/jest-config   # Shared Jest Configuration
│   └── @repo/typescript-config # Shared TS Configs
```

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 20
- pnpm (Package Manager)
- Docker (Optional, for containerized run)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/ynssenem/boilerplate.git
    cd boilerplate
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### Development

Start the development configurations for all apps:

```bash
pnpm dev
```

This will start:

- **Web**: http://localhost:3000
- **API**: http://localhost:3001 (or configured port)

### Building

Build all applications and packages:

```bash
pnpm build
```

### Linting & Formatting

Check for linting errors:

```bash
pnpm lint
```

Format code:

```bash
pnpm format
```

## 🚢 Deployment & Registry

This project uses **GitHub Container Registry (GHCR)** for storing Docker images. The CI/CD pipeline is managed via GitHub Actions.

### Environment Strategy

We use GitHub Environments to separate configurations:

- **Development**: Deployed from `develop` branch -> `dev` tags.
- **Staging**: Deployed from `staging` branch -> `beta` tags.
- **Production**: Deployed from `main` branch -> `latest` tags.

For detailed deployment instructions, please refer to [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md).

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to get started, our code of conduct, and the pull request process.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
