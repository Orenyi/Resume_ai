import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../../images/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
      {/* TOP */}
      <div className="px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* LEFT */}
          <div className="max-w-xl">
            {/* LOGO */}
            <NavLink to="/" className="inline-flex items-center">
              <img src={logo} alt="Resume AI Logo" className="w-44 md:w-52" />
            </NavLink>

            {/* WRITEUP */}
            <p className="mt-6 text-[15px] leading-8 text-white/80">
              {t("footer.description")}
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-lg
                 text-white transition-all duration-300 hover:bg-[var(--color-secondary)] hover:border-none"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-lg
                 text-white transition-all duration-300 hover:bg-[var(--color-secondary)] hover:border-none"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-lg
                 text-white transition-all duration-300 hover:bg-[var(--color-secondary)] hover:border-none"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[18px] font-semibold">
              {t("footer.quickLinks")}
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[15px] text-white/80">
              <NavLink
                to="/"
                className="transition-colors duration-300 hover:text-"
              >
                {t("footer.home")}
              </NavLink>

              <NavLink
                to="/about"
                className="transition-colors duration-300 hover:text-white"
              >
                {t("footer.about")}
              </NavLink>

              <NavLink
                to="/dashboard"
                className="transition-colors duration-300 hover:text-white"
              >
                {t("footer.dashboard")}
              </NavLink>

              <NavLink
                to="/templates"
                className="transition-colors duration-300 hover:text-white"
              >
                {t("footer.templates")}
              </NavLink>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-[18px] font-semibold">{t("footer.legal")}</h3>

            <div className="mt-6 flex flex-col gap-4 text-[15px] text-white/80">
              <NavLink
                to="/privacy-policy"
                className="transition-colors duration-300 hover:text-white"
              >
                {t("footer.privacy")}
              </NavLink>

              <NavLink
                to="/terms-of-service"
                className="transition-colors duration-300 hover:text-white"
              >
                {t("footer.terms")}
              </NavLink>

              <NavLink
                to="/careers"
                className="transition-colors duration-300 hover:text-white"
              >
                {t("footer.careers")}
              </NavLink>

              <NavLink
                to="/support"
                className="transition-colors duration-300 hover:text-white"
              >
                {t("footer.support")}
              </NavLink>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/70">{t("footer.copy")}</p>

            <p className="text-sm text-white/50">{t("footer.bottomText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
