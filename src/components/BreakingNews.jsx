const BreakingNews = () => {
  return (
    <div className="mx-[5%] md:mx-[10%] mt-28 mb-4 h-12 glass-premium rounded-2xl flex items-center overflow-hidden shadow-lg shadow-teal-500/2 border border-slate-200/40 dark:border-slate-800/30">
      {/* Fixed Left Section */}
      <div className="flex items-center gap-2 px-5 shrink-0 bg-white/10 dark:bg-slate-900/10 z-10 border-r border-slate-200/30 dark:border-slate-800/30 pr-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        </span>
        <h2 className="text-teal-600 dark:text-teal-400 font-black text-[10px] tracking-widest uppercase font-heading">
          Breaking
        </h2>
      </div>

      {/* Moving Text */}
      <div className="flex-1 overflow-hidden">
        {/* Pause marquee on hover */}
        <div className="flex items-center whitespace-nowrap animate-marquee gap-12 hover:[animation-play-state:paused] cursor-pointer">
          <div className="flex items-center gap-8">
            <p className="text-slate-650 dark:text-slate-300 text-[11px] font-bold tracking-wide">
              Health guidelines released for 2026
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2.5 py-0.5 text-[8px] font-black tracking-wider rounded-md">
              UPDATE
            </span>
            <p className="text-slate-650 dark:text-slate-300 text-[11px] font-bold tracking-wide">
              AI helping doctors detect diseases faster
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-rose-500/10 text-rose-500 px-2.5 py-0.5 text-[8px] font-black tracking-wider rounded-md">
              LIVE
            </span>
            <p className="text-slate-650 dark:text-slate-300 text-[11px] font-bold tracking-wide">
              New health guidelines released for 2026
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2.5 py-0.5 text-[8px] font-black tracking-wider rounded-md">
              UPDATE
            </span>
            <p className="text-slate-650 dark:text-slate-300 text-[11px] font-bold tracking-wide">
              WHO releases new vaccine report
            </p>
          </div>

          {/* Duplicate for seamless infinite loop */}
          <div className="flex items-center gap-8">
            <p className="text-slate-650 dark:text-slate-300 text-[11px] font-bold tracking-wide">
              Health guidelines released for 2026
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2.5 py-0.5 text-[8px] font-black tracking-wider rounded-md">
              UPDATE
            </span>
            <p className="text-slate-650 dark:text-slate-300 text-[11px] font-bold tracking-wide">
              AI helping doctors detect diseases faster
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-rose-500/10 text-rose-500 px-2.5 py-0.5 text-[8px] font-black tracking-wider rounded-md">
              LIVE
            </span>
            <p className="text-slate-650 dark:text-slate-300 text-[11px] font-bold tracking-wide">
              New health guidelines released for 2026
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2.5 py-0.5 text-[8px] font-black tracking-wider rounded-md">
              UPDATE
            </span>
            <p className="text-slate-650 dark:text-slate-300 text-[11px] font-bold tracking-wide">
              WHO releases new vaccine report
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
