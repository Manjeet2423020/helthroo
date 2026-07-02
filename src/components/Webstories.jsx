import story1 from "../assets/story1.jpg";

const Webstories = () => {
  const stories = [
    { id: 1, title: "Superfoods", active: true },
    { id: 2, title: "Yoga Guide", active: true },
    { id: 3, title: "Heart Rate", active: false },
    { id: 4, title: "Sleep Tips", active: true },
    { id: 5, title: "Mental Care", active: false },
    { id: 6, title: "Nutrition", active: true },
    { id: 7, title: "Hydration", active: false },
    { id: 8, title: "Skin Health", active: true },
  ];

  return (
    <section className="px-[10%] py-16 bg-transparent">
      {/* Heading */}
      <div className="text-left">
        <h2 className="text-4xl font-black text-[#13344A] inline-block relative font-heading">
          Web Stories
          <span className="absolute left-0 bottom-1 w-full h-2.5 bg-brand-accent/55 -z-10 rounded"></span>
        </h2>
        <p className="text-slate-500 text-lg mt-3 font-medium">
          Bite-sized visual stories you can tap through in moments.
        </p>
      </div>

      {/* Stories list */}
      <div className="flex items-center gap-8 mt-10 overflow-x-auto scrollbar-hide py-4 px-1">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center cursor-pointer group shrink-0">
            {/* Gradient Border Ring */}
            <div className={`w-24 h-24 rounded-full p-[3px] transition-all duration-300 ${
              story.active 
                ? "bg-gradient-to-tr from-brand-cyan via-brand-mint to-brand-accent group-hover:rotate-45"
                : "bg-slate-200 group-hover:bg-slate-300"
            }`}>
              <div className="w-full h-full rounded-full bg-white p-0.5">
                <img
                  src={story1}
                  alt={story.title}
                  className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Story Title */}
            <span className="text-xs font-bold text-slate-700 mt-3 group-hover:text-brand-cyan transition-colors duration-200 font-heading">
              {story.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Webstories;
