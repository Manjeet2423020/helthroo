import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import podcast1 from "../assets/podcast1.jpg";
import podcast2 from "../assets/podcast2.jpg";

const PODCASTS = [
  {
    id: 1,
    title: "Understanding Your Gut Health",
    date: "May 25, 2026",
    duration: "42 min",
    image: podcast1,
    category: "Digestive Wellness"
  },
  {
    id: 2,
    title: "Mental Health in the Modern Age",
    date: "May 24, 2026",
    duration: "38 min",
    image: podcast2,
    category: "Mental Health"
  },
  {
    id: 3,
    title: "Sleep Science & Circadian Rhythms",
    date: "May 22, 2026",
    duration: "45 min",
    image: podcast1,
    category: "Sleep Medicine"
  },
  {
    id: 4,
    title: "Nutrition Myths Debunked",
    date: "May 20, 2026",
    duration: "31 min",
    image: podcast2,
    category: "Dietary Science"
  }
];

const Podcast = () => {
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
    <section className="mx-[5%] md:mx-[10%] my-16 bg-[#081524] text-white rounded-3xl p-6 md:p-12 border border-white/5 shadow-premium relative overflow-hidden">
      
      {/* Decorative aura spot */}
      <div className="absolute top-[-30%] right-[-10%] w-96 h-96 bg-brand-cyan/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Heading */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6 relative z-10">
        <div className="text-left">
          <h2 className="text-3xl font-black text-white relative inline-block font-heading uppercase tracking-widest">
            Health Podcasts
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-brand-cyan/40 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-350 text-sm mt-3 font-semibold">
            Every health conversation, with expert insights.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="w-11 h-11 rounded-full border border-white/15 text-slate-300 flex items-center justify-center hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all duration-300 cursor-pointer">
            <FiChevronLeft size={18} />
          </button>
          <button className="w-11 h-11 rounded-full border border-white/15 text-slate-300 flex items-center justify-center hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all duration-300 cursor-pointer">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative z-10">
        {PODCASTS.map((podcast) => (
          <div key={podcast.id} className="gradient-border-wrapper">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="gradient-border-inner bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-premium group cursor-pointer hover:border-brand-mint/40 hover:bg-white/10 duration-300 flex flex-col text-left h-full relative"
            >
              <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              {/* Image & Play Button overlay */}
              <div className="relative overflow-hidden aspect-[4/3] z-10">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-full object-cover group-hover:scale-103 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-cyan flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-mint group-hover:shadow-[0_0_20px_rgba(20,201,184,0.6)] transition-all duration-300">
                  <FaPlay className="text-white group-hover:text-slate-900 text-sm ml-1" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1 z-10 relative">
                <div>
                  <span className="text-[9px] font-black text-brand-mint uppercase tracking-widest">
                    {podcast.category}
                  </span>
                  <h3 className="text-sm font-black text-white mt-2 leading-snug font-heading group-hover:text-brand-mint transition-colors duration-200 line-clamp-2">
                    {podcast.title}
                  </h3>
                </div>
                
                <div className="flex justify-between items-center mt-5 pt-3 border-t border-white/10 text-slate-450 text-[10px] font-bold uppercase tracking-wider">
                  <span>{podcast.date}</span>
                  <span className="bg-white/10 px-2.5 py-0.5 rounded text-white text-[9px] font-black">{podcast.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Podcast;
