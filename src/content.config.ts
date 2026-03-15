import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			category: z.enum([
				'Getting Started',
				'Strategy',
				'LLM Development',
				'Discovery',
				'Roadmapping',
				'Leadership',
				'Workflows',
				'Systems',
				'Delivery',
				'Communication',
				'AI-Augmented Products',
				'Reviews',
				'Case Studies',
			]).optional(),
			tags: z.array(z.string()).optional(),
			featured: z.boolean().optional(),
			readTime: z.string().optional(), // e.g. "8 min read"
		}),
});

export const collections = { blog };
