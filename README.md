# Utkarsh Mankad — Portfolio

A responsive, accessible portfolio for an engineering leader working across AI/data platforms, commerce, and public digital infrastructure.

## Local development

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm run lint
npm run test:unit
npm run test:integration
npm run test:coverage
```

## Branching and release strategy

- `develop` is the integration branch for ongoing features. Feature branches open pull requests into `develop`.
- `main` is the protected production branch and the only branch connected to the Vercel production environment.
- Releases move from `develop` to `main` through a reviewed pull request after all required CI checks pass.
- Enable Vercel preview deployments for pull requests; configure the production branch as `main` in Vercel project settings.
- Protect both branches. Require the four CI jobs, disallow force pushes, require an up-to-date branch, and require at least one approving review before merge.

## CI roles

The GitHub Actions workflow separates responsibility into code quality, unit tests with a hard 70% coverage threshold, production-build integration tests, and an overall release gate. It runs on pull requests and pushes to `develop` and `main`.

## Stack

React 19, TypeScript, Vinext/Next.js-compatible routing, Cloudflare-compatible server output, and GitHub Actions. The source is also suitable for Vercel; use the standard build command for the selected Next.js adapter when importing the repository.
