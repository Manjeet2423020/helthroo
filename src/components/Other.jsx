import { useState } from "react";
import other1 from "../assets/other1.jpg";
import other2 from "../assets/other2.jpg";
import { FiChevronDown, FiChevronUp, FiPlus, FiArrowRight } from "react-icons/fi";

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
  const [expandedId, setExpandedId] = useState(null);

  const rows = [
    {
      id: 1,
      category: "FINANCE",
      title: "Financial checklists outperform long-form anxiety in service coverage",
      desc: "Detailed studies outline that structured checklist lists help users make faster and safer choices regarding healthcare insurance packages and investments, bypassing jargon-heavy descriptions.",
      date: "2 Days Ago",
      image: other1
    },
    {
      id: 2,
      category: "MARKETS",
      title: "Investment basics are outperforming complex financial product coverage",
      desc: "Retail readers respond better to clean fundamental columns. The trend has shifted heavily away from speculation toward practical saving advice and wealth building strategies.",
      date: "2 Days Ago",
      image: other2
    },
    {
      id: 3,
      category: "JOURNALISM",
      title: "Policy explainers are turning into the most valuable finance journalism",
      desc: "Clear interpretations of local policy reforms, tax rate adjustments, and municipal mandates gain the highest audience retention indices compared to general stock movements.",
      date: "3 Days Ago",
      image: other1
    },
    {
      id: 4,
      category: "BUSINESS",
      title: "Business coverage is more readable when anchored in everyday stakes",
      desc: "Reporters are redesigning corporate updates to highlight how simple operations impact regional logistics, customer services, and employee healthcare programs.",
      date: "4 Days Ago",
      image: other2
    }
  ];

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

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="px-[5%] md:px-[10%] py-16 bg-transparent relative z-20 overflow-hidden">
      
      {/* Background neon blur */}
      <div className="absolute top-[20%] right-[-10%] w-72 h-72 bg-sky-500/5 dark:bg-sky-400/2 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6 text-left relative z-10">
        <div>
          <h2 className="text-3xl font-black text-slate-850 dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Other Insights
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-sky-500/15 dark:bg-sky-500/10 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold font-sans">
            Finance, science, jobs, career, viral & more.
          </p>
        </div>

        <button className="magnetic-target text-sky-600 dark:text-sky-450 font-black text-[10px] hover:text-sky-550 transition-colors duration-200 uppercase tracking-widest cursor-pointer">
          View All Insights →
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex gap-3 overflow-x-auto scrollbar-hide py-2 px-1 relative z-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-wider shrink-0 transition-all duration-300 border cursor-pointer ${
              activeTab === tab
                ? "bg-sky-550 text-white border-sky-550 dark:bg-sky-400 dark:text-slate-950 dark:border-sky-400 shadow-md shadow-sky-500/10"
                : "bg-white/20 dark:bg-slate-900/35 text-slate-550 dark:text-slate-400 border-slate-200/40 dark:border-slate-800/50 hover:bg-white/40 dark:hover:bg-slate-800/40 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Row List & Right Side Spotlight Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 relative z-10">
        
        {/* Left Column: Staggered List Rows with Preview Expansion (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {rows.map((row) => (
            <div
              key={row.id}
              className="glass-premium rounded-2xl border border-slate-200/40 dark:border-slate-800/30 overflow-hidden transition-all duration-300 shadow-sm"
            >
              {/* Row Header clickable to toggle */}
              <div
                onClick={() => toggleExpand(row.id)}
                className="flex items-center justify-between p-5 cursor-pointer hover:bg-white/30 dark:hover:bg-slate-900/20 transition-all duration-200 text-left gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-sky-500/10 text-sky-600 dark:text-sky-400 px-3 py-1 text-[8px] font-black tracking-widest rounded-md uppercase">
                    {row.category}
                  </span>
                  <h3 className="text-xs font-black text-slate-850 dark:text-slate-200 font-heading leading-snug line-clamp-1 md:line-clamp-none">
                    {row.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[8px] text-slate-400 font-black uppercase tracking-wider hidden md:inline-block">
                    {row.date}
                  </span>
                  <div className="w-7 h-7 rounded-lg border border-slate-200/50 dark:border-slate-800/40 flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white transition-all">
                    {expandedId === row.id ? <FiChevronUp size={13} /> : <FiChevronDown size={13} />}
                  </div>
                </div>
              </div>

              {/* Collapsible Content */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  expandedId === row.id ? "max-h-[300px] border-t border-slate-200/25 dark:border-slate-800/25" : "max-h-0"
                }`}
              >
                <div className="p-6 flex flex-col md:flex-row gap-5 items-center text-left bg-white/10 dark:bg-slate-900/10">
                  <img
                    src={row.image}
                    alt=""
                    className="w-24 h-24 object-cover rounded-xl shrink-0 shadow-md border border-slate-200/30 dark:border-slate-800/30"
                  />
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                      {row.desc}
                    </p>
                    <button className="magnetic-target mt-4 text-[9px] font-black text-sky-655 dark:text-sky-450 uppercase tracking-widest flex items-center gap-1">
                      Read Full Article <FiPlus size={11} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Right Column: Featured Spotlight (4 Cols) */}
        <div className="lg:col-span-4 gradient-border-wrapper rounded-3xl h-full min-h-[350px]">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner group relative overflow-hidden rounded-3xl shadow-xl bg-slate-900 p-6 flex flex-col justify-between h-full border-none"
          >
            <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            
            <div className="relative z-10 text-left">
              <span className="text-[8px] font-black tracking-widest text-sky-400 uppercase">
                {activeTab} • INSIGHT SPOTLIGHT
              </span>
              <h3 className="text-white text-base font-black leading-snug mt-3 font-heading group-hover:text-sky-400 transition-colors">
                Personal finance clarity is replacing jargon-heavy market commentary
              </h3>
              <p className="text-slate-400 mt-2.5 text-[11px] leading-relaxed font-semibold">
                By presenting financial advice in terms of actionable checklists and everyday stakes, modern columns increase overall civic wellness and comprehension.
              </p>
            </div>

            <div className="mt-8 relative z-10 text-left">
              <button className="magnetic-target px-5 py-3 bg-sky-500 hover:bg-sky-450 dark:bg-sky-400 dark:hover:bg-sky-350 text-slate-950 font-black text-[9px] uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center gap-1.5 hover:shadow-lg">
                View Insights <FiArrowRight size={10} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Other;
