import React, { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Button from "../components/Button";
import { FiLock, FiCheck } from "react-icons/fi";

const ResetPassword = () => {
  const { t } = useLanguage();
  const { resetPassword, loading } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const emailParam = searchParams.get("email") || "";

  const [formData, setFormData] = useState({
    email: emailParam,
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.email.trim()) {
      tempErrors.email = t("Email address is required");
    }

    if (!formData.password) {
      tempErrors.password = t("Password is required");
    } else if (!passwordRegex.test(formData.password)) {
      tempErrors.password = t(
        "Password must be at least 8 characters long, contain an uppercase letter, lowercase letter, a number, and a special character."
      );
    }

    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = t("Passwords do not match");
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await resetPassword(formData.email, formData.password);
      navigate("/login");
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
          <h2 className="text-xl font-black text-slate-850 dark:text-white font-heading uppercase tracking-widest relative inline-block">
            {t("Set New Password")}
            <span className="absolute left-0 bottom-0.5 w-full h-2 bg-teal-500/20 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-2.5 font-semibold">
            {t("Choose a strong, unique password to secure your account details.")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email (Hidden or Read-only if param passed) */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
              {t("Email Address")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading || !!emailParam}
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-850 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors disabled:opacity-60"
            />
            {errors.email && <p className="text-[10px] font-bold text-rose-500">{errors.email}</p>}
          </div>

          {/* New Password */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
              {t("New Password")}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <FiLock size={13} />
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
                placeholder={t("Enter new password")}
                className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
              />
            </div>
            {errors.password && <p className="text-[10px] font-bold text-rose-500 leading-normal">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
              {t("Confirm New Password")}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <FiLock size={13} />
              </span>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={loading}
                placeholder={t("Confirm new password")}
                className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-[10px] font-bold text-rose-500">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="solid"
            color="teal"
            disabled={loading}
            className="w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex justify-center items-center gap-1.5 mt-2"
          >
            {loading ? t("Updating Password...") : t("Update Password")} <FiCheck />
          </Button>

          {/* Prompt */}
          <div className="pt-4 border-t border-slate-250/20 dark:border-slate-800/20 text-center">
            <Link
              to="/login"
              className="text-[10px] font-black uppercase tracking-wider text-teal-650 dark:text-teal-400 hover:underline"
            >
              {t("Cancel and Return to Login")}
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
