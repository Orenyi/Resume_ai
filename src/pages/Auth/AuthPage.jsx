import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AuthPage = () => {
  const { t } = useTranslation();

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) setError(error.message);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* Logo / Title */}
        <h1
          className="text-2xl font-bold text-center mb-2"
          style={{ color: "var(--color-primary)" }}
        >
          Resume AI
        </h1>

        <p className="text-center text-gray-500 mb-6 text-sm">
          {isSignUp ? t("auth.createAccount") : t("auth.welcomeBack")}
        </p>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 mb-4 hover:bg-gray-50 transition font-medium text-gray-700"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />

          {t("auth.continueGoogle")}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <hr className="flex-1 border-gray-200" />

          <span className="text-gray-400 text-sm">{t("auth.or")}</span>

          <hr className="flex-1 border-gray-200" />
        </div>

        {/* Email / Password Form */}
        <form onSubmit={handleEmailAuth} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder={t("auth.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder={t("auth.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold transition"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {loading
              ? t("auth.pleaseWait")
              : isSignUp
                ? t("auth.createBtn")
                : t("auth.signIn")}
          </button>
        </form>

        {/* Toggle Sign In / Sign Up */}
        <p className="text-center text-sm text-gray-500 mt-6">
          {isSignUp ? t("auth.haveAccount") : t("auth.noAccount")}

          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="ml-1 font-semibold hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            {isSignUp ? t("auth.signIn") : t("auth.signUp")}
          </button>
        </p>
      </div>
    </section>
  );
};

export default AuthPage;
