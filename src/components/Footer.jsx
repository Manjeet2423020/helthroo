import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#08111a] text-slate-350 mt-20 text-left">
      {/* Top Main Section */}
      <div className="px-[5%] md:px-[10%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <h2 className="text-2xl font-black tracking-widest text-white font-heading">
              HELTHRO<span className="text-brand-mint">.</span>
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed font-semibold">
              India's premier health and scientific research portal. We bridge the gap between complex medical publications and daily wellness insights.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-mint hover:text-slate-900 flex items-center justify-center border border-white/10 transition-all duration-300 text-xs cursor-pointer">
                <FaFacebookF />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-mint hover:text-slate-900 flex items-center justify-center border border-white/10 transition-all duration-300 text-xs cursor-pointer">
                <FaTwitter />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-mint hover:text-slate-900 flex items-center justify-center border border-white/10 transition-all duration-300 text-xs cursor-pointer">
                <FaYoutube />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-mint hover:text-slate-900 flex items-center justify-center border border-white/10 transition-all duration-300 text-xs cursor-pointer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: About Helthro */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-white">
              About
            </h3>
            <ul className="space-y-3 text-[9px] text-slate-400 font-black uppercase tracking-wider">
              <li><a href="#" className="hover:text-brand-mint transition-colors">Editorial Standards</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Fact-Checking Policy</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Medical Advisory Board</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Team & Contributors</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Policies & Support */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-white">
              Policies
            </h3>
            <ul className="space-y-3 text-[9px] text-slate-400 font-black uppercase tracking-wider">
              <li><a href="#" className="hover:text-brand-mint transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Correction Policy</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[9px] text-slate-400 font-black uppercase tracking-wider">
              <li><a href="#" className="hover:text-brand-mint transition-colors">Live Health Hub</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Research Highlights</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Podcast Episodes</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Wellness Columns</a></li>
              <li><a href="#" className="hover:text-brand-mint transition-colors">Web Stories</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Text */}
        <div className="mt-12 pt-8 border-t border-white/5 text-[10px] text-slate-500 leading-relaxed font-semibold">
          Disclaimer: The editorial content on Helthro is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">
            © 2026 Health Boat Foundation (India). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-xl bg-white/5 hover:bg-brand-mint hover:text-slate-900 border border-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shrink-0"
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
