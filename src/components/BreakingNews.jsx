const BreakingNews = () => {
  return (
    <div className="mx-[5%] md:mx-[10%] my-6 h-12 glass-panel rounded-2xl flex items-center overflow-hidden shadow-premium border border-slate-200/40 dark:border-slate-800/30">
      {/* Fixed Left Section */}
      <div className="flex items-center gap-2 px-5 shrink-0 bg-transparent z-10 border-r border-slate-200/50 dark:border-slate-800/50 pr-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-450 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        </span>
        <h2 className="text-brand-cyan dark:text-brand-mint font-black text-[11px] tracking-widest uppercase font-heading">
          Breaking
        </h2>
      </div>

      {/* Moving Text */}
      <div className="flex-1 overflow-hidden">
        {/* Pause marquee on hover */}
        <div className="flex items-center whitespace-nowrap animate-marquee gap-12 hover:[animation-play-state:paused] cursor-pointer">
          <div className="flex items-center gap-6">
            <p className="text-slate-600 dark:text-slate-350 text-[12px] font-semibold">
              Health guidelines released for 2026
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-brand-cyan/10 dark:bg-brand-mint/10 text-brand-cyan dark:text-brand-mint px-2.5 py-0.5 text-[9px] font-black tracking-wider rounded-md">
              UPDATE
            </span>
            <p className="text-slate-600 dark:text-slate-350 text-[12px] font-semibold">
              AI helping doctors detect diseases faster
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-rose-500/10 text-rose-500 px-2.5 py-0.5 text-[9px] font-black tracking-wider rounded-md">
              LIVE
            </span>
            <p className="text-slate-600 dark:text-slate-350 text-[12px] font-semibold">
              New health guidelines released for 2026
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-brand-cyan/10 dark:bg-brand-mint/10 text-brand-cyan dark:text-brand-mint px-2.5 py-0.5 text-[9px] font-black tracking-wider rounded-md">
              UPDATE
            </span>
            <p className="text-slate-600 dark:text-slate-350 text-[12px] font-semibold">
              WHO releases new vaccine report
            </p>
          </div>

          {/* Duplicate for seamless infinite loop */}
          <div className="flex items-center gap-6">
            <p className="text-slate-600 dark:text-slate-350 text-[12px] font-semibold">
              Health guidelines released for 2026
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-brand-cyan/10 dark:bg-brand-mint/10 text-brand-cyan dark:text-brand-mint px-2.5 py-0.5 text-[9px] font-black tracking-wider rounded-md">
              UPDATE
            </span>
            <p className="text-slate-600 dark:text-slate-350 text-[12px] font-semibold">
              AI helping doctors detect diseases faster
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-rose-500/10 text-rose-500 px-2.5 py-0.5 text-[9px] font-black tracking-wider rounded-md">
              LIVE
            </span>
            <p className="text-slate-600 dark:text-slate-350 text-[12px] font-semibold">
              New health guidelines released for 2026
            </p>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="bg-brand-cyan/10 dark:bg-brand-mint/10 text-brand-cyan dark:text-brand-mint px-2.5 py-0.5 text-[9px] font-black tracking-wider rounded-md">
              UPDATE
            </span>
            <p className="text-slate-600 dark:text-slate-350 text-[12px] font-semibold">
              WHO releases new vaccine report
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
