---
seo:
  title: 'API Reference: CLI - create-lithia-app | Lithia.js'
  description: Lithia.js API Reference
next:
  title: Lithia CLI
  path: /docs/api-reference/cli/lithia-cli
---

# create-lithia-app

The `create-lithia-app` CLI allow you to create a new Lithia.js project
using the followings templates:

:br

- [default](https://github.com/lithiajs/lithia-default-app-template){target=\_blank}
- [with-drizzle](https://github.com/lithiajs/lithia-with-drizzle-template){target=\_blank}
- [with-prisma](https://github.com/lithiajs/lithia-with-prisma-template){target=\_blank}

:br

It is the easiest way to get started with Lithia.js.

:br

Basic usage:

::code-block
#context
Terminal

#code

```bash
npx create-lithia-app@latest
```

::

During the installation, some prompts will be shown to you, asking for the
project name, template, and other configurations.

Let's see each option in detail:

:br

- **Project Name**: The name of your project. It will be used to create the
  project folder and the package.json file. If you don't provide a name, the
  default value is `my-lithia-app`.

::code-block
#context
Terminal

#code

```bash
? What is the name of your project? (my-lithia-app)
```

::

- **Template**: The template to be used to create the project. You can choose
  between the `default`, `with-drizzle`, and `with-prisma` templates.

::code-block
#context
Terminal

#code

```bash
? Choose a template for your project (Use arrow keys)
>   default
    with-drizzle
    with-prisma
```

::

- **Install dependencies**: If you want to install the project dependencies
  after the project creation, you can choose this option.

::code-block
#context
Terminal

#code

```bash
? Do you want to install dependencies after creating the project? (Y/n)
```

::

- **Package Manager**: The package manager to be used to install the project
  dependencies. You can choose between `npm` and `yarn`. This prompt will only
  be shown if you choose to install the dependencies.

::code-block
#context
Terminal

#code

```bash
? Choose a package manager to install dependencies (Use arrow keys)
>   npm
    yarn
    # pnpm (coming soon)
    # bun (coming soon)
```

::

- **Git**: If you want to initialize a Git repository in the project folder,
  you can choose this option.

::code-block
#context
Terminal

#code

```bash
? Do you want to initialize a git repository? (Y/n)
```

::

- **Overwrite**: If you want to overwrite the project folder if it already
  exists, you can choose this option. This prompt will only be shown if the
  project folder already exists. Please note that, different from the other
  prompts, the default value for this prompt is `N`.

::code-block
#context

Terminal

#code

```bash
? The directory <your-project-name> already exists. Do you want to overwrite it?  (y/N)
```

::

::divider
::

## Reference

The following options are available for the `create-lithia-app` CLI:

:br

| Option              | Description                              |
| ------------------- | ---------------------------------------- |
| `-h` or `--help`    | Show the help message.                   |
| `-v` or `--version` | Show the CLI version.                    |
| `--name`            | The project name.                        |
| `--template`        | The project template.                    |
| `--no-install`      | Skip the dependencies installation.      |
| `--package-manager` | Choose the package manager.              |
| `--git`             | Initialize a Git repository.             |
| `--overwrite`       | Overwrite the project folder.            |
| `--yes`             | Skip all prompts. (use default template) |
