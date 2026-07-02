import { useState } from "react";
import other1 from "../assets/other1.jpg";
import other2 from "../assets/other2.jpg";

const TABS = [
  "Finance & Business",
  "Science & Tech",
  "Education & Career",
  "Viral News",
  "Environment",
  "Agriculture",
  "Weather"
];

const Other = () => {
  const [activeTab, setActiveTab] = useState("Finance & Business");

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
    <section className="px-[5%] md:px-[10%] py-16 bg-transparent">
      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6 text-left">
        <div>
          <h2 className="text-3xl font-black text-brand-dark dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Other Insights
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-brand-accent/35 dark:bg-brand-mint/15 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Finance, science, jobs, career, viral & more.
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
            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider shrink-0 transition-all duration-300 border cursor-pointer ${
              activeTab === tab
                ? "bg-brand-cyan dark:bg-brand-mint text-white dark:text-slate-900 shadow-md shadow-brand-cyan/20 dark:shadow-brand-mint/10 border-brand-cyan dark:border-brand-mint"
                : "bg-white/20 dark:bg-slate-900/35 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/85 hover:bg-white/40 dark:hover:bg-slate-800/50 hover:text-slate-800 dark:hover:text-slate-200"
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
          {/* Main Card with 3D Tilt */}
          <div className="gradient-border-wrapper">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="gradient-border-inner group glass-card p-5 border-none cursor-pointer shadow-premium relative transition-all duration-350"
            >
              <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              <div className="overflow-hidden rounded-2xl h-56 relative z-10">
                <img
                  src={other1}
                  alt="Finance Checklists"
                  className="w-full h-full object-cover group-hover:scale-103 duration-500"
                />
              </div>
              <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint mt-4 block uppercase relative z-10">{activeTab}</span>
              <h3 className="text-base font-black text-slate-800 dark:text-slate-200 leading-snug mt-2.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading relative z-10">
                Financial checklists outperform long-form anxiety in service coverage
              </h3>
            </div>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={other2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Investment basics are outperforming complex financial product coverage
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">2 DAYS AGO</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={other1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-255 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Policy explainers are turning into the most valuable finance journalism
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">3 DAYS AGO</span>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card with 3D Tilt */}
          <div className="gradient-border-wrapper">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="gradient-border-inner group glass-card p-5 border-none cursor-pointer shadow-premium relative transition-all duration-350"
            >
              <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              <div className="overflow-hidden rounded-2xl h-56 relative z-10">
                <img
                  src={other2}
                  alt="Business Coverage"
                  className="w-full h-full object-cover group-hover:scale-103 duration-500"
                />
              </div>
              <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint mt-4 block uppercase relative z-10">{activeTab}</span>
              <h3 className="text-base font-black text-slate-800 dark:text-slate-200 leading-snug mt-2.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading relative z-10">
                Business coverage is more readable when anchored in everyday stakes
              </h3>
            </div>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={other1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Household budgeting stories are becoming more practical and less prescriptive
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">4 DAYS AGO</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={other2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-850 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Market updates land better when they explain impact, not just movement
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">5 DAYS AGO</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card with 3D Tilt */}
          <div className="gradient-border-wrapper">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="gradient-border-inner group glass-card p-5 border-none cursor-pointer shadow-premium relative transition-all duration-350"
            >
              <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              <div className="overflow-hidden rounded-2xl h-56 relative z-10">
                <img
                  src={other1}
                  alt="Personal Finance"
                  className="w-full h-full object-cover group-hover:scale-103 duration-500"
                />
              </div>
              <span className="text-[9px] font-black tracking-widest text-brand-cyan dark:text-brand-mint mt-4 block uppercase relative z-10">{activeTab}</span>
              <h3 className="text-base font-black text-slate-800 dark:text-slate-200 leading-snug mt-2.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading relative z-10">
                Personal finance clarity is replacing jargon-heavy market commentary
              </h3>
            </div>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={other2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-850 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Smart saving habits can improve long-term financial stability
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">6 DAYS AGO</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-3.5 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-850/20 border border-transparent hover:border-slate-200/30 dark:hover:border-slate-800/30 transition-all duration-350">
            <img
              src={other1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-white/10"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-850 dark:text-slate-250 leading-snug group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 line-clamp-2">
                Inflation trends are easier to understand with practical examples
              </h4>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black mt-2 block">1 WEEK AGO</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Other;
