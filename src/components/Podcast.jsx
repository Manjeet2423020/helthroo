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
  return (
    <section className="px-[10%] py-16 bg-[#16354A] text-white">
      {/* Heading */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div className="text-left">
          <h2 className="text-4xl font-black text-white relative inline-block font-heading">
            Health Podcasts
            <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#77E6DE]/40 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-300 text-lg mt-3 font-medium">
            Every health conversation, with expert insights.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full border border-white/20 text-slate-300 flex items-center justify-center hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all duration-300">
            <FiChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 rounded-full border border-white/20 text-slate-300 flex items-center justify-center hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all duration-300">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {PODCASTS.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-premium group cursor-pointer hover:border-brand-accent/30 hover:bg-white/10 duration-300 flex flex-col text-left"
          >
            {/* Image & Play Button overlay */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-cyan flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <FaPlay className="text-white text-base ml-1" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-extrabold text-brand-accent uppercase tracking-wider">
                  {podcast.category}
                </span>
                <h3 className="text-sm font-bold text-white mt-2 leading-snug font-heading group-hover:text-brand-accent transition-colors duration-200 line-clamp-2">
                  {podcast.title}
                </h3>
              </div>
              
              <div className="flex justify-between items-center mt-5 pt-3 border-t border-white/10 text-slate-400 text-3xs font-semibold uppercase tracking-wider">
                <span>{podcast.date}</span>
                <span className="bg-white/10 px-2 py-0.5 rounded text-white">{podcast.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Podcast;
