import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative w-full max-w-sm text-center">
        {/* Logo mark */}
        <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg shadow-white/10">
          <div className="h-5 w-5 rounded-full bg-zinc-950" />
        </div>

        {session ? (
          /* ── Logged-in state ── */
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-2">
                Signed in
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                Welcome back
              </h1>
            </div>

            {/* User card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-left space-y-3">
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">Name</p>
                <p className="text-sm font-medium text-white">
                  {session.user.name ?? "—"}
                </p>
              </div>
              <div className="h-px bg-zinc-800" />
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">Email</p>
                <p className="text-sm font-medium text-white">
                  {session.user.email}
                </p>
              </div>
              <div className="h-px bg-zinc-800" />
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">User ID</p>
                <p className="font-mono text-xs text-zinc-400 break-all">
                  {session.user.id}
                </p>
              </div>
            </div>

            {/* Sign out */}
            <form action="/api/auth/sign-out" method="POST">
              <button
                type="submit"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-white active:bg-zinc-800"
              >
                Sign out
              </button>
            </form>
          </div>
        ) : (
          /* ── Logged-out state ── */
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-2">
                Get started
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                Welcome
              </h1>
              <p className="mt-2 text-sm text-zinc-400">
                Sign in to your account or create a new one.
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/signup"
                className="block w-full rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 active:bg-zinc-200"
              >
                Create account
              </Link>
              <Link
                href="/signin"
                className="block w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-white active:bg-zinc-800"
              >
                Sign in
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}