import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Button from "../components/Button";
import { FiMail, FiArrowLeft, FiSend } from "react-icons/fi";

const ForgotPassword = () => {
  const { t } = useLanguage();
  const { forgotPassword, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError(t("Email is required"));
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t("Please enter a valid email address"));
      return;
    }

    try {
      setError("");
      await forgotPassword(email);
      setSuccess(true);
    } catch (err) {
      // Errors handled by AuthContext
    }
  };

  return (
    <Container className="py-16 flex items-center justify-center min-h-[75vh]">
      <div className="w-full max-w-md p-8 rounded-3xl glass-premium border border-slate-200/40 dark:border-slate-800/35 shadow-2xl relative overflow-hidden text-left gsap-reveal">
        {/* Background radial glow */}
        <div className="absolute -top-[30%] -right-[30%] w-60 h-60 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="mb-6">
          <Link
            to="/login"
            className="inline-flex items-center gap-1 text-[9px] font-black text-slate-550 dark:text-slate-400 hover:text-teal-500 uppercase tracking-widest mb-4 cursor-pointer"
          >
            <FiArrowLeft size={10} /> {t("Back to Sign In")}
          </Link>
          <h2 className="text-xl font-black text-slate-850 dark:text-white font-heading uppercase tracking-widest relative inline-block mt-2">
            {t("Reset Password")}
            <span className="absolute left-0 bottom-0.5 w-full h-2 bg-teal-500/20 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-2.5 font-semibold leading-relaxed">
            {success
              ? t("An email containing reset instructions has been sent if the address exists.")
              : t("Enter the email address associated with your account, and we'll send a password recovery link.")}
          </p>
        </div>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Email Address")}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <FiMail size={13} />
                </span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  disabled={loading}
                  placeholder="name@example.com"
                  className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-255 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                />
              </div>
              {error && <p className="text-[10px] font-bold text-rose-500">{error}</p>}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="solid"
              color="teal"
              disabled={loading}
              className="w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex justify-center items-center gap-1.5"
            >
              {loading ? t("Sending...") : t("Send Reset Link")} <FiSend />
            </Button>
          </form>
        ) : (
          <div className="space-y-4 pt-4 border-t border-slate-250/20 dark:border-slate-800/20 text-center">
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold leading-relaxed">
              {t("Check your inbox for further guidelines. For testing purposes, you can jump directly to the password reset panel using the path")} <span className="font-bold underline">/reset-password?email={encodeURIComponent(email)}</span>.
            </p>
            <Link
              to="/login"
              className="mt-4 inline-block bg-teal-500 hover:bg-teal-450 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 font-black text-[9px] uppercase tracking-widest px-4 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              {t("Return to Login")}
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ForgotPassword;
