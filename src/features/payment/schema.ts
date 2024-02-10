import {z} from "zod";

export const paymentRequestSchema = z.object({
  id: z.string().min(2),
  amount: z.any(),
  label: z.string(),
  reference: z.string(),
  payment_method: z.any(),
  payment_type: z.any(),
});

export type IntitiatePayment = z.infer<typeof paymentRequestSchema>;
