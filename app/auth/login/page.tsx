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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-gray-900 px-4">
      <div
        data-aos="fade-up"
        className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl shadow-black/40"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
            <Lock className="w-7 h-7 text-emerald-400" />
          </div>

          <h1 className="text-3xl font-semibold text-white">Investor Center</h1>
          <p className="text-gray-400 text-sm mt-1">
            Secure access to your investments dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div className="relative">
            <label className="text-gray-300 text-sm mb-1 block">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:border-emerald-400/50 outline-none transition"
                placeholder="+880 1XX XXX XXXX"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-gray-300 text-sm mb-1 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:border-emerald-400/50 outline-none transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            onClick={() => router.push("/")}
            className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-[2px]"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Need help?{" "}
          <span className="text-emerald-400 cursor-pointer hover:underline">
            Contact support
          </span>
        </p>
      </div>
    </div>
  );
}
