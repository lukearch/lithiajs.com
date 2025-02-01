<template>
  <div v-if="!isClose" class="w-full bg-spring-green-400 py-2">
    <div class="container relative flex items-center justify-center">
      <div class="flex gap-2 items-center">
        <p class="text-bunker-950 font-bold text-sm">
          Support Lithia.js by becoming a sponsor at
        </p>
        <NuxtLink
          href="https://opencollective.com/lithiajs"
          target="_blank"
          class="flex items-center gap-1.5">
          <button
            class="flex items-center justify-center gap-1.5 bg-bunker-950 py-1 px-3 rounded-full text-spring-green-400 text-sm">
            <span class="font-bold">opencollective</span>
            <Icon name="simple-icons:opencollective" size="16" />
          </button>
        </NuxtLink>
      </div>
      <button
        v-if="closeable"
        class="flex items-center justify-center absolute right-4"
        @click="isClose = true">
        <Icon class="text-bunker-950" name="heroicons-solid:x" size="16" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isClose = ref(false);

defineProps<{
  closeable?: boolean;
}>();
</script>

<style></style>
