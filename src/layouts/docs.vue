<template>
  <main>
    <div
      class="container lg:hidden border-b border-solid border-white/10 p-4"
      @click="isOpen = !isOpen">
      <span class="flex items-center font-bold">
        <UIcon
          name="i-heroicons-chevron-right-20-solid"
          class="text-gray-300 w-6 h-6 transform transition-transform duration-200"
          :class="[isOpen && 'rotate-90 text-spring-green-300']" />
        Menu
      </span>

      <USlideover v-model="isOpen">
        <div class="p-4 flex-1 z-50">
          <UButton
            color="gray"
            variant="solid"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex sm:hidden absolute end-5 top-5 z-10"
            square
            padded
            @click="isOpen = false" />

          <DocsNavigation :menu="menu" />
        </div>
      </USlideover>
    </div>
    <div class="container md:flex md:flex-row relative gap-12">
      <DocsNavigation class="hidden lg:flex sticky top-[77px]" :menu="menu" />
      <div class="w-full min-w-0 max-w-full">
        <slot />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { DocsNavigationMenu } from '~/types/docs-navigation-menu';

const isOpen = ref(false);
const router = useRouter();

const unregister = router.afterEach(() => {
  isOpen.value = false;
});

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

onUnmounted(() => {
  unregister();
});
</script>
