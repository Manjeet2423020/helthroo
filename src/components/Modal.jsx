import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4">
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-lg glass-premium rounded-3xl p-6 shadow-2xl border border-slate-200/40 dark:border-slate-800/35 text-left z-10">
        <div className="flex justify-between items-center pb-4 border-b border-slate-200/25 dark:border-slate-800/25">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 dark:text-slate-200">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-slate-200/30 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:bg-white/20 dark:hover:bg-slate-800/20 transition-all cursor-pointer"
          >
            <FiX size={14} />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
