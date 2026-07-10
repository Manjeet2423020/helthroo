import { useState, useRef, useEffect } from "react";
import { FiWind, FiCheckCircle, FiActivity, FiMapPin, FiClock } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ARTICLES } from "../constants/articles";
import { useLanguage } from "../context/LanguageContext";
import NewsCard from "./NewsCard";

const AQI_DATA = {
  Delhi: { aqi: 142, status: "Moderate", color: "text-amber-500 bg-amber-500/5 border-amber-500/20", tip: "Sensitive groups should wear masks outdoors." },
  Mumbai: { aqi: 68, status: "Good", color: "text-emerald-500 bg-emerald-500/5 border-emerald-500/20", tip: "Air quality is ideal for outdoor activities." },
  Bengaluru: { aqi: 45, status: "Excellent", color: "text-teal-500 bg-teal-500/5 border-teal-500/20", tip: "Perfect day for morning yoga or runs." }
};

const Hero = () => {
  const { t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [voted, setVoted] = useState(false);
  const [votePercentages, setVotePercentages] = useState({ lessThan1: 32, oneToTwo: 48, twoPlus: 20 });
  const containerRef = useRef(null);

  // Hero Slider State
  const [sliderIndex, setSliderIndex] = useState(0);

  // Slice articles for various sections
  const sliderArticles = ARTICLES.slice(0, 3);
  const gridArticles = ARTICLES.slice(1, 5);
  const spotlightArticle = ARTICLES[5] || ARTICLES[0];
  const recommendedArticles = ARTICLES.slice(6, 9);

  // Auto Slider Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderArticles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [sliderArticles.length]);

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
  const activeSlide = sliderArticles[sliderIndex];

  return (
    <div ref={containerRef} className="w-full relative py-8 px-[5%] md:px-[10%] text-left">
      
      {/* Intro Header Section */}
      <div className="max-w-7xl mx-auto mb-12 relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          {/* Tagline Badge */}
          <div className="hero-float-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/25 bg-teal-500/5 text-teal-600 dark:text-teal-400 text-[10px] font-black tracking-widest uppercase mb-4 shadow-sm">
            <FiActivity className="animate-pulse" />
            <span>{t("Health & Diagnostics Review")}</span>
          </div>

          {/* Huge typography header */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05] font-heading">
            {t("IMPACTING")} <br />
            <span className="text-gradient-cyan">{t("GLOBAL HEALTH")}</span>
          </h1>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-semibold max-w-md leading-relaxed border-l-2 border-teal-500/40 pl-4 py-1">
          {t("Hero Description")}
        </p>
      </div>

      {/* Main Grid: Asymmetric Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Columns - Hero Slider */}
        <div className="lg:col-span-8 group relative rounded-3xl shimmer-border shadow-2xl h-[540px]">
          {sliderArticles.map((slide, index) => {
            const isActive = index === sliderIndex;
            return (
              <div
                key={slide.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`shimmer-border-inner absolute inset-0 transition-opacity duration-1000 ease-in-out bg-slate-900 ${
                  isActive ? "opacity-100 z-20 pointer-events-auto" : "opacity-0 z-10 pointer-events-none"
                }`}
              >
                <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
                
                <div className="absolute bottom-8 left-8 right-8 text-left z-20">
                  <div className="flex items-center gap-3">
                    <span className="bg-teal-500 text-slate-950 px-3 py-1 text-[9px] font-black tracking-widest rounded uppercase shadow-sm">
                      {t(slide.category)} • {t("FEATURED")}
                    </span>
                    <span className="text-slate-350 text-[10px] font-bold flex items-center gap-1">
                      <FiClock /> {slide.publishedDate}
                    </span>
                  </div>
                  <h2 className="text-white text-2xl sm:text-3.5xl font-black mt-4 leading-tight font-heading group-hover:text-teal-400 transition-colors duration-300">
                    {slide.title}
                  </h2>
                  <div className="flex items-center justify-between mt-6">
                    <Link to={`/news/${slide.slug}`}>
                      <button className="magnetic-target px-5 py-2.5 bg-teal-500 hover:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center gap-1 cursor-pointer">
                        {t("Read Full Article")} <FaArrowRight size={10} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Slider Pagination Dots */}
          <div className="absolute bottom-4 right-8 z-30 flex gap-2">
            {sliderArticles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSliderIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === sliderIndex ? "bg-teal-450 w-6" : "bg-white/40 hover:bg-white/70"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right Columns - 2x2 Grid from mock database using map() */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 h-[540px]">
          {gridArticles.map((article) => (
            <div
              key={article.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200/50 dark:border-slate-800/40 bg-slate-900 transition-all duration-300 cursor-pointer h-full"
            >
              <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                <Link to={`/news/${article.slug}`}>
                  <h2 className="text-white font-black text-xs leading-snug font-heading group-hover:text-teal-400 transition-colors">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-slate-400 text-[9px] mt-2 font-bold uppercase">{article.publishedDate}</p>
              </div>
            </div>
          ))}
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
            src={spotlightArticle.image}
            alt={spotlightArticle.title}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10"></div>
          
          <div className="absolute inset-0 flex flex-col justify-between p-7 text-left z-20">
            <div className="flex items-center gap-3">
              <span className="bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 text-teal-400 px-3 py-1 text-[9px] font-black tracking-widest rounded uppercase">
                {t("Spotlight")}
              </span>
              <span className="text-slate-350 text-[9px] font-bold uppercase tracking-wider">
                {spotlightArticle.readingTime || "3 Min Read"}
              </span>
            </div>

            <div>
              <Link to={`/news/${spotlightArticle.slug}`}>
                <h3 className="text-white text-xl md:text-2xl font-black leading-snug font-heading group-hover:text-teal-400 transition-colors duration-300">
                  {spotlightArticle.title}
                </h3>
              </Link>
              <p className="text-slate-350 mt-3 text-xs leading-relaxed line-clamp-3 font-semibold">
                {spotlightArticle.description}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-5 border-t border-white/10 pt-4">
                <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center font-black text-white uppercase text-[10px] border border-white/10">
                  {spotlightArticle.author.avatar}
                </div>
                <div>
                  <h4 className="text-white text-xs font-black">{spotlightArticle.author.name}</h4>
                  <p className="text-slate-400 text-[9px] font-bold">{spotlightArticle.author.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Recommended Reads (3 Cols) */}
        <div className="lg:col-span-3 flex flex-col glass-premium rounded-3xl overflow-hidden border border-slate-200/40 dark:border-slate-800/30 shadow-lg justify-between">
          <div className="p-5 border-b border-slate-200/25 dark:border-slate-800/25 bg-white/10 dark:bg-slate-900/10">
            <h3 className="text-slate-800 dark:text-slate-250 font-black text-[10px] tracking-widest font-heading uppercase">{t("RECOMMENDED READS")}</h3>
          </div>

          <div className="divide-y divide-slate-200/25 dark:divide-slate-800/25 flex-1 flex flex-col justify-around">
            {recommendedArticles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                variant="compact"
              />
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Widgets (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Widget 1: AQI & Weather Monitor */}
          <div className="glass-premium p-6 rounded-3xl shadow-lg border border-slate-200/40 dark:border-slate-800/30">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/25 dark:border-slate-800/25">
              <div className="flex items-center gap-2">
                <FiWind className="text-teal-500 dark:text-teal-450 text-base" />
                <h3 className="font-black text-[10px] text-slate-800 dark:text-slate-250 tracking-widest font-heading uppercase">{t("AQI MONITOR")}</h3>
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
                    {t(city)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-4xl font-black text-slate-900 dark:text-white tracking-tight font-heading">{currentAQI.aqi}</p>
                <p className="text-[10px] font-bold text-slate-450 mt-0.5 flex items-center gap-1"><FiMapPin /> {t("PM2.5 in")} {t(selectedCity)}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-black border uppercase tracking-wider ${currentAQI.color}`}>
                {t(currentAQI.status)}
              </span>
            </div>

            <div className="mt-4 p-3 bg-white/30 dark:bg-slate-900/35 rounded-2xl border border-slate-200/25 dark:border-slate-800/25 text-left">
              <p className="text-[11px] text-slate-655 dark:text-slate-350 leading-relaxed font-semibold">
                {t(currentAQI.tip)}
              </p>
            </div>
          </div>

          {/* Widget 2: Interactive Health Poll */}
          <div className="glass-premium p-6 rounded-3xl shadow-lg border border-slate-200/40 dark:border-slate-800/30">
            <h3 className="font-black text-[10px] text-slate-800 dark:text-slate-250 tracking-widest pb-3 border-b border-slate-200/25 dark:border-slate-800/25 font-heading uppercase">
              {t("HEALTH POLL")}
            </h3>
            
            <p className="text-xs font-extrabold text-slate-600 dark:text-slate-300 mt-4 leading-relaxed text-left">
              {t("How much water have you consumed so far today?")}
            </p>

            <div className="mt-4 space-y-2.5">
              {!voted ? (
                <>
                  <button
                    onClick={() => handleVote("lessThan1")}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/20 hover:border-teal-500 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 dark:hover:border-teal-450 transition-all duration-300 cursor-pointer"
                  >
                    {t("Less than 1 Litre")}
                  </button>
                  <button
                    onClick={() => handleVote("oneToTwo")}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/20 hover:border-teal-500 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 dark:hover:border-teal-450 transition-all duration-300 cursor-pointer"
                  >
                    {t("1 to 2 Litres")}
                  </button>
                  <button
                    onClick={() => handleVote("twoPlus")}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/20 hover:border-teal-500 hover:bg-teal-500/5 dark:hover:bg-teal-400/5 dark:hover:border-teal-450 transition-all duration-300 cursor-pointer"
                  >
                    {t("More than 2 Litres")}
                  </button>
                </>
              ) : (
                <div className="space-y-3 mt-2 text-left">
                  <div>
                    <div className="flex justify-between text-[10px] font-black text-slate-500 dark:text-slate-400 mb-1">
                      <span>{t("< 1 Litre")}</span>
                      <span>{votePercentages.lessThan1}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${votePercentages.lessThan1}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-black text-slate-500 dark:text-slate-400 mb-1">
                      <span>{t("1 - 2 Litres")}</span>
                      <span>{votePercentages.oneToTwo}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 dark:bg-teal-450 rounded-full transition-all duration-500" style={{ width: `${votePercentages.oneToTwo}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-black text-slate-500 dark:text-slate-400 mb-1">
                      <span>{t("2+ Litres")}</span>
                      <span>{votePercentages.twoPlus}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${votePercentages.twoPlus}%` }}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-black text-emerald-600 bg-emerald-500/5 border border-emerald-500/20 p-2 rounded-xl mt-3 dark:text-emerald-400">
                    <FiCheckCircle size={11} className="shrink-0" /> {t("VOTE RECORDED SUCCESSFULLY.")}
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
