import {defineCollection,z} from 'astro:content';
import {glob} from 'astro/loaders';
const projects=defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/projects'}),schema:z.object({title:z.string(),summary:z.string(),date:z.coerce.date(),visibility:z.enum(['public','summary-only']).default('public')})});
const academicProjects=defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/academic-projects'}),schema:z.object({title:z.string(),summary:z.string(),date:z.coerce.date(),institution:z.string().optional(),status:z.enum(['ongoing','completed'])})});
const publications=defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/publications'}),schema:z.object({title:z.string(),authors:z.array(z.string()),date:z.coerce.date(),status:z.enum(['in-preparation','submitted','accepted','preprint','published']),doi:z.string().optional(),venue:z.string().optional(),url:z.string().url().optional()})});
const articles=defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/articles'}),schema:z.object({title:z.string(),summary:z.string(),date:z.coerce.date(),tags:z.array(z.string()).default([])})});
export const collections={projects,'academic-projects':academicProjects,publications,articles};
