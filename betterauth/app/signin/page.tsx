import { signInAction } from "../actions/auth";

export default function SignInForm() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-8">
          <div className="w-8 h-8 rounded-full bg-white mb-6" />
          <h1 className="text-white text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            No account yet?{" "}
            <a
              href="/signup"
              className="text-white underline underline-offset-2 hover:text-zinc-300 transition-colors"
            >
              Sign up
            </a>
          </p>
        </div>

        {/* Form */}
        <form action={signInAction} className="space-y-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="jane@example.com"
              className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none ring-0 transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-300"
              >
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-xs text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Your password"
              className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none ring-0 transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 active:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
