import React, { useState } from "react";
import Link from "next/link";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-[#181818] border-b border-gray-800 px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="6" fill="#D9FF6A" />
          <circle cx="21" cy="7" r="6" fill="#D9FF6A" />
          <circle cx="7" cy="21" r="6" fill="#D9FF6A" />
          <circle cx="21" cy="21" r="6" fill="#D9FF6A" />
        </svg>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/About"
          className="text-[#FFFFFD] text-sm hover:text-[#D9FF6A] transition"
        >
          About
        </Link>
        <a
          href="#portfolio"
          className="text-[#FFFFFD] text-sm hover:text-[#D9FF6A] transition"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="text-[#FFFFFD] text-sm hover:text-[#D9FF6A] transition"
        >
          Contact
        </a>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <a
          href="#contact"
          className="bg-[#232323] text-[#FFFFFD] text-sm px-5 py-2 rounded-full shadow hover:bg-[#D9FF6A] hover:text-[#232323] transition flex items-center gap-2"
        >
          Get in touch
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          width="28"
          height="28"
          fill="none"
          stroke="#D9FF6A"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#181818] border-b border-gray-800 flex flex-col items-center gap-4 py-6 z-50 md:hidden animate-fade-in">
          <a
            href="#about"
            className="text-[#FFFFFD] text-base hover:text-[#D9FF6A] transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-[#FFFFFD] text-base hover:text-[#D9FF6A] transition"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-[#FFFFFD] text-base hover:text-[#D9FF6A] transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="bg-[#232323] text-[#FFFFFD] text-base px-5 py-2 rounded-full shadow hover:bg-[#D9FF6A] hover:text-[#232323] transition flex items-center gap-2 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
