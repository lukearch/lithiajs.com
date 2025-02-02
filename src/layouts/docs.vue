<template>
  <main>
    <div class="container md:flex md:flex-row relative gap-12">
      <DocsNavigation :menu="menu" />
      <div class="w-full min-w-0 max-w-full">
        <slot />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { DocsNavigationMenu } from '~/types/docs-navigation-menu';

const menu = ref<DocsNavigationMenu>([
  {
    label: 'Introduction',
    href: '/docs',
    items: [
      {
        label: 'Getting Started',
        items: [
          {
            label: 'Installation',
            to: '/docs/getting-started/installation',
          },
          {
            label: 'Project Structure',
            to: '/docs/getting-started/project-structure',
          },
          {
            label: 'Routing',
            to: '/docs/getting-started/routing',
          },
        ],
      },
    ],
  },
  {
    label: 'API Reference',
    href: '/docs/api-reference',
    items: [
      {
        label: 'CLI',
        items: [
          {
            label: 'create-lithia-app',
            to: '/docs/api-reference/cli/create-lithia-app',
          },
          {
            label: 'Lithia CLI',
            to: '/docs/api-reference/cli/lithia-cli',
          },
        ],
      },
    ],
  },
  {
    label: 'Community',
    href: '/docs/community',
    items: [
      {
        label: 'Contributing',
        items: [
          {
            label: 'Bug Reports',
            to: '/docs/community/contributing/bug-reports',
          },
          {
            label: 'Feature Requests',
            to: '/docs/community/contributing/feature-requests',
          },
          {
            label: 'Pull Requests',
            to: '/docs/community/contributing/pull-requests',
          },
          {
            label: 'Code of Conduct',
            to: '/docs/community/contributing/code-of-conduct',
          },
        ],
      },
      {
        label: 'Support',
        items: [
          {
            label: 'Sponsorship',
            to: '/docs/community/support/sponsorship',
          },
          {
            label: 'Discord',
            to: '/docs/community/support/discord',
          },
          {
            label: 'GitHub Discussions',
            to: '/docs/community/support/github-discussions',
          },
        ],
      },
    ],
  },
]);
</script>
