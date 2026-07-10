import React from "react";

const Button = ({
  children,
  onClick,
  variant = "solid",
  color = "teal", // 'teal' or 'emerald' or 'slate'
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseStyle = "font-black uppercase tracking-widest transition-all duration-300 cursor-pointer select-none inline-flex items-center justify-center gap-1.5";

  let variantStyle = "";
  if (variant === "solid") {
    if (color === "teal") {
      variantStyle = "px-3.5 py-1.5 bg-teal-500 hover:bg-teal-450 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 text-[8px] rounded-lg shadow-sm";
    } else if (color === "emerald") {
      variantStyle = "px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-450 dark:bg-emerald-400 dark:hover:bg-emerald-350 text-slate-950 text-[8px] rounded-lg shadow-sm";
    } else {
      variantStyle = "px-3.5 py-1.5 bg-slate-950 dark:bg-slate-900 text-white text-[8px] rounded-lg border border-slate-800";
    }
  } else if (variant === "outline") {
    if (color === "teal") {
      variantStyle = "px-6 py-3 border border-slate-250/60 dark:border-slate-800/60 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-450 dark:hover:text-slate-950 rounded-xl text-[9px]";
    } else if (color === "emerald") {
      variantStyle = "px-6 py-3 border border-slate-250/60 dark:border-slate-800/60 text-emerald-600 dark:text-emerald-405 hover:bg-emerald-500 hover:text-slate-950 dark:hover:bg-emerald-450 dark:hover:text-slate-950 rounded-xl text-[9px]";
    } else {
      variantStyle = "px-6 py-3 border border-slate-250/60 dark:border-slate-800/60 text-slate-650 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl text-[9px]";
    }
  } else if (variant === "pill") {
    // Soft pill selectors
    variantStyle = "px-5 py-2.5 rounded-2xl text-[9px] tracking-wider shrink-0 border bg-white/20 dark:bg-slate-900/35 text-slate-550 dark:text-slate-400 border-slate-200/40 dark:border-slate-800/50 hover:bg-white/40 dark:hover:bg-slate-800/40 hover:text-slate-800 dark:hover:text-slate-200";
  } else if (variant === "text") {
    if (color === "teal") {
      variantStyle = "text-teal-600 dark:text-teal-450 font-black text-[10px] hover:text-teal-500";
    } else if (color === "emerald") {
      variantStyle = "text-emerald-600 dark:text-emerald-450 font-black text-[10px] hover:text-emerald-500";
    } else {
      variantStyle = "text-slate-500 dark:text-slate-400 font-black text-[10px] hover:text-slate-800 dark:hover:text-white";
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
