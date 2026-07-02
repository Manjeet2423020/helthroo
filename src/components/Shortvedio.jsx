import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import short11 from "../assets/short11.jpg";
import short22 from "../assets/short22.jpg";
import { FaPlay } from "react-icons/fa";

const ShortVideo = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 15}deg) rotateY(${x / 15}deg) translateY(-6px)`;
    
    const shine = card.querySelector(".card-shine");
    if (shine) {
      shine.style.left = `${e.clientX - box.left - 150}px`;
      shine.style.top = `${e.clientY - box.top - 150}px`;
      shine.style.opacity = "0.15";
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    const shine = card.querySelector(".card-shine");
    if (shine) {
      shine.style.opacity = "0";
    }
  };

  return (
    <section className="px-[5%] md:px-[10%] py-16 bg-transparent relative z-20">
      
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-[-5%] w-72 h-72 bg-teal-500/5 dark:bg-teal-400/2 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6">
        <div className="text-left">
          <h2 className="text-3xl font-black text-slate-850 dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Shorts Video
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-teal-500/20 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Short clips that make complex updates easy to understand.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="magnetic-target w-11 h-11 rounded-full border border-slate-200/60 dark:border-slate-800/80 bg-white/20 dark:bg-slate-900/30 flex items-center justify-center text-slate-500 hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer">
            <FiChevronLeft size={18} />
          </button>
          <button className="magnetic-target w-11 h-11 rounded-full border border-slate-200/60 dark:border-slate-800/80 bg-white/20 dark:bg-slate-900/30 flex items-center justify-center text-slate-500 hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        
        {/* Device card 1 */}
        <div className="gradient-border-wrapper rounded-3xl overflow-hidden shadow-2xl">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner relative aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer border-none transition-all duration-350 bg-slate-900"
          >
            <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            
            {/* Phone Bezel Frame Overlay */}
            <div className="absolute inset-2 rounded-2.5xl border border-white/10 z-20 pointer-events-none"></div>

            <img
              src={short11}
              alt="Hemoglobin video"
              className="w-full h-full object-cover group-hover:scale-105 duration-750 ease-out brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
            
            {/* Pulsing Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-teal-500/90 dark:bg-teal-400/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] duration-300 transition-all z-20">
              <FaPlay className="text-slate-950 text-base ml-1" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-left z-20">
              <span className="bg-teal-500 text-slate-950 px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded mb-3 inline-block">
                Nutrition
              </span>
              <h3 className="text-white text-base font-black leading-snug font-heading group-hover:text-teal-450 transition-colors duration-250">
                Low Hemoglobin? Guava Juice May Be Beneficial!
              </h3>
            </div>
          </div>
        </div>

        {/* Device card 2 */}
        <div className="gradient-border-wrapper rounded-3xl overflow-hidden shadow-2xl">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner relative aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer border-none transition-all duration-350 bg-slate-900"
          >
            <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            
            {/* Phone Bezel Frame Overlay */}
            <div className="absolute inset-2 rounded-2.5xl border border-white/10 z-20 pointer-events-none"></div>

            <img
              src={short22}
              alt="Food safety video"
              className="w-full h-full object-cover group-hover:scale-105 duration-750 ease-out brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>

            {/* Pulsing Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-teal-500/90 dark:bg-teal-400/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] duration-300 transition-all z-20">
              <FaPlay className="text-slate-950 text-base ml-1" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-left z-20">
              <span className="bg-rose-500 text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded mb-3 inline-block">
                Food Safety
              </span>
              <h3 className="text-white text-base font-black leading-snug font-heading group-hover:text-rose-400 transition-colors duration-250">
                Stop eating food served or packed in newspapers!
              </h3>
            </div>
          </div>
        </div>

        {/* Device card 3 */}
        <div className="gradient-border-wrapper rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner relative aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer border-none transition-all duration-350 bg-slate-900"
          >
            <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            
            {/* Phone Bezel Frame Overlay */}
            <div className="absolute inset-2 rounded-2.5xl border border-white/10 z-20 pointer-events-none"></div>

            <img
              src={short11}
              alt="Lifestyle tips"
              className="w-full h-full object-cover group-hover:scale-105 duration-750 ease-out brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>

            {/* Pulsing Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-teal-500/90 dark:bg-teal-400/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] duration-300 transition-all z-20">
              <FaPlay className="text-slate-950 text-base ml-1" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-left z-20">
              <span className="bg-teal-500 text-slate-950 px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded mb-3 inline-block">
                Lifestyle
              </span>
              <h3 className="text-white text-base font-black leading-snug font-heading group-hover:text-teal-450 transition-colors duration-250">
                How daily habits shape metabolic wellness
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShortVideo;
