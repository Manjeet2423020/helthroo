import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiVolume2 } from "react-icons/fi";
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

  return (
    <section className="px-[10%] py-16 bg-transparent">
      {/* Heading */}
      <div className="text-left">
        <h2 className="text-4xl font-black text-[#16354A] relative inline-block font-heading">
          State News
          <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#78E5DE]/60 -z-10 rounded"></span>
        </h2>
        <p className="text-slate-500 text-lg mt-3 font-medium">
          Latest updates from every state across India.
        </p>
      </div>

      {/* Tabs Bar */}
      <div className="mt-10 border border-slate-100 bg-white rounded-xl shadow-premium overflow-hidden">
        <div className="flex items-center justify-between">
          <button className="w-12 h-14 border-r border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors shrink-0">
            <FiChevronLeft size={20} />
          </button>
          
          <div className="flex flex-1 overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 h-14 text-xs font-extrabold uppercase tracking-wider shrink-0 transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? "text-brand-cyan border-brand-cyan bg-brand-cyan/5"
                    : "text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-50/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button className="w-12 h-14 border-l border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors shrink-0">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        
        {/* Left Featured Card (col-span-4) */}
        <div className="lg:col-span-4 border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-premium group cursor-pointer shadow-hover text-left flex flex-col justify-between">
          <div>
            <div className="relative overflow-hidden h-[260px]">
              <img
                src={state1}
                alt="ILBS Director Sarin"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
              <span className="absolute top-4 left-4 bg-brand-cyan text-white px-3 py-1 text-3xs font-extrabold uppercase tracking-widest rounded-md">
                {activeTab}
              </span>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-extrabold text-slate-800 leading-snug font-heading group-hover:text-brand-cyan transition-colors duration-200">
                ILBS Director Dr. Sarin's Advice: Enjoy Medicine and Always Keep a Learning Mindset
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mt-3 line-clamp-4 font-medium">
                New Delhi: Ahead of National Doctors' Day 2026, Dr. Shiv Kumar Sarin, Founder Director of the Institute of Liver and Biliary Sciences (ILBS), shared an important message for young doctors and medical students.
              </p>
            </div>
          </div>

          <div className="p-6 pt-0">
            <button className="w-full py-3 bg-brand-cyan/10 hover:bg-brand-cyan hover:text-white text-brand-cyan text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
              Read Full Article <span>→</span>
            </button>
          </div>
        </div>

        {/* Middle News Feed (col-span-5) */}
        <div className="lg:col-span-5 border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-premium flex flex-col divide-y divide-slate-100 text-left">
          {newsList.map((news) => (
            <div key={news.id} className="flex gap-4 p-5 hover:bg-slate-50/50 transition-colors duration-200 cursor-pointer items-center">
              <img
                src={news.image}
                alt=""
                className="w-20 h-20 object-cover rounded-xl shrink-0 shadow-sm"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-800 leading-snug hover:text-brand-cyan transition-colors duration-200 line-clamp-2">
                  {news.title}
                </h4>
                <span className="text-3xs font-extrabold tracking-wider text-slate-400 mt-2 block uppercase">
                  {activeTab} • 2 HOURS AGO
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Janta Reporter Sidebar (col-span-3) */}
        <div className="lg:col-span-3 border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-premium flex flex-col text-left">
          {/* Header */}
          <div className="bg-brand-dark text-brand-accent flex items-center gap-2 px-6 py-4">
            <FiVolume2 className="text-lg animate-pulse" />
            <h3 className="text-xs font-black tracking-widest uppercase font-heading">
              Janta Reporter
            </h3>
          </div>

          {/* List */}
          <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-between py-2">
            {reporterNews.map((news) => (
              <div key={news.id} className="flex gap-3 px-5 py-3.5 hover:bg-slate-50 transition-colors duration-150 cursor-pointer">
                <img
                  src={reporter}
                  alt=""
                  className="w-12 h-12 object-cover rounded-lg shrink-0 shadow-sm"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-700 leading-snug line-clamp-2 hover:text-brand-cyan transition-colors duration-200">
                    {news.title}
                  </h4>
                  <span className="text-[10px] font-extrabold tracking-wider text-slate-400 mt-1 block uppercase">
                    CIVIC NEWS
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View All */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-center">
            <button className="text-brand-cyan font-bold text-xs hover:text-brand-mint duration-200 uppercase tracking-widest">
              View All Reports →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StateNews;
