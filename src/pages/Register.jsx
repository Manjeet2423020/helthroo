import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Button from "../components/Button";
import { FiUser, FiMail, FiPhone, FiLock, FiCheckCircle } from "react-icons/fi";

const Register = () => {
  const { t } = useLanguage();
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    
    // Password requirements: 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.fullName.trim()) {
      tempErrors.fullName = t("Full Name is required");
    }

    if (!formData.email.trim()) {
      tempErrors.email = t("Email is required");
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = t("Please enter a valid email address");
    }

    if (formData.mobile && !phoneRegex.test(formData.mobile)) {
      tempErrors.mobile = t("Please enter a valid mobile number");
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

    if (!formData.agreeTerms) {
      tempErrors.agreeTerms = t("You must accept the Terms & Conditions");
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await register(formData);
      navigate("/dashboard");
    } catch (err) {
      // Errors handled by AuthContext
    }
  };

  return (
    <Container className="py-16 flex items-center justify-center min-h-[85vh]">
      <div className="w-full max-w-lg p-8 rounded-3xl glass-premium border border-slate-200/40 dark:border-slate-800/35 shadow-2xl relative overflow-hidden text-left gsap-reveal">
        {/* Background radial glow */}
        <div className="absolute -top-[20%] -left-[20%] w-64 h-64 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="mb-6">
          <h2 className="text-2xl font-black text-slate-850 dark:text-white font-heading uppercase tracking-widest relative inline-block">
            {t("Create Account")}
            <span className="absolute left-0 bottom-0.5 w-full h-2 bg-teal-500/20 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-2.5 font-semibold">
            {t("Join Helthroo to access bookmarks, likes, private dashboard feed, and exclusive content.")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Full Name")} *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <FiUser size={12} />
                </span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t("Full Name")}
                  className="w-full pl-9 pr-4 py-2 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                />
              </div>
              {errors.fullName && <p className="text-[9px] font-bold text-rose-500">{errors.fullName}</p>}
            </div>

            {/* Username */}
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Username")} ({t("Optional")})
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <FiUser size={12} />
                </span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder={t("Username")}
                  className="w-full pl-9 pr-4 py-2 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Email Address")} *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <FiMail size={12} />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full pl-9 pr-4 py-2 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                />
              </div>
              {errors.email && <p className="text-[9px] font-bold text-rose-500">{errors.email}</p>}
            </div>

            {/* Mobile */}
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Mobile Number")}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <FiPhone size={12} />
                </span>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+1234567890"
                  className="w-full pl-9 pr-4 py-2 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                />
              </div>
              {errors.mobile && <p className="text-[9px] font-bold text-rose-500">{errors.mobile}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Password */}
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Password")} *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <FiLock size={12} />
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={t("Enter password")}
                  className="w-full pl-9 pr-4 py-2 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                />
              </div>
              {errors.password && <p className="text-[9px] font-bold text-rose-500 leading-normal">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Confirm Password")} *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <FiLock size={12} />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder={t("Confirm password")}
                  className="w-full pl-9 pr-4 py-2 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-250 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-[9px] font-bold text-rose-500">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Checks */}
          <div className="space-y-2 pt-2">
            {/* Agree Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-3.5 h-3.5 mt-0.5 rounded border-slate-300 dark:border-slate-800 text-teal-500 focus:ring-teal-500 cursor-pointer"
              />
              <label
                htmlFor="agreeTerms"
                className="ml-2 text-[9px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer select-none"
              >
                {t("I accept the")}{" "}
                <a href="#terms" className="text-teal-650 dark:text-teal-400 font-black hover:underline">
                  {t("Terms & Conditions")}
                </a>{" "}
                {t("and privacy policies")} *
              </label>
            </div>
            {errors.agreeTerms && <p className="text-[9px] font-bold text-rose-500">{errors.agreeTerms}</p>}

            {/* Newsletter */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="w-3.5 h-3.5 rounded border-slate-300 dark:border-slate-800 text-teal-500 focus:ring-teal-500 cursor-pointer"
              />
              <label
                htmlFor="newsletter"
                className="ml-2 text-[9px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer select-none"
              >
                {t("Subscribe to our premium weekly health newsletters")} ({t("Optional")})
              </label>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="solid"
            color="teal"
            disabled={loading}
            className="w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex justify-center items-center gap-1.5 mt-4"
          >
            {loading ? t("Creating Account...") : t("Create Account")} <FiCheckCircle />
          </Button>

          {/* Prompt */}
          <div className="pt-4 border-t border-slate-250/20 dark:border-slate-800/20 text-center">
            <p className="text-[10px] font-semibold text-slate-550 dark:text-slate-455 uppercase tracking-wider">
              {t("Already have an account?")}{" "}
              <Link
                to="/login"
                className="text-teal-650 dark:text-teal-400 font-black hover:underline ml-1"
              >
                {t("Sign In")}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Register;
