---
seo:
  title: 'Lithia.js CLI | Instant Project Scaffolding Tool'
  description: 'Accelerate your development workflow with Lithia.js official project generator. Enterprise-ready templates in seconds.'
next:
  title: Lithia CLI
  path: /docs/api-reference/cli/lithia-cli
---

# create-lithia-app

Lithia.js Official Project Initializer

::divider
::

## Next-Gen Project Scaffolding

### Curated Production Templates

| Template         | Stack Highlights               | Use Case                    |
| ---------------- | ------------------------------ | --------------------------- |
| **default**      | Minimal core configuration     | API development             |
| **with-drizzle** | Drizzle ORM + PostgreSQL setup | Data-intensive applications |
| **with-prisma**  | Prisma + PostgreSQL setup      | Rapid prototyping           |

:br

### Zero-Config Initialization

Launch projects with industry-best practices:

::code-block
#context
Terminal

#code

```bash
npx create-lithia-app@latest

```

::

::divider
::

## Intelligent Configuration Workflow

### Core Project Settings

| Prompt             | Default Value | Key Functionality                |
| ------------------ | ------------- | -------------------------------- |
| Project Name       | my-lithia-app | Creates namespaced directory     |
| Template Selection | default       | Optimized tech stack bootstrap   |
| Dependency Install | Yes           | Auto-detects package manager     |
| Git Initialization | Yes           | Creates .gitignore with defaults |

:br

### Advanced Options

| Flag                | Command Example           | Execution Impact                |
| ------------------- | ------------------------- | ------------------------------- |
| `--name`            | `--name=api-service`      | Forces specific project name    |
| `--template`        | `--template=with-drizzle` | Bypasses template selection     |
| `--package-manager` | `--package-manager=yarn`  | Overrides auto-detection logic  |
| `--yes`             | `--yes`                   | Silent mode for CI/CD pipelines |

::divider
::

## Enterprise-Grade Features

### Multi-Environment Ready

1. Development setup:

::code-block
#context
Terminal

#code

```bash
npx create-lithia-app --template=with-prisma
```

::

2. Production foundation:

::code-block
#context
Terminal

#code

```bash
npx create-lithia-app --template=with-drizzle --no-install

```

::

:br

### Package Manager Support

| Manager | Status | Flags                    |
| ------- | ------ | ------------------------ |
| npm     | Native | `--package-manager=npm`  |
| Yarn    | Stable | `--package-manager=yarn` |
| pnpm    | Beta   | `--package-manager=pnpm` |
| Bun     | Beta   | `--package-manager=bun`  |

::divider
::

## Optimized Workflows

### CI/CD Integration Example

::code-block
#context
Terminal

#code

```bash
npx create-lithia-app@latest \
 --name=payment-gateway \
 --template=with-drizzle \
 --package-manager=pnpm \
 --yes

```

::

:br

### Post-Install Automation

1. Security audit with `npm audit`
2. TypeScript type checking
3. Pre-commit hook setup (optional)
4. Health check endpoint generation

::divider
::

## Technical Reference

### Full Command Specification

| Option         | Type    | Default       | Environment      |
| -------------- | ------- | ------------- | ---------------- |
| `--name`       | string  | my-lithia-app | Development      |
| `--template`   | enum    | default       | All              |
| `--no-install` | boolean | false         | CI/CD            |
| `--git`        | boolean | true          | New projects     |
| `--overwrite`  | boolean | false         | Existing folders |

:br

### Exit Codes

| Code | Scenario                     |
| ---- | ---------------------------- |
| 0    | Successful project creation  |
| 1    | Validation error             |
| 2    | Network failure              |
| 3    | File system permission issue |

::divider
::

**Pro Tip**: Combine with `lithia dev` for instant hot-reload development experience after project creation.
