import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Button from "../components/Button";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";

const Login = () => {
  const { t } = useLanguage();
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Get redirect path
  const from = location.state?.from?.pathname || "/dashboard";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear field-specific error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.emailOrUsername.trim()) {
      tempErrors.emailOrUsername = t("Email or Username is required");
    }
    if (!formData.password) {
      tempErrors.password = t("Password is required");
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await login(
        formData.emailOrUsername,
        formData.password,
        formData.rememberMe
      );
      navigate(from, { replace: true });
    } catch (err) {
      // Errors handled by AuthContext toasts
    }
  };

  return (
    <Container className="py-16 flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md p-8 rounded-3xl glass-premium border border-slate-200/40 dark:border-slate-800/35 shadow-2xl relative overflow-hidden text-left gsap-reveal">
        {/* Background radial glow */}
        <div className="absolute -top-[30%] -right-[30%] w-60 h-60 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="mb-8">
          <h2 className="text-2xl font-black text-slate-850 dark:text-white font-heading uppercase tracking-widest relative inline-block">
            {t("Welcome Back")}
            <span className="absolute left-0 bottom-0.5 w-full h-2 bg-teal-500/20 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-2.5 font-semibold">
            {t("Access your personal health metrics, reports, and portal controls.")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email or Username */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
              {t("Email or Username")}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <FiMail size={13} />
              </span>
              <input
                type="text"
                name="emailOrUsername"
                value={formData.emailOrUsername}
                onChange={handleChange}
                disabled={loading}
                placeholder={t("Enter email or username")}
                className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
              />
            </div>
            {errors.emailOrUsername && (
              <p className="text-[10px] font-bold text-rose-500">{errors.emailOrUsername}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Password")}
              </label>
              <Link
                to="/forgot-password"
                className="text-[9px] font-black uppercase tracking-wider text-teal-650 dark:text-teal-400 hover:underline"
              >
                {t("Forgot Password?")}
              </Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <FiLock size={13} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
                placeholder={t("Enter password")}
                className="w-full pl-9 pr-10 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-teal-500 cursor-pointer"
              >
                {showPassword ? <FiEyeOff size={13} /> : <FiEye size={13} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[10px] font-bold text-rose-500">{errors.password}</p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              disabled={loading}
              className="w-3.5 h-3.5 rounded border-slate-300 dark:border-slate-800 text-teal-500 focus:ring-teal-500 cursor-pointer"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer select-none"
            >
              {t("Remember Me")}
            </label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="solid"
            color="teal"
            disabled={loading}
            className="w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex justify-center items-center gap-1.5"
          >
            {loading ? t("Signing In...") : t("Sign In")} <FiArrowRight />
          </Button>

          {/* Prompt */}
          <div className="pt-4 border-t border-slate-250/20 dark:border-slate-800/20 text-center">
            <p className="text-[10px] font-semibold text-slate-550 dark:text-slate-450 uppercase tracking-wider">
              {t("Don't have an account?")}{" "}
              <Link
                to="/register"
                className="text-teal-650 dark:text-teal-400 font-black hover:underline ml-1"
              >
                {t("Create Account")}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
