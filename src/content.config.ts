import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const events = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/events" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    online: z.boolean().default(false),
    registrationUrl: z.string().url().optional(),
    capacity: z.number().int().positive().optional(),
    tags: z.array(z.string()).default([]),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
})

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/news" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    source: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    category: z.enum(["association", "ai", "industry", "academic", "newsletter"]),
    tags: z.array(z.string()).default([]),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
})

export const collections = { events, news }
