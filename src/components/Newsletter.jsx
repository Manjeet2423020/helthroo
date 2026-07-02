import { useState } from "react";
import { FiArrowRight, FiMail, FiHeart, FiMessageSquare, FiCheckCircle } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState("idle"); // idle, submitting, success

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus("submitting");
    setTimeout(() => {
      setSubStatus("success");
      setEmail("");
    }, 1800);
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
    <section className="px-[5%] md:px-[10%] py-16 bg-transparent relative z-20">
      
      {/* Top Banner section */}
      <div className="glass-premium p-8 md:p-12 rounded-[32px] shadow-lg text-left relative overflow-hidden">
        
        {/* Subtle grid lines background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 px-3.5 py-1.5 rounded-md text-[8px] font-black uppercase tracking-widest shadow-sm">
              Newsletter
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-black text-slate-850 dark:text-white leading-tight font-heading uppercase">
              Get the week's sharpest health briefings in your inbox.
            </h1>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed font-semibold max-w-xl">
              One concise editorial mailer that covers policy shifts, diagnostics, research signals, and care delivery trends worth tracking.
            </p>
          </div>

          {/* Right Highlights Lists */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="border border-slate-200/40 dark:border-slate-800/30 bg-white/20 dark:bg-slate-900/30 p-5 rounded-2xl cursor-pointer hover:bg-teal-500/5 hover:border-teal-500/30 hover:shadow duration-300">
              <h3 className="text-sm font-black text-slate-800 dark:text-white font-heading">Weekly Digest</h3>
              <p className="text-[8px] font-black text-teal-600 dark:text-teal-400 tracking-widest uppercase mt-1">Editorial Digest</p>
            </div>
            <div className="border border-slate-200/40 dark:border-slate-800/30 bg-white/20 dark:bg-slate-900/30 p-5 rounded-2xl cursor-pointer hover:bg-teal-500/5 hover:border-teal-500/30 hover:shadow duration-300">
              <h3 className="text-sm font-black text-slate-800 dark:text-white font-heading">Research</h3>
              <p className="text-[8px] font-black text-teal-600 dark:text-teal-400 tracking-widest uppercase mt-1">Clinical Highlights</p>
            </div>
            <div className="border border-slate-200/40 dark:border-slate-800/30 bg-white/20 dark:bg-slate-900/30 p-5 rounded-2xl cursor-pointer hover:bg-teal-500/5 hover:border-teal-500/30 hover:shadow duration-300">
              <h3 className="text-sm font-black text-slate-800 dark:text-white font-heading">Media</h3>
              <p className="text-[8px] font-black text-teal-600 dark:text-teal-400 tracking-widest uppercase mt-1">Podcast and Shorts Picks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 text-left">
        
        {/* Input box - command deck style */}
        <div className="lg:col-span-8 glass-premium p-8 rounded-[32px] shadow-lg flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-850 dark:text-white font-heading uppercase tracking-wider">
                Subscribe
              </h2>
              <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">
                Free Editorial Access
              </span>
            </div>
            
            {/* Input & Form */}
            {subStatus !== "success" ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 mt-6">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 h-12 rounded-xl border border-slate-200/60 dark:border-slate-800/60 px-4 text-xs font-bold focus:border-teal-500 dark:focus:focus:border-teal-400 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-white/10 dark:bg-slate-900/20 text-slate-800 dark:text-slate-200"
                />
                <button
                  type="submit"
                  disabled={subStatus === "submitting"}
                  className="h-12 px-6 bg-teal-500 hover:bg-teal-450 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 font-black text-[9px] uppercase tracking-widest rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-teal-500/10 transition-all duration-300 cursor-pointer disabled:opacity-60"
                >
                  {subStatus === "submitting" ? "Connecting..." : "Subscribe Now"} <FiArrowRight />
                </button>
              </form>
            ) : (
              <div className="mt-6 p-5 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center gap-4 text-teal-650 dark:text-teal-400 animate-fade-in">
                <FiCheckCircle size={24} className="shrink-0" />
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest font-heading">Successfully Connected</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold mt-1">Welcome to the Briefing Deck! Verify your inbox for confirmation.</p>
                </div>
              </div>
            )}
          </div>

          <p className="mt-6 text-slate-400 dark:text-slate-550 text-[8px] font-black uppercase tracking-wider">
            No spam. One focused update per week. Unsubscribe anytime.
          </p>
        </div>

        {/* Why subscribe list */}
        <div className="lg:col-span-4 glass-premium p-8 rounded-[32px] shadow-lg flex flex-col justify-between border border-slate-200/40 dark:border-slate-800/30">
          <div>
            <h3 className="text-[8px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">
              Why Subscribe
            </h3>
            <ul className="mt-5 space-y-3.5">
              <li className="flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
                <p className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Weekly editorial briefings
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
                <p className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Topic-specific health digests
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
                <p className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Early access to highlights
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
                <p className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Curated podcasts & shorts
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
        
        {/* Contact */}
        <div className="gradient-border-wrapper rounded-3xl">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner group glass-card p-6 border-none cursor-pointer flex flex-col justify-between h-full relative transition-all duration-350"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center shrink-0 border border-teal-500/20">
                <FiMail className="text-teal-400 text-lg" />
              </div>
              <div>
                <h3 className="text-[9px] font-black tracking-widest uppercase text-slate-850 dark:text-white font-heading">
                  Contact Us
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] leading-relaxed font-semibold mt-1.5">
                  Reach our team for support, partnerships, and editorial queries.
                </p>
              </div>
            </div>
            <button className="magnetic-target mt-6 flex items-center gap-1 text-teal-650 dark:text-teal-400 hover:text-teal-500 font-black text-[9px] uppercase tracking-widest relative z-10">
              Start A Conversation <FiArrowRight size={10} />
            </button>
          </div>
        </div>

        {/* Donate */}
        <div className="gradient-border-wrapper rounded-3xl">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner group glass-card p-6 border-none cursor-pointer flex flex-col justify-between h-full relative transition-all duration-350"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center shrink-0 border border-teal-500/20">
                <FiHeart className="text-teal-400 text-lg" />
              </div>
              <div>
                <h3 className="text-[9px] font-black tracking-widest uppercase text-slate-850 dark:text-white font-heading">
                  Donate
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] leading-relaxed font-semibold mt-1.5">
                  Support health coverage, awareness, and community outreach.
                </p>
              </div>
            </div>
            <button className="magnetic-target mt-6 flex items-center gap-1 text-teal-650 dark:text-teal-400 hover:text-teal-500 font-black text-[9px] uppercase tracking-widest relative z-10">
              Support The Mission <FiArrowRight size={10} />
            </button>
          </div>
        </div>

        {/* Feedback */}
        <div className="gradient-border-wrapper rounded-3xl">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner group glass-card p-6 border-none cursor-pointer flex flex-col justify-between h-full relative transition-all duration-350"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center shrink-0 border border-teal-500/20">
                <FiMessageSquare className="text-teal-400 text-lg" />
              </div>
              <div>
                <h3 className="text-[9px] font-black tracking-widest uppercase text-slate-850 dark:text-white font-heading">
                  Feedback
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] leading-relaxed font-semibold mt-1.5">
                  Tell us what helps, what needs work, and what to improve next.
                </p>
              </div>
            </div>
            <button className="magnetic-target mt-6 flex items-center gap-1 text-teal-650 dark:text-teal-400 hover:text-teal-500 font-black text-[9px] uppercase tracking-widest relative z-10">
              Share Your Thoughts <FiArrowRight size={10} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
