// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  srcDir: 'src/',
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
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true,
      gitInfo: {
        name: 'lithiajs.com',
        owner: 'lukearch',
        url: 'https://github.com/lukearch/lithiajs.com',
      },
    },
    watch: {
      enabled: true,
    },
    build: {
      markdown: {
        highlight: {
          langs: ['typescript', 'bash', 'javascript', 'json'],
          theme: 'catppuccin-mocha',
        },
      },
    },
  },
  vite: {
    server: {
      allowedHosts:
        process.env.NODE_ENV === 'development' ? true : ['lithiajs.com'],
    },
  },
});
