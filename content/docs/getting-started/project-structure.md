---
seo:
  title: 'Lithia.js Project Architecture | Next-Gen Structure Guide'
  description: 'Master Lithia.js project organization with optimized conventions for enterprise-grade applications'
previous:
  title: Installation
  path: /docs/getting-started/installation
next:
  title: Routing
  path: /docs/getting-started/routing
---

# Project Structure

Optimized Architecture for Modern Node.js Applications

::divider
::

## Core Directory Conventions

### Essential Directories

![Project Architecture](/images/docs/getting-started/project-structure/1.svg){width=985, height=270}

| Directory | Purpose                         | Implementation Notes                |
| --------- | ------------------------------- | ----------------------------------- |
| `src`     | Business logic & domain modules | Optional TypeScript/JS organization |
| `routes`  | API endpoint definitions        | Zero-config routing system          |

:br

### Configuration Ecosystem

| File               | Role                             |
| ------------------ | -------------------------------- |
| `lithia.config.js` | Framework behavior customization |
| `package.json`     | Dependency management & scripts  |
| `tsconfig.json`    | TypeScript compilation rules     |

:br

### Environment Management

| File               | Environment Scope       |
| ------------------ | ----------------------- |
| `.env`             | Base variables          |
| `.env.local`       | Developer overrides     |
| `.env.production`  | Cloud deployment config |
| `.env.development` | Dev-specific settings   |

::divider
::

## Routing Architecture

### Core Routing Conventions

| Pattern     | URL Structure | Use Case            |
| ----------- | ------------- | ------------------- |
| `index.ts`  | /             | Root endpoint       |
| `user.ts`   | /user         | Static resource     |
| `[id].ts`   | /:id          | Dynamic identifiers |
| `[slug].ts` | /:slug        | SEO-friendly paths  |

:br

### Advanced Routing Patterns

| Structure               | Example Path          | Implementation Benefit            |
| ----------------------- | --------------------- | --------------------------------- |
| `api/v1/users`          | /api/v1/users         | Versioned endpoints               |
| `products/[id]/reviews` | /products/123/reviews | Nested resources                  |
| `(admin)/dashboard`     | /dashboard            | Route grouping without URL prefix |

::divider
::

## Best Practices

### Code Organization Strategy

1. Keep route handlers focused on HTTP layer
2. Store business logic in `src/modules`
3. Maintain shared types in `src/types`
4. Place middleware in `src/middlewares`

:br

### Scalability Patterns

- Use route groups for permission-based endpoints
- Implement dynamic segments for CRUD operations
- Leverage nested folders for complex API structures

::divider
::

Pro Tip: Generate route visualization with ###npx lithia routes analyze### to optimize your API structure.
