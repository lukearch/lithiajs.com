---
seo:
  title: 'Getting Started: Project Structure | Lithia.js'
  description: Get started with Lithia.js by creating a new project, installing dependencies, and running your first Lithia.js app.
previous:
  title: Installation
  path: /docs/getting-started/installation
next:
  title: Routing
  path: /docs/getting-started/routing
---

# Project Structure

In this guide, we will learn about the folder and file conventions in Lithia.js, as well as tips on how to organize your project.

::divider
::

## Folder and file conventions

### Top-level folders

Top-level folders are used to organize your application's code and detect the purpose of each file.

![Top-level folders](/images/docs/getting-started/project-structure/1.svg){width=985, height=270}

| Folder     | Description                     |
| ---------- | ------------------------------- |
| [`src`]    | Optional project source folder. |
| [`routes`] | Route handlers.                 |

:br
:br

### Top-level files

Top-level files are used to configure your application, manage dependencies, integrate with other tools, and more.

:br

| File                 | Description                        |
| -------------------- | ---------------------------------- |
| [`lithia.config.js`] | Lithia.js configuration file.      |
| [`package.json`]     | Node.js package file.              |
| [`.env`]             | Environment variables file.        |
| [`.env.local`]       | Local environment variables.       |
| [`.env.production`]  | Production environment variables.  |
| [`.env.development`] | Development environment variables. |
| `.gitignore`         | Git ignore file.                   |
| `tsconfig.json`      | TypeScript configuration file.     |

:br
:br

### Static route handlers

Inside the [`routes`] folder, you can create route handlers to handle requests to specific paths.

:br

| File         | Path    |
| ------------ | ------- |
| [`index.ts`] | `/`     |
| [`user.ts`]  | `/user` |

:br

### Dynamic route handlers

You can also create dynamic route handlers by using the `[]` notation in the file name.

:br

| File          | Path     |
| ------------- | -------- |
| [`[id].ts`]   | `/:id`   |
| [`[slug].ts`] | `/:slug` |

:br

### Nested folders

You can create nested folders inside the [`routes`] folder to organize your route handlers.

:br

| Folder          | Description                  |
| --------------- | ---------------------------- |
| `folder`        | Static Route segment         |
| `folder/folder` | Static Nested route segment  |
| `[id]`          | Dynamic Route segment        |
| `[id]/folder`   | Dynamic Nested route segment |

:br

### Route Groups

You can create route groups without affecting the route path.

:br

| Folder        | Description |
| ------------- | ----------- |
| `(admin)`     | Route Group |
| `(dashboard)` | Route Group |
