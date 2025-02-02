import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: 'docs/**/*.md',
      schema: z.object({
        title: z.string(),
        path: z.string(),
        seo: z.object({
          title: z.string(),
          description: z.string(),
        }),
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
      }),
    }),
  },
});
