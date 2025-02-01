<template>
  <Analytics />
  <SpeedInsights />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

const title =
  'Lithia.js - The Next-Generation Framework for server-side applications';
const description =
  'Lithia.js is a modern, fast, and powerful framework for building server-side applications with Node.js. It is built on top of Vite and Vue 3, and it is designed to be simple and flexible.';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/og.png',
  ogUrl: 'https://lithiajs.com',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/images/og.png',
  twitterCard: 'summary_large_image',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/lithia.svg',
    },
  ],
});
</script>
