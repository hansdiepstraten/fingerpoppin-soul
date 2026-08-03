import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The blog is the living core of the site: one Markdown file per post.
// To add a post, drop a new .md file in src/content/blog/ with this frontmatter.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Announcements', 'Show', 'Hideaway']).default('Announcements'),
    // Path under /public, e.g. "/images/hideaway.jpg". Optional.
    image: z.string().optional(),
    excerpt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
