import { z } from "zod";

export const userCreationSchema = z
  .object({
    pseudo: z
      .string({
        required_error: "Pseudo is required",
        invalid_type_error: "Pseudo must be a string",
      })
      .min(1, { message: "Pseudo is required" }),

    fullName: z
      .string({
        invalid_type_error: "Full Name must be a string",
      })
      .optional()
      .refine((value) => (value ? !/\d/.test(value) : true), {
        message: "Full Name should not contain numbers",
      }),

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
      .min(8, { message: "Password must be at least 8 characters" }),

    password_confirmation: z
      .string({
        required_error: "Password confirmation is required",
      })
      .min(1, { message: "Password confirmation is required" }),
  })
  .refine((values) => values.password === values.password_confirmation, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
