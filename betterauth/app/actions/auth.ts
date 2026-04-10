"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// ZOD TODO
export async function signUpAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  console.log("Signup attempt:", { email, name, password: !!password });

  try {
    const result = await auth.api.signUpEmail({
      body: { email, password, name },
      headers: await headers(),
    });
    console.log("Signup result:", result);
  } catch (err) {
    console.error("Signup error:", err);
    return; // kein redirect bei Fehler
  }

  redirect("/");
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await auth.api.signInEmail({
    body: { email, password },
  });
  redirect("/");
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });
}
