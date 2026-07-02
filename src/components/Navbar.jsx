import {
  FiSearch,
  FiSettings,
  FiMoon,
  FiSun,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full px-[10%] h-20 border-b border-slate-100 dark:border-slate-900 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-between shadow-premium transition-colors duration-300">
      
      {/* Brand logo */}
      <div className="flex items-center">
        <img
          src={logo}
          className="h-10 w-auto object-contain hover:scale-105 duration-300 cursor-pointer dark:brightness-110"
          alt="Helthro Logo"
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-8 text-xs font-black tracking-wider text-slate-600 dark:text-slate-300 uppercase">
        <li className="flex items-center gap-1 cursor-pointer hover:text-brand-cyan dark:hover:text-brand-mint transition-colors duration-200 py-2 relative group">
          News
          <FiChevronDown size={12} className="opacity-70 group-hover:rotate-180 duration-300" />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan dark:bg-brand-mint transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-brand-cyan dark:hover:text-brand-mint transition-colors duration-200 py-2 relative group">
          Wellness
          <FiChevronDown size={12} className="opacity-70 group-hover:rotate-180 duration-300" />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan dark:bg-brand-mint transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-brand-cyan dark:hover:text-brand-mint transition-colors duration-200 py-2 relative group">
          Health
          <FiChevronDown size={12} className="opacity-70 group-hover:rotate-180 duration-300" />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan dark:bg-brand-mint transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-brand-cyan dark:hover:text-brand-mint transition-colors duration-200 py-2 relative group">
          Video
          <FiChevronDown size={12} className="opacity-70 group-hover:rotate-180 duration-300" />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan dark:bg-brand-mint transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer hover:text-brand-cyan dark:hover:text-brand-mint transition-colors duration-200 py-2 relative group">
          Resources
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan dark:bg-brand-mint transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-brand-cyan dark:hover:text-brand-mint transition-colors duration-200 py-2 relative group">
          Other
          <FiChevronDown size={12} className="opacity-70 group-hover:rotate-180 duration-300" />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan dark:bg-brand-mint transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        
        {/* Modern Search bar */}
        <div className="hidden sm:flex items-center w-52 h-10 px-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-2xl focus-within:border-brand-cyan dark:focus-within:border-brand-mint focus-within:bg-white dark:focus-within:bg-slate-900 focus-within:ring-2 focus-within:ring-brand-cyan/15 transition-all duration-300">
          <FiSearch className="text-slate-400 dark:text-slate-500 text-sm shrink-0" />
          <input
            type="text"
            placeholder="Search insights..."
            className="w-full ml-2 bg-transparent outline-none text-2xs font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
        </div>

        {/* Language pill */}
        <div className="flex overflow-hidden rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-0.5">
          <button className="px-3.5 h-7 rounded-full bg-white dark:bg-slate-850 text-brand-cyan dark:text-brand-mint font-extrabold text-[10px] shadow-sm transition-all duration-200">
            EN
          </button>
          <button className="px-3.5 h-7 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-bold text-[10px] transition-all duration-200">
            हिं
          </button>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          
          {/* Settings button */}
          <button className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:border-brand-cyan dark:hover:border-brand-mint hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 hover:text-brand-cyan dark:hover:text-brand-mint transition-all duration-200">
            <FiSettings size={16} />
          </button>

          {/* Theme toggler */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:border-brand-cyan dark:hover:border-brand-mint hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 hover:text-brand-cyan dark:hover:text-brand-mint transition-all duration-200 cursor-pointer"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <FiMoon size={16} /> : <FiSun size={16} className="text-amber-400" />}
          </button>

          {/* User Profile */}
          <button className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:border-brand-cyan dark:hover:border-brand-mint hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 hover:text-brand-cyan dark:hover:text-brand-mint transition-all duration-200">
            <FiUser size={16} />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
