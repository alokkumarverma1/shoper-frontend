import React from "react";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../reusable-pages/Navbar";

function SingIn() {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-10">

        {/* Heading */}
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to your account to continue.
          </p>
        </div>

        {/* Google Sign In */}
        <button className="mt-10 cursor-pointer w-full h-12 border border-gray-300 rounded-xl
                     flex items-center justify-center gap-3
                     font-medium text-gray-700
                     hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-400">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>

      </div>
    </div>
    </>    
  );
}

export default SingIn;