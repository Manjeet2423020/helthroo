import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Loading from "../components/Loading";
import { FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

const VerifyEmail = () => {
  const { t } = useLanguage();
  const { verifyEmail } = useAuth();
  const [status, setStatus] = useState("verifying"); // verifying, success, error

  useEffect(() => {
    let active = true;
    const triggerVerify = async () => {
      try {
        await verifyEmail();
        if (active) setStatus("success");
      } catch (err) {
        if (active) setStatus("error");
      }
    };
    triggerVerify();
    return () => {
      active = false;
    };
  }, [verifyEmail]);

  return (
    <Container className="py-16 flex items-center justify-center min-h-[75vh]">
      <div className="w-full max-w-md p-8 rounded-3xl glass-premium border border-slate-200/40 dark:border-slate-800/35 shadow-2xl relative overflow-hidden text-center gsap-reveal">
        {/* Background radial glow */}
        <div className="absolute -top-[30%] -right-[30%] w-60 h-60 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>

        {status === "verifying" && (
          <div className="space-y-6 py-8">
            <h2 className="text-xl font-black text-slate-850 dark:text-white font-heading uppercase tracking-widest">
              {t("Verifying Email")}
            </h2>
            <div className="flex justify-center">
              <Loading />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">
              {t("Communicating with directory services. Please hold...")}
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="space-y-6 py-6">
            <div className="flex justify-center text-teal-500 dark:text-teal-400">
              <FiCheckCircle size={56} className="animate-bounce" />
            </div>
            <h2 className="text-2xl font-black text-slate-850 dark:text-white font-heading uppercase tracking-widest">
              {t("Account Verified")}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold px-4">
              {t("Thank you! Your email address has been successfully verified. You now have full access to member portals.")}
            </p>
            <div className="pt-4">
              <Link
                to="/dashboard"
                className="inline-block bg-teal-500 hover:bg-teal-450 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 font-black text-[9px] uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-md"
              >
                {t("Go to Dashboard")}
              </Link>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="space-y-6 py-6">
            <div className="flex justify-center text-rose-500">
              <FiAlertTriangle size={56} />
            </div>
            <h2 className="text-2xl font-black text-rose-500 font-heading uppercase tracking-widest">
              {t("Verification Failed")}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold px-4">
              {t("The verification link was invalid or has expired. Please log in and request a new link from your profile settings.")}
            </p>
            <div className="pt-4">
              <Link
                to="/login"
                className="inline-block bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-black text-[9px] uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
              >
                {t("Return to Sign In")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default VerifyEmail;
