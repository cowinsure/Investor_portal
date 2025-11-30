/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Lock, Phone, Eye, EyeOff } from "lucide-react";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/core/context/AuthContext";
import useApi from "@/hooks/useApi";

export default function InvestorLogin() {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  const { login } = useAuth();
  const { post } = useApi();

  const [showPassword, setShowPassword] = useState(false);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [phoneError, setPhoneError] = useState<string | boolean>(false);
  const [passwordError, setPasswordError] = useState<string | boolean>(false);

  const redirectUrl = "/";

  // New function with improved error handling
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    //("Function from error-fixing");
    // Reset errors
    setPhoneError(false);
    setPasswordError(false);

    let valid = true;

    if (!phone) {
      setPhoneError("Phone number cannot be empty.");
      valid = false;
    } else if (!/^[0-9]{11}$/.test(phone)) {
      setPhoneError("Please enter a valid 11-digit phone number.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password cannot be empty.");
      valid = false;
    }

    if (!valid) return;

    try {
      const response = await post("v1/auth/public/login/", {
        mobile_number: phone,
        password,
      });

      const { role: userId, access_token: accessToken } = response.data;

      await login(userId, phone, accessToken);
      toast.success("Login successful!");
      router.push(redirectUrl);
    } catch (error: any) {
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data?.message;

        if (status === 400 || status === 401) {
          toast.error("Invalid phone number or password.");
          setPhoneError(" ");
          setPasswordError(" ");
        } else if (status >= 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error(message || "Something went wrong.");
        }
      } else if (error.request) {
        toast.error("Network error! Please try again later.");
      } else {
        toast.error("Unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-gray-900 px-4">
    <div
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-100 to-teal-100
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
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 backdrop-blur-sm text-emerald-950 placeholder-emerald-700/40 border shadow-sm shadow-emerald-100/70 focus:ring-2 focus:ring-emerald-300/40 outline-none transition
            ${
              phoneError
                ? "border-red-500 focus:border-red-500"
                : "border-emerald-200 focus:border-emerald-500"
            }
          `}
              />
              {phoneError && (
                <p className="text-red-500 text-xs mt-1">{phoneError}</p>
              )}
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
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={` w-full pl-10 pr-12 py-3 rounded-xl bg-white/70 backdrop-blur-sm text-emerald-950 placeholder-emerald-700/40 border shadow-sm shadow-emerald-100/70 focus:ring-2 focus:ring-emerald-300/40 outline-none transition
            ${
              passwordError
                ? "border-red-500 focus:border-red-500"
                : "border-emerald-200 focus:border-emerald-500"
            }
          `}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-700 hover:text-emerald-900 transition-colors z-50"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
        w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-300/50 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
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
      <Toaster richColors />
    </div>
  );
}
