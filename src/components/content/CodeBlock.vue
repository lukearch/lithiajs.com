<template>
  <div
    class="border border-solid border-white/10 rounded-md my-6 overflow-hidden">
    <div
      class="px-4 py-2 border-b border-solid border-white/10 flex items-center gap-2">
      <Icon :class="$props.iconColor" :name="icon" size="16" />
      <span class="text-xs font-bold">
        <slot name="context" />
      </span>
      <button v-if="$slots.code" class="ml-auto" @click="copyCode">
        <Icon class="text-white" name="feather:copy" size="16" />
      </button>
    </div>
    <div ref="codeBlock" class="p-4 bg-white/5 overflow-x-auto">
      <slot name="code" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const toast = useToast();
const codeBlock = ref<HTMLElement | null>(null);

const copyCode = () => {
  if (import.meta.client && codeBlock.value) {
    const code = codeBlock.value.textContent || '';
    navigator.clipboard.writeText(code);

    toast.add({
      title: 'Copied to clipboard',
      icon: 'lucide:check',
    });
  }
};

defineSlots<{
  context: unknown;
  code: unknown;
}>();

defineProps({
  icon: {
    type: String,
    default: 'lucide:terminal',
  },
  iconColor: {
    type: String,
    default: 'text-white',
  },
});
</script>
