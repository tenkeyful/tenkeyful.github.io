import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const essays = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/essays",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { essays };