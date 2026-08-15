import React from "react";
import Navbar from "../reusable-pages/Navbar";

function Register() {
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
                                <div className="h-11 w-11 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center text-xl font-bold">S</div>
                                <span className="text-2xl font-bold tracking-tight">Shoper</span>
                            </div>

                            <h2 className="max-w-sm text-4xl font-bold leading-tight">Start your shopping journey with us.</h2>
                            <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100">Create your Shoper account and discover amazing products, exclusive deals and a better shopping experience.</p>
                        </div>

                        <div className="relative z-10">
                            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                                <p className="text-sm font-semibold">Why join Shoper?</p>

                                <div className="mt-4 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-xs">✓</div>
                                        <span className="text-sm text-blue-50">Personalized shopping experience</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-xs">✓</div>
                                        <span className="text-sm text-blue-50">Exclusive offers and deals</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-xs">✓</div>
                                        <span className="text-sm text-blue-50">Fast and secure checkout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-7 sm:p-10 lg:p-12">

                        <div className="mb-7">
                            <p className="mb-2 text-sm font-semibold text-violet-600">Join Shoper</p>
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create your account</h1>
                            <p className="mt-2 text-sm text-slate-500">Fill in your details to get started.</p>
                        </div>

                        <form className="space-y-4">

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
                                <input type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">Mobile number</label>
                                <input type="tel" placeholder="Enter your mobile number" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
                                <input type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">City</label>
                                    <input type="text" placeholder="Your city" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">Gender</label>
                                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10">
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
                                <input type="password" placeholder="Create a password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" />
                            </div>

                            <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-xs leading-5 text-slate-500">
                                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500" />
                                <span>I agree to the <a href="/terms" className="font-semibold text-violet-600 hover:text-violet-700">Terms & Conditions</a> and <a href="/privacy" className="font-semibold text-violet-600 hover:text-violet-700">Privacy Policy</a></span>
                            </label>

                            <button type="submit" className="w-full rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-violet-600 hover:shadow-blue-600/20 active:scale-[0.99]">Create Account</button>

                        </form>

                        <p className="mt-6 text-center text-sm text-slate-500">Already have an account? <a href="/login" className="ml-1 font-semibold text-violet-500">Sign in</a></p>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Register;