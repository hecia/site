import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("HEC IA"),
    tags: z.array(z.string()).default([]),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
})

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
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["active", "completed", "archived"]),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    technologies: z.array(z.string()).default([]),
    members: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
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
    category: z.enum(["association", "ai", "industry", "academic"]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
})

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/gallery" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    category: z
      .enum(["événements", "projets", "vie-associative", "autre"])
      .default("autre"),
  }),
})

export const collections = { blog, events, projects, news, gallery }
