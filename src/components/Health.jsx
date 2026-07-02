import { useState } from "react";
import health1 from "../assets/health1.jpg";
import health2 from "../assets/health2.jpg";

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

  return (
    <section className="px-[10%] py-16 bg-transparent">
      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6 text-left">
        <div>
          <h2 className="text-3xl font-black text-brand-dark dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Health Columns
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-brand-accent/35 dark:bg-brand-mint/15 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            In-depth reporting on primary care, pediatrics, and specialized health disciplines.
          </p>
        </div>

        <button className="text-brand-cyan dark:text-brand-mint font-black text-[10px] hover:text-brand-mint transition-colors duration-200 uppercase tracking-widest cursor-pointer">
          View All Columns →
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex gap-3 overflow-x-auto scrollbar-hide py-2 px-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-brand-cyan dark:bg-brand-mint text-white dark:text-slate-900 shadow-md shadow-brand-cyan/20 dark:shadow-brand-mint/10 border border-brand-cyan dark:border-brand-mint"
                : "bg-white/20 dark:bg-slate-900/35 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/80 hover:bg-white/40 dark:hover:bg-slate-800/50 hover:text-slate-850 hover:text-slate-800 dark:hover:text-slate-250"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card */}
          <div className="group glass-card rounded-3xl overflow-hidden shadow-premium shadow-hover cursor-pointer p-5 border border-slate-200/40 dark:border-slate-800/30">
            <div className="overflow-hidden rounded-2xl h-56">
              <img
                src={health1}
                alt="Health Indicators"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>
            <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint mt-4 block uppercase">{activeTab}</span>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200 leading-snug mt-2.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading">
              New study shows preventative screening cuts chronic care burdens
            </h3>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={health2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-255 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Cardiovascular insights: What modern screenings tend to miss
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-550 font-black mt-2 block">2 DAYS AGO</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={health1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-255 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Pediatric guidelines are updating vaccination tracker targets
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-550 font-black mt-2 block">3 DAYS AGO</span>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card */}
          <div className="group glass-card rounded-3xl overflow-hidden shadow-premium shadow-hover cursor-pointer p-5 border border-slate-200/40 dark:border-slate-800/30">
            <div className="overflow-hidden rounded-2xl h-56">
              <img
                src={health2}
                alt="Health Policies"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>
            <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint mt-4 block uppercase">{activeTab}</span>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200 leading-snug mt-2.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading">
              How regional policy reforms are altering primary clinic capacities
            </h3>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={health1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-255 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Allergy therapeutics are seeing efficacy spikes in research
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-555 font-black mt-2 block">4 DAYS AGO</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={health2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-255 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                New diagnostic software accelerates clinic imaging analyses
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-555 font-black mt-2 block">5 DAYS AGO</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card */}
          <div className="group glass-card rounded-3xl overflow-hidden shadow-premium shadow-hover cursor-pointer p-5 border border-slate-200/40 dark:border-slate-800/30">
            <div className="overflow-hidden rounded-2xl h-56">
              <img
                src={health1}
                alt="Health Tech"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>
            <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint mt-4 block uppercase">{activeTab}</span>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200 leading-snug mt-2.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading">
              Wearable sensors detect early anomalies before symptom onset
            </h3>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={health2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-255 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Sleep trackers face reliability check against PSG benchmarks
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-555 font-black mt-2 block">6 DAYS AGO</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={health1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-255 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Telemedicine platforms show surge in rural geriatric usage
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-555 font-black mt-2 block">1 WEEK AGO</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Health;
