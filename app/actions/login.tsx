"use server";
import { PrismaClient } from "@prisma/client";
import { signIn } from "@/lib/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export async function login(data: RegisterData) {
  try {
    await signIn("credentials", {
      redirectTo: "/",
      email: data.email,
      password: data.password,
    });
  } catch (error) {
    if (isRedirectError(error)) {
      console.error("Standard Redirect Error:", error);
      throw error;
    }

    return { error: "Invalid credentials" };
  }
}
