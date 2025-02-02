<template>
  <div v-if="page">
    <div class="py-12">
      <ContentRenderer :value="page" />
    </div>
    <UDivider />
    <div class="flex justify-between py-12">
      <div v-if="page.previous">
        <NuxtLink
          :to="page.previous.path"
          class="relative flex items-center navigation-button">
          <div class="flex flex-col ml-6 items-end">
            <span class="text-gray-400 text-sm lg:text-base">Previous</span>
            <span class="font-bold lg:text-xl">{{ page.previous.title }} </span>
          </div>
          <Icon
            name="heroicons-solid:chevron-left"
            class="absolute left-0 bottom-0 text-gray-400"
            size="24" />
        </NuxtLink>
      </div>
      <div />
      <div v-if="page.next" class="flex">
        <NuxtLink
          :to="page.next.path"
          class="relative flex items-center navigation-button">
          <div class="flex flex-col mr-6">
            <span class="text-gray-400 text-sm lg:text-base">Next</span>
            <span class="font-bold lg:text-xl">{{ page.next.title }} </span>
          </div>
          <Icon
            name="heroicons-solid:chevron-right"
            class="absolute right-0 bottom-0 text-gray-400"
            size="24" />
        </NuxtLink>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="py-12">
      <PageWelcome title="404">
        <template #description>
          The requested page could not be found.
        </template>
      </PageWelcome>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first();
});

definePageMeta({
  layout: 'docs',
});

useSeoMeta({
  title: page?.value?.seo.title,
  description: page?.value?.seo.description,
  ogTitle: page?.value?.seo.title,
  ogDescription: page?.value?.seo.description,
  ogImage: '/images/og.png',
  ogUrl: `https://lithiajs.com${route.path}`,
  twitterTitle: page?.value?.seo.title,
  twitterDescription: page?.value?.seo.description,
  twitterImage: '/images/og.png',
  twitterCard: 'summary_large_image',
});
</script>

<style scoped>
.navigation-button span {
  transition: color 0.3s;
}

.navigation-button:hover span {
  color: theme('colors.spring-green.400');
}

.navigation-button:hover div span:last-child {
  color: theme('colors.white');
}
</style>
