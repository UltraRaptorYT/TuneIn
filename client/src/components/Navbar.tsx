"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Icon imports
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  // Decalre variables
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <nav className="bg-white h-[64px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-black">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="/"
                    className="text-black relative px-7 py-1 inline-block group overflow-hidden"
                  >
                    Home
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </a>
                  <a
                    href="/generate"
                    className="text-black relative px-7 py-1 inline-block group overflow-hidden"
                  >
                    Generate
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </a>
                  <a
                    href="/"
                    className="text-black relative px-7 py-1 inline-block group overflow-hidden"
                  >
                    History
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </a>
                  <a
                    href="/"
                    className="text-black relative px-7 py-1 inline-block group overflow-hidden"
                  >
                    About
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-insert focus:ring-black"
                onClick={toggleNavbar}
              >
                {isClicked ? <RxCross1 /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>
        {isClicked && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-black block hover:bg-black hover:text-white rounded-xl p-2"
            >
              Home
            </a>
            <a
              href="/"
              className="text-black block hover:bg-black hover:text-white rounded-xl p-2"
            >
              Generate
            </a>
            <a
              href="/"
              className="text-black block hover:bg-black hover:text-white rounded-xl p-2"
            >
              History
            </a>
            <a
              href="/"
              className="text-black block hover:bg-black hover:text-white rounded-xl p-2"
            >
              About
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
