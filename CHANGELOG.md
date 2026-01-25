# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- New Docker tagging strategy for `develop` (dev) and `staging` (beta) branches.
- GitHub Environments support (`development`, `staging`, `production`) in CI/CD.
- `.dockerignore` files for `apps/web` and `apps/api`.
- Dedicated `CHANGELOG.md` and `CONTRIBUTING.md` files.

### Changed

- Refactored `apps/api/Dockerfile` to fix build issues and optimize caching.
- Updated `apps/web` lint command to use `eslint` directly.
- Updated `ci-registry.yml` workflow to support dynamic environment selection.

## [0.1.0] - 2026-01-20

### Added

- Initial setup with Turborepo (Next.js + NestJS).
- Basic UI library setup.
- Docker configuration for applications.
