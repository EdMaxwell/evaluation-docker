import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email format" })
    .min(1, { message: "Email is required" }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, { message: "Password is required" }),
});
