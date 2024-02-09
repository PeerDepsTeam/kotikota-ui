import {z} from "zod";

export const createPostSchema = z.object({
  description: z.string().min(10),
});
