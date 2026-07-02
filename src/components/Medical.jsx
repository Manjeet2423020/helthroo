import medical1 from "../assets/medical1.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FiBookOpen, FiAward, FiActivity, FiTrendingUp } from "react-icons/fi";

const HIGHLIGHTS = [
  {
    id: 1,
    icon: <FiActivity className="text-emerald-500 text-xl dark:text-emerald-400" />,
    journal: "JAMA Internal Medicine • May 2026",
    title: "Mediterranean Diet Associated with 23% Lower Risk of Mortality in Women",
    badge: "23% Reduction",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/25",
    desc: "A long-term study tracking over 25,000 women finds substantial cardiovascular and longevity benefits from healthy fat intake."
  },
  {
    id: 2,
    icon: <FiAward className="text-blue-500 text-xl dark:text-blue-400" />,
    journal: "Lancet Digital Health • June 2026",
    title: "AI Model Predicts Early-Stage Alzheimer's with 99% Accuracy",
    badge: "99% Accuracy",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/25",
    desc: "A new deep learning model analyzes subtle structural brain changes from standard MRI scans years before symptoms manifest."
  },
  {
    id: 3,
    icon: <FiTrendingUp className="text-teal-500 text-xl dark:text-teal-400" />,
    journal: "The Lancet • May 2026",
    title: "New Malaria Vaccine Shows High Efficacy of 77% in Phase 3 Trials",
    badge: "77% Efficacy",
    badgeColor: "bg-teal-50 text-teal-600 border-teal-100 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/25",
    desc: "The R21/Matrix-M malaria vaccine meets the WHO-specified target efficacy, promising a breakthrough in child healthcare."
  },
  {
    id: 4,
    icon: <FiBookOpen className="text-purple-500 text-xl dark:text-purple-400" />,
    journal: "Circulation Journal • June 2026",
    title: "Daily 20-Minute Brisk Walk Significantly Lowers Cardiovascular Risks",
    badge: "Heart Health",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/25",
    desc: "Consistent moderate exercise shows a major preventive effect against coronary diseases, independent of age or genetics."
  }
];

const Medical = () => {
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
      <div className="flex items-end justify-between border-b border-slate-200/40 dark:border-slate-800/30 pb-6">
        <div className="text-left">
          <h2 className="text-3xl font-black text-brand-dark dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Medical Research
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-brand-accent/35 dark:bg-brand-mint/15 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Latest studies and findings, summarized for quick reading.
          </p>
        </div>

        <button className="px-6 py-3 border border-slate-200/60 dark:border-slate-800/70 text-brand-cyan dark:text-brand-mint hover:bg-brand-cyan hover:text-white dark:hover:bg-brand-mint dark:hover:text-slate-900 hover:border-brand-cyan dark:hover:border-brand-mint rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer">
          View All Studies
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        
        {/* Left Card with 3D Tilt */}
        <div className="lg:col-span-4 gradient-border-wrapper">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner group glass-card overflow-hidden cursor-pointer shadow-premium transition-all flex flex-col h-full justify-between border-none relative"
          >
            <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <div>
              {/* Image */}
              <div className="overflow-hidden h-72 rounded-t-3xl relative z-10">
                <img
                  src={medical1}
                  alt="Guava Juice"
                  className="w-full h-full object-cover group-hover:scale-103 duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10 text-left">
                <span className="text-[9px] font-black tracking-widest text-slate-400 block uppercase">
                  MAY 26, 2026 • BMJ JOURNALS
                </span>
                <h3 className="mt-3 text-lg font-black leading-snug text-[#14384A] dark:text-slate-200 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading">
                  Guava Juice May Help Boost Hemoglobin Levels
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-3 leading-relaxed font-semibold">
                  Recent trials show vitamin C rich guava extracts significantly aid iron absorption and help manage anemia symptoms naturally.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 relative z-10 text-left">
              <button className="flex items-center gap-2 uppercase tracking-widest text-brand-cyan dark:text-brand-mint hover:text-brand-mint font-black text-[10px] transition-colors duration-200 cursor-pointer">
                View Abstract <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Right Highlights Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between shadow-premium group cursor-pointer border border-slate-200/40 dark:border-slate-800/30 bg-white/20 dark:bg-slate-900/30"
            >
              <div>
                {/* Journal & Icon */}
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    {item.journal}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center shadow-sm shrink-0">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-sm font-black text-slate-850 dark:text-slate-200 leading-snug mt-3.5 group-hover:text-brand-cyan dark:group-hover:text-brand-mint duration-200 font-heading">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>

              {/* Footer Badges/Button */}
              <div className="mt-5 pt-4 border-t border-slate-200/30 dark:border-slate-800/40 flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded border text-[9px] font-black uppercase tracking-wider ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <span className="text-[9px] font-black text-brand-cyan dark:text-brand-mint group-hover:translate-x-1 duration-200 flex items-center gap-1.5 uppercase tracking-widest">
                  Abstract <FaArrowRight className="text-[9px]" />
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
