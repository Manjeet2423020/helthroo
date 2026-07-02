import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/40 dark:border-slate-800/80 bg-slate-100 dark:bg-[#030712] text-slate-500 mt-20 text-left relative z-20">
      
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/5 dark:bg-teal-400/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="px-[5%] md:px-[10%] py-16">
        
        {/* Top Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Logo & Mission Details */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-black tracking-widest text-slate-850 dark:text-white font-heading">
              HELTHRO<span className="text-teal-400">.</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
              India's premier health and scientific research portal. We bridge the gap between complex medical publications and daily wellness insights.
            </p>
            
            {/* Social widgets with custom hover rings */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="magnetic-target w-9 h-9 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-450 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 text-xs cursor-pointer shadow-sm">
                <FaFacebookF />
              </a>
              <a href="#" className="magnetic-target w-9 h-9 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-450 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 text-xs cursor-pointer shadow-sm">
                <FaTwitter />
              </a>
              <a href="#" className="magnetic-target w-9 h-9 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-450 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 text-xs cursor-pointer shadow-sm">
                <FaYoutube />
              </a>
              <a href="#" className="magnetic-target w-9 h-9 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-450 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 text-xs cursor-pointer shadow-sm">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Editorial Standards list */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-4">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-350">
              About
            </h3>
            <ul className="space-y-3 text-[8.5px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-wider">
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Editorial Standards</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Fact-Checking Policy</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Medical Advisory Board</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Team & Contributors</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Legal Policy lists */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-350">
              Policies
            </h3>
            <ul className="space-y-3 text-[8.5px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-wider">
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Correction Policy</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-350">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[8.5px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-wider">
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Live Health Hub</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Research Highlights</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Podcast Episodes</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Wellness Columns</a></li>
              <li><a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Web Stories</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Text Block */}
        <div className="mt-12 pt-8 border-t border-slate-200/40 dark:border-slate-850/60 text-[9.5px] text-slate-450 dark:text-slate-500 leading-relaxed font-semibold">
          Disclaimer: The editorial content on Helthro is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </div>

        {/* Bottom copyright details & back to top button */}
        <div className="mt-8 pt-8 border-t border-slate-200/40 dark:border-slate-850/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[8.5px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-550">
            © 2026 Health Boat Foundation (India). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="magnetic-target w-11 h-11 rounded-xl bg-white/40 dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 text-slate-600 dark:text-slate-450 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm shrink-0"
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
