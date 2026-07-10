import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Button from "../components/Button";
import { FiCheck, FiX, FiLock, FiStar, FiChevronRight } from "react-icons/fi";

const Membership = () => {
  const { t } = useLanguage();
  const { user, upgradeMembership, isAuthenticated, showToast } = useAuth();
  const navigate = useNavigate();

  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState(null); // null, premium

  const handleUpgrade = async (plan) => {
    if (!isAuthenticated) {
      showToast(t("Please sign in or register to purchase a membership."), "info");
      navigate("/register");
      return;
    }

    if (user.memberLevel === plan) {
      showToast(t("You are already subscribed to this plan."), "info");
      return;
    }

    setCheckoutPlan(plan);
    setCheckoutLoading(true);

    // Simulate secure network transaction check
    setTimeout(() => {
      upgradeMembership(plan);
      setCheckoutLoading(false);
      setCheckoutPlan(null);
    }, 1500);
  };

  const freeBenefits = [
    { text: t("Daily standard health news feeds"), included: true },
    { text: t("Base editorial wellness tips"), included: true },
    { text: t("Bookmark and save public articles"), included: true },
    { text: t("Ad-supported news layout"), included: true },
    { text: t("Premium clinical research access"), included: false },
    { text: t("Interactive health calculators"), included: false },
    { text: t("Weekly health insights newsletter"), included: false },
    { text: t("Early access to clinical interviews"), included: false },
  ];

  const premiumBenefits = [
    { text: t("Daily standard health news feeds"), included: true },
    { text: t("Base editorial wellness tips"), included: true },
    { text: t("Bookmark and save public articles"), included: true },
    { text: t("100% ad-free digital experience"), included: true },
    { text: t("Unlimited premium clinical research papers"), included: true },
    { text: t("Interactive health calculators & tools"), included: true },
    { text: t("Premium weekly newsletters & PDF downloads"), included: true },
    { text: t("Early access to expert medical interviews"), included: true },
  ];

  return (
    <Container className="py-16">
      <div className="max-w-5xl mx-auto space-y-12 text-left">
        {/* Header Titles */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-black uppercase text-teal-650 dark:text-teal-400 tracking-widest bg-teal-500/10 dark:bg-teal-400/5 border border-teal-500/20 dark:border-teal-400/10 px-3 py-1 rounded-full">
            {t("Subscription Plans")}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-850 dark:text-white uppercase tracking-widest font-heading">
            {t("Unlock Premium Health Analytics")}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold leading-relaxed">
            {t("Upgrade your account to read clinical medical trial reports, access interactive calculators, and download premium reports curated by medical researchers.")}
          </p>
        </div>

        {/* Pricing Cards Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* FREE PLAN */}
          <div className="p-8 rounded-3xl glass-premium border border-slate-200/40 dark:border-slate-800/35 flex flex-col justify-between shadow-xl relative overflow-hidden text-left hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  {t("Free Access")}
                </span>
                {(!user || user?.memberLevel === "free") && (
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800 text-[8px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-350">
                    {t("Active Plan")}
                  </span>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-black text-slate-850 dark:text-white">$0</span>
                  <span className="text-[10px] font-semibold text-slate-450 dark:text-slate-550 ml-1 uppercase">
                    / {t("Month")}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold mt-2.5 leading-normal">
                  {t("Perfect for casual health enthusiasts reading base news summaries.")}
                </p>
              </div>

              {/* Benefit Checklist */}
              <ul className="space-y-3.5 mb-8">
                {freeBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[11px] font-semibold text-slate-600 dark:text-slate-350">
                    <span className={`mt-0.5 shrink-0 ${item.included ? "text-teal-500" : "text-rose-500/50"}`}>
                      {item.included ? <FiCheck size={12} /> : <FiX size={12} />}
                    </span>
                    <span className={item.included ? "" : "line-through opacity-50"}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button
                variant="outline"
                color="slate"
                onClick={() => handleUpgrade("free")}
                disabled={checkoutLoading || (!user || user?.memberLevel === "free")}
                className="w-full py-3 rounded-xl text-[9px] font-black uppercase tracking-widest justify-center"
              >
                {(!user || user?.memberLevel === "free") ? t("Current Free Tier") : t("Select Free Plan")}
              </Button>
            </div>
          </div>

          {/* PREMIUM PLAN */}
          <div className="p-8 rounded-3xl glass-premium border-2 border-teal-500/50 dark:border-teal-400/40 flex flex-col justify-between shadow-2xl relative overflow-hidden text-left hover:-translate-y-1 transition-all duration-300 bg-teal-500/5 dark:bg-teal-400/5">
            {/* Glowing Accent Badge */}
            <div className="absolute -top-[20%] -right-[20%] w-56 h-56 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-black text-teal-650 dark:text-teal-450 uppercase tracking-widest flex items-center gap-1">
                  <FiStar className="fill-teal-500 text-teal-500" /> {t("Premium Member")}
                </span>
                {user?.memberLevel === "premium" && (
                  <span className="px-2.5 py-0.5 rounded-md bg-teal-500/20 border border-teal-500/30 text-[8px] font-black uppercase tracking-wider text-teal-650 dark:text-teal-450">
                    {t("Active Plan")}
                  </span>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-black text-slate-850 dark:text-white">$15</span>
                  <span className="text-[10px] font-semibold text-slate-450 dark:text-slate-550 ml-1 uppercase">
                    / {t("Month")}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold mt-2.5 leading-normal">
                  {t("Access clinical statistics, analytical medical guides, and interactive tools.")}
                </p>
              </div>

              {/* Benefit Checklist */}
              <ul className="space-y-3.5 mb-8">
                {premiumBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[11px] font-semibold text-slate-650 dark:text-slate-200">
                    <span className="mt-0.5 text-teal-500 shrink-0">
                      <FiCheck size={12} />
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {checkoutLoading && checkoutPlan === "premium" ? (
                <Button
                  variant="solid"
                  color="teal"
                  disabled
                  className="w-full py-3 rounded-xl text-[9px] font-black uppercase tracking-widest justify-center flex items-center gap-1.5"
                >
                  <FiLock className="animate-spin" /> {t("Processing Payment...")}
                </Button>
              ) : (
                <Button
                  variant="solid"
                  color="teal"
                  onClick={() => handleUpgrade("premium")}
                  disabled={user?.memberLevel === "premium"}
                  className="w-full py-3 rounded-xl text-[9px] font-black uppercase tracking-widest justify-center shadow-lg hover:shadow-teal-500/20 flex items-center gap-1"
                >
                  {user?.memberLevel === "premium" ? t("Current Premium Plan") : t("Upgrade to Premium")} <FiChevronRight />
                </Button>
              )}
            </div>
          </div>

        </div>

        {/* Secure Checkout Trust Badge HUD */}
        <div className="pt-8 border-t border-slate-250/20 dark:border-slate-800/20 text-center max-w-md mx-auto">
          <p className="text-[9px] font-black text-slate-450 dark:text-slate-550 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <FiLock /> {t("Simulated Secure 256-Bit SSL Mock Checkout environment")}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Membership;
