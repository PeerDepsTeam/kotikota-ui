import {z} from "zod";

export const paymentRequestSchema = z.object({
  amount: z.any(),
  label: z.string(),
  reference: z.string(),
  payment_method: z.string(),
  payment_type: z.string(),
});

export type PaymentRequestType = z.infer<typeof paymentRequestSchema>;
