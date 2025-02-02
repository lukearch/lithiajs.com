---
title: Installation - Get Started with Lithia
path: /docs/getting-started/installation
seo:
  title: Installation - Get Started with Lithia
  description: How to set up a new Lithia.js project
previous:
  title: Introduction
  path: /docs/getting-started/introduction
next:
  title: Project Structure
  path: /docs/getting-started/project-structure
---

# Installation

In this guide, we will walk you through setting up a new Lithia.js project.

::divider
::

## System Requirements

- [Node.js v20.x](https://nodejs.org){:target="\_blank"} or later.
- macOS, Windows, or any Linux distribution.

::divider
::

## Automatic Installation

We recommend starting a new Lithia.js app using [`create-lithia-app`](/docs/api-reference/cli/create-lithia-app), which sets up a new project with a single command:

::code-block
#context
Terminal

#code

```bash
npx create-lithia-app@latest
```

::

On installation, you will be prompted to enter the project name and select the template you want to use. Some other options are also available, such as choosing a package manager and setting up a Git repository.

:br

After the prompts, [`create-lithia-app`](/docs/api-reference/cli/create-lithia-app) will create a folder with your project name and install the required dependencies, and this process may take a few minutes.

::divider
::

## Manual Installation

At first, you need to know that this is not the recommended way to start a new Lithia.js project. However, if you want to install Lithia manually, you can do so by running the following command:

::code-block
#context
Terminal

#code

```bash
npm install --save lithia
```

::

Open your `package.json` file and add the following scripts:

::code-block
#context
package.json

#code

```json
{
  "scripts": {
    "dev": "lithia dev",
    "start": "lithia start",
    "build": "lithia build"
  }
}
```

::

These scripts refer to the different stages of developing an application:

- `dev`: runs [`lithia dev`](/docs/api-reference/cli/dev) to start Lithia.js in development mode.
- `start`: runs [`lithia start`](/docs/api-reference/cli/start) to start Lithia.js in production mode.
- `build`: runs [`lithia build`](/docs/api-reference/cli/build) to build the application for production.

:br

:br

### Create the `routes` directory

Lithia.js uses file-system routing, which means that the routes in your applications are determined by how you structure your files.

:br

Create a `routes` directory in the root of your project and add a new file named `index.ts`. You can also optionally create the `routes` directory inside the `src` directory. In this case, you need to enable the `srcDir` in the [`lithia.config.js`](/docs/api-reference/configuration) file.

::code-block{title="lucide:folder-open"}

#context
my-lithia-app

#code

```bash
routes/
└── index.ts

```

::

Finally, paste the following code into the `index.ts` file:

::code-block{icon="logos:typescript-icon"}

#context
routes/index.ts

#code

```typescript
import { LithiaRequest, LithiaResponse } from 'lithia/types';

export default async function handle(req: LithiaRequest, res: LithiaResponse) {
  res.send('Hello, from Lithia! 🚀');
}
```

::

::divider
::

### Set up the typescript configuration

First, you need to install the TypeScript package:

::code-block
#context
Terminal

#code

```bash
npm install --save-dev typescript
```

::

Then, create a `tsconfig.json` file in the root of your project and paste the following code:

::code-block{icon="vscode-icons:file-type-json"}
#context
tsconfig.json

#code

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowJs": false,
    "types": ["node"],
    "resolveJsonModule": true,
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": []
}
```

::

::divider
::

### Run the development server

1. Run `npm run dev` to start the development server.
2. Make a request with any HTTP method to `http://localhost:3000`.
3. Edit the `routes/index.ts` file and see the changes in real-time.

::divider
::

### Set up `lithia.config.js`

The [`lithia.config.js`](/docs/api-reference/configuration) is not required, but it allows you to customize how Lithia.js behaves. Create a new file named `lithia.config.js` in the root of your project and paste the following code:

::code-block{icon="logos:javascript"}
#context
lithia.config.js

#code

```javascript
import { defineLithiaConfig } from 'lithia/config';

export default defineLithiaConfig({});
```

::
