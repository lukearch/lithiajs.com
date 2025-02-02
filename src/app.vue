<template>
  <Analytics />
  <SpeedInsights />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

const title = 'Lithia.js: The Next-Generation Framework for Node.js and TS';
const description =
  'Lithia is an open-source framework that enables you to create elastic, modern, and powerful server-side applications with Node.js and TypeScript.';

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
