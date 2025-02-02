<template>
  <div class="flex flex-col items-center space-y-4 w-full">
    <div
      class="flex w-full items-center justify-center h-36 border border-solid rounded-md border-white/10"
      :class="$props.class">
      <NuxtImg
        v-if="image"
        :src="image.src"
        :width="image.width"
        :height="image.height"
        :alt="name"
        class="object-contain" />
    </div>
    <div class="flex justify-between w-full">
      <span>{{ name }}</span>
      <button
        v-if="image"
        class="font-bold text-spring-green-400 flex items-center space-x-1"
        @click="download">
        <span>svg</span>
        <Icon name="lucide:download" size="16" />
      </button>
      <button
        v-if="color"
        class="font-bold text-spring-green-400 flex items-center space-x-1"
        @click="copy">
        <span>{{ color.hex }}</span>
        <Icon name="lucide:copy" size="16" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const toast = useToast();
const props = defineProps<{
  name: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
  color?: {
    hex: string;
  };
  class?: string;
}>();

async function download() {
  if (!props.image) return;

  const blob = await $fetch<Blob>(props.image.src);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = props.image.src.split('/').pop()!;
  a.click();
  URL.revokeObjectURL(url);
}

async function copy() {
  if (!props.color) return;

  await navigator.clipboard.writeText(props.color.hex);

  toast.add({
    title: 'Copied to clipboard',
    icon: 'lucide:check',
  });
}
</script>

<style></style>
