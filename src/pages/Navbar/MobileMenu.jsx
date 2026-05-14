import React from "react";
import { NavLink } from "react-router-dom";

import { navLinks } from "../../assets/navData";

import LanguageSwitcher from "./LanguageSwitcher";

import logo from "../../images/logo.png";

const MobileMenu = ({ isOpen, onClose, activeLang, setActiveLang }) => {
  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-[3px]
          transition-all duration-500
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 z-50
          flex h-full w-full flex-col
          bg-white shadow-2xl

          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isOpen
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-full opacity-0 scale-[0.98]"
          }
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <NavLink to="/" onClick={onClose}>
            <img
              src={logo}
              alt="Resume logo"
              className="
                w-40
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            />
          </NavLink>

          <button
            onClick={onClose}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full
              transition-all duration-300
              hover:bg-gray-100
              active:scale-95
            "
          >
            <svg
              className={`
                h-8 w-8 text-black
                transition-all duration-500
                ${isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}
              `}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-1 flex-col gap-2 px-4 py-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.id}
              to={link.href}
              onClick={onClose}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
              className={({ isActive }) =>
                `
                rounded-2xl
                px-5 py-4
                text-[26px]
                font-medium

                transition-all duration-500

                ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }

                ${
                  isActive
                    ? "bg-[#eef2ff] text-[#1e3a8a] font-semibold shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                }
              `
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* BOTTOM */}
        <div
          className={`
            border-t border-gray-100
            px-4 pt-6 pb-8

            transition-all duration-700 delay-300

            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-3">
            <LanguageSwitcher
              activeLang={activeLang}
              setActiveLang={setActiveLang}
            />

            {/* SIGN IN */}
            <NavLink
              to="/signin"
              onClick={onClose}
              className="
                w-full rounded-2xl border border-black
                py-3 text-center text-[15px] font-medium
                text-black

                transition-all duration-300

                hover:border-[var(--color-secondary)]
                hover:bg-[var(--color-secondary)]
                hover:text-white

                active:scale-[0.98]
              "
            >
              Sign In
            </NavLink>

            {/* GET STARTED */}
            <NavLink
              to="/get-started"
              onClick={onClose}
              className="
                w-full rounded-2xl
                bg-[var(--color-primary)]
                py-3 text-center text-[15px]
                font-medium text-white

                shadow-lg shadow-blue-900/20

                transition-all duration-300

                hover:bg-[var(--color-secondary)]
                hover:shadow-xl

                active:scale-[0.98]
              "
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
