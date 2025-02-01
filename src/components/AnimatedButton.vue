<template>
  <button :class="{ 'always-animated': props.alwaysAnimate }">
    <span>
      {{ props.text }}
    </span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
  alwaysAnimate?: boolean;
}>();
</script>

<style scoped>
@property --rotate {
  syntax: '<angle>';
  initial-value: 132deg;
  inherits: false;
}

@keyframes spiral-highlight {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

button {
  position: relative;
  border-radius: theme('borderRadius.button');
  padding: theme('padding.button');
  width: fit-content;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

button::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  height: calc(100% + 2px);
  width: calc(100% + 2px);
  animation: spiral-highlight 10s linear infinite;
  border-radius: inherit;
  transition: opacity 0.3s ease-out;
  background-image: repeating-conic-gradient(
    from var(--rotate),
    theme('colors.spring-green.400') 0,
    theme('colors.bunker.950') 14%,
    theme('colors.bunker.950') 36%,
    theme('colors.spring-green.400') 50%
  );
  opacity: 0;
}

.always-animated::before {
  opacity: 1;
}

button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: theme('colors.bunker.950');
  transition: opacity 0.3s;
  border-radius: inherit;
}

button:hover::before {
  opacity: 1;
}

button span {
  position: relative;
  z-index: 2;
  display: flex;
  color: white;
  letter-spacing: theme('letterSpacing.button');
  font-weight: theme('fontWeight.button');
  font-size: theme('fontSize.button');
  text-transform: uppercase;
  font-family: Inter, sans-serif;
}

@media screen and (max-width: 768px) {
  button::before {
    opacity: 1;
  }
}
</style>
