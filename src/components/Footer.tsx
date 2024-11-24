import Link from "next/link";
import React from "react";
import { BookUser, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <section className="py-6 mb-5 mt-24 bg-white dark:bg-black lg:rounded-md lg:shadow-md">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center md:flex md:items-center md:justify-between md:text-left">
            {/* Brand Name */}
            <div className="md:flex md:items-center md:justify-start">
              <h1
                className="text-base md:text-md font-bold text-transparent bg-clip-text bg-black dark:bg-white"
                style={{
                  fontFamily: "'Lobster', cursive",
                  letterSpacing: "0.15em",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Random Generator
              </h1>
            </div>

            {/* Copyright */}
            <p className="mt-5 text-sm text-gray-700 dark:text-gray-300 md:ml-6 md:mt-0">
              {`© Copyright ${new Date().getFullYear()} Mr Khaalid. All rights reserved.`}
            </p>

            {/* Icons Section */}
            <div className="items-center mt-8 md:mt-0 md:flex md:justify-end md:space-x-8">
              <div className="w-full h-px mt-8 mb-5 md:w-px md:m-0 md:h-6 bg-gray-100 dark:bg-gray-800"></div>

              <ul className="flex items-center justify-center space-x-4 md:justify-end">
                <li>
                  <Link
                    href="#"
                    title="Profile"
                    className="block text-gray-800 dark:text-gray-300 transition-all duration-200 hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary"
                  >
                    <BookUser size={20} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    title="GitHub"
                    className="block text-gray-800 dark:text-gray-300 transition-all duration-200 hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary"
                  >
                    <Github size={20} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    title="LinkedIn"
                    className="block text-gray-800 dark:text-gray-300 transition-all duration-200 hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary"
                  >
                    <Linkedin size={20} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
