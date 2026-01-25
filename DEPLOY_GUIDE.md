# Manual Deploy & Registry Guide

This project includes a GitHub Actions workflow to automatically build and push the applications located in the **apps** directory (web, api, etc.) to the GitHub Container Registry (GHCR).

## 1. Environment Variable Management

We use **GitHub Environments** to separate configuration for Development, Staging, and Production.

1.  Go to **Settings > Environments** in your GitHub repository.
2.  Create environments named: `development`, `staging`, `production`.
3.  Add variables (non-sensitive) and secrets (sensitive) to each environment.

### Naming Rule

Variable naming must follow this format: `{PROJECT_NAME}_{VARIABLE_NAME}` (Uppercase).
The system automatically strips the prefix during the build.

- `WEB_NEXT_PUBLIC_API_URL` -> becomes `NEXT_PUBLIC_API_URL` for `web` app.
- `API_DB_HOST` -> becomes `DB_HOST` for `api` app.

## 2. Triggering the Deployment (Manual)

1.  Go to **Actions** -> **CI/Registry**.
2.  Click **Run workflow**.
3.  Select the Branch:
    - `develop` -> Deploys to **development** environment.
    - `staging` -> Deploys to **staging** environment.
    - `main` -> Deploys to **production** environment.
4.  Select App (`web`, `api`, or `all`).

## 3. Versioning and Tags

Tags are generated automatically based on the branch and `package.json` version:

| Branch    | Tag Style            | Example (Ver: 1.0.0)         |
| --------- | -------------------- | ---------------------------- |
| `develop` | `dev`, `dev-{ver}`   | `web:dev`, `web:dev-1.0.0`   |
| `staging` | `beta`, `beta-{ver}` | `web:beta`, `web:beta-1.0.0` |
| `main`    | `latest`, `{ver}`    | `web:latest`, `web:1.0.0`    |
| `feat/*`  | `feat-{branch}`      | `web:feat-login-page`        |

### Important

- **Production Safety:** If you try to deploy to `main` (Production) and the version (e.g., `1.0.0`) already exists in the registry, the workflow will **fail** to prevent accidental overwrites. You must increment the version in `package.json`.
- **Dev/Staging:** Tags like `dev` and `beta` are "floating" tags and will be overwritten with the latest build. Specific version tags like `dev-1.0.0` are also created.
