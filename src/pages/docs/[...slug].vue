<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first();
});

definePageMeta({
  layout: 'docs',
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
