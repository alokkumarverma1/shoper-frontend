import React from "react";
import Navbar from "../reusable-pages/Navbar";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <Navbar />

            <div className="min-h-[calc(100vh-70px)] bg-slate-50 px-4 py-10 flex items-center justify-center">
                <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200/70 border border-slate-100 grid md:grid-cols-2">
                    <div className="hidden md:flex relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-600 to-violet-600 p-12 text-white flex-col justify-between">
                        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10"></div>
                        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10"></div>
                        <div className="relative z-10">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="h-11 w-11 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center text-xl font-bold">
                                    S
                                </div>

                                <span className="text-2xl font-bold tracking-tight">
                                    Shoper
                                </span>
                            </div>

                            <h2 className="max-w-sm text-4xl font-bold leading-tight">
                                Everything you love, all in one place.
                            </h2>

                            <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100">
                                Discover amazing products, great deals and a seamless shopping experience with Shoper.
                            </p>
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="h-9 w-9 rounded-full border-2 text-violet-600 bg-slate-200"></div>
                                    <div className="h-9 w-9 rounded-full border-2 text-violet-600 bg-slate-300"></div>
                                    <div className="h-9 w-9 rounded-full border-2 text-violet-600 bg-slate-400"></div>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold">10,000+ happy customers</p>
                                    <p className="text-xs text-blue-100">Shopping with Shoper</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="p-7 sm:p-10 lg:p-12">

                        <div className="mb-8">
                            <p className="mb-2 text-sm font-semibold text-violet-600">
                                Welcome back
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                                Sign in to your account
                            </h1>

                            <p className="mt-2 text-sm text-slate-500">
                                Enter your details to continue shopping.
                            </p>
                        </div>

                        <form className="space-y-5">

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Email address
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label className="block text-sm font-semibold text-slate-700">
                                        Password
                                    </label>

                                    <a
                                        href="/forgot-password"
                                        className="text-xs font-semibold text-violet-600 hover:text-violet-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                />
                            </div>

                            <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-500">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                                />
                                Remember me
                            </label>

                            <button type="submit"  className="w-full rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-violet-500  " >
                                Sign in
                            </button>

                        </form>

                        <div className="my-7 flex items-center gap-4">
                            <div className="h-px flex-1 bg-slate-200"></div>
                            <span className="text-xs font-medium text-slate-400">
                                OR CONTINUE WITH
                            </span>
                            <div className="h-px flex-1 bg-slate-200"></div>
                        </div>

                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
                        >
                            <span className="text-lg font-bold">G</span>
                            Continue with Google
                        </button>

                        <p className="mt-7 text-center text-sm text-slate-500">
                          dont have a count <Link to={"/register"} className="text-violet-500 font-bold">Regsier</Link>
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Login;