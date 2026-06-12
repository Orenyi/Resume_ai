import React, { useState } from "react";
import { FiChevronDown, FiCalendar } from "react-icons/fi";
import { RiShieldCheckLine, RiFileTextLine, RiCheckLine } from "react-icons/ri";

const sections = [
  {
    id: 1,
    title: "Acceptance of Terms",
    text: "By creating an account or using Resume AI, you agree to these Terms of Service and our Privacy Policy.",
  },
  {
    id: 2,
    title: "Description of Service",
    text: "Resume AI provides AI-powered tools to help users create, optimize, and analyze resumes and career documents.",
  },
  {
    id: 3,
    title: "User Accounts",
    text: "You must create an account to access certain features. You are responsible for maintaining the confidentiality of your account.",
  },
  {
    id: 4,
    title: "User Responsibilities",
    text: "You agree to provide accurate information and use our services only for lawful purposes in compliance with these terms.",
  },
  {
    id: 5,
    title: "Acceptable Use",
    text: "You may not misuse our services or attempt to disrupt the security or functionality of the platform.",
  },
  {
    id: 6,
    title: "Intellectual Property",
    text: "All platform content, design, branding, and software belong to Resume AI or its licensors unless otherwise stated.",
  },
  {
    id: 7,
    title: "Payments & Refunds",
    text: "Paid features, subscriptions, and refunds are governed by the pricing terms shown at the time of purchase.",
  },
  {
    id: 8,
    title: "Termination",
    text: "We may suspend or terminate access if you violate these terms or misuse the platform.",
  },
  {
    id: 9,
    title: "Disclaimers",
    text: "Resume AI provides tools and suggestions, but we do not guarantee job offers, interviews, or employment outcomes.",
  },
  {
    id: 10,
    title: "Limitation of Liability",
    text: "To the fullest extent allowed by law, Resume AI is not liable for indirect, incidental, or consequential damages.",
  },
  {
    id: 11,
    title: "Changes to Terms",
    text: "We may update these Terms of Service from time to time. Continued use of the platform means you accept the updated terms.",
  },
  {
    id: 12,
    title: "Contact Us",
    text: "If you have questions about these Terms of Service, please contact us through our support channels.",
  },
];

