"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Lock, Phone } from "lucide-react";

export default function InvestorLogin() {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-gray-900 px-4">
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-100 to-teal-100
 px-4"
    >
      <div
        data-aos="fade-up"
        className="
    w-full max-w-md 
    bg-white/60 backdrop-blur-2xl
    rounded-2xl 
    border border-emerald-200/60 
    p-8 
    shadow-xl shadow-emerald-200/50
  "
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="
      w-14 h-14 mx-auto mb-4 
      rounded-full 
      bg-emerald-100 
      border border-emerald-300 
      flex items-center justify-center
      shadow-inner shadow-emerald-200/70
    "
          >
            <Lock className="w-7 h-7 text-emerald-700" />
          </div>

          <h1 className="text-3xl font-semibold text-emerald-900">
            Investor Center
          </h1>
          <p className="text-emerald-700/70 text-sm mt-1">
            Secure access to your investments dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Phone */}
          <div className="relative">
            <label className="text-emerald-900 text-sm mb-1 block font-medium">
              Phone Number
            </label>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-700 z-50" />

              <input
                type="tel"
                placeholder="+880 1XX XXX XXXX"
                className="
            w-full pl-10 pr-4 py-3 rounded-xl
            bg-white/70 backdrop-blur-sm
            text-emerald-950 placeholder-emerald-700/40
            border border-emerald-200
            shadow-sm shadow-emerald-100/70
            focus:border-emerald-500
            focus:ring-2 focus:ring-emerald-300/40
            outline-none transition
          "
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-emerald-900 text-sm mb-1 block font-medium">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-700 z-50" />

              <input
                type="password"
                placeholder="••••••••"
                className="
            w-full pl-10 pr-4 py-3 rounded-xl
            bg-white/70 backdrop-blur-sm
            text-emerald-950 placeholder-emerald-700/40
            border border-emerald-200
            shadow-sm shadow-emerald-100/70
            focus:border-emerald-500
            focus:ring-2 focus:ring-emerald-300/40
            outline-none transition
          "
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
            className="
        w-full py-3 rounded-xl
        bg-emerald-600 hover:bg-emerald-500
        text-white font-semibold
        shadow-lg shadow-emerald-300/50
        transition-all duration-300
        hover:-translate-y-[2px]
      "
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-emerald-800/70 text-sm mt-6">
          Need help?{" "}
          <span className="text-emerald-700 font-medium cursor-pointer hover:underline">
            Contact support
          </span>
        </p>
      </div>
    </div>
  );
}
