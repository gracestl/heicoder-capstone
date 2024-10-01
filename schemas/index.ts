
"use client";

import * as z from "zod";

export const formSchema = z.object({
  id: z
    .string()
    .min(2, { message: "ID must be at least 2 characters long." })
    .max(50),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50),
  price: z.number().positive({ message: "Price must be a positive number." }),
  type: z.enum(["health", "car", "life", "travel"], {
    required_error: "Please select a valid type.",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});