<template>
  <div
    class="border border-solid border-white/10 rounded-lg hover:border-spring-green-400/10 hover:opacity-50 transition-all duration-300 ease-in-out select-none">
    <div
      class="font-bold child:text-spring-green-400 border-b border-solid border-white/10 px-4 py-2">
      <slot name="title" />
    </div>
    <div class="text-sm p-4 child:text-slate-300 child:leading-6 bg-white/5">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineSlots<{
  title: unknown;
  content: unknown;
}>();
</script>

<style></style>
