import { useState, useEffect, useRef } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import gsap from "gsap";
import story1 from "../assets/story1.jpg";
import wellness1 from "../assets/wellness1.jpg";
import wellness2 from "../assets/wellness2.jpg";
import health1 from "../assets/health1.jpg";
import other1 from "../assets/other1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import short3 from "../assets/short3.jpg";

const Webstories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const stories = [
    { id: 1, title: "Superfoods", active: true, image: wellness1, slides: [
      { img: wellness1, text: "Blueberries are rich in antioxidants called anthocyanins." },
      { img: story1, text: "Spinach is packed with iron and calcium for bone health." }
    ]},
    { id: 2, title: "Yoga Guide", active: true, image: story1, slides: [
      { img: story1, text: "Vinyasa yoga helps synchronize breath with movement." },
      { img: wellness2, text: "Daily meditation reduces cortisol levels by 23%." }
    ]},
    { id: 3, title: "Heart Rate", active: false, image: health1, slides: [
      { img: health1, text: "A normal resting heart rate ranges from 60 to 100 bpm." }
    ]},
    { id: 4, title: "Sleep Tips", active: true, image: other1, slides: [
      { img: other1, text: "Avoid blue screens for at least 60 minutes before bed." }
    ]},
    { id: 5, title: "Mental Care", active: false, image: card2, slides: [
      { img: card2, text: "Regular nature walks can significantly reduce anxiety." }
    ]},
    { id: 6, title: "Nutrition", active: true, image: card3, slides: [
      { img: card3, text: "Macronutrient balancing is key to sustained daily energy." }
    ]},
    { id: 7, title: "Hydration", active: false, image: short3, slides: [
      { img: short3, text: "Drinking water regulates body temperature and joint lubrication." }
    ]},
    { id: 8, title: "Skin Health", active: true, image: wellness2, slides: [
      { img: wellness2, text: "Staying hydrated and using SPF daily prevents premature aging." }
    ]},
  ];

  // Auto progression for active stories slides
  useEffect(() => {
    if (selectedStory) {
      const slides = selectedStory.slides || [];
      
      // Reset progress bar animation using GSAP
      if (progressRef.current) {
        gsap.set(progressRef.current, { width: "0%" });
        gsap.to(progressRef.current, {
          width: "100%",
          duration: 5,
          ease: "none",
          onComplete: () => {
            if (activeSlideIndex < slides.length - 1) {
              setActiveSlideIndex((prev) => prev + 1);
            } else {
              handleClose();
            }
          }
        });
      }
    }

    return () => {
      gsap.killTweensOf(progressRef.current);
    };
  }, [selectedStory, activeSlideIndex]);

  const handleOpenStory = (story) => {
    setSelectedStory(story);
    setActiveSlideIndex(0);
    // Block scroll when story open
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setSelectedStory(null);
    document.body.style.overflow = "";
  };

  const nextSlide = () => {
    const slides = selectedStory.slides || [];
    if (activeSlideIndex < slides.length - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
    } else {
      handleClose();
    }
  };

  const prevSlide = () => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
    }
  };

  return (
    <section className="mx-[5%] md:mx-[10%] my-16 bg-transparent text-left relative z-20">
      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-200/40 dark:border-slate-800/30 pb-6">
        <div>
          <h2 className="text-3xl font-black text-slate-850 dark:text-white inline-block relative font-heading uppercase tracking-widest">
            Web Stories
            <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-teal-500/20 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-semibold">
            Bite-sized visual stories you can tap through in moments.
          </p>
        </div>
      </div>

      {/* Stories list */}
      <div className="flex items-center gap-8 mt-10 overflow-x-auto scrollbar-hide py-4 px-2">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => handleOpenStory(story)}
            className="flex flex-col items-center cursor-pointer group shrink-0"
          >
            {/* Rotating Mesh Border Ring */}
            <div className={`w-24 h-24 rounded-full p-[3px] transition-all duration-500 ${
              story.active 
                ? "bg-gradient-to-tr from-teal-500 via-sky-400 to-emerald-400 group-hover:rotate-180 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.35)]"
                : "bg-slate-250 dark:bg-slate-800 group-hover:bg-slate-350 dark:group-hover:bg-slate-700"
            }`}>
              <div className="w-full h-full rounded-full bg-white dark:bg-brand-dark-card p-0.5">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Story Title */}
            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 mt-3.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 uppercase tracking-widest font-heading">
              {story.title}
            </span>
          </div>
        ))}
      </div>

      {/* Fullscreen Story Reader Overlay */}
      {selectedStory && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[999] flex items-center justify-center p-4">
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <FiX size={20} />
          </button>

          {/* Phone Canvas Container */}
          <div className="relative w-full max-w-sm aspect-[9/16] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/15">
            
            {/* Top Progressive Indicator Bars */}
            <div className="absolute top-4 left-4 right-4 z-30 flex gap-1">
              {(selectedStory.slides || []).map((_, idx) => (
                <div key={idx} className="flex-1 h-1 bg-white/25 rounded-full overflow-hidden">
                  <div
                    ref={idx === activeSlideIndex ? progressRef : null}
                    className={`h-full bg-teal-400 rounded-full ${
                      idx < activeSlideIndex ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Slides Content */}
            <div className="w-full h-full relative z-10">
              <img
                src={selectedStory.slides[activeSlideIndex].img}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 z-20 pointer-events-none"></div>

              {/* Story Slide Text Description */}
              <div className="absolute bottom-10 left-6 right-6 text-left z-30">
                <span className="bg-teal-500 text-slate-950 px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mb-2 inline-block">
                  {selectedStory.title}
                </span>
                <p className="text-white text-base font-bold leading-relaxed font-heading">
                  {selectedStory.slides[activeSlideIndex].text}
                </p>
              </div>
            </div>

            {/* Touch zones for story navigation */}
            <div className="absolute inset-0 z-20 flex">
              <div onClick={prevSlide} className="w-[40%] h-full cursor-west-resize"></div>
              <div onClick={nextSlide} className="w-[60%] h-full cursor-east-resize"></div>
            </div>

            {/* Manual Slide Controls */}
            {activeSlideIndex > 0 && (
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center z-30 cursor-pointer"
              >
                <FiChevronLeft size={16} />
              </button>
            )}
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center z-30 cursor-pointer"
            >
              <FiChevronRight size={16} />
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default Webstories;
