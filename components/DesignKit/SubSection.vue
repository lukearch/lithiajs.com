<template>
  <div class="py-4">
    <h5 class="text-2xl font-bold tracking-tighter mb-4">{{ title }}</h5>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<style></style>
