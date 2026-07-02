import { useState } from "react";
import wellness1 from "../assets/wellness1.jpg";
import wellness2 from "../assets/wellness2.jpg";

const TABS = [
  "Diet & Nutrition",
  "Fitness & Exercise",
  "Mental Wellness",
  "Relationships",
  "Healthy Aging",
  "Sleep Health",
  "Weight Management"
];

const Wellness = () => {
  const [activeTab, setActiveTab] = useState("Diet & Nutrition");

  return (
    <section className="px-[10%] py-16 bg-transparent">
      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6 text-left">
        <div>
          <h2 className="text-3xl font-black text-brand-dark dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Wellness Insights
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-brand-accent/35 dark:bg-brand-mint/15 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Practical guidance for a balanced, vibrant, and healthy life.
          </p>
        </div>

        <button className="text-brand-cyan dark:text-brand-mint font-black text-[10px] hover:text-brand-mint transition-colors duration-200 uppercase tracking-widest cursor-pointer">
          View All Insights →
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
                : "bg-white/20 dark:bg-slate-900/35 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/80 hover:bg-white/40 dark:hover:bg-slate-800/50 hover:text-slate-800 dark:hover:text-slate-200"
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
                src={wellness1}
                alt="Diet Planning"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>
            <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint mt-4 block uppercase">{activeTab}</span>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200 leading-snug mt-2.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading">
              Meal planning cuts dietary waste and improves heart health indices
            </h3>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={wellness2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Hydration thresholds are shifting: How much water is truly optimal?
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">2 DAYS AGO</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={wellness1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Anti-inflammatory foods can lessen seasonal muscle soreness
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">3 DAYS AGO</span>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card */}
          <div className="group glass-card rounded-3xl overflow-hidden shadow-premium shadow-hover cursor-pointer p-5 border border-slate-200/40 dark:border-slate-800/30">
            <div className="overflow-hidden rounded-2xl h-56">
              <img
                src={wellness2}
                alt="Mindfulness"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>
            <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint mt-4 block uppercase">{activeTab}</span>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200 leading-snug mt-2.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading">
              Mindfulness in mornings shows correlation with low daytime stress
            </h3>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={wellness1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Active rest cycles show performance enhancement in study
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">4 DAYS AGO</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={wellness2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Digital detox before bed improves slow-wave sleep cycles
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">5 DAYS AGO</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card */}
          <div className="group glass-card rounded-3xl overflow-hidden shadow-premium shadow-hover cursor-pointer p-5 border border-slate-200/40 dark:border-slate-800/30">
            <div className="overflow-hidden rounded-2xl h-56">
              <img
                src={wellness1}
                alt="Fiber Rich Foods"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>
            <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint mt-4 block uppercase">{activeTab}</span>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200 leading-snug mt-2.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading">
              Fiber-rich foods optimize gut microbiome diversity in trials
            </h3>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={wellness2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Desk ergonomics: Reducing postural stress in hybrid workers
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">6 DAYS AGO</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={wellness1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Nutrient density is replacing calorie counting in modern plans
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">1 WEEK AGO</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Wellness;
