<template>
  <div class="container">
    <div class="py-12">
      <h3 class="text-3xl font-bold tracking-tighter mb-8">{{ title }}</h3>
      <p v-if="$slots.description" class="text-gray-200 text-lg leading-8 mb-4">
        <slot name="description"></slot>
      </p>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineSlots<{
  default: unknown;
  description: unknown;
}>();
defineProps<{
  title: string;
}>();
</script>

<style></style>
