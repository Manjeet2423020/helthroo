import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiPlay, FiHeadphones } from "react-icons/fi";
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
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <section className="mx-[5%] md:mx-[10%] my-16 bg-[#030712] text-white rounded-[32px] p-8 md:p-12 border border-slate-800/80 shadow-premium relative overflow-hidden z-20">
      
      {/* Background visual neon nodes */}
      <div className="absolute top-[-30%] right-[-10%] w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-end border-b border-slate-850/80 pb-6 relative z-10">
        <div className="text-left">
          <h2 className="text-3xl font-black text-white relative inline-block font-heading uppercase tracking-widest">
            Health Podcasts
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-teal-500/25 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-semibold font-sans">
            Every health conversation, with expert insights.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="magnetic-target w-11 h-11 rounded-full border border-slate-800/80 bg-slate-900/50 text-slate-450 flex items-center justify-center hover:border-teal-500 hover:text-teal-400 transition-all duration-300 cursor-pointer">
            <FiChevronLeft size={18} />
          </button>
          <button className="magnetic-target w-11 h-11 rounded-full border border-slate-800/80 bg-slate-900/50 text-slate-450 flex items-center justify-center hover:border-teal-500 hover:text-teal-400 transition-all duration-300 cursor-pointer">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative z-10">
        {PODCASTS.map((podcast) => (
          <div
            key={podcast.id}
            onMouseEnter={() => setHoveredId(podcast.id)}
            onMouseLeave={() => {
              setHoveredId(null);
            }}
            className="group relative h-[380px] bg-slate-950/80 rounded-2xl overflow-hidden border border-slate-800/60 transition-all duration-500 hover:border-teal-500/50"
          >
            {/* 3D Tilt Wrapper */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full flex flex-col justify-between p-5 relative z-10 transition-transform duration-300"
            >
              {/* Top Row: Category and headphones icon */}
              <div className="flex justify-between items-start">
                <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">
                  {podcast.category}
                </span>
                <FiHeadphones className="text-slate-500 group-hover:text-teal-400 transition-colors" size={14} />
              </div>

              {/* Middle Section: Vinyl Disc & Cover Art */}
              <div className="relative w-44 h-44 mx-auto my-4 flex items-center justify-center">
                {/* Spinning Vinyl Disc behind Cover art */}
                <div
                  className={`absolute w-36 h-36 rounded-full bg-slate-900 border-4 border-slate-950 flex items-center justify-center transition-all duration-750 ease-out z-0 shadow-lg ${
                    hoveredId === podcast.id
                      ? "translate-x-12 rotate-180 opacity-100"
                      : "translate-x-0 rotate-0 opacity-0"
                  }`}
                  style={{
                    backgroundImage: "radial-gradient(circle, #1e293b 25%, #0f172a 45%, #020617 80%)",
                  }}
                >
                  {/* Vinyl center sticker */}
                  <div className="w-10 h-10 rounded-full bg-teal-500 border border-slate-950 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-950"></div>
                  </div>
                </div>

                {/* Cover Art Frame */}
                <div className="relative w-36 h-36 rounded-xl overflow-hidden shadow-2xl z-10 border border-white/10 group-hover:scale-102 transition-transform duration-500">
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-lg">
                      <FiPlay size={16} className="ml-0.5 fill-current" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Title, Date, Waveform */}
              <div className="text-left mt-auto">
                <h3 className="text-xs font-black text-white leading-snug font-heading group-hover:text-teal-400 transition-colors line-clamp-2">
                  {podcast.title}
                </h3>
                
                <div className="flex justify-between items-center mt-4 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                  <span>{podcast.date}</span>
                  <span>{podcast.duration}</span>
                </div>

                {/* Animated Audio Waveform Overlay */}
                <div className="h-4 flex items-end gap-[3px] mt-3.5 overflow-hidden opacity-30 group-hover:opacity-100 transition-all duration-300">
                  {[...Array(12)].map((_, index) => {
                    const randomDelay = Math.random() * 0.8;
                    const randomHeight = 4 + Math.random() * 12;
                    return (
                      <div
                        key={index}
                        className="flex-1 bg-teal-400 rounded-full transition-all"
                        style={{
                          height: hoveredId === podcast.id ? `${randomHeight}px` : "2px",
                          animation: hoveredId === podcast.id ? `soundWave 1.2s ease-in-out ${randomDelay}s infinite alternate` : "none",
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes soundWave {
          0% { height: 2px; }
          100% { height: 16px; }
        }
      `}</style>
    </section>
  );
};

export default Podcast;
