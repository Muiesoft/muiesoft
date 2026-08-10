import { z } from "zod";

export const sourceReferenceSchema = z.object({
  id: z.string(),
  title: z.string(),
  publisher: z.string(),
  url: z.string(),
  retrievedAt: z.string().optional(),
  sourceType: z.enum([
    "official",
    "court",
    "institution",
    "open-data",
    "secondary",
    "demo",
  ]),
});

export const institutionScoreSchema = z.object({
  total: z.number(),
  reliability: z.number(),
  usability: z.number(),
  accessibility: z.number(),
  interoperability: z.number(),
  transparency: z.number(),
  bureaucracy: z.number(),
  costEfficiency: z.number().optional(),
  mobile: z.number().optional(),
});

export const institutionSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  category: z.string(),
  website: z.string().optional(),
  county: z.string().optional(),
  score: institutionScoreSchema.optional(),
  scoreKind: z.enum(["opinion-estimate", "measured", "demo"]).optional(),
  scoreNote: z.string().optional(),
  summary: z.string().optional(),
  status: z.enum([
    "operational",
    "degraded",
    "broken",
    "physical-required",
    "unknown",
  ]),
  digitalServices: z.number().optional(),
  physicalRequired: z.number().optional(),
  pdfCountLabel: z.string().optional(),
  sources: z.array(sourceReferenceSchema),
  demo: z.boolean().optional(),
});

export const publicContractSchema = z.object({
  id: z.string(),
  title: z.string(),
  system: z.string(),
  institution: z.string(),
  supplier: z.string(),
  valueRon: z.number(),
  signedAt: z.string().optional(),
  procurementType: z.string().optional(),
  status: z.string(),
  sources: z.array(sourceReferenceSchema),
  demo: z.boolean().optional(),
});
