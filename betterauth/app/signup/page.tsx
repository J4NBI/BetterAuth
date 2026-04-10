import { signUpAction } from "../actions/auth";

export default function SignupForm() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-8">
          <div className="w-8 h-8 rounded-full bg-white mb-6" />
          <h1 className="text-white text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Already have one?{" "}
            <a
              href="/login"
              className="text-white underline underline-offset-2 hover:text-zinc-300 transition-colors"
            >
              Sign in
            </a>
          </p>
        </div>

        {/* Form */}
        <form action={signUpAction} className="space-y-4">
          {/* Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-300"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Jane Doe"
              className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none ring-0 transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600"
            />
          </div>

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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Min. 8 characters"
              className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none ring-0 transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 shrink-0 rounded border border-zinc-700 bg-zinc-900 accent-white cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-xs text-zinc-400 leading-relaxed"
            >
              I agree to the{" "}
              <a
                href="/terms"
                className="text-zinc-200 underline underline-offset-2 hover:text-white transition-colors"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-zinc-200 underline underline-offset-2 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 active:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
