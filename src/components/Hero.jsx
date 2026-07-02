import { useState, useRef, useEffect } from "react";
import { FiWind, FiCheckCircle, FiActivity, FiMapPin, FiClock } from "react-icons/fi";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import gsap from "gsap";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import card1 from "../assets/card1.jpg";

const AQI_DATA = {
  Delhi: { aqi: 142, status: "Moderate", color: "text-amber-500 bg-amber-500/5 border-amber-500/20", tip: "Sensitive groups should wear masks outdoors." },
  Mumbai: { aqi: 68, status: "Good", color: "text-emerald-500 bg-emerald-500/5 border-emerald-500/20", tip: "Air quality is ideal for outdoor activities." },
  Bengaluru: { aqi: 45, status: "Excellent", color: "text-teal-500 bg-teal-500/5 border-teal-500/20", tip: "Perfect day for morning yoga or runs." }
};

const Hero = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [voted, setVoted] = useState(false);
  const [votePercentages, setVotePercentages] = useState({ lessThan1: 32, oneToTwo: 48, twoPlus: 20 });
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // GSAP animation for text character entrance
    const chars = titleRef.current?.querySelectorAll(".char-span");
    if (chars && chars.length > 0) {
      gsap.fromTo(
        chars,
        { y: "110%", rotateX: -30, opacity: 0 },
        { y: "0%", rotateX: 0, opacity: 1, duration: 1.2, stagger: 0.02, ease: "power4.out" }
      );
    }

    // GSAP parallax on floating elements
    gsap.to(".hero-float-badge", {
      y: -25,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut"
    });
  }, []);

  const handleVote = (option) => {
    if (voted) return;
    setVoted(true);
    const updated = { ...votePercentages };
    updated[option] = updated[option] + 1;
    const total = updated.lessThan1 + updated.oneToTwo + updated.twoPlus;
    setVotePercentages({
      lessThan1: Math.round((updated.lessThan1 / total) * 100),
      oneToTwo: Math.round((updated.oneToTwo / total) * 100),
      twoPlus: Math.round((updated.twoPlus / total) * 100)
    });
  };

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

  const currentAQI = AQI_DATA[selectedCity];

  // Helper function to split text for GSAP animation
  const splitText = (text) => {
    return text.split(" ").map((word, wIdx) => (
      <span key={wIdx} className="inline-block whitespace-nowrap mr-3 overflow-hidden">
        {word.split("").map((char, cIdx) => (
          <span key={cIdx} className="char-span inline-block">
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className="w-full relative py-8 px-[5%] md:px-[10%] text-left">
      
      {/* Intro Header Section */}
      <div className="max-w-7xl mx-auto mb-12 relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          {/* Tagline Badge */}
          <div className="hero-float-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/25 bg-teal-500/5 text-teal-600 dark:text-teal-400 text-[10px] font-black tracking-widest uppercase mb-4 shadow-sm">
            <FiActivity className="animate-pulse" />
            <span>Health & Diagnostics Review</span>
          </div>

          {/* Huge typography header */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05] font-heading"
          >
            {splitText("IMPACTING")} <br />
            <span className="text-gradient-cyan">{splitText("GLOBAL HEALTH")}</span>
          </h1>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-semibold max-w-md leading-relaxed border-l-2 border-teal-500/40 pl-4 py-1">
          Bridging clinical science with everyday wellness indicators. Stay updated with state diagnostics, peer-reviewed medical reports, and environmental indexes.
        </p>
      </div>

      {/* Main Grid: Asymmetric Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Columns - Big Hero Card */}
        <div className="lg:col-span-8 group relative rounded-3xl shimmer-border shadow-2xl h-[540px]">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="shimmer-border-inner group relative overflow-hidden h-full cursor-pointer bg-slate-900"
          >
            <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <img
              src={hero1}
              alt="National Pulse Polio Campaign"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
            />
            {/* Elegant glass content card overlapping bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
            
            <div className="absolute bottom-8 left-8 right-8 text-left z-20">
              <div className="flex items-center gap-3">
                <span className="bg-teal-500 text-slate-950 px-3 py-1 text-[9px] font-black tracking-widest rounded uppercase shadow-sm">
                  NATIONAL CAMPAIGN
                </span>
                <span className="text-slate-350 text-[10px] font-bold flex items-center gap-1">
                  <FiClock /> Jun 28, 2026
                </span>
              </div>
              <h2 className="text-white text-2xl sm:text-3.5xl font-black mt-4 leading-tight font-heading group-hover:text-teal-400 transition-colors duration-300">
                National Pulse Polio Campaign Launched, Polio Drops Given to Children Across the Country
              </h2>
              <div className="flex items-center gap-2 mt-6">
                <button className="magnetic-target px-5 py-2.5 bg-teal-500 hover:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center gap-1">
                  Read Campaign Report <FaArrowRight size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Columns - 2x2 Grid with Tilt */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 h-[540px]">
          {/* Card 1 */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200/50 dark:border-slate-800/40 bg-slate-900 transition-all duration-300 cursor-pointer"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <img
              src={hero2}
              alt="Mann Ki Baat"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left z-20">
              <h2 className="text-white font-black text-xs leading-snug font-heading group-hover:text-teal-400 transition-colors">
                PM Modi Highlights Birds, Yoga and Farmers in 135th Episode
              </h2>
              <p className="text-slate-400 text-[9px] mt-2 font-bold uppercase">Jun 28, 2026</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200/50 dark:border-slate-800/40 bg-slate-900 transition-all duration-300 cursor-pointer"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <img
              src={hero3}
              alt="Aarogya Setu 2.0"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left z-20">
              <h2 className="text-white font-black text-xs leading-snug font-heading group-hover:text-teal-400 transition-colors">
                Aarogya Setu 2.0: JP Nadda to Launch India's Unified Platform
              </h2>
              <p className="text-slate-400 text-[9px] mt-2 font-bold uppercase">Jun 28, 2026</p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200/50 dark:border-slate-800/40 bg-slate-900 transition-all duration-300 cursor-pointer"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <img
              src={hero4}
              alt="Pharma Reforms"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left z-20">
              <h2 className="text-white font-black text-xs leading-snug font-heading group-hover:text-teal-400 transition-colors">
                No Criminal Action for Minor Technical Violations: Reforms
              </h2>
              <p className="text-slate-400 text-[9px] mt-2 font-bold uppercase">Jun 27, 2026</p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200/50 dark:border-slate-800/40 bg-slate-900 transition-all duration-300 cursor-pointer"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <img
              src={hero5}
              alt="Government Doctors"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left z-20">
              <h2 className="text-white font-black text-xs leading-snug font-heading group-hover:text-teal-400 transition-colors">
                Government Doctors Doing Private Practice is Concern: SC
              </h2>
              <p className="text-slate-400 text-[9px] mt-2 font-bold uppercase">Jun 25, 2026</p>
            </div>
          </div>
        </div>

      </div>

      {/* Hero Bottom - Columns: Spotlight, Recommended Reads, Widgets */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 relative z-10">
        
        {/* Left Column: Spotlight News (5 Cols) */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-5 relative rounded-3xl overflow-hidden group shadow-2xl h-[560px] border border-slate-200/50 dark:border-slate-800/40 bg-slate-900"
        >
          <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
          <img
            src={hero6}
            alt="Health Awareness"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10"></div>
          
          <div className="absolute inset-0 flex flex-col justify-between p-7 text-left z-20">
            <div className="flex items-center gap-3">
              <span className="bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 text-teal-400 px-3 py-1 text-[9px] font-black tracking-widest rounded uppercase">
                Spotlight
              </span>
              <span className="text-slate-300 text-[9px] font-bold uppercase tracking-wider">
                3 Min Read
              </span>
            </div>

            <div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-snug font-heading group-hover:text-teal-400 transition-colors duration-300">
                Perspective on Health Has Changed, Focus Now on Prevention and Better Lifestyle Along with Treatment
              </h3>
              <p className="text-slate-350 mt-3 text-xs leading-relaxed line-clamp-3 font-semibold">
                Health Awareness: Health is the foundation of a strong and developed nation. When citizens are healthy, productivity increases, economic growth accelerates, and community resilience strengthens.
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-5 border-t border-white/10 pt-4">
                <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center font-black text-white uppercase text-[10px] border border-white/10">
                  KS
                </div>
                <div>
                  <h4 className="text-white text-xs font-black">Kavita Singh</h4>
                  <p className="text-slate-400 text-[9px] font-bold">Health Correspondent</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Recommended Reads (3 Cols) */}
        <div className="lg:col-span-3 flex flex-col glass-premium rounded-3xl overflow-hidden border border-slate-200/40 dark:border-slate-800/30 shadow-lg justify-between">
          <div className="p-5 border-b border-slate-200/25 dark:border-slate-800/25 bg-white/10 dark:bg-slate-900/10">
            <h3 className="text-slate-800 dark:text-slate-250 font-black text-[10px] tracking-widest font-heading uppercase">RECOMMENDED READS</h3>
          </div>

          <div className="divide-y divide-slate-200/25 dark:divide-slate-800/25 flex-1 flex flex-col justify-around">
            {/* Item 1 */}
            <div className="flex gap-3 p-4 hover:bg-white/30 dark:hover:bg-slate-850/20 transition-colors duration-200 cursor-pointer group">
              <img src={card1} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0 border border-white/10 shadow-sm" />
              <div className="flex flex-col justify-center">
                <span className="text-[8px] font-black tracking-widest text-teal-600 dark:text-teal-400 uppercase">National</span>
                <h4 className="mt-0.5 text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  Government Takes Major Step to Improve Healthcare Facilities
                </h4>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-3 p-4 hover:bg-white/30 dark:hover:bg-slate-850/20 transition-colors duration-200 cursor-pointer group">
              <img src={card1} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0 border border-white/10 shadow-sm" />
              <div className="flex flex-col justify-center">
                <span className="text-[8px] font-black tracking-widest text-teal-600 dark:text-teal-400 uppercase">National</span>
                <h4 className="mt-0.5 text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  Rural India Diagnostics Infrastructure Receives New Budget Allocation
                </h4>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-3 p-4 hover:bg-white/30 dark:hover:bg-slate-850/20 transition-colors duration-200 cursor-pointer group">
              <img src={card1} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0 border border-white/10 shadow-sm" />
              <div className="flex flex-col justify-center">
                <span className="text-[8px] font-black tracking-widest text-teal-600 dark:text-teal-400 uppercase">National</span>
                <h4 className="mt-0.5 text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  New AI Guidelines Drafted for Public Health Centers in India
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Widgets (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Widget 1: AQI & Weather Monitor */}
          <div className="glass-premium p-6 rounded-3xl shadow-lg border border-slate-200/40 dark:border-slate-800/30">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/25 dark:border-slate-800/25">
              <div className="flex items-center gap-2">
                <FiWind className="text-teal-500 dark:text-teal-450 text-base" />
                <h3 className="font-black text-[10px] text-slate-800 dark:text-slate-250 tracking-widest font-heading uppercase">AQI MONITOR</h3>
              </div>
              <div className="flex gap-1.5">
                {Object.keys(AQI_DATA).map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase border transition-all duration-300 cursor-pointer ${
                      selectedCity === city
                        ? "bg-teal-500 text-slate-950 border-teal-500 dark:bg-teal-400 dark:border-teal-400"
                        : "bg-white/20 text-slate-500 border-slate-200/40 dark:border-slate-800/40 dark:text-slate-400 hover:bg-white/40 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    {city.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-4xl font-black text-slate-900 dark:text-white tracking-tight font-heading">{currentAQI.aqi}</p>
                <p className="text-[10px] font-bold text-slate-450 mt-0.5 flex items-center gap-1"><FiMapPin /> PM2.5 in {selectedCity}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-black border uppercase tracking-wider ${currentAQI.color}`}>
                {currentAQI.status}
              </span>
            </div>

            <div className="mt-4 p-3 bg-white/30 dark:bg-slate-900/35 rounded-2xl border border-slate-200/25 dark:border-slate-800/25 text-left">
              <p className="text-[11px] text-slate-600 dark:text-slate-350 leading-relaxed font-semibold">
                {currentAQI.tip}
              </p>
            </div>
          </div>

          {/* Widget 2: Interactive Health Poll */}
          <div className="glass-premium p-6 rounded-3xl shadow-lg border border-slate-200/40 dark:border-slate-800/30">
            <h3 className="font-black text-[10px] text-slate-800 dark:text-slate-250 tracking-widest pb-3 border-b border-slate-200/25 dark:border-slate-800/25 font-heading uppercase">
              HEALTH POLL
            </h3>
            
            <p className="text-xs font-extrabold text-slate-600 dark:text-slate-300 mt-4 leading-relaxed text-left">
              How much water have you consumed so far today?
            </p>

            <div className="mt-4 space-y-2.5">
              {!voted ? (
                <>
                  <button
                    onClick={() => handleVote("lessThan1")}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/20 hover:border-teal-500 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 dark:hover:border-teal-450 transition-all duration-300 cursor-pointer"
                  >
                    Less than 1 Litre
                  </button>
                  <button
                    onClick={() => handleVote("oneToTwo")}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/20 hover:border-teal-500 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 dark:hover:border-teal-450 transition-all duration-300 cursor-pointer"
                  >
                    1 to 2 Litres
                  </button>
                  <button
                    onClick={() => handleVote("twoPlus")}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/20 hover:border-teal-500 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 dark:hover:border-teal-450 transition-all duration-300 cursor-pointer"
                  >
                    More than 2 Litres
                  </button>
                </>
              ) : (
                <div className="space-y-3 mt-2 text-left">
                  {/* Option 1 Bar */}
                  <div>
                    <div className="flex justify-between text-[10px] font-black text-slate-500 dark:text-slate-400 mb-1">
                      <span>&lt; 1 Litre</span>
                      <span>{votePercentages.lessThan1}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${votePercentages.lessThan1}%` }}></div>
                    </div>
                  </div>
                  {/* Option 2 Bar */}
                  <div>
                    <div className="flex justify-between text-[10px] font-black text-slate-500 dark:text-slate-400 mb-1">
                      <span>1 - 2 Litres</span>
                      <span>{votePercentages.oneToTwo}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 dark:bg-teal-400 rounded-full transition-all duration-500" style={{ width: `${votePercentages.oneToTwo}%` }}></div>
                    </div>
                  </div>
                  {/* Option 3 Bar */}
                  <div>
                    <div className="flex justify-between text-[10px] font-black text-slate-500 dark:text-slate-400 mb-1">
                      <span>2+ Litres</span>
                      <span>{votePercentages.twoPlus}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${votePercentages.twoPlus}%` }}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-black text-emerald-600 bg-emerald-500/5 border border-emerald-500/20 p-2 rounded-xl mt-3 dark:text-emerald-400">
                    <FiCheckCircle size={11} className="shrink-0" /> VOTE RECORDED SUCCESSFULLY.
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;
