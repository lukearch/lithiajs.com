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
        href: '/docs/getting-started',
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
        href: '/docs/api-reference/cli',
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
]);
</script>
