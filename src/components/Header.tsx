"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/routing";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ** current path
  const currentPath = usePathname().split("/").pop();

  return (
    <div>
      <header className="sm:px-6 lg:px-8 lg:py-4 fixed top-0 left-0 w-full z-50">
        {/* <!-- Large Screens --> */}
        <nav
          className="relative flex items-center justify-between max-w-7xl mx-auto h-16 backdrop-blur-lg bg-white/80 dark:bg-black/70 lg:rounded-xl lg:shadow-md lg:h-[86px] px-4 md:px-8 lg:py-6 w-full"
          style={{ backdropFilter: "blur(10px)" }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" title="Home" className="flex">
              <h1
                className="text-base md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500"
                style={{
                  fontFamily: "'Lobster', cursive",
                  letterSpacing: "0.15em",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                Random Generator
              </h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex p-2 ml-5 text-black dark:text-white transition-all duration-200 rounded-md lg:hidden focus:ring-2 focus:ring-primary hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link
              href="/fun_facts"
              className={`text-base font-medium transition-all duration-200 hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary hover:border-b hover:border-primary ${
                currentPath === "fun_facts"
                  ? "text-primary dark:text-primary border-b border-primary"
                  : "text-black dark:text-gray-300"
              }`}
            >
              Fun Facts
            </Link>
            <Link
              href="/somali_wisdom"
              className={`text-base font-medium transition-all duration-200 hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary hover:border-b hover:border-primary ${
                currentPath === "somali_wisdom"
                  ? "text-primary dark:text-primary border-b border-primary"
                  : "text-black dark:text-gray-300"
              }`}
            >
              Somali Wisdom
            </Link>
            <Link
              href="/global_wisdom"
              className={`text-base font-medium transition-all duration-200 hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary hover:border-b hover:border-primary ${
                currentPath === "global_wisdom"
                  ? "text-primary dark:text-primary border-b border-primary"
                  : "text-black dark:text-gray-300"
              }`}
            >
              Global Wisdom
            </Link>
            <Link
              href="/stories"
              className={`text-base font-medium transition-all duration-200 hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary hover:border-b hover:border-primary ${
                currentPath === "stories"
                  ? "text-primary dark:text-primary border-b border-primary"
                  : "text-black dark:text-gray-300"
              }`}
            >
              Stories
            </Link>
            <LocaleSwitcher />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 transform ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white dark:bg-black`}
        >
          <nav className="flex flex-col items-center py-4 px-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/fun_facts"
              onClick={() => setIsMenuOpen(false)}
              className={`inline-block py-2 text-base font-medium transition-all duration-200 hover:text-primary dark:hover:text-primary hover:border-b hover:border-primary ${
                currentPath === "fun_facts"
                  ? "text-primary dark:text-primary border-b border-primary"
                  : "text-black dark:text-gray-300"
              }`}
            >
              Fun Facts
            </Link>
            <Link
              href="/somali_wisdom"
              onClick={() => setIsMenuOpen(false)}
              className={`inline-block py-2 text-base font-medium transition-all duration-200 hover:text-primary dark:hover:text-primary hover:border-b hover:border-primary ${
                currentPath === "somali_wisdom"
                  ? "text-primary dark:text-primary border-b border-primary"
                  : "text-black dark:text-gray-300"
              }`}
            >
              Somali Wisdom
            </Link>
            <Link
              href="/global_wisdom"
              onClick={() => setIsMenuOpen(false)}
              className={`inline-block py-2 text-base font-medium transition-all duration-200 hover:text-primary dark:hover:text-primary hover:border-b hover:border-primary ${
                currentPath === "global_wisdom"
                  ? "text-primary dark:text-primary border-b border-primary"
                  : "text-black dark:text-gray-300"
              }`}
            >
              Global Wisdom
            </Link>
            <Link
              href="/stories"
              onClick={() => setIsMenuOpen(false)}
              className={`inline-block py-2 text-base font-medium transition-all duration-200 hover:text-primary dark:hover:text-primary hover:border-b hover:border-primary ${
                currentPath === "stories"
                  ? "text-primary dark:text-primary border-b border-primary"
                  : "text-black dark:text-gray-300"
              }`}
            >
              Stories
            </Link>
          </nav>
        </div>
      </header>

      {/* Spacer to offset fixed header */}
      <div className="h-[86px] lg:h-[96px]"></div>
    </div>
  );
}
