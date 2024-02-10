import {z} from "zod";

export const paymentRequestSchema = z.object({
  amount: z.any(),
  label: z.string(),
  reference: z.string(),
  payment_method: z.any(),
  payment_type: z.any(),
});

export type InitiatePayment = z.infer<typeof paymentRequestSchema>;
