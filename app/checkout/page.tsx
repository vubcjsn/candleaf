// app/signup/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Регистрация с email:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-2xl font-bold text-[#56B280]">Join the Candleaf</h1>
        <p className="text-gray-600">create an account to stay updated</p>

        <div className="space-y-3">
          <button className="w-full py-2 border rounded-full flex items-center justify-center gap-2 text-sm">
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Register with Google
          </button>
          <button className="w-full py-2 rounded-full bg-black text-white flex items-center justify-center gap-2 text-sm">
            <span className="text-xl"></span> Register with APPLE
          </button>
          <button className="w-full py-2 rounded-full bg-[#1877f2] text-white flex items-center justify-center gap-2 text-sm">
            <span className="text-xl">f</span> Register with FACEBOOK
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <div className="w-1/5 border-t border-gray-300" />
          <span>OR</span>
          <div className="w-1/5 border-t border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="
Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-green-300 hover:bg-black-400 text-white text-sm font-semibold"
          >
            REGISTER
          </button>
        </form>

        <p className="text-xs text-gray-500">
          We promise not to spam. Privacy is very important to us.
        </p>

        <p className="text-sm">
          Do you already have an account?{" "}
          <Link href="/login" className="text-green-600 font-medium">
            Login
          </Link>
        </p>

        <p className="text-xs text-gray-400">
          By registering an account you accept{" "}
          <a href="#" className="underline">
            Terms of use
          </a>{" "}
          &{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
