import short1 from "../assets/short1.jpg";
import short2 from "../assets/short2.jpg";
import short3 from "../assets/short3.jpg";
import short4 from "../assets/short4.jpg";
import { FiBookmark, FiShare2, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HealthShorts = () => {
  const shortsData = [
    {
      id: 1,
      image: short1,
      tag: "INFRASTRUCTURE",
      title: "'Quality Health Facilities Are the Need of the Hour'",
      desc: "Gorakhpur: CM Yogi said the healthcare sector today needs quality healthcare facilities rather than just funding.",
    },
    {
      id: 2,
      image: short2,
      tag: "POLICY",
      title: "AIIMS Implements New Social Media Policy",
      desc: "AIIMS New Delhi has implemented a new social media policy with immediate effect, outlining rules for staff and students.",
    },
    {
      id: 3,
      image: short3,
      tag: "DIGITAL HEALTH",
      title: "All Health Services Now in One App",
      desc: "Union Health Minister JP Nadda will launch Aarogya Setu 2.0, integrating all medical directories and services.",
    },
    {
      id: 4,
      image: short4,
      tag: "NUTRITION",
      title: "The Bitter Truth Behind 'No Added Sugar' Labels",
      desc: "FSSAI intensified scrutiny of misleading food labels, issuing strict guidelines on sugar-free claims.",
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 15}deg) rotateY(${x / 15}deg) translateY(-6px)`;
    
    const shine = card.querySelector(".card-shine");
    if (shine) {
      shine.style.left = `${e.clientX - box.left - 100}px`;
      shine.style.top = `${e.clientY - box.top - 100}px`;
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
      <div className="flex items-center justify-between">
        <div className="text-left">
          <h2 className="text-3xl font-black text-brand-dark dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Health Shorts
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-brand-accent/35 dark:bg-brand-mint/15 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Quick health shorts to keep you informed in seconds.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="w-11 h-11 rounded-full border border-slate-200/60 dark:border-slate-800/80 bg-white/20 dark:bg-slate-900/30 flex items-center justify-center text-slate-400 hover:border-brand-mint hover:bg-brand-mint/10 hover:text-brand-cyan dark:hover:text-brand-mint transition-all duration-300 cursor-pointer">
            <FiChevronLeft size={18} />
          </button>
          <button className="w-11 h-11 rounded-full border border-brand-mint/80 bg-white/20 dark:bg-slate-900/30 flex items-center justify-center text-brand-cyan dark:text-brand-mint hover:bg-brand-cyan hover:text-white dark:hover:bg-brand-mint dark:hover:text-slate-900 transition-all duration-300 cursor-pointer">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {shortsData.map((item) => (
          <div key={item.id} className="gradient-border-wrapper">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="gradient-border-inner group glass-card overflow-hidden shadow-premium transition-all duration-350 cursor-pointer flex flex-col justify-between h-full border-none relative"
            >
              <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              <div>
                {/* Image with Category Badge */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-brand-dark/85 text-brand-accent px-2.5 py-0.5 text-[9px] font-black tracking-widest rounded-md backdrop-blur-sm z-20">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 text-left z-20 relative">
                  <h3 className="font-black text-sm text-slate-800 dark:text-slate-200 leading-snug font-heading group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 mt-3 text-xs leading-relaxed line-clamp-3 font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between bg-transparent z-20 relative">
                <button className="flex items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-brand-cyan dark:hover:text-brand-mint transition-colors duration-250 cursor-pointer">
                  <FiChevronDown size={16} />
                  <span className="text-[10px] font-black tracking-widest">READ MORE</span>
                </button>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-slate-50/50 dark:bg-slate-900/60 border border-slate-200/30 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 hover:bg-brand-mint/15 hover:text-brand-cyan dark:hover:text-brand-mint flex items-center justify-center transition-all duration-200 cursor-pointer">
                    <FiBookmark size={13} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-slate-50/50 dark:bg-slate-900/60 border border-slate-200/30 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 hover:bg-brand-mint/15 hover:text-brand-cyan dark:hover:text-brand-mint flex items-center justify-center transition-all duration-200 cursor-pointer">
                    <FiShare2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthShorts;
