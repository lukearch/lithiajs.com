<template>
  <header
    :class="{
      scroll: y > 0,
    }">
    <div class="container">
      <NuxtLink href="/">
        <NuxtImg src="lithia.svg" :width="34.63" :height="44" alt="Lithia.js" />
      </NuxtLink>
      <div class="flex items-center gap-4">
        <NuxtLink
          v-if="repo.data.value"
          :href="repo.data.value.html_url"
          target="_blank"
          class="flex items-center gap-0.5 rounded-button p-button px-3 hover:bg-white/10">
          <Icon name="octicon:mark-github-24" size="18" class="mr-2" />
          <span class="text-sm">
            {{ minifyNumber(repo.data.value.stargazers_count) }}
          </span>
        </NuxtLink>
        <NuxtLink href="https://opencollective.com/lithiajs" target="_blank">
          <AnimatedButton text="Become a Sponsor" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Icon } from '#components';

const { y } = useWindowScroll();
const { getRepo } = useGithub();
const repo = await useAsyncData('repo', () => getRepo());
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
