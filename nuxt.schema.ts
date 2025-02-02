import { group } from '@nuxt/content/preview';

export default defineNuxtSchema({
  appConfig: {
    menu: group({
      title: 'Menu',
    }),
  },
});
