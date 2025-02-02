---
seo:
  title: 'Getting Started: Installation | Lithia.js - Next-Generation Framework Setup'
  description: 'Launch your Lithia.js project in 60 seconds with our optimized installation guide. Enterprise-grade setup made simple.'
previous:
  title: Introduction
  path: /docs
next:
  title: Project Structure
  path: /docs/getting-started/project-structure
---

# Installation

Accelerate Your Development Journey

::divider
::

## System Requirements

### Essential Foundation

- Node.js v20+ (LTS Recommended)
- macOS (ARM64/x64), Windows (or WSL), or any Linux distribution

::divider
::

## Automated Project Scaffolding

### Optimal Setup Path

Execute our intelligent CLI to create production-ready infrastructure:

::code-block
#context
Terminal

#code

```bash
npx create-lithia-app@latest

```

::

:br

### Customization Options

- Project naming conventions
- Template selection (REST API, Microservices, Full-stack)
- Package manager preference (npm/yarn/pnpm)
- Git repository initialization

::divider
::

## Advanced Manual Configuration

### Framework Core Installation

For experimental integrations:

::code-block
#context
Terminal

#code

```bash
npm install --save lithia@latest
```

::

:br

### Essential Workflow Scripts

Configure your package.json with Next-Gen operations:

::code-block
#context
package.json

#code

```json
{
  "scripts": {
    "dev": "lithia dev",
    "start": "lithia start",
    "build": "lithia build",
    "postinstall": "lithia prepare"
  }
}
```

::

::divider
::

## Intelligent Routing Setup

### File-System Convention

Create your API endpoints through intuitive directory structure:

::code-block{title="lucide:folder-open"}

#context
my-lithia-app

#code

```bash
routes/
├── index.ts # /
└── users/
    ├── [id].ts # /users/:id
    └── index.ts # /users
```

::

:br

### Endpoint Implementation

Develop type-safe handlers with native TS support:

::code-block{icon="logos:typescript-icon"}

#context
routes/index.ts

#code

```typescript
import { LithiaRequest, LithiaResponse } from 'lithia/core';

export default async function handler(req: LithiaRequest, res: LithiaResponse) {
  res
    .metadata({
      rateLimit: '1000r/h',
      cacheControl: 'public, max-age=3600',
    })
    .json({
      status: 'operational',
      version: process.env.APP_VERSION,
    });
}
```

::

::divider
::

## TypeScript Optimization

### Performance-Oriented Configuration

Install our recommended toolchain:

::code-block
#context
Terminal

#code

```bash
npm install --save-dev typescript@latest
```

::

:br

### Advanced TS Configuration

::code-block{icon="vscode-icons:file-type-json"}
#context
tsconfig.json

#code

```json
{
  "extends": ".lithia/tsconfig.json",
  "compilerOptions": {
    "strictNullChecks": true,
    "incremental": true
  }
}
```

::

::divider
::

## Development Workflow

### Instant Server Activation

1. Launch development environment:

::code-block
#context
Terminal

#code

```bash
npm run dev
```

::

2. Access real-time endpoints:

::code-block{icon="logos:brave"}
#context
Brave Browser

#code

```bash
http://localhost:3000/__lithia/health-check
```

::

3. Implement hot-reload changes

:br

### Production Optimization

1. Build artifact generation:

::code-block
#context
Terminal

#code

```bash
npm run build
```

::

2. Run optimized server:

::code-block
#context
Terminal

#code

```bash
node .lithia/server.js
```

::

::divider
::

## Custom Configuration (Optional)

### Framework Tuning

::code-block{icon="logos:javascript"}
#context
lithia.config.js

#code

```javascript
import { defineLithiaConfig } from 'lithia/core';

export default defineLithiaConfig({
  telemetry: process.env.NODE_ENV === 'development',
  compression: { algorithm: 'brotli' },
  security: {
    cors: { origin: ['https://yourdomain.com'] },
    rateLimiting: { strategy: 'redis' },
  },
});
```

::
