import * as z from "zod";
import { messages } from "./messages";

export const signUpSchema = z
  .object({
    firstName: z.string().min(1, messages.firstNameIsRequired),
    lastName: z.string().min(1, messages.lastNameIsRequired),
    email: z
      .string()
      .min(1, messages.emailIsRequired)
      .email(messages.emailIsFormat),
    password: z.string().min(1, messages.passwordIsRequired),
    confirmPassword: z.string().min(1, messages.confirmPasswordIsRequired).min(8, messages.passwordIsLeastChar),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: messages.passwordIsMatch,
      path: ["confirmPassword"],
    }
  );

export type SignUpSchema = z.infer<typeof signUpSchema>;
