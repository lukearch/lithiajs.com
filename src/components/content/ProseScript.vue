<template>
  <div></div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
});

useScript(props.src);
</script>
