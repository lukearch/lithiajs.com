<template>
  <div class="container">
    <PageTitle>{{ title }}</PageTitle>
    <p
      v-if="$slots.description"
      class="text-gray-200 text-lg leading-8 max-w-xl">
      <slot name="description" />
    </p>
  </div>
</template>

<script lang="ts" setup>
defineSlots<{
  description: unknown;
}>();

defineProps<{
  title: string;
}>();
</script>

<style></style>
