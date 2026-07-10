import React from "react";

const SectionTitle = ({
  title,
  subtitle,
  highlightColor = "bg-teal-500/15 dark:bg-teal-500/10",
  rightAction,
  className = ""
}) => {
  return (
    <div className={`flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6 text-left relative z-10 ${className}`}>
      <div>
        <h2 className="text-3xl font-black text-slate-855 dark:text-white relative inline-block font-heading uppercase tracking-widest">
          {title}
          <span className={`absolute left-0 bottom-0.5 w-full h-2.5 ${highlightColor} -z-10 rounded`}></span>
        </h2>
        {subtitle && (
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold font-sans">
            {subtitle}
          </p>
        )}
      </div>
      {rightAction && (
        <div className="shrink-0">
          {rightAction}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
