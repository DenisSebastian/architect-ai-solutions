import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    titleEs: z.string().optional(),
    description: z.string(),
    descriptionEs: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    author: z.string().default('Denis Berroeta'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
