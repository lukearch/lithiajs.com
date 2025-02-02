// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  modules: [
    '@nuxtjs/sitemap',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'nuxt-og-image',
  ],
  fonts: {
    defaults: {
      weights: [400, 700],
      styles: ['normal'],
      preload: true,
      subsets: ['latin-ext'],
    },
    families: [
      {
        name: 'Inter',
        provider: 'google',
      },
      {
        name: 'Geist',
        provider: 'google',
      },
      {
        name: 'Geist Mono',
        provider: 'google',
      },
    ],
  },
  site: {
    url: 'https://lithiajs.com',
    name: 'Lithia.js: The Next-Generation Framework for Node.js and TS',
  },
  icon: {
    provider: 'iconify',
  },
  studio: {
    enabled: true,
    gitInfo: {
      name: 'lithiajs',
      owner: 'lukearch',
      url: 'https://github.com/lukearch/lithiajs',
    },
  },
});
