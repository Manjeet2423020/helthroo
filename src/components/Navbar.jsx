import { useState, useEffect, useRef } from "react";
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
import gsap from "gsap";
import logo from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("News");
  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: "News", hasDropdown: true },
    { name: "Wellness", hasDropdown: true },
    { name: "Health", hasDropdown: true },
    { name: "Video", hasDropdown: true },
    { name: "Resources", hasDropdown: false },
    { name: "Other", hasDropdown: true },
  ];

  // Track scroll position for shrink and floating pill effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for Mobile Drawer Menu
  useEffect(() => {
    if (isMenuOpen) {
      // open animation
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power4.out" }
      );
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll(".mobile-menu-item"),
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.2, ease: "power3.out" }
      );
    }
  }, [isMenuOpen]);

  const handleMobileClose = () => {
    gsap.to(mobileMenuRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setIsMenuOpen(false),
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-[90%] max-w-7xl px-6 md:px-8 flex items-center justify-between transition-all duration-500 rounded-2xl ${
          isScrolled
            ? "h-16 glass-premium mt-3 shadow-xl shadow-slate-900/5 dark:shadow-black/20"
            : "h-24 bg-transparent mt-0 border-b border-transparent"
        }`}
      >
        {/* Brand logo */}
        <div className="flex items-center">
          <img
            src={logo}
            className="h-9 w-auto object-contain hover:scale-105 transition-transform duration-350 cursor-pointer dark:brightness-125"
            alt="Helthro Logo"
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-7 text-[10px] font-black tracking-widest text-slate-500 dark:text-slate-350 uppercase">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center gap-1 cursor-pointer py-2 relative group transition-colors duration-300 ${
                activeItem === item.name
                  ? "text-teal-600 dark:text-teal-400 font-extrabold"
                  : "hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>{item.name}</span>
              {item.hasDropdown && (
                <FiChevronDown
                  size={10}
                  className="opacity-70 group-hover:rotate-180 transition-transform duration-300"
                />
              )}
              {/* Dynamic glide underline */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-teal-500 to-sky-400 transition-all duration-300 ${
                  activeItem === item.name ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Modern Command Search bar */}
          <div className="hidden sm:flex items-center w-44 lg:w-48 h-9 px-3 glass-premium border border-slate-200/50 dark:border-slate-800/40 rounded-xl focus-within:border-teal-500/70 dark:focus-within:border-teal-400/70 focus-within:ring-2 focus-within:ring-teal-500/10 transition-all duration-300 bg-white/20 dark:bg-slate-900/30">
            <FiSearch className="text-slate-400 dark:text-slate-500 text-xs shrink-0" />
            <input
              type="text"
              placeholder="Search (⌘K)..."
              className="w-full ml-2 bg-transparent outline-none text-[10px] font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 border-none"
            />
          </div>

          {/* Language selector pill */}
          <div className="hidden md:flex overflow-hidden rounded-full border border-slate-200/40 dark:border-slate-800/35 bg-white/30 dark:bg-slate-900/30 p-0.5 shadow-sm">
            <button
              onClick={() => setActiveLang("EN")}
              className={`px-3 h-6 rounded-full font-black text-[9px] transition-all duration-300 cursor-pointer ${
                activeLang === "EN"
                  ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm"
                  : "text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-350"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setActiveLang("HI")}
              className={`px-3 h-6 rounded-full font-black text-[9px] transition-all duration-300 cursor-pointer ${
                activeLang === "HI"
                  ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm"
                  : "text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-350"
              }`}
            >
              हिं
            </button>
          </div>

          {/* Action icons with magnetic wrapper target support */}
          <div className="flex items-center gap-1.5">
            {/* Settings button */}
            <button className="magnetic-target w-8 h-8 rounded-xl border border-slate-200/40 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:border-teal-500/50 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer bg-white/10 dark:bg-slate-900/20">
              <FiSettings size={13} />
            </button>

            {/* Theme toggler */}
            <button
              onClick={toggleTheme}
              className="magnetic-target w-8 h-8 rounded-xl border border-slate-200/40 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:border-teal-500/50 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer bg-white/10 dark:bg-slate-900/20"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? (
                <FiMoon size={13} />
              ) : (
                <FiSun size={13} className="text-amber-400" />
              )}
            </button>

            {/* User Profile */}
            <button className="magnetic-target hidden sm:flex w-8 h-8 rounded-xl border border-slate-200/40 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 items-center justify-center hover:border-teal-500/50 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer bg-white/10 dark:bg-slate-900/20">
              <FiUser size={13} />
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="magnetic-target lg:hidden w-8 h-8 rounded-xl border border-slate-200/40 dark:border-slate-800/30 text-slate-650 dark:text-slate-300 flex items-center justify-center hover:bg-teal-500/5 dark:hover:bg-teal-400/5 transition-all duration-300 cursor-pointer bg-white/10 dark:bg-slate-900/20"
          >
            <FiMenu size={15} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md lg:hidden">
          {/* Main slide-out drawer panel */}
          <div
            ref={mobileMenuRef}
            className="absolute top-4 right-4 h-[calc(100vh-2rem)] w-72 glass-premium rounded-2xl shadow-2xl p-6 flex flex-col justify-between border border-white/10 text-left overflow-y-auto"
          >
            <div>
              {/* Header drawer */}
              <div className="flex justify-between items-center pb-6 border-b border-slate-200/25 dark:border-slate-800/25">
                <img src={logo} className="h-7 w-auto" alt="Logo" />
                <button
                  onClick={handleMobileClose}
                  className="w-8 h-8 rounded-full border border-slate-200/30 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:bg-white/20 dark:hover:bg-slate-800/20 transition-all cursor-pointer"
                >
                  <FiX size={14} />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-4 text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 mt-8">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="mobile-menu-item flex items-center justify-between cursor-pointer hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-250 py-1"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <FiChevronDown size={11} className="opacity-70" />}
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-200/25 dark:border-slate-800/25 pt-6 mt-6 flex flex-col gap-4">
                {/* Mobile Search */}
                <div className="mobile-menu-item flex items-center w-full h-10 px-3 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/35 rounded-xl">
                  <FiSearch className="text-slate-400 dark:text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full ml-2 bg-transparent outline-none text-xs font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 border-none"
                  />
                </div>

                {/* Mobile Language selector */}
                <div className="mobile-menu-item flex rounded-xl border border-slate-200/40 dark:border-slate-800/35 bg-white/20 dark:bg-slate-900/30 p-0.5 shadow-sm">
                  <button
                    onClick={() => setActiveLang("EN")}
                    className={`flex-1 h-8 rounded-lg font-black text-[9px] transition-all cursor-pointer ${
                      activeLang === "EN"
                        ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    ENGLISH
                  </button>
                  <button
                    onClick={() => setActiveLang("HI")}
                    className={`flex-1 h-8 rounded-lg font-black text-[9px] transition-all cursor-pointer ${
                      activeLang === "HI"
                        ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Profile Actions */}
            <div className="mobile-menu-item border-t border-slate-200/25 dark:border-slate-800/25 pt-6 flex gap-4 justify-between items-center">
              <button className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-600 dark:text-slate-350 cursor-pointer hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                <FiUser size={13} />
                <span>MY PROFILE</span>
              </button>
              <button className="text-[10px] font-black tracking-widest text-slate-600 dark:text-slate-350 cursor-pointer hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                SETTINGS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
