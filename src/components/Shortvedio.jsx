import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import short11 from "../assets/short11.jpg";
import short22 from "../assets/short22.jpg";
import { FaPlay } from "react-icons/fa";

const ShortVideo = () => {
  return (
    <section className="px-[10%] py-16 bg-transparent">
      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6">
        <div className="text-left">
          <h2 className="text-3xl font-black text-brand-dark dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Shorts Video
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-brand-accent/35 dark:bg-brand-mint/15 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Short clips that make complex updates easy to understand.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="w-11 h-11 rounded-full border border-slate-200/60 dark:border-slate-800/80 bg-white/20 dark:bg-slate-900/30 flex items-center justify-center text-slate-400 hover:border-brand-mint hover:bg-brand-mint/10 hover:text-brand-cyan dark:hover:text-brand-mint transition-all duration-300 cursor-pointer">
            <FiChevronLeft size={18} />
          </button>
          <button className="w-11 h-11 rounded-full border border-brand-mint/80 bg-white/20 dark:bg-slate-900/30 flex items-center justify-center text-brand-cyan dark:text-brand-mint hover:bg-brand-cyan hover:text-white dark:hover:bg-brand-mint dark:hover:text-slate-900 transition-all duration-300 cursor-pointer">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        
        {/* Video Card 1 */}
        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer shadow-premium shadow-hover border border-slate-200/30 dark:border-slate-800/25">
          <img
            src={short11}
            alt="Hemoglobin video"
            className="w-full h-full object-cover group-hover:scale-105 duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
          
          {/* Pulsing Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-brand-cyan/95 dark:bg-brand-mint/95 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,201,184,0.6)] duration-355 transition-all">
            <FaPlay className="text-white dark:text-slate-900 text-lg ml-1" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <span className="bg-brand-accent/25 dark:bg-brand-mint/20 backdrop-blur-md border border-brand-accent/35 dark:border-brand-mint/30 text-brand-accent dark:text-brand-mint px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-md mb-3 inline-block">
              Nutrition
            </span>
            <h3 className="text-white text-base font-extrabold leading-snug font-heading group-hover:text-brand-accent dark:group-hover:text-brand-mint transition-colors duration-200">
              Low Hemoglobin? Guava Juice May Be Beneficial!
            </h3>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer shadow-premium shadow-hover border border-slate-200/30 dark:border-slate-800/25">
          <img
            src={short22}
            alt="Food safety video"
            className="w-full h-full object-cover group-hover:scale-105 duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

          {/* Pulsing Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-brand-cyan/95 dark:bg-brand-mint/95 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,201,184,0.6)] duration-355 transition-all">
            <FaPlay className="text-white dark:text-slate-900 text-lg ml-1" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <span className="bg-rose-500/20 backdrop-blur-md border border-rose-500/30 text-rose-350 px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-md mb-3 inline-block">
              Food Safety
            </span>
            <h3 className="text-white text-base font-extrabold leading-snug font-heading group-hover:text-rose-350 transition-colors duration-200">
              Stop eating food served or packed in newspapers!
            </h3>
          </div>
        </div>

        {/* Video Card 3 */}
        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer shadow-premium shadow-hover border border-slate-200/30 dark:border-slate-800/25 hidden lg:block">
          <img
            src={short11}
            alt="Lifestyle tips"
            className="w-full h-full object-cover group-hover:scale-105 duration-700 ease-out filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

          {/* Pulsing Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-brand-cyan/95 dark:bg-brand-mint/95 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,201,184,0.6)] duration-355 transition-all">
            <FaPlay className="text-white dark:text-slate-900 text-lg ml-1" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <span className="bg-brand-mint/20 backdrop-blur-md border border-brand-mint/30 text-brand-mint px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-md mb-3 inline-block">
              Lifestyle
            </span>
            <h3 className="text-white text-base font-extrabold leading-snug font-heading group-hover:text-brand-mint transition-colors duration-200">
              How daily habits shape metabolic wellness
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShortVideo;
