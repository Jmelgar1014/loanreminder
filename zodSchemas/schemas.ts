import { z } from "zod";

/*
Vendor,
Type(credit card, loan,car payment)
Description,
Amount,
Due Date,
Autopay - boolean,
LoanFinished - boolean


*/

export const LoanFormSchema = z.object({
  Vendor: z.string(),
  Type: z.string(),
  Description: z.optional(z.string()),
  Amount: z.number(),
  DueDate: z.number(),
  Autopay: z.boolean(),
  LoanFinished: z.boolean(),
});
