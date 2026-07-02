import { FaCircle } from "react-icons/fa";

const BreakingNews = () => {
  return (
    <div className="w-full px-[10%] h-12 border-b border-slate-100 flex items-center overflow-hidden bg-white shadow-sm">
      {/* Fixed Left */}
      <div className="flex items-center gap-2 px-4 shrink-0 bg-white z-10 border-r border-slate-200 pr-6">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
        </span>
        <h2 className="text-[#0D6B73] font-extrabold text-sm tracking-widest uppercase">
          Breaking
        </h2>
      </div>

      {/* Moving Text */}
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center whitespace-nowrap animate-marquee gap-12">
          <div className="flex items-center gap-6">
            <p className="text-slate-600 text-[13px] font-medium">
              Health guidelines released for 2026
            </p>
            <span className="text-slate-300">•</span>
            <span className="bg-brand-cyan/10 text-brand-cyan px-2.5 py-0.5 text-2xs font-extrabold tracking-wider rounded">
              UPDATE
            </span>
            <p className="text-slate-600 text-[13px] font-medium">
              AI helping doctors detect diseases faster
            </p>
            <span className="text-slate-300">•</span>
            <span className="bg-red-50 text-red-600 px-2.5 py-0.5 text-2xs font-extrabold tracking-wider rounded">
              LIVE
            </span>
            <p className="text-slate-600 text-[13px] font-medium">
              New health guidelines released for 2026
            </p>
            <span className="text-slate-300">•</span>
            <span className="bg-brand-cyan/10 text-brand-cyan px-2.5 py-0.5 text-2xs font-extrabold tracking-wider rounded">
              UPDATE
            </span>
            <p className="text-slate-600 text-[13px] font-medium">
              WHO releases new vaccine report
            </p>
          </div>

          {/* Duplicate for seamless infinite loop */}
          <div className="flex items-center gap-6">
            <p className="text-slate-600 text-[13px] font-medium">
              Health guidelines released for 2026
            </p>
            <span className="text-slate-300">•</span>
            <span className="bg-brand-cyan/10 text-brand-cyan px-2.5 py-0.5 text-2xs font-extrabold tracking-wider rounded">
              UPDATE
            </span>
            <p className="text-slate-600 text-[13px] font-medium">
              AI helping doctors detect diseases faster
            </p>
            <span className="text-slate-300">•</span>
            <span className="bg-red-50 text-red-600 px-2.5 py-0.5 text-2xs font-extrabold tracking-wider rounded">
              LIVE
            </span>
            <p className="text-slate-600 text-[13px] font-medium">
              New health guidelines released for 2026
            </p>
            <span className="text-slate-300">•</span>
            <span className="bg-brand-cyan/10 text-brand-cyan px-2.5 py-0.5 text-2xs font-extrabold tracking-wider rounded">
              UPDATE
            </span>
            <p className="text-slate-600 text-[13px] font-medium">
              WHO releases new vaccine report
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
