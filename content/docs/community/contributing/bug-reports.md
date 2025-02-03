---
seo:
  title: 'Community Guidelines: Reporting Bugs | Lithia.js'
  description: 'Learn how to effectively report bugs and contribute to improving Lithia.js. Essential guide for community contributions.'
previous:
  title: 'Feature Requests'
  path: /docs/community/contributing/feature-requests
---

# Bug Reports

Powering Quality Through Collaborative Debugging

::divider
::

## Before Reporting

### 1. Verify the Issue

- Reproduce the error in latest stable version
- Test in clean environment (`node_modules` fresh install)
- Confirm bug exists in core framework (not your implementation)

:br

### 2. Search Existing Reports

Check open/closed issues in:

- [GitHub Issues](https://github.com/lithiajs/lithia/issues){target="\_blank"}
- [Discussions](https://github.com/lithiajs/lithia/discussions){target="\_blank"}

:br

### 3. Update Dependencies

::code-block
#context
Terminal

#code

```bash
npm install lithia@latest
```

::

::divider
::

## Creating Effective Reports

### Required Information

| Section            | Details                                | Example                      |
| ------------------ | -------------------------------------- | ---------------------------- |
| Environment        | OS, Node.js version, Package manager   | macOS 14.5, Node 20.4, pnpm  |
| Reproduction Steps | Exact commands + minimal code sample   | [CodeSandbox template](#)    |
| Expected Behavior  | Framework's documented behavior        | "Route should return 200 OK" |
| Actual Behavior    | Observed error with screenshots/logs   | "500 Internal Server Error"  |
| Error Messages     | Full stack trace (sanitized if needed) | [Log snippet](#)             |

:br

### Report Template

::code-block{icon="vscode-icons:file-type-markdown"}
#context
Markdown

#code

```markdown
**Lithia.js Version:** 2.4.0  
**Reproduction Repository:** [link]  
**Steps to Reproduce:**

1. npx create-lithia-app@latest --template=default
2. Add route at `routes/users.get.ts`
3. Start dev server with `npm run dev`

**Expected:**  
GET /users returns empty array

**Actual:**  
RuntimeError: Cannot read property 'map' of undefined

**Relevant Logs:**  
###logs
[12:34:56] ERROR [LITHIA] Route compilation failed  
at Module.compile (dist/core/index.js:45:12)
```

::

::divider
::

## Security Vulnerabilities

For sensitive security-related issues:

```email
security@lithiajs.com

```

:br

- 48h response time guarantee
- Do NOT disclose publicly before coordination

::divider
::

## Triage Process

### Lifecycle Stages

1. **New** → Initial community validation
2. **Needs Info** → Awaiting reporter input
3. **Confirmed** → Core team prioritization
4. **In Progress** → Active development
5. **Resolved** → Fixed in specific version

:br

### Community Participation

- Reproduce reported issues (+1 reactions)
- Submit PRs with failing test cases
- Help classify error types

::divider
::

## Best Practices

### Do:

- Isolate framework-specific errors
- Provide minimal reproduction repos
- Use official templates

:br

### Don't:

- Post API keys/credentials
- Report versioning issues (<v2.0)
- Spam multiple channels

::divider
::

## Report Channels

### Primary

- [GitHub Issues](https://github.com/lithiajs/lithia/issues/new/choose){target="\_blank"}  
  (Use "Bug Report" template)

:br

### Alternative

- [Discord #bug-reports](https://discord.gg/lithia){target="\_blank"}  
  (For time-sensitive critical issues)

::divider
::

Thank you for making Lithia.js more robust! Your vigilance directly impacts thousands of developers worldwide. 🔍🚀
