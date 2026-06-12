import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "../../lib/supabaseClient";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiShield,
  FiFileText,
} from "react-icons/fi";
import { RiSparkling2Line } from "react-icons/ri";

import logo from "../../images/logo.png";
import google from "../../images/google.png";

const AuthPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate("/dashboard");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setError(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) setError(error.message);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-[#f8fafc]">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-[#1E3A8A] opacity-10 blur-[130px] rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-[#0D9488] opacity-10 blur-[130px] rounded-full" />

      {/* Logo */}
      <header className="absolute top-0 left-0 z-20 w-full px-4 md:px-8 lg:px-10 py-5">
        <NavLink to="/">
          <img src={logo} alt="Resume AI" className="w-36 md:w-44" />
        </NavLink>
      </header>

      <main className="relative z-10 h-full px-4 md:px-8 lg:px-10 pt-20 pb-5">
        <div className="max-w-[85rem] mx-auto h-full grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="hidden lg:block">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm">
              <RiSparkling2Line />
              AI-Powered Career Success
            </div>

            <h1 className="mt-7 text-[42px] xl:text-[54px] font-semibold leading-tight text-[#0f172a]">
              Create a resume <br />
              that{" "}
              <span className="text-[var(--color-primary)]">
                gets you hired.
              </span>
            </h1>

            <p className="mt-5 text-[17px] font-light text-muted-foreground max-w-xl leading-8">
              Join thousands of job seekers who landed their dream job with
              Resume AI.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <RiSparkling2Line className="text-xl text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#0f172a]">
                    AI-Powered Suggestions
                  </h4>
                  <p className="mt-1 text-gray-500 leading-7">
                    Get smart content suggestions that highlight your strengths.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <FiFileText className="text-xl text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#0f172a]">
                    Professional Templates
                  </h4>
                  <p className="mt-1 text-gray-500 leading-7">
                    Choose from modern, ATS-friendly templates that stand out.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <FiShield className="text-xl text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#0f172a]">
                    Privacy First
                  </h4>
                  <p className="mt-1 text-gray-500 leading-7">
                    Your data is secure and never shared with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Card */}
          <div className="w-full max-w-[460px] mx-auto mb-8">
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-[28px] shadow-[0_25px_80px_rgba(15,23,42,0.12)] px-5 py-6 md:px-8 md:py-8">
              <div className="text-center">
                <div className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <img src={logo} alt="Resume AI" className="w-9 md:w-10" />
                </div>

                <h2 className="text-[24px] md:text-[28px] font-semibold text-[#0f172a]">
                  {isSignUp ? "Create account" : "Welcome back"}
                </h2>

                <p className="mt-1 text-sm md:text-base text-gray-500">
                  {isSignUp
                    ? "Start building your professional resume"
                    : "Sign in to continue to Resume AI"}
                </p>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-300 rounded-2xl py-3.5 hover:bg-gray-50 transition font-semibold text-gray-700"
              >
                <img src={google} alt="Google" className="w-5" />
                Continue with Google
              </button>

              <div className="flex items-center gap-4 my-5">
                <hr className="flex-1 border-gray-200" />
                <span className="text-gray-400 text-sm">or</span>
                <hr className="flex-1 border-gray-200" />
              </div>

              <form onSubmit={handleEmailAuth} className="space-y-4">
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="email"
                    placeholder={t("auth.email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-2xl pl-12 pr-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition text-[15px]"
                  />
                </div>

                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={t("auth.password")}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-2xl pl-12 pr-12 py-3.5 outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition text-[15px]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>

                {!isSignUp && (
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe((prev) => !prev)}
                        className="accent-[var(--color-primary)]"
                      />
                      Remember me
                    </label>

                    <button
                      type="button"
                      className="font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                {error && (
                  <p className="text-red-500 text-sm text-center bg-red-50 border border-red-100 rounded-xl py-3 px-4">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-2xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-secondary)] disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                >
                  {loading
                    ? t("auth.pleaseWait")
                    : isSignUp
                      ? t("auth.createBtn")
                      : t("auth.signIn")}
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-5">
                {isSignUp ? t("auth.haveAccount") : t("auth.noAccount")}

                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-1 font-semibold text-[var(--color-primary)] hover:underline"
                >
                  {isSignUp ? t("auth.signIn") : t("auth.signUp")}
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AuthPage;
