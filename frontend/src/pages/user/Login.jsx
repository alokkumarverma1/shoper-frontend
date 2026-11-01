
import React, { useState } from "react";
import Navbar from "../reusable-pages/Navbar";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
  FaCheck
} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-70px)] mt-10 bg-gray-50 px-4 py-8 sm:py-10">
        <div className="mx-auto grid min-h-[540px] w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-purple-100/50 md:grid-cols-[0.95fr_1.05fr]">
          {/* Left Section */}
          <section className="hidden flex-col justify-between bg-gradient-to-br from-[#A855F7] via-[#7C3AED] to-[#4F46E5] p-9 text-white md:flex lg:p-11">

            <div>
              <Link to="/" className="flex w-fit items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg text-[#9333EA]">
                  <FaShoppingBag />
                </div>

                <span className="text-2xl font-extrabold">
                  Shoper<span className="text-[#C084FC]">.</span>
                </span>
              </Link>

              <div className="mt-20">
                <span className="text-xs font-semibold uppercase tracking-[2px] text-purple-100">
                  Welcome to Shoper
                </span>

                <h1 className="mt-5 text-4xl font-bold leading-tight">
                  Everything you love,
                  <span className="block text-purple-200">
                    all in one place.
                  </span>
                </h1>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
                  Discover quality products, explore exciting deals
                  and enjoy a better way to shop online.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Explore the latest collections",
                    "Find products you love",
                    "Enjoy a smooth shopping experience"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-white/90">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
                        <FaCheck />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="border-t border-white/20 pt-5 text-xs text-white/70">
              Your everyday shopping destination.
            </p>
          </section>

          {/* Right Section */}
          <section className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:px-14">

            {/* Mobile Logo */}
            <Link to="/" className="mb-7 flex items-center gap-2 md:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-[#9333EA]">
                <FaShoppingBag />
              </div>

              <span className="text-xl font-extrabold text-gray-900">
                Shoper<span className="text-[#9333EA]">.</span>
              </span>
            </Link>

            {/* Heading */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9333EA]">
                Welcome Back
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Sign in to Shoper
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Please enter your details to continue.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#9333EA] focus:bg-white focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-[#9333EA] hover:text-[#7C3AED]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-11 text-sm outline-none transition focus:border-[#9333EA] focus:bg-white focus:ring-2 focus:ring-purple-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#9333EA]"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[#9333EA]"
                />
                Remember me
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#A855F7] via-[#9333EA] to-[#7C3AED] py-3 text-sm font-bold text-white shadow-md shadow-purple-200 transition hover:brightness-110"
              >
                Sign In <FaArrowRight />
              </button>

            </form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium text-gray-400">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition hover:bg-purple-50"
            >
              <span className="font-bold text-blue-600">G</span>
              Continue with Google
            </button>

            {/* Register */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?
              <Link
                to="/register"
                className="ml-1 font-bold text-[#9333EA] hover:text-[#7C3AED]"
              >
                Create Account
              </Link>
            </p>

          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
