import { useState } from "react";
import medical1 from "../assets/medical1.jpg";
import { FiBookOpen, FiAward, FiActivity, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const HIGHLIGHTS = [
  {
    id: 1,
    icon: <FiActivity className="text-teal-500 text-base dark:text-teal-400" />,
    journal: "JAMA Internal Medicine • May 2026",
    title: "Mediterranean Diet Associated with 23% Lower Risk of Mortality in Women",
    badge: "23% Reduction",
    badgeColor: "bg-teal-500/10 text-teal-600 border-teal-500/20 dark:text-teal-400",
    desc: "A long-term study tracking over 25,000 women finds substantial cardiovascular and longevity benefits from healthy fat intake.",
    chartVal: 23
  },
  {
    id: 2,
    icon: <FiAward className="text-sky-500 text-base dark:text-sky-400" />,
    journal: "Lancet Digital Health • June 2026",
    title: "AI Model Predicts Early-Stage Alzheimer's with 99% Accuracy",
    badge: "99% Accuracy",
    badgeColor: "bg-sky-500/10 text-sky-600 border-sky-500/20 dark:text-sky-400",
    desc: "A new deep learning model analyzes subtle structural brain changes from standard MRI scans years before symptoms manifest.",
    chartVal: 99
  },
  {
    id: 3,
    icon: <FiTrendingUp className="text-emerald-500 text-base dark:text-emerald-400" />,
    journal: "The Lancet • May 2026",
    title: "New Malaria Vaccine Shows High Efficacy of 77% in Phase 3 Trials",
    badge: "77% Efficacy",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
    desc: "The R21/Matrix-M malaria vaccine meets the WHO-specified target efficacy, promising a breakthrough in child healthcare.",
    chartVal: 77
  },
  {
    id: 4,
    icon: <FiBookOpen className="text-purple-500 text-base dark:text-purple-400" />,
    journal: "Circulation Journal • June 2026",
    title: "Daily 20-Minute Brisk Walk Significantly Lowers Cardiovascular Risks",
    badge: "Heart Health",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
    desc: "Consistent moderate exercise shows a major preventive effect against coronary diseases, independent of age or genetics.",
    chartVal: 65
  }
];

const Medical = () => {
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
    <section className="px-[5%] md:px-[10%] py-16 bg-transparent relative z-20">
      
      {/* Background radial glow */}
      <div className="absolute top-[30%] right-[-5%] w-72 h-72 bg-emerald-500/5 dark:bg-emerald-450/2 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6">
        <div className="text-left">
          <h2 className="text-3xl font-black text-slate-850 dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Medical Research
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-teal-500/20 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Latest studies and findings, summarized for quick reading.
          </p>
        </div>

        <button className="magnetic-target px-6 py-3 border border-slate-250/60 dark:border-slate-800/60 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-450 dark:hover:text-slate-950 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer">
          View All Studies
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        
        {/* Left Column: Big Featured Spotlight Card (4 Cols) */}
        <div className="lg:col-span-4 gradient-border-wrapper rounded-3xl">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner group glass-card overflow-hidden cursor-pointer shadow-lg transition-all flex flex-col h-full justify-between border-none relative"
          >
            <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <div>
              <div className="overflow-hidden h-64 rounded-t-3xl relative z-10">
                <img
                  src={medical1}
                  alt="Guava Juice"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-6 relative z-10 text-left">
                <span className="text-[8px] font-black tracking-widest text-slate-400 block uppercase">
                  May 26, 2026 • BMJ Journals
                </span>
                <h3 className="mt-3 text-base font-black leading-snug text-slate-850 dark:text-slate-200 group-hover:text-teal-650 dark:group-hover:text-teal-400 transition-colors duration-200 font-heading">
                  Guava Juice May Help Boost Hemoglobin Levels
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-3 leading-relaxed font-semibold">
                  Recent trials show vitamin C rich guava extracts significantly aid iron absorption and help manage anemia symptoms naturally.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 relative z-10 text-left">
              <button className="magnetic-target flex items-center gap-1.5 uppercase tracking-widest text-teal-600 dark:text-teal-400 hover:text-teal-500 font-black text-[9px] transition-colors duration-200 cursor-pointer">
                View Abstract <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Highlights Grid with mini analytical charts (8 Cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="glass-premium p-6 rounded-3xl flex flex-col justify-between shadow-md group cursor-pointer border border-slate-200/40 dark:border-slate-800/30 hover:border-teal-500/30 transition-all duration-300"
            >
              <div>
                {/* Journal & Icon */}
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                    {item.journal}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 flex items-center justify-center shadow-sm shrink-0">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xs font-black text-slate-850 dark:text-slate-200 leading-snug mt-4 group-hover:text-teal-650 dark:group-hover:text-teal-400 duration-200 font-heading">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>

              {/* Research Metrics Chart */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between text-[8px] font-black text-slate-450 dark:text-slate-500 uppercase tracking-wider">
                  <span>CLINICAL CONFIDENCE</span>
                  <span>{item.chartVal}%</span>
                </div>
                <div className="h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-sky-400 rounded-full transition-all duration-500"
                    style={{ width: `${item.chartVal}%` }}
                  ></div>
                </div>
              </div>

              {/* Footer Badges */}
              <div className="mt-5 pt-4 border-t border-slate-200/25 dark:border-slate-800/25 flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded border text-[8px] font-black uppercase tracking-wider ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <span className="text-[8px] font-black text-teal-600 dark:text-teal-400 group-hover:translate-x-1 duration-200 flex items-center gap-1 uppercase tracking-widest">
                  Abstract <FiArrowRight />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Medical;
