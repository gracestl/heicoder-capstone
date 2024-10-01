"use server";
import { db } from "@/db";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}


export async function register(data: RegisterData) {
  try {
    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  } catch (error) {
    return { error: "Error registering" };
  }
}