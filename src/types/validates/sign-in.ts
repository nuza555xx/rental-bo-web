import * as z from "zod";
import { messages } from "./messages";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, messages.emailIsRequired)
    .email(messages.emailIsFormat),
  password: z.string().min(1, messages.passwordIsRequired),
});

export type SignInSchema = z.infer<typeof signInSchema>;
