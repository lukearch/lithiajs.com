import { defineCollection, defineContentConfig, z } from '@nuxt/content';
import { asSitemapCollection } from '@nuxtjs/sitemap/content';

export default defineContentConfig({
  collections: {
    docs: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'docs/**/*.md',
        schema: z.object({
          previous: z.optional(
            z.object({
              title: z.string(),
              path: z.string(),
            })
          ),
          next: z.optional(
            z.object({
              title: z.string(),
              path: z.string(),
            })
          ),
          seo: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }),
      })
    ),
  },
});
