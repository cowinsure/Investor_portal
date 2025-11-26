/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogOut, User } from "lucide-react";
import path from "path";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Investments", href: "/investments" },
  { name: "Marketplace", href: "/marketplace" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasImage, setHasImage] = useState(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const email = "reza@insurecow.com";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/auth/")) {
    return null;
  }

  return (
    <header className="fixed top-0 z-40 w-full flex justify-center py-4">
      <nav
        className={`hidden md:flex items-center justify-between px-8 py-4 bg-emerald-950/95 backdrop-blur-lg rounded-full  max-w-5xl w-full animate-fade-in transition-all duration-300 ${
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

        {/* RIGHT SIDE - AVATAR DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => {
            if (timeoutId) clearTimeout(timeoutId);
            setTimeoutId(null);
            setDropdownOpen(true);
          }}
          onMouseLeave={() => {
            const id = setTimeout(() => setDropdownOpen(false), 200);
            setTimeoutId(id);
          }}
        >
          {/* Avatar Button */}
          <button className="w-10 h-10 rounded-full overflow-hidden border border-green-300 hover:shadow-md transition flex items-center justify-center bg-green-100">
            {hasImage ? (
              <img
                src="/user.jpg"
                alt="User"
                className="w-full h-full object-cover scale-150"
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
                if (timeoutId) clearTimeout(timeoutId);
                setTimeoutId(null);
              }}
              onMouseLeave={() => {
                const id = setTimeout(() => setDropdownOpen(false), 200);
                setTimeoutId(id);
              }}
            >
              <div className="p-4 flex flex-col gap-3">
                <p className="text-sm text-green-600">{email}</p>

                <button
                  onClick={() => router.push("/auth/login")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 transition text-green-700"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between w-full max-w-[80%] mx-auto px-4">
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          Insure<span className="text-emerald-700">Cow</span>
        </Link>
        <button
          className="p-2 rounded-lg hover:bg-green-100 transition"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>
    </header>
  );
}
