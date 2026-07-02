import { useState, useRef, useEffect } from "react";
import { FiWind, FiCheckCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import card1 from "../assets/card1.jpg";

const AQI_DATA = {
  Delhi: { aqi: 142, status: "Moderate", color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200/55 dark:border-amber-500/25", tip: "Sensitive groups should wear masks outdoors." },
  Mumbai: { aqi: 68, status: "Good", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200/55 dark:border-emerald-500/25", tip: "Air quality is ideal for outdoor activities." },
  Bengaluru: { aqi: 45, status: "Excellent", color: "text-teal-600 bg-teal-50 dark:bg-teal-500/10 dark:text-teal-400 border-teal-200/55 dark:border-teal-500/25", tip: "Perfect day for morning yoga or runs." }
};

const Hero = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [voted, setVoted] = useState(false);
  const [votePercentages, setVotePercentages] = useState({ lessThan1: 32, oneToTwo: 48, twoPlus: 20 });
  const headingRef = useRef(null);

  useEffect(() => {
    // Reveal text mask animate-in
    const masks = headingRef.current?.querySelectorAll(".text-mask");
    if (masks) {
      gsap.fromTo(
        headingRef.current.querySelectorAll(".text-mask-span"),
        { translateY: "105%" },
        { translateY: "0%", duration: 1.2, ease: "power4.out", stagger: 0.1 }
      );
    }
  }, []);

  const handleVote = (option) => {
    if (voted) return;
    setVoted(true);
    const updated = { ...votePercentages };
    updated[option] = updated[option] + 1;
    const total = updated.lessThan1 + updated.oneToTwo + updated.twoPlus;
    setVotePercentages({
      lessThan1: Math.round((updated.lessThan1 / total) * 100),
      oneToTwo: Math.round((updated.oneToTwo / total) * 100),
      twoPlus: Math.round((updated.twoPlus / total) * 100)
    });
  };

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

  const currentAQI = AQI_DATA[selectedCity];

  return (
    <div className="w-full">
      {/* Top Hero Section */}
      <section className="px-[5%] md:px-[10%] py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Big Card with 3D Tilt & Shine */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative lg:col-span-2 h-[520px] rounded-3xl overflow-hidden group shadow-premium transition-all duration-350 cursor-pointer border border-white/20 dark:border-slate-800/40"
          >
            <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <img
              src={hero1}
              alt="National Pulse Polio Campaign"
              className="w-full h-full object-cover group-hover:scale-103 duration-700 ease-out"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10"></div>

            <div className="absolute bottom-8 left-8 right-8 text-left z-20">
              <span className="bg-brand-mint text-brand-dark px-3.5 py-1.5 text-[9px] font-black tracking-widest rounded-md uppercase shadow-sm">
                National
              </span>
              <div ref={headingRef} className="mt-4">
                <h1 className="text-white text-2.5xl md:text-3.5xl font-black leading-tight font-heading select-none">
                  <span className="text-mask block"><span className="text-mask-span">National Pulse Polio Campaign Launched,</span></span>
                  <span className="text-mask block"><span className="text-mask-span">Polio Drops Given to Children Across the Country</span></span>
                </h1>
              </div>
              <p className="text-slate-300 text-[11px] mt-4 font-semibold tracking-wide">Jun 28, 2026</p>
            </div>
          </div>

          {/* Right Side 2x2 Grid with Tilt */}
          <div className="grid grid-cols-2 gap-4 h-[520px]">
            {/* Card 1 */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-2xl overflow-hidden group shadow-premium transition-all duration-350 cursor-pointer border border-white/20 dark:border-slate-800/40"
            >
              <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              <img
                src={hero2}
                alt="Mann Ki Baat"
                className="w-full h-full object-cover group-hover:scale-103 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                <h2 className="text-white font-black text-xs md:text-[13px] leading-snug font-heading">
                  PM Modi Highlights Birds, Yoga and Farmers in the 135th Episode
                </h2>
                <p className="text-slate-450 text-[9px] mt-2 font-bold">Jun 28, 2026</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-2xl overflow-hidden group shadow-premium transition-all duration-350 cursor-pointer border border-white/20 dark:border-slate-800/40"
            >
              <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              <img
                src={hero3}
                alt="Aarogya Setu 2.0"
                className="w-full h-full object-cover group-hover:scale-103 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                <h2 className="text-white font-black text-xs md:text-[13px] leading-snug font-heading">
                  Aarogya Setu 2.0: JP Nadda to Launch India's Unified Platform
                </h2>
                <p className="text-slate-455 text-[9px] mt-2 font-bold">Jun 28, 2026</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-2xl overflow-hidden group shadow-premium transition-all duration-350 cursor-pointer border border-white/20 dark:border-slate-800/40"
            >
              <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              <img
                src={hero4}
                alt="Pharma Reforms"
                className="w-full h-full object-cover group-hover:scale-103 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                <h2 className="text-white font-black text-xs md:text-[13px] leading-snug font-heading">
                  No Criminal Action for Minor Technical Violations: Reforms
                </h2>
                <p className="text-slate-455 text-[9px] mt-2 font-bold">Jun 27, 2026</p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-2xl overflow-hidden group shadow-premium transition-all duration-350 cursor-pointer border border-white/20 dark:border-slate-800/40"
            >
              <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              <img
                src={hero5}
                alt="Government Doctors"
                className="w-full h-full object-cover group-hover:scale-103 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                <h2 className="text-white font-black text-xs md:text-[13px] leading-snug font-heading">
                  Government Doctors Doing Private Practice is a Concern: SC
                </h2>
                <p className="text-slate-455 text-[9px] mt-2 font-bold">Jun 25, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Main Content Block */}
      <section className="mx-[5%] md:mx-[10%] mb-12 glass-panel p-6 md:p-12 rounded-3xl shadow-premium border border-slate-200/40 dark:border-slate-800/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Featured News article) */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden group shadow-premium transition-all duration-350 cursor-pointer h-[580px] border border-white/20 dark:border-slate-800/40"
          >
            <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <img
              src={hero6}
              alt="Health Awareness"
              className="w-full h-full object-cover group-hover:scale-103 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
            
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-left z-20">
              {/* Card Tag */}
              <div className="flex items-center gap-3">
                <span className="bg-brand-cyan text-white px-3.5 py-1 text-[10px] font-black tracking-widest rounded uppercase">
                  National
                </span>
                <span className="text-slate-350 text-[10px] font-black tracking-wider">
                  2 MIN READ
                </span>
              </div>

              {/* Title & Preview */}
              <div>
                <h2 className="text-white text-2.5xl md:text-3xl font-black leading-tight font-heading">
                  Perspective on Health Has Changed, Focus Now on Prevention and Better Lifestyle Along with Treatment
                </h2>
                <p className="text-slate-350 mt-4 text-xs leading-relaxed line-clamp-3 font-medium">
                  Health Awareness: Health is the foundation of a strong and developed nation. When citizens are healthy, productivity increases, economic growth accelerates, and community resilience strengthens...
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-6 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-slate-850 flex items-center justify-center font-black text-white uppercase text-xs border border-white/10">
                    KS
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black capitalize">Kavita Singh</h4>
                    <p className="text-slate-400 text-[10px] font-bold">Health Correspondent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column (Read More list inside glass panel) */}
          <div className="lg:col-span-3 flex flex-col glass-card rounded-2xl overflow-hidden justify-between border border-slate-200/40 dark:border-slate-800/30">
            {/* List Header */}
            <div className="p-5 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/20 dark:bg-slate-900/10">
              <h3 className="text-slate-850 dark:text-slate-200 font-black text-xs tracking-widest font-heading uppercase">RECOMMENDED READS</h3>
            </div>

            {/* List Items */}
            <div className="divide-y divide-slate-200/40 dark:divide-slate-800/40 flex-1 flex flex-col justify-around bg-transparent">
              {/* Item 1 */}
              <div className="flex gap-4 p-5 hover:bg-white/30 dark:hover:bg-slate-800/20 transition-colors duration-200 cursor-pointer text-left group">
                <img src={card1} alt="" className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10" />
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint uppercase">National</span>
                  <h4 className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2">
                    Government Takes Major Step to Improve Healthcare Facilities
                  </h4>
                  <button className="flex items-center gap-1.5 mt-2 text-brand-cyan dark:text-brand-mint font-black text-[10px] group-hover:translate-x-1 duration-200 uppercase tracking-widest cursor-pointer">
                    READ MORE <FaArrowRight size={8} />
                  </button>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 p-5 hover:bg-white/30 dark:hover:bg-slate-800/20 transition-colors duration-200 cursor-pointer text-left group">
                <img src={card1} alt="" className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10" />
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint uppercase">National</span>
                  <h4 className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2">
                    Rural India Diagnostics Infrastructure Receives New Budget Allocation
                  </h4>
                  <button className="flex items-center gap-1.5 mt-2 text-brand-cyan dark:text-brand-mint font-black text-[10px] group-hover:translate-x-1 duration-200 uppercase tracking-widest cursor-pointer">
                    READ MORE <FaArrowRight size={8} />
                  </button>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 p-5 hover:bg-white/30 dark:hover:bg-slate-800/20 transition-colors duration-200 cursor-pointer text-left group">
                <img src={card1} alt="" className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10" />
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint uppercase">National</span>
                  <h4 className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2">
                    New AI Guidelines Drafted for Public Health Centers in India
                  </h4>
                  <button className="flex items-center gap-1.5 mt-2 text-brand-cyan dark:text-brand-mint font-black text-[10px] group-hover:translate-x-1 duration-200 uppercase tracking-widest cursor-pointer">
                    READ MORE <FaArrowRight size={8} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Live Health Hub - Interactive Widgets) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Widget 1: AQI & Weather Monitor */}
            <div className="glass-card p-6 rounded-2xl shadow-premium text-left border border-slate-200/40 dark:border-slate-800/30">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="flex items-center gap-2">
                  <FiWind className="text-brand-cyan dark:text-brand-mint text-lg" />
                  <h3 className="font-black text-xs text-slate-800 dark:text-slate-250 tracking-widest font-heading uppercase">AQI MONITOR</h3>
                </div>
                <div className="flex gap-1">
                  {Object.keys(AQI_DATA).map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border transition-all duration-200 cursor-pointer ${
                        selectedCity === city
                          ? "bg-brand-cyan text-white border-brand-cyan dark:bg-brand-mint dark:text-slate-900 dark:border-brand-mint"
                          : "bg-white/20 text-slate-500 border-slate-200/60 dark:border-slate-800/80 dark:text-slate-400 hover:bg-white/40 dark:hover:bg-slate-800/40"
                      }`}
                    >
                      {city.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-3xl font-black text-slate-800 dark:text-white tracking-tight font-heading">{currentAQI.aqi}</p>
                  <p className="text-[10px] font-bold text-slate-405 mt-0.5">PM2.5 Index</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold border ${currentAQI.color}`}>
                  {currentAQI.status}
                </span>
              </div>

              <div className="mt-5 p-3.5 bg-white/30 dark:bg-slate-900/30 rounded-xl border border-slate-200/30 dark:border-slate-800/30">
                <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed font-semibold">
                  {currentAQI.tip}
                </p>
              </div>
            </div>

            {/* Widget 2: Interactive Health Poll */}
            <div className="glass-card p-6 rounded-2xl shadow-premium text-left border border-slate-200/40 dark:border-slate-800/30">
              <h3 className="font-black text-xs text-slate-800 dark:text-slate-250 tracking-widest pb-3 border-b border-slate-200/50 dark:border-slate-800/50 font-heading uppercase">
                HEALTH POLL
              </h3>
              
              <p className="text-xs font-bold text-slate-600 dark:text-slate-350 mt-4 leading-relaxed">
                How much water have you consumed so far today?
              </p>

              <div className="mt-4 space-y-2.5">
                {!voted ? (
                  <>
                    <button
                      onClick={() => handleVote("lessThan1")}
                      className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-slate-700 dark:text-slate-305 bg-white/10 hover:border-brand-cyan hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 dark:hover:border-brand-mint transition-all duration-200 cursor-pointer"
                    >
                      Less than 1 Litre
                    </button>
                    <button
                      onClick={() => handleVote("oneToTwo")}
                      className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-slate-700 dark:text-slate-305 bg-white/10 hover:border-brand-cyan hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 dark:hover:border-brand-mint transition-all duration-200 cursor-pointer"
                    >
                      1 to 2 Litres
                    </button>
                    <button
                      onClick={() => handleVote("twoPlus")}
                      className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-slate-700 dark:text-slate-305 bg-white/10 hover:border-brand-cyan hover:bg-brand-cyan/5 dark:hover:bg-brand-mint/5 dark:hover:border-brand-mint transition-all duration-200 cursor-pointer"
                    >
                      More than 2 Litres
                    </button>
                  </>
                ) : (
                  <div className="space-y-3 mt-2">
                    {/* Option 1 Bar */}
                    <div>
                      <div className="flex justify-between text-[10px] font-black text-slate-650 dark:text-slate-400 mb-1">
                        <span>&lt; 1 Litre</span>
                        <span>{votePercentages.lessThan1}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-850 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-450 rounded-full transition-all duration-500" style={{ width: `${votePercentages.lessThan1}%` }}></div>
                      </div>
                    </div>
                    {/* Option 2 Bar */}
                    <div>
                      <div className="flex justify-between text-[10px] font-black text-slate-650 dark:text-slate-400 mb-1">
                        <span>1 - 2 Litres</span>
                        <span>{votePercentages.oneToTwo}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-850 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-cyan dark:bg-brand-mint rounded-full transition-all duration-500" style={{ width: `${votePercentages.oneToTwo}%` }}></div>
                      </div>
                    </div>
                    {/* Option 3 Bar */}
                    <div>
                      <div className="flex justify-between text-[10px] font-black text-slate-650 dark:text-slate-400 mb-1">
                        <span>2+ Litres</span>
                        <span>{votePercentages.twoPlus}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-850 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${votePercentages.twoPlus}%` }}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 bg-emerald-50/50 border border-emerald-100/40 p-2 rounded-lg mt-3 dark:bg-emerald-500/10 dark:text-emerald-450 dark:border-emerald-500/20">
                      <FiCheckCircle size={12} className="shrink-0" /> Vote recorded. Thank you!
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
