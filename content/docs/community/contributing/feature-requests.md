---
seo:
  title: 'Community Guidelines: Feature Requests | Lithia.js'
  description: 'Learn how to propose new features and shape the future of Lithia.js. Contribution guide for impactful suggestions.'
next:
  title: Bug Reports
  path: /docs/community/contributing/bug-reports
---

# Feature Requests

Driving Innovation Through Community Collaboration

::divider
::

## Before Proposing

### 1. Validate the Need

- Check [existing features](https://lithiajs.com/docs){target="\_blank"}
- Search [GitHub Discussions](https://github.com/lithiajs/lithia/discussions){target="\_blank"}

:br

### 2. Alignment Check

Ensure your idea aligns with:

- Lithia.js' core philosophy
- Framework architecture
- Long-term maintenance plans

:br

### 3. Prototype Validation

Consider creating:

- Proof-of-concept implementation
- Usage scenario demos
- Community interest poll

::divider
::

## Crafting Effective Proposals

### Essential Components

| Section           | Purpose                               | Example                                                    |
| ----------------- | ------------------------------------- | ---------------------------------------------------------- |
| Problem Statement | Clear pain point description          | "Developing REST APIs requires repetitive validation code" |
| Proposed Solution | Technical implementation outline      | "Auto-generate validation from Zod schemas"                |
| Alternatives      | Researched options analysis           | "Could use Joi instead but Zod has better TS support"      |
| Adoption Impact   | Backward compatibility considerations | "Optional feature behind feature flag"                     |

:br

### Proposal Template

::code-block{icon="vscode-icons:file-type-markdown"}
#context
Terminal

#code

```markdown
**Related Area:** Routing | Bundler | DevTools  
**Problem Statement:**  
Current workflow requires manual [describe pain point]

**Proposed Solution:**  
Implement [specific feature] that would [expected benefit]

**Use Cases:**

1. [Scenario 1]
2. [Scenario 2]

**Technical Considerations:**

- Estimated complexity: Low/Medium/High
- Potential dependencies: [list packages]

**Community Support:**  
[Link to forum discussion or poll]
```

::

::divider
::

## Priority Framework

### Evaluation Criteria

1. **Impact**

   - Number of developers affected
   - Value to enterprise users

2. **Alignment**

   - Matches project vision
   - Complements existing features

3. **Feasibility**

   - Implementation complexity
   - Maintenance overhead

4. **Community Demand**
   - GitHub reactions (+1 votes)
   - External validation

::divider
::

## Contribution Pathways

### Implementation Options

1. **Core Team Development**

   - For high-priority strategic features

2. **Sponsored Development**

   - Enterprise-backed implementations

3. **Community Contributions**
   - Follow [RFC Process](/docs/community/rfc-process)
   - Requires design approval first

::divider
::

## Best Practices

### Do:

- Reference similar implementations in other frameworks
- Include adoption metrics projections
- Propose gradual rollout strategies

:br

### Don't:

- Submit duplicate requests
- Assume unlimited maintenance capacity
- Request niche domain-specific features

::divider
::

## Submission Channels

### Primary

- [GitHub Discussions](https://github.com/lithiajs/lithia/discussions/category/ideas){target="\_blank"}  
  (Use "Feature Request" template)

:br

### Alternative

- [Discord #feature-ideas](https://discord.gg/lithia){target="\_blank"}  
  (For early-stage brainstorming)

::divider
::

## Decision Workflow

1. **Proposal** → Community discussion (2 weeks)
2. **Design Review** → Core team assessment
3. **Voting** → Community advisory vote
4. **Implementation** → Approved features enter development queue

::divider
::

Your ideas fuel Lithia.js' evolution. Let's build the future of Node.js development together! 💡🚀
