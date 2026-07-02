import { useState } from "react";
import { FiWind, FiSun, FiCheckCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import card1 from "../assets/card1.jpg";

const AQI_DATA = {
  Delhi: { aqi: 142, status: "Moderate", color: "text-amber-500 bg-amber-50 border-amber-200", tip: "Sensitive groups should wear masks outdoors." },
  Mumbai: { aqi: 68, status: "Good", color: "text-emerald-600 bg-emerald-50 border-emerald-200", tip: "Air quality is ideal for outdoor activities." },
  Bengaluru: { aqi: 45, status: "Excellent", color: "text-teal-600 bg-teal-50 border-teal-200", tip: "Perfect day for morning yoga or runs." }
};

const Hero = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [voted, setVoted] = useState(false);
  const [votePercentages, setVotePercentages] = useState({ lessThan1: 32, oneToTwo: 48, twoPlus: 20 });

  const handleVote = (option) => {
    if (voted) return;
    setVoted(true);
    // Simulate updating percentages
    const updated = { ...votePercentages };
    updated[option] = updated[option] + 1;
    const total = updated.lessThan1 + updated.oneToTwo + updated.twoPlus;
    setVotePercentages({
      lessThan1: Math.round((updated.lessThan1 / total) * 100),
      oneToTwo: Math.round((updated.oneToTwo / total) * 100),
      twoPlus: Math.round((updated.twoPlus / total) * 100)
    });
  };

  const currentAQI = AQI_DATA[selectedCity];

  return (
    <div className="w-full">
      {/* Top Hero Section */}
      <section className="px-[10%] py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Big Card */}
          <div className="relative lg:col-span-2 h-[520px] rounded-2xl overflow-hidden group shadow-premium shadow-hover cursor-pointer">
            <img
              src={hero1}
              alt="National Pulse Polio Campaign"
              className="w-full h-full object-cover group-hover:scale-105 duration-700 ease-out"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

            <div className="absolute bottom-8 left-8 right-8 text-left">
              <span className="bg-brand-mint text-brand-dark px-3 py-1 text-xs font-extrabold tracking-widest rounded-md uppercase">
                National
              </span>
              <h1 className="text-white text-3xl md:text-4xl font-extrabold mt-4 leading-tight font-heading">
                National Pulse Polio Campaign Launched, Polio Drops Given to Children Across the Country
              </h1>
              <p className="text-slate-300 text-sm mt-4 font-medium">Jun 28, 2026</p>
            </div>
          </div>

          {/* Right Side 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 h-[520px]">
            {/* Card 1 */}
            <div className="relative rounded-xl overflow-hidden group shadow-premium shadow-hover cursor-pointer">
              <img
                src={hero2}
                alt="Mann Ki Baat"
                className="w-full h-full object-cover group-hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h2 className="text-white font-bold text-sm md:text-base leading-snug font-heading">
                  PM Modi Highlights Birds, Yoga and Farmers in the 135th Episode
                </h2>
                <p className="text-slate-300 text-xs mt-2 font-medium">Jun 28, 2026</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-xl overflow-hidden group shadow-premium shadow-hover cursor-pointer">
              <img
                src={hero3}
                alt="Aarogya Setu 2.0"
                className="w-full h-full object-cover group-hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h2 className="text-white font-bold text-sm md:text-base leading-snug font-heading">
                  Aarogya Setu 2.0: JP Nadda to Launch India's Unified Platform
                </h2>
                <p className="text-slate-300 text-xs mt-2 font-medium">Jun 28, 2026</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-xl overflow-hidden group shadow-premium shadow-hover cursor-pointer">
              <img
                src={hero4}
                alt="Pharma Reforms"
                className="w-full h-full object-cover group-hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h2 className="text-white font-bold text-sm md:text-base leading-snug font-heading">
                  No Criminal Action for Minor Technical Violations: Reforms
                </h2>
                <p className="text-slate-300 text-xs mt-2 font-medium">Jun 27, 2026</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-xl overflow-hidden group shadow-premium shadow-hover cursor-pointer">
              <img
                src={hero5}
                alt="Government Doctors"
                className="w-full h-full object-cover group-hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h2 className="text-white font-bold text-sm md:text-base leading-snug font-heading">
                  Government Doctors Doing Private Practice is a Concern: SC
                </h2>
                <p className="text-slate-300 text-xs mt-2 font-medium">Jun 25, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Main Content Block */}
      <section className="bg-white px-[10%] py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Featured News article) */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden group shadow-premium shadow-hover cursor-pointer h-[580px]">
            <img
              src={hero6}
              alt="Health Awareness"
              className="w-full h-full object-cover group-hover:scale-105 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-left">
              {/* Card Tag */}
              <div className="flex items-center gap-3">
                <span className="bg-brand-cyan text-white px-3.5 py-1 text-xs font-bold tracking-widest rounded uppercase">
                  National
                </span>
                <span className="text-slate-300 text-xs font-semibold tracking-wider">
                  2 MIN READ
                </span>
              </div>

              {/* Title & Preview */}
              <div>
                <h2 className="text-white text-3xl font-extrabold leading-tight font-heading">
                  Perspective on Health Has Changed, Focus Now on Prevention and Better Lifestyle Along with Treatment
                </h2>
                <p className="text-slate-300 mt-4 text-sm leading-relaxed line-clamp-3">
                  Health Awareness: Health is the foundation of a strong and developed nation. When citizens are healthy, productivity increases, economic growth accelerates, and community resilience strengthens...
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-6 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white uppercase text-sm">
                    KS
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold capitalize">Kavita Singh</h4>
                    <p className="text-slate-400 text-xs">Health Correspondent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column (Read More list) */}
          <div className="lg:col-span-3 flex flex-col border border-slate-100 rounded-2xl overflow-hidden shadow-premium bg-slate-50/50 justify-between">
            {/* List Header */}
            <div className="p-5 border-b border-slate-100 bg-white">
              <h3 className="text-slate-800 font-extrabold text-base tracking-wide font-heading">RECOMMENDED READS</h3>
            </div>

            {/* List Items */}
            <div className="divide-y divide-slate-100 bg-white flex-1 flex flex-col justify-around">
              {/* Item 1 */}
              <div className="flex gap-4 p-5 hover:bg-slate-50/50 transition-colors duration-200 cursor-pointer text-left">
                <img src={card1} alt="" className="w-20 h-20 rounded-lg object-cover shrink-0 shadow-sm" />
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-extrabold tracking-wider text-brand-cyan uppercase">National</span>
                  <h4 className="mt-1 text-xs font-bold text-slate-800 leading-snug line-clamp-2">
                    Government Takes Major Step to Improve Healthcare Facilities
                  </h4>
                  <button className="flex items-center gap-1.5 mt-2 text-brand-cyan font-bold text-xs hover:text-brand-mint duration-200">
                    READ MORE <FaArrowRight size={10} />
                  </button>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 p-5 hover:bg-slate-50/50 transition-colors duration-200 cursor-pointer text-left">
                <img src={card1} alt="" className="w-20 h-20 rounded-lg object-cover shrink-0 shadow-sm" />
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-extrabold tracking-wider text-brand-cyan uppercase">National</span>
                  <h4 className="mt-1 text-xs font-bold text-slate-800 leading-snug line-clamp-2">
                    Rural India Diagnostics Infrastructure Receives New Budget Allocation
                  </h4>
                  <button className="flex items-center gap-1.5 mt-2 text-brand-cyan font-bold text-xs hover:text-brand-mint duration-200">
                    READ MORE <FaArrowRight size={10} />
                  </button>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 p-5 hover:bg-slate-50/50 transition-colors duration-200 cursor-pointer text-left">
                <img src={card1} alt="" className="w-20 h-20 rounded-lg object-cover shrink-0 shadow-sm" />
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-extrabold tracking-wider text-brand-cyan uppercase">National</span>
                  <h4 className="mt-1 text-xs font-bold text-slate-800 leading-snug line-clamp-2">
                    New AI Guidelines Drafted for Public Health Centers in India
                  </h4>
                  <button className="flex items-center gap-1.5 mt-2 text-brand-cyan font-bold text-xs hover:text-brand-mint duration-200">
                    READ MORE <FaArrowRight size={10} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Live Health Hub - Interactive Widgets replacing "black space") */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Widget 1: AQI & Weather Monitor */}
            <div className="border border-slate-100 bg-white p-6 rounded-2xl shadow-premium text-left">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <FiWind className="text-brand-cyan text-xl" />
                  <h3 className="font-extrabold text-sm text-slate-800 tracking-wider font-heading">LIVE AQI MONITOR</h3>
                </div>
                <div className="flex gap-1">
                  {Object.keys(AQI_DATA).map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`px-2 py-0.5 rounded text-3xs font-extrabold uppercase border transition-all duration-200 ${
                        selectedCity === city
                          ? "bg-brand-cyan text-white border-brand-cyan"
                          : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {city.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-3xl font-black text-slate-800 tracking-tight font-heading">{currentAQI.aqi}</p>
                  <p className="text-[11px] font-bold text-slate-400 mt-0.5">PM2.5 Index</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentAQI.color}`}>
                  {currentAQI.status}
                </span>
              </div>

              <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {currentAQI.tip}
                </p>
              </div>
            </div>

            {/* Widget 2: Interactive Health Poll */}
            <div className="border border-slate-100 bg-white p-6 rounded-2xl shadow-premium text-left">
              <h3 className="font-extrabold text-sm text-slate-800 tracking-wider pb-3 border-b border-slate-100 font-heading">
                DAILY HEALTH POLL
              </h3>
              
              <p className="text-xs font-bold text-slate-600 mt-4 leading-relaxed">
                How much water have you consumed so far today?
              </p>

              <div className="mt-4 space-y-2.5">
                {!voted ? (
                  <>
                    <button
                      onClick={() => handleVote("lessThan1")}
                      className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all duration-200"
                    >
                      Less than 1 Litre
                    </button>
                    <button
                      onClick={() => handleVote("oneToTwo")}
                      className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all duration-200"
                    >
                      1 to 2 Litres
                    </button>
                    <button
                      onClick={() => handleVote("twoPlus")}
                      className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all duration-200"
                    >
                      More than 2 Litres
                    </button>
                  </>
                ) : (
                  <div className="space-y-3 mt-2">
                    {/* Option 1 Bar */}
                    <div>
                      <div className="flex justify-between text-2xs font-extrabold text-slate-600 mb-1">
                        <span>&lt; 1 Litre</span>
                        <span>{votePercentages.lessThan1}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${votePercentages.lessThan1}%` }}></div>
                      </div>
                    </div>
                    {/* Option 2 Bar */}
                    <div>
                      <div className="flex justify-between text-2xs font-extrabold text-slate-600 mb-1">
                        <span>1 - 2 Litres</span>
                        <span>{votePercentages.oneToTwo}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-cyan rounded-full transition-all duration-500" style={{ width: `${votePercentages.oneToTwo}%` }}></div>
                      </div>
                    </div>
                    {/* Option 3 Bar */}
                    <div>
                      <div className="flex justify-between text-2xs font-extrabold text-slate-600 mb-1">
                        <span>2+ Litres</span>
                        <span>{votePercentages.twoPlus}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${votePercentages.twoPlus}%` }}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-3xs font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 p-2 rounded-lg mt-2">
                      <FiCheckCircle size={12} /> Vote recorded. Thank you for participating!
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
