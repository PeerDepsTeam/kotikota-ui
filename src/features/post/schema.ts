import {z} from "zod";
import {isFuture} from "date-fns";

export const createPostSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  amount_required: z.number().min(1000, "amount must be 1.000 and greater"),
  deadline: z.date().refine(isFuture, {
    message: "Deadline must be future date",
  }),
});

export type CreatePost = z.infer<typeof createPostSchema>;
