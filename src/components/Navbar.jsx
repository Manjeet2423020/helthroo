import { useState } from "react";
import {
  FiSearch,
  FiSettings,
  FiMoon,
  FiSun,
  FiUser,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");

  const navItems = [
    { name: "News", hasDropdown: true },
    { name: "Wellness", hasDropdown: true },
    { name: "Health", hasDropdown: true },
    { name: "Video", hasDropdown: true },
    { name: "Resources", hasDropdown: false },
    { name: "Other", hasDropdown: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-[5%] md:px-[10%] h-20 glass-nav flex items-center justify-between shadow-premium transition-colors duration-300">
      
      {/* Brand logo */}
      <div className="flex items-center">
        <img
          src={logo}
          className="h-10 w-auto object-contain hover:scale-105 duration-300 cursor-pointer dark:brightness-125"
          alt="Helthro Logo"
        />
      </div>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden lg:flex items-center gap-8 text-[11px] font-extrabold tracking-widest text-slate-600 dark:text-slate-300 uppercase">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-1 cursor-pointer hover:text-brand-cyan dark:hover:text-brand-mint transition-colors duration-200 py-2 relative group"
          >
            {item.name}
            {item.hasDropdown && (
              <FiChevronDown size={11} className="opacity-70 group-hover:rotate-180 duration-300" />
            )}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-mint transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        
        {/* Modern Search bar */}
        <div className="hidden sm:flex items-center w-48 lg:w-52 h-10 px-3 bg-white/30 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl focus-within:border-brand-cyan/70 dark:focus-within:border-brand-mint/70 focus-within:bg-white/95 dark:focus-within:bg-slate-950/90 focus-within:ring-2 focus-within:ring-brand-cyan/10 transition-all duration-300">
          <FiSearch className="text-slate-400 dark:text-slate-500 text-sm shrink-0" />
          <input
            type="text"
            placeholder="Search insights..."
            className="w-full ml-2 bg-transparent outline-none text-[11px] font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 border-none"
          />
        </div>

        {/* Language selector pill */}
        <div className="hidden md:flex overflow-hidden rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-white/20 dark:bg-slate-900/40 p-0.5">
          <button
            onClick={() => setActiveLang("EN")}
            className={`px-3.5 h-7 rounded-full font-black text-[10px] shadow-sm transition-all duration-200 cursor-pointer ${
              activeLang === "EN"
                ? "bg-white dark:bg-slate-800 text-brand-cyan dark:text-brand-mint"
                : "text-slate-400 dark:text-slate-500"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setActiveLang("HI")}
            className={`px-3.5 h-7 rounded-full font-black text-[10px] shadow-sm transition-all duration-200 cursor-pointer ${
              activeLang === "HI"
                ? "bg-white dark:bg-slate-800 text-brand-cyan dark:text-brand-mint"
                : "text-slate-400 dark:text-slate-500"
            }`}
          >
            हिं
          </button>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          {/* Settings button */}
          <button className="w-9 h-9 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:border-brand-cyan/70 dark:hover:border-brand-mint/70 hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 hover:text-brand-cyan dark:hover:text-brand-mint transition-all duration-200 cursor-pointer">
            <FiSettings size={15} />
          </button>

          {/* Theme toggler */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:border-brand-cyan/70 dark:hover:border-brand-mint/70 hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 hover:text-brand-cyan dark:hover:text-brand-mint transition-all duration-200 cursor-pointer"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <FiMoon size={15} /> : <FiSun size={15} className="text-amber-400" />}
          </button>

          {/* User Profile */}
          <button className="hidden sm:flex w-9 h-9 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-500 dark:text-slate-400 items-center justify-center hover:border-brand-cyan/70 dark:hover:border-brand-mint/70 hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 hover:text-brand-cyan dark:hover:text-brand-mint transition-all duration-200 cursor-pointer">
            <FiUser size={15} />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-9 h-9 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-350 flex items-center justify-center hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 transition-all duration-250 cursor-pointer"
        >
          {isMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Menu (Slide-in) */}
      <div
        className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-l border-slate-200/40 dark:border-slate-850/40 shadow-premium transition-transform duration-300 z-40 p-6 flex flex-col justify-between lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 text-left">
          {/* Navigation Links */}
          <ul className="flex flex-col gap-5 text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between cursor-pointer hover:text-brand-cyan dark:hover:text-brand-mint transition-colors duration-200"
              >
                <span>{item.name}</span>
                {item.hasDropdown && <FiChevronDown size={12} className="opacity-70" />}
              </li>
            ))}
          </ul>

          <div className="border-t border-slate-200/50 dark:border-slate-800/60 pt-6 flex flex-col gap-4">
            {/* Mobile Search */}
            <div className="flex items-center w-full h-10 px-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 rounded-xl">
              <FiSearch className="text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full ml-2 bg-transparent outline-none text-xs font-bold text-slate-800 dark:text-slate-200"
              />
            </div>
            
            {/* Mobile Language */}
            <div className="flex rounded-lg border border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/40 p-0.5">
              <button
                onClick={() => setActiveLang("EN")}
                className={`flex-1 h-8 rounded font-black text-[10px] cursor-pointer ${
                  activeLang === "EN" ? "bg-white dark:bg-slate-800 text-brand-cyan dark:text-brand-mint shadow-sm" : "text-slate-400"
                }`}
              >
                ENGLISH
              </button>
              <button
                onClick={() => setActiveLang("HI")}
                className={`flex-1 h-8 rounded font-black text-[10px] cursor-pointer ${
                  activeLang === "HI" ? "bg-white dark:bg-slate-800 text-brand-cyan dark:text-brand-mint shadow-sm" : "text-slate-400"
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Profile Actions */}
        <div className="border-t border-slate-200/50 dark:border-slate-800/60 pt-6 flex gap-4 justify-between items-center">
          <button className="flex items-center gap-2 text-xs font-black text-slate-600 dark:text-slate-350 cursor-pointer">
            <FiUser size={16} />
            <span>MY PROFILE</span>
          </button>
          <button className="text-xs font-black text-slate-600 dark:text-slate-350 cursor-pointer">
            SETTINGS
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
