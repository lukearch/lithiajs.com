<template>
  <div
    class="w-1/5 py-12 sticky top-[77px] left-0 h-[calc(100vh-77px)] hidden md:flex md:flex-shrink-0 md:flex-col gap-4">
    <div v-for="group in processedMenu" :key="group.href">
      <NuxtLink :to="group.href">
        <button class="w-full text-start px-3 py-2">
          <span
            class="font-bold"
            :class="{
              'text-primary-400': route.path === group.href,
            }">
            {{ group.label }}
          </span>
        </button>
      </NuxtLink>
      <UAccordion v-if="group.items" :items="group.items">
        <template #default="{ item, open }">
          <UButton variant="ghost" @click="$router.push(item.href)">
            <UIcon :name="item.icon" size="24" class="mr-2" />
            <span
              class="font-bold"
              :class="{
                'text-primary-400': open,
                'text-gray-400': !open,
              }">
              {{ item.label }}
            </span>

            <template v-if="item.items" #trailing>
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                :class="[open && 'rotate-90']" />
            </template>
          </UButton>
        </template>

        <template #item="{ item }">
          <UVerticalNavigation
            :links="item.items"
            :ui="{
              wrapper:
                'border-s border-gray-200 dark:border-gray-800 space-y-2',
              base: 'group block border-s -ms-px leading-6 before:hidden transition-colors duration-200',
              padding: 'p-0 ps-4',
              rounded: '',
              font: '',
              ring: '',
              active: 'dark:text-primary-400',
              inactive: 'dark:text-gray-400',
            }" />
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DocsNavigationMenu } from '~/types/docs-navigation-menu';

const route = useRoute();
const menu = ref<DocsNavigationMenu>([
  {
    label: 'Introduction',
    href: '/docs',
    items: [
      {
        label: 'Getting Started',
        href: '/docs/getting-started',
        icon: 'line-md:compass-loop',
        items: [
          {
            label: 'Installation',
            to: '/docs/getting-started/installation',
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
        icon: 'gravity-ui:terminal-line',
        items: [
          {
            label: 'create-lithia-app',
            to: '/docs/api-reference/cli/create-lithia-app',
          },
        ],
      },
    ],
  },
]);

const processedMenu = computed(() => {
  return menu.value.map((group) => ({
    ...group,
    items: group.items?.map((item) => ({
      ...item,
      defaultOpen: route.path.startsWith(item.href),
    })),
  }));
});
</script>
