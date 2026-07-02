import { useState } from "react";
import health1 from "../assets/health1.jpg";
import health2 from "../assets/health2.jpg";
import { FiActivity, FiArrowRight, FiShield, FiTrendingUp } from "react-icons/fi";

const TABS = [
  "General Health",
  "Women's Health",
  "Men's Health",
  "Child Health",
  "Mental Health",
  "Oral Health",
  "Sexual Health",
  "Senior Health"
];

const Health = () => {
  const [activeTab, setActiveTab] = useState("General Health");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg) translateY(-4px)`;
    
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
    <section className="px-[5%] md:px-[10%] py-16 bg-transparent relative z-20 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[-10%] w-80 h-80 bg-teal-500/5 dark:bg-teal-400/2 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6 text-left relative z-10">
        <div>
          <h2 className="text-3xl font-black text-slate-850 dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Health Columns
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-teal-500/15 dark:bg-teal-500/10 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold font-sans">
            In-depth reporting on primary care, pediatrics, and specialized health disciplines.
          </p>
        </div>

        <button className="magnetic-target text-teal-650 dark:text-teal-450 font-black text-[10px] hover:text-teal-500 transition-colors duration-200 uppercase tracking-widest cursor-pointer">
          View All Columns →
        </button>
      </div>

      {/* Tab controls - styled as high-tech selectors */}
      <div className="mt-8 flex gap-3 overflow-x-auto scrollbar-hide py-2 px-1 relative z-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-wider shrink-0 transition-all duration-300 border cursor-pointer ${
              activeTab === tab
                ? "bg-slate-950 text-teal-450 border-slate-950 dark:bg-slate-900 dark:text-teal-400 dark:border-teal-400 shadow-lg"
                : "bg-white/20 dark:bg-slate-900/35 text-slate-550 dark:text-slate-400 border-slate-200/40 dark:border-slate-800/50 hover:bg-white/40 dark:hover:bg-slate-800/40 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Technical Dashboard Grid Layout (Unbalanced 2-Column: Left 7 Cols, Right 5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 relative z-10">
        
        {/* Left Column: Big Clinical Spotlight Card (7 Cols) */}
        <div className="lg:col-span-7 gradient-border-wrapper rounded-3xl">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner group glass-card p-6 border-none cursor-pointer shadow-lg relative transition-all duration-350 flex flex-col justify-between h-[510px]"
          >
            <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            
            <div className="relative overflow-hidden h-[260px] rounded-2xl">
              <img
                src={health1}
                alt="Health Indicators"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Overlapping tech metrics overlay */}
              <div className="absolute bottom-4 left-4 bg-slate-950/90 text-teal-450 border border-teal-500/20 px-3 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-md">
                <FiActivity className="animate-pulse" /> DIAGNOSTICS ACTIVE
              </div>
            </div>

            <div className="text-left mt-6 flex-1">
              <span className="text-[8px] font-black tracking-widest text-teal-600 dark:text-teal-450 uppercase">
                {activeTab} • CLINICAL REPORT
              </span>
              <h3 className="text-lg font-black text-slate-800 dark:text-slate-200 leading-snug mt-2 font-heading group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                New study shows preventative screening cuts chronic care burdens
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-2 font-semibold">
                Rigorous early diagnostic checks help mitigate progression indicators for common metabolic concerns, improving baseline safety parameters.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Diagnostic Feed & Stats Widgets (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">
          
          {/* Feed Item 1 */}
          <div className="flex gap-4 cursor-pointer group p-5 rounded-3xl bg-white/20 dark:bg-slate-900/30 border border-slate-250/20 dark:border-slate-800/40 hover:bg-white/40 dark:hover:bg-slate-900/50 hover:shadow-md transition-all duration-300">
            <img
              src={health2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-slate-200/30 dark:border-slate-800/30"
            />
            <div className="flex flex-col justify-center">
              <span className="text-[7.5px] font-black tracking-widest text-teal-600 dark:text-teal-450 uppercase flex items-center gap-1">
                <FiTrendingUp /> CARDIOVASCULAR
              </span>
              <h4 className="text-xs font-black text-slate-800 dark:text-slate-250 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-450 transition-colors duration-200 line-clamp-2 mt-1">
                Cardiovascular insights: What modern screenings tend to miss
              </h4>
              <span className="text-[8px] text-slate-400 dark:text-slate-550 font-black mt-2 block">2 DAYS AGO</span>
            </div>
          </div>

          {/* Feed Item 2 */}
          <div className="flex gap-4 cursor-pointer group p-5 rounded-3xl bg-white/20 dark:bg-slate-900/30 border border-slate-250/20 dark:border-slate-800/40 hover:bg-white/40 dark:hover:bg-slate-900/50 hover:shadow-md transition-all duration-300">
            <img
              src={health1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-slate-200/30 dark:border-slate-800/30"
            />
            <div className="flex flex-col justify-center">
              <span className="text-[7.5px] font-black tracking-widest text-teal-600 dark:text-teal-450 uppercase flex items-center gap-1">
                <FiShield /> IMMUNOLOGY
              </span>
              <h4 className="text-xs font-black text-slate-800 dark:text-slate-250 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-450 transition-colors duration-200 line-clamp-2 mt-1">
                Pediatric guidelines are updating vaccination tracker targets
              </h4>
              <span className="text-[8px] text-slate-400 dark:text-slate-550 font-black mt-2 block">3 DAYS AGO</span>
            </div>
          </div>

          {/* Clinical Telemetry Stats Widget */}
          <div className="p-5 rounded-3xl bg-slate-950 dark:bg-slate-900 text-white flex flex-col justify-between border border-white/5 shadow-xl h-44">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[8px] font-black tracking-widest text-slate-400 uppercase">SYSTEM TELEMETRY</p>
                <h4 className="text-sm font-black mt-1 font-heading text-teal-450">METABOLIC COEFFICIENT</h4>
              </div>
              <FiActivity className="text-teal-400 animate-pulse text-base" />
            </div>

            <div className="flex items-end justify-between mt-4">
              <div>
                <p className="text-3xl font-black tracking-tight font-heading text-white">94.2%</p>
                <p className="text-[8px] font-black text-slate-400 mt-1 uppercase">BASELINE ADAPTATION RATING</p>
              </div>
              <button className="magnetic-target px-3.5 py-1.5 bg-teal-500 hover:bg-teal-450 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 font-black text-[8px] uppercase tracking-widest rounded-lg flex items-center gap-1 transition-all duration-300">
                Vitals <FiArrowRight />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Health;
