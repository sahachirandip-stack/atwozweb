import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(50, "Name cannot exceed 50 characters."),

  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email address."),

  mobile: z
    .string()
    .trim()
    .min(10, "Please enter a valid mobile number.")
    .max(15, "Mobile number cannot exceed 15 characters.")
    .regex(
      /^[0-9+()\-\s]+$/,
      "Please enter a valid mobile number."
    ),

  service: z
    .string()
    .min(1, "Please select a service."),

  message: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters.")
    .max(1000, "Message cannot exceed 1000 characters."),
});