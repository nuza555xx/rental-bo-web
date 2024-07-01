import * as z from "zod";
import { messages } from "./messages";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, messages.emailIsRequired)
    .email(messages.emailIsFormat),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
