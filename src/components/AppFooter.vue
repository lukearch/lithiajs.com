<template>
  <div
    class="w-full h-px bg-gradient-to-r from-transparent via-spring-green-400 to-transparent transition-opacity duration-300" />
  <footer>
    <div class="py-16">
      <div class="container">
        <div class="content">
          <div v-for="(menu, $i) in menus" :key="$i" class="menu">
            <p class="menu-title">
              {{ menu.title }}
            </p>
            <NuxtLink
              v-for="(item, $j) in menu.items"
              :key="$j"
              :href="item.url"
              :target="item.url.startsWith('http') ? '_blank' : '_self'"
              class="menu-item">
              <Icon
                v-if="item.icon"
                :name="item.icon"
                size="20px"
                class="hidden md:inline" />
              {{ item.title }}
            </NuxtLink>
          </div>
          <div class="logo">
            <NuxtLink href="/">
              <NuxtImg
                src="lithia.svg"
                :width="34.63"
                :height="44"
                alt="Lithia.js" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-300" />
    <div class="py-16">
      <div class="container">
        <p class="text-gray-500 text-center md:text-start">
          Copyright &copy; {{ new Date().getFullYear() }} Lithia.js - MIT
          License
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
type Menu = {
  title: string;
  items: {
    title: string;
    url: string;
    icon?: string;
  }[];
};

const menus: Menu[] = [
  {
    title: 'Resources',
    items: [
      {
        title: 'Docs',
        url: '/docs',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Team',
        url: '/team',
      },
      {
        title: 'Design Kit',
        url: '/design-kit',
      },
    ],
  },
  {
    title: 'Social',
    items: [
      {
        title: 'OpenCollective',
        url: 'https://opencollective.com/lithiajs',
        icon: 'simple-icons:opencollective',
      },
      {
        title: 'GitHub',
        url: 'https://github.com/lithiajs/lithia',
        icon: 'simple-icons:github',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/lithiajs',
        icon: 'simple-icons:x',
      },
    ],
  },
];
</script>

<style scoped>
footer {
  position: relative;
  z-index: 1;
  flex: 1;
  font-size: 0.875rem;
  background-color: var(--color-background);
}

.content {
  display: flex;
  position: relative;
  gap: 4rem;
  flex-direction: column-reverse;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
}

.menu-title {
  font-weight: 700;
}

.menu-item {
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-item:hover {
  color: white;
}

.logo {
  position: absolute;
  top: 0;
  right: 0;
}

@media screen and (max-width: 767px) {
  .logo {
    position: relative;
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: 768px) {
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem 0;
  }

  .menu {
    flex-direction: column;
    align-items: start;
  }

  .menu-item {
    width: max-content;
  }
}

@media screen and (min-width: 1024px) {
  .content {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1280px) {
  .content {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
