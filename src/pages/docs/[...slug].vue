<template>
  <div v-if="page">
    <div class="py-12">
      <ContentRenderer :value="page" />
    </div>
    <UDivider />
    <div class="flex justify-between py-12">
      <div v-if="page.previous">
        <NuxtLink :to="page.previous.path" class="relative flex items-center">
          <div class="flex flex-col ml-6 items-end">
            <span class="text-xs text-gray-400">Previous</span>
            <span>{{ page.previous.title }} </span>
          </div>
          <Icon
            name="simple-line-icons:arrow-left"
            class="absolute left-0 bottom-1"
            size="16" />
        </NuxtLink>
      </div>
      <div />
      <div v-if="page.next" class="flex">
        <NuxtLink :to="page.next.path" class="relative flex items-center">
          <div class="flex flex-col mr-6">
            <span class="text-xs text-gray-400">Next</span>
            <span>{{ page.next.title }} </span>
          </div>
          <Icon
            name="simple-line-icons:arrow-right"
            class="absolute right-0 bottom-1"
            size="16" />
        </NuxtLink>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="py-12">
      <span>Não encontrado</span>
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
h1 {
  font-size: theme('fontSize.5xl');
  font-weight: 700;
  letter-spacing: theme('letterSpacing.tighter');
  margin-bottom: theme('margin.4');
}
</style>
