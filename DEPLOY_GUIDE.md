# Manual Deploy & Registry Guide

This project includes a GitHub Actions workflow to automatically build and push the applications located in the **apps** directory (web, api, etc.) to the GitHub Container Registry (GHCR).

## 1. Environment Variable Management

To manage variables specific to each project, we use the **GitHub Repository Settings > Secrets and variables** menu. The system identifies which project a variable belongs to by checking its **prefix**.

### Rule

Variable naming must follow this format: `{PROJECT_NAME}_{VARIABLE_NAME}` (Uppercase).

### Examples

Add these to **GitHub Variables (or Secrets)**:

- `WEB_NEXT_PUBLIC_API_URL`: API URL for the Web project. (Passed as `NEXT_PUBLIC_API_URL` to "web" during Docker build).
- `API_DB_HOST`: DB host for the API project. (Passed as `DB_HOST` to "api" during Docker build).

> **Note:** The system automatically strips the `WEB_` or `API_` prefix and passes the rest of the name to the build process.

## 2. Triggering the Deployment (Manual)

To start the Build and Registry process:

1. Go to the **Actions** tab in GitHub.
2. Select the **CI/Registry** workflow from the left sidebar.
3. Click the **Run workflow** button on the top right.
4. Fill in the inputs:
   - **Use workflow from**: Select the branch you want to deploy (e.g., `main`, `beta`, `feature/xyz`).
   - **App to deploy**: Select which project to build.
     - `all`: Builds all apps sequentially.
     - `web`: Builds only the Web application.
     - `api`: Builds only the API application.
5. Click **Run workflow** to start.

## 3. Versioning and Tags

The system automatically handles tagging based on the selected **Branch** and the **Version** in `package.json`.

| Branch   | Package.json | Generated Image Tags            |
| -------- | ------------ | ------------------------------- |
| `main`   | `1.0.0`      | `web:latest`, `web:1.0.0`       |
| `beta`   | `1.0.0`      | `web:beta`, `web:beta-1.0.0`    |
| `alpha`  | `1.0.0`      | `web:alpha`, `web:alpha-1.0.0`  |
| `feat/x` | `1.0.0`      | `web:feat-x` (Uses branch name) |

### Important

- **Version Control:** If `web:1.0.0` already exists in the registry and you try to deploy from `main` with the same version again, the workflow will **fail**.
- **Solution:** Manually increment the version in the respective project's `package.json` and commit the change before triggering a new release.
