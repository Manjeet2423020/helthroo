import story1 from "../assets/story1.jpg";
import wellness1 from "../assets/wellness1.jpg";
import wellness2 from "../assets/wellness2.jpg";
import health1 from "../assets/health1.jpg";
import other1 from "../assets/other1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import short3 from "../assets/short3.jpg";

const Webstories = () => {
  const stories = [
    { id: 1, title: "Superfoods", active: true, image: wellness1 },
    { id: 2, title: "Yoga Guide", active: true, image: story1 },
    { id: 3, title: "Heart Rate", active: false, image: health1 },
    { id: 4, title: "Sleep Tips", active: true, image: other1 },
    { id: 5, title: "Mental Care", active: false, image: card2 },
    { id: 6, title: "Nutrition", active: true, image: card3 },
    { id: 7, title: "Hydration", active: false, image: short3 },
    { id: 8, title: "Skin Health", active: true, image: wellness2 },
  ];

  return (
    <section className="mx-[10%] my-12 glass-panel p-8 md:p-10 rounded-3xl shadow-premium border border-slate-200/40 dark:border-slate-800/30 text-left">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-black text-brand-dark dark:text-white inline-block relative font-heading uppercase tracking-widest">
          Web Stories
          <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-brand-accent/35 dark:bg-brand-mint/15 -z-10 rounded"></span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
          Bite-sized visual stories you can tap through in moments.
        </p>
      </div>

      {/* Stories list */}
      <div className="flex items-center gap-8 mt-10 overflow-x-auto scrollbar-hide py-4 px-2">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center cursor-pointer group shrink-0">
            {/* Gradient Border Ring */}
            <div className={`w-24 h-24 rounded-full p-[3px] transition-all duration-300 ${
              story.active 
                ? "bg-gradient-to-tr from-brand-cyan via-brand-mint to-brand-accent group-hover:rotate-45 group-hover:shadow-[0_0_15px_rgba(20,201,184,0.35)]"
                : "bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-350 dark:group-hover:bg-slate-700"
            }`}>
              <div className="w-full h-full rounded-full bg-white dark:bg-[#070a13] p-0.5">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Story Title */}
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-3 group-hover:text-brand-cyan dark:group-hover:text-brand-mint transition-colors duration-200 font-heading">
              {story.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Webstories;
