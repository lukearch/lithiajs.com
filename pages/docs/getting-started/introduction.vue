<template>
  <ContentRenderer v-if="data" :value="data" />
</template>

<script lang="ts" setup>
const { data } = await useAsyncData(() =>
  queryCollection('docs').path('docs/getting-started/introduction').first()
);
</script>

<style></style>
