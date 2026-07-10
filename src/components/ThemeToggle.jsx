import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`magnetic-target relative w-8 h-8 rounded-xl border border-slate-200/40 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:border-teal-500/50 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer bg-white/10 dark:bg-slate-900/20 overflow-hidden ${className}`}
      aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun Icon - Visible in Dark Mode */}
        <span
          className={`absolute transition-all duration-500 ease-out transform ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100 text-amber-400"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        >
          <FiSun size={13} className="animate-spin-slow" />
        </span>

        {/* Moon Icon - Visible in Light Mode */}
        <span
          className={`absolute transition-all duration-500 ease-out transform ${
            theme === "light"
              ? "rotate-0 scale-100 opacity-100 text-slate-500"
              : "rotate-90 scale-0 opacity-0"
          }`}
        >
          <FiMoon size={13} />
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
