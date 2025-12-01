"use client";
import { LogOut, Menu, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "./ui/Navbar";
import { usePathname } from "next/navigation";
import { useAuth } from "@/core/context/AuthContext";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [hasImage, setHasImage] = useState(true);
  const pathname = usePathname();
  const { logout, userId } = useAuth();

  if (pathname?.startsWith("/auth/")) {
    return null;
  }

  return (
    <div className="lg:hidden fixed top-0 left-0 z-[9999] flex items-center justify-between w-full px-4 bg-white shadow-md">
      {/* Mobile Header */}
      <div className=" flex items-center justify-between w-full mx-auto px-4 bg-white py-4">
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
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-[9998] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[9999] ${
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
          <div className="flex-1 px-6 py-8 bg-white">
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
                    <p className="text-xs text-gray-500">{userId}</p>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors text-gray-700 cursor-pointer"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
