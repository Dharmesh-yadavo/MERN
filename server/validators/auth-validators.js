import { z } from "zod";

export const signUpSchema = z.object({
  userName: z
    .string({ error: "Name is required" })
    .trim()
    .min(3, { error: "Name must be at least 3 characters long." })
    .max(100, { error: "Name must be no more than 100 characters." }),
  email: z
    .string({ error: "email is required" })
    .trim()
    .email({ error: "Please enter a valid email address. " })
    .max(100, { error: "Email must be no more than 100 characters." }),
  phone: z
    .string({ error: "phone is required" })
    .trim()
    .min(10, { error: "Phone must be at least of 10 characters." })
    .max(20, { error: "Phone must be no more than 20 characters." }),
  password: z
    .string({ error: "password is required" })
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password must be no more than 100 characters" }),
});
