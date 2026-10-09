import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: ({ image }) => z.object({
      category: z.string(),
			title: z.string(),
      index: z.number(),
			description: z.string(),
			tags: z.array(z.string()),
			img: image(),
			img_alt: z.string().optional(),
		}),
	}),
};