const TermsOfService = () => {
  const [openId, setOpenId] = useState(1);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <main className="relative overflow-hidden bg-[#f8fafc] py-10 md:py-14 lg:py-20">
      {/* Blue Blur */}
      <div className="absolute top-10 left-0 w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-[#1E3A8A] opacity-10 blur-[120px] rounded-full" />

      {/* Teal Blur */}
      <div className="absolute bottom-0 right-0 w-[260px] md:w-[400px] h-[260px] md:h-[400px] bg-[#0D9488] opacity-10 blur-[120px] rounded-full" />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[250px] md:h-[350px] bg-gradient-to-r from-[#1E3A8A] to-[#0D9488] opacity-[0.05] blur-[160px] rounded-full" />

      <div className="relative z-10 px-4 md:px-6 lg:px-6 xl:px-10 max-w-[85rem] mx-auto">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 bg-white border border-gray-200 rounded-3xl p-5">
              <h3 className="text-[18px] font-semibold text-[#0f172a]">
                On this page
              </h3>

              <div className="mt-6 space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setOpenId(section.id)}
                    className={`w-full text-left rounded-2xl px-4 py-3 text-[15px] transition ${
                      openId === section.id
                        ? "bg-blue-50 text-[var(--color-primary)] font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {section.id}.&nbsp;&nbsp;{section.title}
                  </button>
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-blue-50 p-5">
                <RiShieldCheckLine className="text-2xl text-[var(--color-primary)]" />

                <h4 className="mt-4 text-[16px] font-semibold text-[var(--color-primary)]">
                  Important
                </h4>

                <p className="mt-3 text-[14px] leading-7 text-gray-600">
                  By using Resume AI, you agree to these Terms of Service.
                  Please read them carefully.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
            {/* Hero */}
            <div className="relative overflow-hidden px-6 py-10 md:px-10 lg:px-12 lg:py-16 border-b border-gray-200">
              <div className="absolute bottom-0 right-0 w-[260px] md:w-[420px] h-[260px] md:h-[420px] bg-[#0D9488] opacity-15 blur-[110px] rounded-full" />

              <div className="hidden md:grid absolute right-14 top-12 grid-cols-6 gap-2 opacity-20">
                {Array.from({ length: 36 }).map((_, index) => (
                  <span
                    key={index}
                    className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
                  />
                ))}
              </div>

              <div className="relative z-10 grid md:grid-cols-[1fr_320px] gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--color-primary)] rounded-full px-4 py-2 text-sm font-semibold">
                    <RiShieldCheckLine />
                    Legal Agreement
                  </div>

                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold leading-tight mt-6 text-[#0f172a]">
                    Terms of Service
                  </h1>

                  <p className="text-[16px] md:text-[18px] font-light text-muted-foreground mt-6 max-w-2xl leading-8">
                    These Terms of Service govern your use of Resume AI and our
                    services. By accessing or using our platform, you agree to
                    be bound by these terms.
                  </p>

                  <div className="flex items-center gap-3 mt-6 text-gray-600">
                    <FiCalendar />
                    <p className="text-[15px]">Last updated: May 19, 2024</p>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative mx-auto w-full max-w-[320px] h-[260px]">
                  <div className="absolute top-10 right-0 w-[230px] h-[130px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-gray-100" />

                  <div className="absolute top-16 right-8 w-28 h-3 rounded-full bg-gray-100" />
                  <div className="absolute top-24 right-8 w-40 h-3 rounded-full bg-gray-100" />
                  <div className="absolute top-32 right-8 w-24 h-3 rounded-full bg-gray-100" />

                  <div className="absolute left-6 top-0 w-28 h-32 rounded-[28px] bg-[var(--color-primary)] flex items-center justify-center shadow-xl">
                    <RiFileTextLine className="text-white text-5xl" />
                  </div>

                  <div className="absolute right-0 bottom-8 w-16 h-16 rounded-full bg-emerald-400 flex items-center justify-center shadow-lg">
                    <RiCheckLine className="text-white text-4xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Page Nav */}
            <div className="lg:hidden border-b border-gray-200">
              <button
                onClick={() => setShowMobileNav((prev) => !prev)}
                className="w-full flex items-center justify-between px-5 py-4 bg-white"
              >
                <span className="font-semibold text-[#0f172a]">
                  On this page
                </span>

                <FiChevronDown
                  className={`text-[var(--color-primary)] transition ${
                    showMobileNav ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showMobileNav && (
                <div className="px-4 pb-4 space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setOpenId(section.id);
                        setShowMobileNav(false);
                      }}
                      className={`w-full text-left rounded-2xl px-4 py-3 text-[15px] transition ${
                        openId === section.id
                          ? "bg-blue-50 text-[var(--color-primary)] font-semibold"
                          : "text-gray-600 bg-white"
                      }`}
                    >
                      {section.id}.&nbsp;&nbsp;{section.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Terms Sections */}
            <div className="px-5 py-4 md:px-8 lg:px-10">
              {sections.map((section) => {
                const isOpen = openId === section.id;

                return (
                  <div
                    key={section.id}
                    className="border-b last:border-b-0 border-gray-200"
                  >
                    <button
                      onClick={() =>
                        setOpenId((prev) =>
                          prev === section.id ? null : section.id,
                        )
                      }
                      className="w-full py-6 md:py-8 flex items-start gap-4 md:gap-6 text-left"
                    >
                      <span className="w-11 h-11 rounded-xl bg-blue-50 text-[var(--color-primary)] flex items-center justify-center text-lg font-semibold shrink-0">
                        {section.id}
                      </span>

                      <span className="flex-1">
                        <h3 className="text-[18px] md:text-[22px] font-semibold text-[#0f172a]">
                          {section.title}
                        </h3>

                        {isOpen && (
                          <p className="mt-3 text-[15px] md:text-[16px] leading-8 text-gray-600 max-w-3xl">
                            {section.text}
                          </p>
                        )}
                      </span>

                      <FiChevronDown
                        className={`mt-3 text-[var(--color-primary)] transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
