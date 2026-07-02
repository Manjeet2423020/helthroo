import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import short11 from "../assets/short11.jpg";
import short22 from "../assets/short22.jpg";
import { FaPlay } from "react-icons/fa";

const ShortVideo = () => {
  return (
    <section className="px-[10%] py-16 bg-transparent">
      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-100 pb-6">
        <div className="text-left">
          <h2 className="text-4xl font-black text-[#14384A] relative inline-block font-heading">
            Shorts Video
            <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#77E6DE]/60 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 text-lg mt-3 font-medium">
            Short clips that make complex updates easy to understand.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all duration-300">
            <FiChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all duration-300">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        
        {/* Video Card 1 */}
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-premium hover:shadow-xl duration-500">
          <img
            src={short11}
            alt="Hemoglobin video"
            className="w-full h-full object-cover group-hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
          
          {/* Pulsing Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-cyan/90 flex items-center justify-center shadow-lg group-hover:scale-110 duration-300">
            <FaPlay className="text-white text-base ml-1" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <span className="bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 text-brand-accent px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest rounded-md mb-2 inline-block">
              Nutrition
            </span>
            <h3 className="text-white text-sm font-extrabold leading-snug font-heading">
              Low Hemoglobin? Guava Juice May Be Beneficial!
            </h3>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-premium hover:shadow-xl duration-500">
          <img
            src={short22}
            alt="Food safety video"
            className="w-full h-full object-cover group-hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

          {/* Pulsing Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-cyan/90 flex items-center justify-center shadow-lg group-hover:scale-110 duration-300">
            <FaPlay className="text-white text-base ml-1" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <span className="bg-rose-500/20 backdrop-blur-md border border-rose-500/30 text-rose-300 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest rounded-md mb-2 inline-block">
              Food Safety
            </span>
            <h3 className="text-white text-sm font-extrabold leading-snug font-heading">
              Stop eating food served or packed in newspapers!
            </h3>
          </div>
        </div>

        {/* Video Card 3 (Placeholder for Grid symmetry/responsiveness) */}
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-premium hover:shadow-xl duration-500 hidden lg:block">
          <img
            src={short11}
            alt="Lifestyle tips"
            className="w-full h-full object-cover group-hover:scale-105 duration-500 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

          {/* Pulsing Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-cyan/90 flex items-center justify-center shadow-lg group-hover:scale-110 duration-300">
            <FaPlay className="text-white text-base ml-1" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <span className="bg-brand-mint/20 backdrop-blur-md border border-brand-mint/30 text-brand-mint px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest rounded-md mb-2 inline-block">
              Lifestyle
            </span>
            <h3 className="text-white text-sm font-extrabold leading-snug font-heading">
              How daily habits shape metabolic wellness
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShortVideo;
