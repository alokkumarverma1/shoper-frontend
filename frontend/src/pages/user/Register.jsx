
import React, { useState } from "react";
import Navbar from "../reusable-pages/Navbar";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaEye,
  FaEyeSlash,
  FaCheck
} from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-70px)] mt-10 bg-gray-50 px-4 py-8 sm:py-10">

        <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-purple-100/50 md:grid-cols-[0.95fr_1.05fr]">

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
                  Join Our Community
                </span>

                <h1 className="mt-5 text-4xl font-bold leading-tight">
                  Your shopping
                  <span className="block text-purple-200">
                    journey starts here.
                  </span>
                </h1>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
                  Create your Shoper account and discover quality products,
                  exciting deals and a better online shopping experience.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Explore the latest collections",
                    "Get access to exclusive offers",
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
          <section className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:px-12">

            {/* Mobile Logo */}
            <Link to="/" className="mb-6 flex items-center gap-2 md:hidden">
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
                Join Shoper
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your details to get started.
              </p>
            </div>

            {/* Registration Form */}
            <form className="space-y-3.5">

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#9333EA] focus:bg-white focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#9333EA] focus:bg-white focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#9333EA] focus:bg-white focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="Your city"
                    required
                    className="w-full min-w-0 rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none transition focus:border-[#9333EA] focus:bg-white focus:ring-2 focus:ring-purple-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                    Gender
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="w-full min-w-0 rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-600 outline-none transition focus:border-[#9333EA] focus:bg-white focus:ring-2 focus:ring-purple-100"
                  >
                    <option value="" disabled>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-2 pt-1 text-xs leading-5 text-gray-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 accent-[#9333EA]"
                />

                <span>
                  I agree to the{" "}
                  <Link to="/terms" className="font-semibold text-[#9333EA] hover:underline">
                    Terms & Conditions
                  </Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="font-semibold text-[#9333EA] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#A855F7] via-[#9333EA] to-[#7C3AED] py-3 text-sm font-bold text-white shadow-md shadow-purple-200 transition hover:brightness-110 active:scale-[0.99]"
              >
                Create Account
              </button>

            </form>

            {/* Login Link */}
            <p className="mt-5 text-center text-sm text-gray-500">
              Already have an account?
              <Link
                to="/login"
                className="ml-1 font-bold text-[#9333EA] hover:text-[#7C3AED]"
              >
                Sign In
              </Link>
            </p>

          </section>
        </div>
      </main>
    </>
  );
}

export default Register;
