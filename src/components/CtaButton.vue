<template>
  <button>
    <span>
      {{ props.text }}
    </span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();
</script>

<style scoped>
button {
  position: relative;
  border-radius: theme('borderRadius.button');
  padding: theme('padding.button');
  width: fit-content;
  overflow: hidden;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  background: linear-gradient(
    -45deg,
    theme('colors.spring-green.400'),
    theme('colors.spring-green.600')
  );
  transition: left 0.4s;
}

button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -45deg,
    theme('colors.spring-green.600'),
    theme('colors.spring-green.400')
  );
  transition: left 0.4s;
}

button:hover::before {
  left: 0;
}

button:hover::after {
  left: 100%;
}

button span {
  position: relative;
  z-index: 1;
  display: flex;
  color: theme('colors.bunker.950');
  letter-spacing: theme('letterSpacing.button');
  font-weight: theme('fontWeight.button');
  font-size: theme('fontSize.button');
  text-transform: uppercase;
  font-family: Inter, sans-serif;
}
</style>
