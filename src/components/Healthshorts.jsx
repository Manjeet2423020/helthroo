import { useState, useRef } from "react";
import short1 from "../assets/short1.jpg";
import short2 from "../assets/short2.jpg";
import short3 from "../assets/short3.jpg";
import short4 from "../assets/short4.jpg";
import { FiBookmark, FiShare2, FiChevronDown, FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";

const HealthShorts = () => {
  const [bookmarks, setBookmarks] = useState({});
  const [shared, setShared] = useState({});
  const sliderRef = useRef(null);

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

  const toggleBookmark = (id) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (id) => {
    setShared((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setShared((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmt = direction === "left" ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmt, behavior: "smooth" });
    }
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg) translateY(-4px)`;
    
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
    <section className="px-[5%] md:px-[10%] py-16 bg-transparent relative z-20 overflow-hidden">
      
      {/* Heading / Navigation Control */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6">
        <div className="text-left">
          <h2 className="text-3xl font-black text-slate-850 dark:text-white relative inline-block font-heading uppercase tracking-widest">
            Health Shorts
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-teal-500/20 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Quick health shorts to keep you informed in seconds.
          </p>
        </div>

        {/* Carousel buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => scrollSlider("left")}
            className="magnetic-target w-11 h-11 rounded-full border border-slate-200/60 dark:border-slate-800/80 bg-white/20 dark:bg-slate-900/30 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollSlider("right")}
            className="magnetic-target w-11 h-11 rounded-full border border-slate-200/60 dark:border-slate-800/80 bg-white/20 dark:bg-slate-900/30 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel List */}
      <div
        ref={sliderRef}
        className="flex gap-6 mt-10 overflow-x-auto scrollbar-hide py-4 px-1 snap-x snap-mandatory"
      >
        {shortsData.map((item) => (
          <div key={item.id} className="min-w-[280px] sm:min-w-[310px] md:min-w-[330px] snap-start gradient-border-wrapper rounded-3xl">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="gradient-border-inner group glass-card overflow-hidden shadow-lg transition-all duration-350 cursor-pointer flex flex-col justify-between h-[420px] border-none relative"
            >
              <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              
              <div>
                {/* Image backdrop */}
                <div className="relative h-44 overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/90 text-teal-400 border border-teal-500/30 px-2.5 py-0.5 text-[8px] font-black tracking-widest rounded-md backdrop-blur-sm z-20">
                    {item.tag}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-5 text-left z-20 relative">
                  <h3 className="font-black text-sm text-slate-800 dark:text-slate-200 leading-snug font-heading group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 mt-2.5 text-[11px] leading-relaxed line-clamp-3 font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-200/25 dark:border-slate-800/25 flex items-center justify-between bg-transparent z-20 relative">
                <button className="flex items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-teal-600 dark:hover:text-teal-450 transition-colors duration-250 cursor-pointer">
                  <FiChevronDown size={14} />
                  <span className="text-[9px] font-black tracking-widest">READ SHORT</span>
                </button>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleBookmark(item.id)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-350 cursor-pointer ${
                      bookmarks[item.id]
                        ? "bg-teal-500 text-slate-950 border-teal-500 dark:bg-teal-400 dark:border-teal-450"
                        : "bg-white/10 border-slate-200/40 text-slate-500 dark:border-slate-800/40 dark:text-slate-450 hover:bg-teal-500/10 hover:text-teal-500"
                    }`}
                  >
                    {bookmarks[item.id] ? <FaBookmark size={11} /> : <FiBookmark size={11} />}
                  </button>

                  <button
                    onClick={() => handleShare(item.id)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-350 cursor-pointer ${
                      shared[item.id]
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "bg-white/10 border-slate-200/40 text-slate-500 dark:border-slate-800/40 dark:text-slate-450 hover:bg-teal-500/10 hover:text-teal-500"
                    }`}
                  >
                    {shared[item.id] ? <FiCheck size={12} /> : <FiShare2 size={11} />}
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
