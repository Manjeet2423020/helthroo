import { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiSettings,
  FiUser,
  FiChevronDown,
  FiMenu,
  FiX,
  FiClock,
  FiBookmark,
} from "react-icons/fi";
import gsap from "gsap";
import logo from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang: activeLang, setLang: setActiveLang, t } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("News");
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Initial entrance animation for navbar
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, xPercent: -50, opacity: 0 },
      { y: 0, xPercent: -50, opacity: 1, duration: 1.0, ease: "power4.out", delay: 0.1 }
    );
  }, []);

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
        ref={navRef}
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-[90%] max-w-7xl px-6 md:px-8 flex items-center justify-between transition-all duration-500 rounded-2xl ${
          isScrolled
            ? "h-16 glass-premium mt-3 shadow-xl shadow-slate-900/5 dark:shadow-black/20"
            : "h-24 bg-transparent mt-0 border-b border-transparent"
        }`}
      >
        {/* Brand logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            className="h-9 w-auto object-contain hover:scale-105 transition-transform duration-350 cursor-pointer dark:brightness-125"
            alt="Helthro Logo"
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-7 text-[10px] font-black tracking-widest text-slate-500 dark:text-slate-350 uppercase">
          {navItems.map((item) => {
            const path = item.name === "News" ? "/" : `/category/${item.name.toLowerCase()}`;
            return (
              <li
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`flex items-center gap-1 cursor-pointer py-2 relative group transition-colors duration-300 ${
                  activeItem === item.name
                    ? "text-teal-600 dark:text-teal-400 font-extrabold"
                    : "hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Link to={path} className="flex items-center gap-1">
                  <span>{t(item.name)}</span>
                  {item.hasDropdown && (
                    <FiChevronDown
                      size={10}
                      className="opacity-70 group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}
                </Link>
                {/* Dynamic glide underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-teal-500 to-sky-400 transition-all duration-300 ${
                    activeItem === item.name ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Modern Command Search bar */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-search-modal"))}
            className="hidden sm:flex items-center w-44 lg:w-48 h-9 px-3 glass-premium border border-slate-200/50 dark:border-slate-800/40 rounded-xl hover:border-teal-500/70 dark:hover:border-teal-400/70 hover:ring-2 hover:ring-teal-500/10 transition-all duration-300 bg-white/20 dark:bg-slate-900/30 cursor-pointer text-left"
          >
            <FiSearch className="text-slate-400 dark:text-slate-500 text-xs shrink-0" />
            <span className="w-full ml-2 bg-transparent text-[10px] font-black text-slate-455 dark:text-slate-455 select-none">
              {t("Search (Ctrl+K)...")}
            </span>
          </button>

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

            {/* Animated Theme Toggle */}
            <ThemeToggle />

            {/* User Profile / Auth Actions */}
            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="magnetic-target flex w-8 h-8 rounded-xl border border-slate-200/40 dark:border-slate-800/30 text-slate-650 dark:text-slate-350 items-center justify-center hover:border-teal-500/50 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer bg-teal-500/10 dark:bg-teal-400/5 font-black text-xs relative overflow-hidden"
                >
                  {user.fullName.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                  {user.memberLevel === "premium" && (
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full border border-white dark:border-slate-950"></span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 glass-premium border border-slate-200/40 dark:border-slate-800/35 rounded-2xl shadow-2xl p-4 z-50 text-left animate-slide-up">
                    <div className="pb-3 border-b border-slate-200/20 dark:border-slate-800/20 mb-3 flex flex-col">
                      <span className="text-xs font-black text-slate-800 dark:text-white uppercase truncate">
                        {user.fullName}
                      </span>
                      <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5 truncate">
                        {user.email}
                      </span>
                      <div className="mt-2.5">
                        {user.memberLevel === "premium" ? (
                          <span className="inline-block px-2 py-0.5 rounded bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[8px] font-black uppercase tracking-wider">
                            👑 Premium Member
                          </span>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 text-slate-550 dark:text-slate-400 text-[8px] font-black uppercase tracking-wider">
                            Free Member
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-1 text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      <li>
                        <Link
                          to="/dashboard"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-teal-500/10 hover:text-teal-650 dark:hover:text-teal-400 transition-colors"
                        >
                          {t("Dashboard")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/profile"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-teal-500/10 hover:text-teal-650 dark:hover:text-teal-400 transition-colors"
                        >
                          {t("My Profile")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/membership"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-teal-500/10 hover:text-teal-650 dark:hover:text-teal-400 transition-colors"
                        >
                          {t("Membership")}
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setIsDropdownOpen(false);
                            logout();
                          }}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-rose-500/10 hover:text-rose-500 transition-colors text-left font-black uppercase tracking-wider cursor-pointer"
                        >
                          {t("Log Out")}
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3 py-1.5 border border-slate-200/40 dark:border-slate-800/30 text-slate-700 dark:text-slate-350 hover:bg-white/20 dark:hover:bg-slate-800/20 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300"
                >
                  {t("Log In")}
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1.5 bg-teal-500 hover:bg-teal-450 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-md"
                >
                  {t("Register")}
                </Link>
              </div>
            )}
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
                {navItems.map((item) => {
                  const path = item.name === "News" ? "/" : `/category/${item.name.toLowerCase()}`;
                  return (
                    <li
                      key={item.name}
                      onClick={() => {
                        setActiveItem(item.name);
                        handleMobileClose();
                      }}
                      className="mobile-menu-item flex items-center justify-between cursor-pointer hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-250 py-1"
                    >
                      <Link to={path} className="w-full flex items-center justify-between">
                        <span>{t(item.name)}</span>
                        {item.hasDropdown && <FiChevronDown size={11} className="opacity-70" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-slate-200/25 dark:border-slate-800/25 pt-6 mt-6 flex flex-col gap-4">
                {/* Mobile Search */}
                <button
                  onClick={() => {
                    handleMobileClose();
                    window.dispatchEvent(new CustomEvent("open-search-modal"));
                  }}
                  className="mobile-menu-item flex items-center w-full h-10 px-3 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/35 rounded-xl cursor-pointer text-left"
                >
                  <FiSearch className="text-slate-400 dark:text-slate-500" />
                  <span className="w-full ml-2 bg-transparent text-xs font-black text-slate-450 dark:text-slate-450 select-none">
                    {t("Search...")}
                  </span>
                </button>

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
            <div className="mobile-menu-item border-t border-slate-200/25 dark:border-slate-800/25 pt-6 flex flex-col gap-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-500/10 dark:bg-teal-400/5 border border-slate-200/40 dark:border-slate-800/40 flex items-center justify-center font-black text-xs text-slate-750 dark:text-slate-200">
                      {user.fullName.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-black text-slate-800 dark:text-white uppercase truncate">
                        {user.fullName}
                      </span>
                      <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5 truncate">
                        {user.memberLevel === "premium" ? "👑 Premium" : "Free Member"}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/dashboard"
                      onClick={handleMobileClose}
                      className="px-3 py-2 text-center rounded-xl bg-white/20 dark:bg-slate-900/35 border border-slate-200/40 dark:border-slate-800/35 text-[9px] font-black uppercase tracking-widest text-slate-850 dark:text-slate-200"
                    >
                      {t("Dashboard")}
                    </Link>
                    <Link
                      to="/profile"
                      onClick={handleMobileClose}
                      className="px-3 py-2 text-center rounded-xl bg-white/20 dark:bg-slate-900/35 border border-slate-200/40 dark:border-slate-800/35 text-[9px] font-black uppercase tracking-widest text-slate-850 dark:text-slate-200"
                    >
                      {t("Profile")}
                    </Link>
                    <Link
                      to="/membership"
                      onClick={handleMobileClose}
                      className="px-3 py-2 text-center rounded-xl bg-white/20 dark:bg-slate-900/35 border border-slate-200/40 dark:border-slate-800/35 text-[9px] font-black uppercase tracking-widest text-slate-850 dark:text-slate-200"
                    >
                      {t("Membership")}
                    </Link>
                    <button
                      onClick={() => {
                        handleMobileClose();
                        logout();
                      }}
                      className="px-3 py-2 text-center rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-[9px] font-black uppercase tracking-widest text-rose-500 cursor-pointer"
                    >
                      {t("Log Out")}
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    onClick={handleMobileClose}
                    className="w-full py-2.5 text-center border border-slate-200/45 dark:border-slate-800/30 text-slate-700 dark:text-slate-300 rounded-xl text-[9px] font-black uppercase tracking-widest"
                  >
                    {t("Log In")}
                  </Link>
                  <Link
                    to="/register"
                    onClick={handleMobileClose}
                    className="w-full py-2.5 text-center bg-teal-500 text-slate-950 rounded-xl text-[9px] font-black uppercase tracking-widest"
                  >
                    {t("Register")}
                  </Link>
                </div>
              )}
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-200/25 dark:border-slate-800/25">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{t("Toggle Theme")}</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
