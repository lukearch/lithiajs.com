---
seo:
  title: 'Getting Started: Routing | Lithia.js'
  description: Get started with Lithia.js by creating a new project, installing dependencies, and running your first Lithia.js app.
previous:
  title: Project Structure
  path: /docs/getting-started/project-structure
next: null
---

# Routing

## Routing files

The Lithia.js routing system enables you to define routes based on the file system. Each file inside the `routes` folder represents a route handler, and each route handler should **always** export default an async function following this signature:

::code-block{icon="vscode-icons:file-type-typescript"}

#context
routes/hello.ts

#code

```typescript
import { LithiaRequest, LithiaResponse } from 'lithia/types';

export default async function handler(req: LithiaRequest, res: LithiaResponse) {
  res.send('Hello, world!');
}
```

::

When running [`build`](/docs/api-reference/cli/lithia-cli#build) or [`dev`](/docs/api-reference/cli/lithia-cli#dev) command, Lithia.js will automatically detect your handlers and set up all configurations for you.

:br

The best part about this routing system is that Lithia.js keeps the running server and the defined route-handlers in different layers,
this feature allows you to perform changes without restarting the server.

:br

### Using HTTP methods

With Lithia.js, you can define your HTTP methods by adding the method name to the file name. For example, to create a `GET` route, that points to `/hello`, you can create a file named `hello.get.ts`. Note that if you don't specify a method, your route will be available for all methods. Sometimes it could be useful.

:br

When defining a method, takes care of the following rules:

:br

- The method name should **always** be in lowercase.
- The method name should be separated by a dot (`.`) from the route name.
- The method name should be the first part of the file name.

:br
