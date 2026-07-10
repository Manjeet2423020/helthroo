import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { FOOTER_LINKS } from "../constants/siteData";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/40 dark:border-slate-800/80 bg-slate-100 dark:bg-[#030712] text-slate-500 mt-20 text-left relative z-20">
      
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/5 dark:bg-teal-400/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="px-[5%] md:px-[10%] py-16">
        
        {/* Top Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Logo & Mission Details */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-black tracking-widest text-slate-850 dark:text-white font-heading">
              HELTHRO<span className="text-teal-400">.</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
              {t("Footer Mission")}
            </p>
            
            {/* Social widgets with custom hover rings */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="magnetic-target w-9 h-9 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-455 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 text-xs cursor-pointer shadow-sm">
                <FaFacebookF />
              </a>
              <a href="#" className="magnetic-target w-9 h-9 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-455 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 text-xs cursor-pointer shadow-sm">
                <FaTwitter />
              </a>
              <a href="#" className="magnetic-target w-9 h-9 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-455 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 text-xs cursor-pointer shadow-sm">
                <FaYoutube />
              </a>
              <a href="#" className="magnetic-target w-9 h-9 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-455 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 text-xs cursor-pointer shadow-sm">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Columns 2-5: Mapped Footer columns */}
          <div className="lg:col-span-8 lg:col-start-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_LINKS.map((col, idx) => (
              <div key={idx} className="space-y-4 text-left">
                <h3 className="text-[9px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-350">
                  {t(col.title)}
                </h3>
                <ul className="space-y-3 text-[8.5px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-wider">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link to={link.url} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                        {t(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Disclaimer Text Block */}
        <div className="mt-12 pt-8 border-t border-slate-200/40 dark:border-slate-850/60 text-[9.5px] text-slate-450 dark:text-slate-500 leading-relaxed font-semibold">
          {t("Disclaimer")}
        </div>

        {/* Bottom copyright details & back to top button */}
        <div className="mt-8 pt-8 border-t border-slate-200/40 dark:border-slate-850/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[8.5px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-550">
            {t("Copyright Note")}
          </p>

          <button
            onClick={scrollToTop}
            className="magnetic-target w-11 h-11 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-455 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm shrink-0"
            title="Back to top"
          >
            <FiChevronUp className="text-lg" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
