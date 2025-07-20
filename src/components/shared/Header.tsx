"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Links = () => {
  const links = ["Buy", "Rent", "Post Listing"];

  return links.map((link, index) => (
    <li key={index}>
      <a href="#" className="hover:text-[#31393D]">
        {link}
      </a>
    </li>
  ));
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-10 flex justify-between items-center relative">
      <div className="left-text font-bold text-xl">PROPERTY SEARCH</div>

      <div className="hidden md:flex gap-6">
        <ul className="flex gap-6 py-1.5 w-full">
          <Links />
        </ul>
        <div className="flex gap-6 items-center">
          <button
            type="button"
            className="bg-[#31393D] px-3 py-2 w-20 rounded-[4px] text-white"
          >
            Sign in
          </button>
          <span>ENG</span>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-20 right-0 w-full bg-white shadow-lg z-50 md:hidden transition-all">
          <ul className="flex flex-col gap-4 py-6 px-8">
            <Links />

            <li>
              <button
                type="button"
                className="bg-[#31393D] w-full py-2 rounded-[4px] text-white mb-2"
              >
                Sign in
              </button>
            </li>
            <li>
              <span>ENG</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
