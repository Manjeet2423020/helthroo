import { useState } from "react";
import wellness1 from "../assets/wellness1.jpg";
import wellness2 from "../assets/wellness2.jpg";
import { FiEye, FiClock, FiHeart } from "react-icons/fi";

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
    <section className="px-[5%] md:px-[10%] py-16 bg-transparent relative z-20 overflow-hidden gsap-reveal">
      
      {/* Organic Background Leaf Silhouette Shapes */}
      <div className="absolute top-[10%] right-[-5%] w-72 h-72 bg-emerald-500/5 dark:bg-emerald-400/2 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6 text-left relative z-10">
        <div>
          <h2 className="text-3xl font-black text-slate-850 dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Wellness Insights
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-emerald-500/15 dark:bg-emerald-500/10 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold font-sans">
            Practical guidance for a balanced, vibrant, and healthy life.
          </p>
        </div>

        <button className="magnetic-target text-emerald-600 dark:text-emerald-400 font-black text-[10px] hover:text-emerald-500 transition-colors duration-200 uppercase tracking-widest cursor-pointer">
          View All Insights →
        </button>
      </div>

      {/* Tabs list with soft pill shapes */}
      <div className="mt-8 flex gap-3 overflow-x-auto scrollbar-hide py-2 px-1 relative z-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-wider shrink-0 transition-all duration-300 border cursor-pointer ${
              activeTab === tab
                ? "bg-emerald-500 text-slate-950 border-emerald-500 dark:bg-emerald-400 dark:text-slate-950 shadow-md shadow-emerald-500/10"
                : "bg-white/20 dark:bg-slate-900/35 text-slate-550 dark:text-slate-400 border-slate-200/40 dark:border-slate-800/50 hover:bg-white/40 dark:hover:bg-slate-800/40 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Staggered Organic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 relative z-10">
        
        {/* Column 1 - Large Tall Card */}
        <div className="flex flex-col gap-6 text-left">
          <div className="gradient-border-wrapper rounded-3xl">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="gradient-border-inner group glass-card glow-card-shadow p-6 border-none cursor-pointer shadow-lg relative transition-all duration-350"
            >
              <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              
              <div className="overflow-hidden rounded-2xl h-60 relative z-10">
                <img
                  src={wellness1}
                  alt="Diet Planning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-5 relative z-10">
                <span className="text-[8px] font-black tracking-widest text-emerald-600 dark:text-emerald-450 uppercase">
                  {activeTab} • FEATURED
                </span>
                <h3 className="text-base font-black text-slate-800 dark:text-slate-200 leading-snug mt-2 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                  Meal planning cuts dietary waste and improves heart health indices
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed mt-2 font-semibold">
                  Consistent scheduling of home-cooked meals fosters positive metabolic adaptations and lower cholesterol.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 - Staggered Row split */}
        <div className="flex flex-col gap-6 text-left lg:pt-8">
          
          {/* Main Card */}
          <div className="gradient-border-wrapper rounded-3xl">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="gradient-border-inner group glass-card glow-card-shadow p-6 border-none cursor-pointer shadow-lg relative transition-all duration-350"
            >
              <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              
              <div className="overflow-hidden rounded-2xl h-48 relative z-10">
                <img
                  src={wellness2}
                  alt="Mindfulness"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-5 relative z-10">
                <span className="text-[8px] font-black tracking-widest text-emerald-600 dark:text-emerald-450 uppercase">
                  {activeTab} • MINDFULNESS
                </span>
                <h3 className="text-base font-black text-slate-800 dark:text-slate-200 leading-snug mt-2 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                  Mindfulness in mornings shows correlation with low daytime stress
                </h3>
              </div>
            </div>
          </div>

          {/* Small Row Item */}
          <div className="flex gap-4 cursor-pointer group items-center p-4 rounded-3xl bg-white/20 dark:bg-slate-900/30 border border-slate-250/20 dark:border-slate-800/40 hover:bg-white/40 dark:hover:bg-slate-900/50 hover:shadow-md transition-all duration-300">
            <img
              src={wellness2}
              alt=""
              className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-sm border border-slate-200/30 dark:border-slate-800/30"
            />
            <div>
              <h4 className="text-xs font-black text-slate-800 dark:text-slate-250 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-450 transition-colors duration-200 line-clamp-2">
                Hydration thresholds are shifting: How much water is truly optimal?
              </h4>
              <span className="text-[8px] text-slate-400 dark:text-slate-550 font-black mt-1.5 block">2 DAYS AGO</span>
            </div>
          </div>
        </div>

        {/* Column 3 - Large Card staggered */}
        <div className="flex flex-col gap-6 text-left">
          
          <div className="gradient-border-wrapper rounded-3xl">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="gradient-border-inner group glass-card glow-card-shadow p-6 border-none cursor-pointer shadow-lg relative transition-all duration-350"
            >
              <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              
              <div className="overflow-hidden rounded-2xl h-56 relative z-10">
                <img
                  src={wellness1}
                  alt="Fiber Rich"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-5 relative z-10">
                <span className="text-[8px] font-black tracking-widest text-emerald-600 dark:text-emerald-450 uppercase">
                  {activeTab} • MICROBIOME
                </span>
                <h3 className="text-base font-black text-slate-800 dark:text-slate-200 leading-snug mt-2 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                  Fiber-rich foods optimize gut microbiome diversity in trials
                </h3>
              </div>
            </div>
          </div>

          {/* Small Feed Rows */}
          <div className="space-y-4">
            <div className="flex gap-4 cursor-pointer group items-center p-4 rounded-3xl bg-white/20 dark:bg-slate-900/30 border border-slate-250/20 dark:border-slate-800/40 hover:bg-white/40 dark:hover:bg-slate-900/50 hover:shadow-md transition-all duration-300">
              <img
                src={wellness1}
                alt=""
                className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-sm border border-slate-200/30 dark:border-slate-800/30"
              />
              <div>
                <h4 className="text-xs font-black text-slate-800 dark:text-slate-250 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-450 transition-colors duration-200 line-clamp-2">
                  Anti-inflammatory foods can lessen seasonal muscle soreness
                </h4>
                <span className="text-[8px] text-slate-400 dark:text-slate-550 font-black mt-1.5 block">3 DAYS AGO</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Wellness;
