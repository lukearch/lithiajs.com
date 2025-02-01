// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
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
    ],
  },
  site: {
    url: 'https://lithiajs.com',
    name: 'Lithia.js - The Next-Generation Framework for server-side applications',
  },
  icon: {
    provider: 'iconify',
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'lithiajs.com',
        owner: 'lukearch',
        url: 'https://github.com/lukearch/lithiajs.com',
      },
    },
  },
  runtimeConfig: {
    public: {
      ghToken: process.env.NUXT_PUBLIC_GH_TOKEN,
      ghRepo: process.env.NUXT_PUBLIC_GH_REPO,
    },
  },
});
