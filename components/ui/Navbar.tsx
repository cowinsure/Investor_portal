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
    <header className="fixed top-0 z-40 w-full flex justify-center lg:py-4">
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
      <div className="md:hidden flex items-center justify-between w-full mx-auto px-4 bg-white py-4">
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
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-50 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link
              href="/"
              className="text-2xl font-bold text-emerald-600"
              onClick={() => setOpen(false)}
            >
              Insure<span className="text-emerald-700">Cow</span>
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setOpen(false)}
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 px-6 py-8">
            <nav className="space-y-6">
              <ul className="space-y-4">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                          isActive
                            ? "bg-emerald-100 text-emerald-800 font-semibold"
                            : "text-gray-700 hover:bg-gray-100 hover:text-emerald-700"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile User Section */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-emerald-200 flex items-center justify-center bg-emerald-50">
                    {hasImage ? (
                      <img
                        src="/user.jpg"
                        alt="User"
                        className="w-full h-full object-cover"
                        onError={() => setHasImage(false)}
                      />
                    ) : (
                      <User className="w-6 h-6 text-emerald-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">User</p>
                    <p className="text-xs text-gray-500">{email}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    router.push("/auth/login");
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors text-gray-700"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
