import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import { FiAlertOctagon, FiHome } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();
  return (
    <Container className="py-24 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <div className="glass-premium p-10 rounded-3xl border border-slate-200/40 dark:border-slate-800/35 max-w-md w-full flex flex-col items-center shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-6">
          <FiAlertOctagon size={32} />
        </div>
        
        <h1 className="text-4xl font-black font-heading text-slate-850 dark:text-white uppercase tracking-wider">
          404 Error
        </h1>
        <h3 className="text-xs font-black text-slate-400 mt-2 uppercase tracking-widest">
          {t("PAGE NOT FOUND")}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-xs mt-4 leading-relaxed font-semibold">
          {t("NotFound Description")}
        </p>

        <Link to="/" className="mt-8 w-full">
          <Button variant="solid" color="teal" className="w-full h-11 rounded-xl text-[9px]">
            <FiHome /> {t("Return to Diagnostics Hub")}
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
