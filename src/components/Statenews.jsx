import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiVolume2, FiArrowRight } from "react-icons/fi";
import state1 from "../assets/state1.jpg";
import news1 from "../assets/news1.jpg";
import reporter from "../assets/reporter.jpg";

const TABS = [
  "Delhi NCR",
  "Uttar Pradesh",
  "Uttarakhand",
  "Bihar",
  "Jharkhand",
  "Punjab",
  "Chhattisgarh",
  "Haryana",
];

const StateNews = () => {
  const [activeTab, setActiveTab] = useState("Delhi NCR");

  const newsList = [
    { id: 1, title: "Delhi High Court Denies Relief to Telegram, Temporary Ban to Continue Until June 22", image: news1 },
    { id: 2, title: "Delhi: Heavy Rainfall Across Several Parts of the National Capital Brings Relief as Weather Changes Suddenly", image: news1 },
    { id: 3, title: "CM Rekha Gupta's Mega Campaign Draws Thousands of Participants", image: news1 },
    { id: 4, title: "Parvesh Verma Joins Yamuna Clean-up Drive, Calls Public Participation Crucial for Restoring the River", image: news1 },
  ];

  const reporterNews = [
    { id: 1, title: "Village clinic reopens after community push", source: "Janta Reporter" },
    { id: 2, title: "District health coordination strengthens system delivery", source: "Janta Reporter" },
    { id: 3, title: "Clean water drive cuts local fever cases", source: "Janta Reporter" },
    { id: 4, title: "Hospital staffing updates shape service delivery picture", source: "Janta Reporter" },
    { id: 5, title: "Free eye camp screens 400 in two days", source: "Janta Reporter" },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 18}deg) rotateY(${x / 18}deg) translateY(-4px)`;
    
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
      
      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6">
        <div className="text-left">
          <h2 className="text-3xl font-black text-slate-850 dark:text-white relative inline-block font-heading uppercase tracking-widest">
            State News
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-teal-500/20 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Latest updates from every state across India.
          </p>
        </div>
      </div>

      {/* Sliding Tab Indicator bar */}
      <div className="mt-10 border border-slate-200/40 dark:border-slate-800/30 glass-premium rounded-2xl overflow-hidden shadow-lg">
        <div className="flex items-center justify-between">
          <button className="w-12 h-14 border-r border-slate-200/25 dark:border-slate-800/25 flex items-center justify-center text-slate-500 dark:text-slate-450 hover:bg-white/20 dark:hover:bg-slate-800/20 transition-colors shrink-0 cursor-pointer">
            <FiChevronLeft size={20} />
          </button>
          
          <div className="flex flex-1 overflow-x-auto scrollbar-hide bg-transparent relative">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 h-14 text-[10px] font-black uppercase tracking-widest shrink-0 transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "text-teal-600 dark:text-teal-400 font-extrabold"
                    : "text-slate-450 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-250"
                }`}
              >
                <span className="relative z-10">{tab}</span>
                {/* Active slider highlight */}
                {activeTab === tab && (
                  <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-teal-500 to-sky-400 z-20"></div>
                )}
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-teal-500/5 dark:bg-teal-400/5 z-0"></div>
                )}
              </button>
            ))}
          </div>

          <button className="w-12 h-14 border-l border-slate-200/25 dark:border-slate-800/25 flex items-center justify-center text-slate-500 dark:text-slate-450 hover:bg-white/20 dark:hover:bg-slate-800/20 transition-colors shrink-0 cursor-pointer">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        
        {/* Left Column - Big Featured Card */}
        <div className="lg:col-span-4 gradient-border-wrapper rounded-3xl">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner group glass-card overflow-hidden shadow-lg cursor-pointer flex flex-col justify-between h-full border-none relative"
          >
            <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <div>
              <div className="relative overflow-hidden h-[250px] rounded-t-3xl">
                <img
                  src={state1}
                  alt="ILBS Director"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-slate-900/90 text-teal-450 border border-teal-500/20 px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-md z-20 shadow-sm">
                  {activeTab}
                </span>
              </div>
              
              <div className="p-6 text-left relative z-20">
                <h3 className="text-base font-black text-slate-800 dark:text-slate-200 leading-snug font-heading group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                  ILBS Director Dr. Sarin's Advice: Enjoy Medicine and Always Keep a Learning Mindset
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-3.5 line-clamp-4 font-semibold">
                  Ahead of National Doctors' Day 2026, Dr. Shiv Kumar Sarin, Founder Director of the Institute of Liver and Biliary Sciences (ILBS), shared an important message for young doctors and medical students.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 relative z-20">
              <button className="magnetic-target w-full py-3 bg-teal-500 text-slate-950 dark:bg-teal-400 dark:text-slate-950 font-black text-[9px] uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 hover:shadow-lg hover:shadow-teal-500/10">
                Read Full Article <FiArrowRight size={10} />
              </button>
            </div>
          </div>
        </div>

        {/* Center Column - News Feed */}
        <div className="lg:col-span-5 border border-slate-200/40 dark:border-slate-800/30 glass-premium rounded-3xl overflow-hidden shadow-lg flex flex-col divide-y divide-slate-200/25 dark:divide-slate-800/25 text-left">
          {newsList.map((news) => (
            <div
              key={news.id}
              className="flex gap-4 p-5 hover:bg-white/40 dark:hover:bg-slate-900/40 transition-colors duration-250 cursor-pointer items-center group"
            >
              <img
                src={news.image}
                alt=""
                className="w-16 h-16 object-cover rounded-xl shrink-0 shadow-sm border border-slate-200/30 dark:border-slate-850/50"
              />
              <div>
                <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 line-clamp-2">
                  {news.title}
                </h4>
                <span className="text-[8px] font-black tracking-widest text-slate-400 dark:text-slate-500 mt-2 block uppercase">
                  {activeTab} • 2 Hours Ago
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Janta Reporter Sidebar */}
        <div className="lg:col-span-3 border border-slate-200/40 dark:border-slate-800/30 glass-premium rounded-3xl overflow-hidden shadow-lg flex flex-col text-left">
          {/* Header */}
          <div className="bg-slate-950 dark:bg-slate-900/50 text-teal-400 flex items-center gap-2.5 px-6 py-4.5 border-b border-white/5">
            <FiVolume2 className="text-base animate-pulse text-teal-400" />
            <h3 className="text-[9px] font-black tracking-widest uppercase font-heading">
              Janta Reporter
            </h3>
          </div>

          {/* List */}
          <div className="divide-y divide-slate-200/20 dark:divide-slate-800/35 flex-1 flex flex-col justify-between py-2">
            {reporterNews.map((news) => (
              <div
                key={news.id}
                className="flex gap-3 px-5 py-3.5 hover:bg-white/40 dark:hover:bg-slate-900/40 transition-colors duration-200 cursor-pointer group"
              >
                <img
                  src={reporter}
                  alt=""
                  className="w-10 h-10 object-cover rounded-lg shrink-0 shadow-sm border border-slate-200/30 dark:border-slate-850/50"
                />
                <div>
                  <h4 className="text-[11px] font-black text-slate-750 dark:text-slate-250 leading-snug line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                    {news.title}
                  </h4>
                  <span className="text-[7.5px] font-black tracking-widest text-slate-400 dark:text-slate-500 mt-1 block uppercase">
                    CIVIC DIGEST
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer View All */}
          <div className="p-4.5 border-t border-slate-200/25 dark:border-slate-800/25 bg-white/10 dark:bg-slate-900/10 flex justify-center">
            <button className="magnetic-target text-teal-600 dark:text-teal-450 font-black text-[9px] uppercase tracking-widest flex items-center gap-1 hover:text-teal-700">
              View All Reports <FiArrowRight size={10} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StateNews;
