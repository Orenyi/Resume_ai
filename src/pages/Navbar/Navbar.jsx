import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/navData";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState("en");

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 bg-none transition-shadow duration-300
          ${scrolled ? "shadow-md bg-white" : ""}`}
      >
        <div className="max-w-[85rem] mx-auto px-4 md:px-6 xl:px-10 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Resume logo" className=" w-40 md:w-52" />
          </NavLink>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[16px] font-medium transition-colors rounded-lg
                  ${
                    isActive
                      ? "text-[#1e3a8a]"
                      : "text-gray-600 hover:text-[#1e3a8a] hover:bg-gray-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#1e3a8a] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher
              activeLang={activeLang}
              setActiveLang={setActiveLang}
            />

            <NavLink
              to="/signin"
              className="text-[14px] bg-transparent text-black py-2 px-4 rounded-lg border border-black 
                hover:bg-[var(--color-secondary)] hover:text-white hover:border-none transition-colors duration-300 "
            >
              Sign In
            </NavLink>

            <NavLink
              to="/get-started"
              className="text-[14px]  bg-[var(--color-primary)] text-white py-2 px-4 rounded-lg hover:bg-[var(--color-secondary)]
               transition-colors duration-300"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <svg
              className="w-14 h-14 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-16" />

      {/* Mobile drawer — only renders on mobile */}
      <div className="lg:hidden">
        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          activeLang={activeLang}
          setActiveLang={setActiveLang}
        />
      </div>
    </>
  );
};

export default Navbar;
