/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, User } from "lucide-react";
import { useAuth } from "@/core/context/AuthContext";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Investments", href: "/investments" },
  { name: "Documents", href: "/documents" },
  { name: "Marketplace", href: "/marketplace" },
];

export default function Navbar() {
  const { logout, userId } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasImage, setHasImage] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const logoutTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  // const email = "reza@insurecow.com";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset timeout when pathname or userId changes
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [pathname, userId]);

  // Auto logout after 1 hour
  useEffect(() => {
    if (userId) {
      const timer = setTimeout(() => {
        logout();
      }, 3600000); // 1 hour in milliseconds
      logoutTimerRef.current = timer;
      return () => {
        if (logoutTimerRef.current) {
          clearTimeout(logoutTimerRef.current);
        }
      };
    } else {
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
        logoutTimerRef.current = null;
      }
    }
  }, [userId, logout]);

  if (userId) {
    console.log("user is here");
  } else {
    console.log("User isnt");
  }

  if (pathname?.startsWith("/auth/")) {
    return null;
  }

  return (
    <header className="fixed top-0 z-999 w-full flex justify-center lg:py-4 backdrop-blur-sm">
      <nav
        className={`hidden md:flex items-center justify-between px-8 py-4 bg-emerald-950/95 backdrop-blur-lg rounded-full max-w-5xl w-full animate-fade-in transition-all duration-300 ${
          isScrolled
            ? "bg-green-100/30 shadow-md scale-95 border border-green-500"
            : "shadow-xl border border-white/30"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className={`${
            isScrolled ? "text-green-700" : "text-emerald-300"
          } text-2xl font-bold `}
        >
          Insure
          <span
            className={`${isScrolled ? "text-green-800" : "text-emerald-400"}`}
          >
            Cow
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={` hover:text-green-300 font-medium transition-colors duration-200 relative group ${
                    isActive
                      ? `${
                          isScrolled
                            ? "text-green-900 font-bold"
                            : " text-emerald-100 font-bold"
                        }`
                      : `${isScrolled ? "text-green-700" : "text-green-500"}`
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full${
                      isActive ? " w-full" : ""
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT SIDE - CONDITIONAL RENDERING */}
        {userId ? (
          <div
            className="relative"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              const id = setTimeout(() => setDropdownOpen(false), 100);
              timeoutRef.current = id;
            }}
          >
            {/* Avatar Button */}
            <button className="w-10 h-10 rounded-full overflow-hidden hover:shadow-md transition flex items-center justify-center">
              {hasImage ? (
                <img
                  src="/placeholder.png"
                  alt="User"
                  className="w-full h-full object-fill"
                  onError={() => setHasImage(false)}
                />
              ) : (
                <User className="w-6 h-6 text-green-400" />
              )}
            </button>

            {/* Smooth Dropdown */}
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-3 w-56 rounded-xl bg-white shadow-lg transition-all duration-200"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }}
                onMouseLeave={() => {
                  const id = setTimeout(() => setDropdownOpen(false), 200);
                  timeoutRef.current = id;
                }}
              >
                <div className="p-4 flex flex-col gap-3">
                  {/* <p className="text-sm text-green-600">{email}</p> */}

                  <button
                    onClick={logout}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 transition text-green-700 cursor-pointer"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link href="/auth/login">
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium">
              Login
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
}
