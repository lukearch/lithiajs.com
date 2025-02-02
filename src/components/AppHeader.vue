<template>
  <HeaderBanner />
  <header class="backdrop-blur-sm bg-black/50">
    <div class="container">
      <NuxtLink href="/">
        <NuxtImg src="lithia.svg" :width="34.63" :height="44" alt="Lithia.js" />
      </NuxtLink>
      <div class="flex items-center gap-2">
        <NuxtLink
          v-if="data"
          :href="data.html_url"
          target="_blank"
          class="flex items-center gap-0.5 rounded-button p-button px-3 hover:bg-white/10 transition-colors duration-300">
          <Icon name="octicon:mark-github-24" size="18" class="mr-2" />
          <span class="text-sm">
            {{ minifyNumber(data.stargazers_count) }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </header>
  <div
    class="w-full h-px bg-gradient-to-r from-transparent via-spring-green-400 to-transparent transition-opacity duration-300"
    :style="{
      opacity: y === 0 ? 1 : 0,
    }" />
</template>

<script lang="ts" setup>
import type { GhRepo } from '~/types/gh-repo';

const { y } = useWindowScroll();
const { data } = await useFetch<GhRepo>(
  `https://api.github.com/repos/lithiajs/lithia`
);
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease-out;
  border-color: rgba(255, 255, 255, 0.1);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
