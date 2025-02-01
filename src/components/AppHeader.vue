<template>
  <header
    :class="{
      scroll: y > 0,
    }">
    <div class="container">
      <NuxtLink href="/" class="flex max-h-[44px] w-fit">
        <NuxtImg src="lithia.svg" :width="34.63" :height="44" alt="Lithia.js" />
      </NuxtLink>
      <AnimatedButton text="Become a Sponsor" />
    </div>
  </header>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll();
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  border: 1px solid transparent;
  transition: all 0.3s ease-out;
}

.scroll {
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
