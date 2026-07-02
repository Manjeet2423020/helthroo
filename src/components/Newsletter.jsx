import { FaArrowRight } from "react-icons/fa6";
import { FaRegEnvelope, FaRegHeart, FaRegCommentDots } from "react-icons/fa";

const Newsletter = () => {
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
    <section className="px-[5%] md:px-[10%] py-16 bg-transparent">
      {/* Top Banner section */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-premium text-left border border-slate-200/40 dark:border-slate-800/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <span className="bg-brand-cyan/10 dark:bg-brand-mint/15 text-brand-cyan dark:text-brand-mint px-3.5 py-1.5 rounded-md text-[9px] font-black uppercase tracking-widest border border-brand-cyan/10 dark:border-brand-mint/20 shadow-sm">
              Newsletter
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-black text-brand-dark dark:text-white leading-tight font-heading uppercase">
              Get the week's sharpest health briefings in your inbox.
            </h1>
            <p className="mt-4 text-slate-550 dark:text-slate-400 text-sm md:text-base leading-relaxed font-semibold max-w-xl">
              One concise editorial mailer that covers policy shifts, diagnostics, research signals, and care delivery trends worth tracking.
            </p>
          </div>

          {/* Right Highlights Lists */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="border border-slate-200/40 dark:border-slate-800/30 bg-white/20 dark:bg-slate-900/30 p-5 rounded-2xl cursor-pointer hover:bg-white/40 dark:hover:bg-slate-850/40 hover:shadow-premium duration-300">
              <h3 className="text-sm font-black text-brand-dark dark:text-white font-heading">Weekly Digest</h3>
              <p className="text-[9px] font-black text-brand-cyan dark:text-brand-mint tracking-widest uppercase mt-1">Editorial Digest</p>
            </div>
            <div className="border border-slate-200/40 dark:border-slate-800/30 bg-white/20 dark:bg-slate-900/30 p-5 rounded-2xl cursor-pointer hover:bg-white/40 dark:hover:bg-slate-850/40 hover:shadow-premium duration-300">
              <h3 className="text-sm font-black text-brand-dark dark:text-white font-heading">Research</h3>
              <p className="text-[9px] font-black text-brand-cyan dark:text-brand-mint tracking-widest uppercase mt-1">Clinical Highlights</p>
            </div>
            <div className="border border-slate-200/40 dark:border-slate-800/30 bg-white/20 dark:bg-slate-900/30 p-5 rounded-2xl cursor-pointer hover:bg-white/40 dark:hover:bg-slate-850/40 hover:shadow-premium duration-300">
              <h3 className="text-sm font-black text-brand-dark dark:text-white font-heading">Media</h3>
              <p className="text-[9px] font-black text-brand-cyan dark:text-brand-mint tracking-widest uppercase mt-1">Podcast and Shorts Picks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 text-left">
        
        {/* Input box */}
        <div className="lg:col-span-8 glass-panel p-8 rounded-3xl shadow-premium flex flex-col justify-between border border-slate-200/40 dark:border-slate-800/30">
          <div>
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-2xl md:text-3xl font-black text-brand-dark dark:text-white font-heading uppercase tracking-wider">
                Subscribe
              </h2>
              <span className="bg-brand-mint/15 dark:bg-brand-mint/20 text-brand-cyan dark:text-brand-mint border border-brand-mint/30 dark:border-brand-mint/25 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                Free Editorial Access
              </span>
            </div>
            
            {/* Input & button flex */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 rounded-xl border border-slate-200/60 dark:border-slate-800/60 px-4 text-xs font-bold focus:border-brand-cyan dark:focus:border-brand-mint focus:ring-1 focus:ring-brand-cyan dark:focus:ring-brand-mint outline-none transition-all bg-white/10 dark:bg-slate-900/20 text-slate-800 dark:text-slate-200"
              />
              <button className="h-12 px-6 bg-brand-cyan dark:bg-brand-mint hover:bg-brand-dark dark:hover:bg-brand-mint/90 text-white dark:text-slate-900 font-black text-[10px] uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-cyan/15 dark:shadow-brand-mint/5 hover:shadow-none transition-all duration-300 cursor-pointer">
                Subscribe Now <FaArrowRight />
              </button>
            </div>
          </div>

          <p className="mt-5 text-slate-400 dark:text-slate-550 text-[9px] font-black uppercase tracking-wider">
            No spam. One focused update per week. Unsubscribe anytime.
          </p>
        </div>

        {/* Why subscribe list */}
        <div className="lg:col-span-4 glass-panel p-8 rounded-3xl shadow-premium flex flex-col justify-between border border-slate-200/40 dark:border-slate-800/30">
          <div>
            <h3 className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">
              Why Subscribe
            </h3>
            <ul className="mt-5 space-y-3.5">
              <li className="flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan dark:bg-brand-mint shrink-0"></span>
                <p className="text-[10px] font-black text-slate-655 dark:text-slate-350 uppercase tracking-wider">
                  Weekly editorial briefings
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan dark:bg-brand-mint shrink-0"></span>
                <p className="text-[10px] font-black text-slate-655 dark:text-slate-350 uppercase tracking-wider">
                  Topic-specific health digests
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan dark:bg-brand-mint shrink-0"></span>
                <p className="text-[10px] font-black text-slate-655 dark:text-slate-350 uppercase tracking-wider">
                  Early access to highlights
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan dark:bg-brand-mint shrink-0"></span>
                <p className="text-[10px] font-black text-slate-655 dark:text-slate-350 uppercase tracking-wider">
                  Curated podcasts & shorts
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Action Cards with 3D Tilts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
        
        {/* Contact */}
        <div className="gradient-border-wrapper">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner glass-card p-6 border-none cursor-pointer flex flex-col justify-between h-full relative transition-all duration-350"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 dark:bg-brand-mint/15 flex items-center justify-center shrink-0 border border-brand-cyan/10 dark:border-brand-mint/20">
                <FaRegEnvelope className="text-brand-cyan dark:text-brand-mint text-xl" />
              </div>
              <div>
                <h3 className="text-[10px] font-black tracking-widest uppercase text-brand-dark dark:text-white font-heading">
                  Contact Us
                </h3>
                <p className="text-slate-550 dark:text-slate-400 text-[10px] leading-relaxed font-semibold mt-1.5">
                  Reach our team for support, partnerships, and editorial queries.
                </p>
              </div>
            </div>
            <button className="mt-6 flex items-center gap-1.5 text-brand-cyan dark:text-brand-mint hover:text-brand-mint font-black text-[10px] uppercase tracking-widest group-hover:translate-x-1 duration-200 cursor-pointer relative z-10">
              Start A Conversation <FaArrowRight className="text-[9px]" />
            </button>
          </div>
        </div>

        {/* Donate */}
        <div className="gradient-border-wrapper">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner glass-card p-6 border-none cursor-pointer flex flex-col justify-between h-full relative transition-all duration-350"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 dark:bg-brand-mint/15 flex items-center justify-center shrink-0 border border-brand-cyan/10 dark:border-brand-mint/20">
                <FaRegHeart className="text-brand-cyan dark:text-brand-mint text-xl" />
              </div>
              <div>
                <h3 className="text-[10px] font-black tracking-widest uppercase text-brand-dark dark:text-white font-heading">
                  Donate
                </h3>
                <p className="text-slate-550 dark:text-slate-400 text-[10px] leading-relaxed font-semibold mt-1.5">
                  Support health coverage, awareness, and community outreach.
                </p>
              </div>
            </div>
            <button className="mt-6 flex items-center gap-1.5 text-brand-cyan dark:text-brand-mint hover:text-brand-mint font-black text-[10px] uppercase tracking-widest group-hover:translate-x-1 duration-200 cursor-pointer relative z-10">
              Support The Mission <FaArrowRight className="text-[9px]" />
            </button>
          </div>
        </div>

        {/* Feedback */}
        <div className="gradient-border-wrapper">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="gradient-border-inner glass-card p-6 border-none cursor-pointer flex flex-col justify-between h-full relative transition-all duration-350"
          >
            <div className="card-shine absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 dark:bg-brand-mint/15 flex items-center justify-center shrink-0 border border-brand-cyan/10 dark:border-brand-mint/20">
                <FaRegCommentDots className="text-brand-cyan dark:text-brand-mint text-xl" />
              </div>
              <div>
                <h3 className="text-[10px] font-black tracking-widest uppercase text-brand-dark dark:text-white font-heading">
                  Feedback
                </h3>
                <p className="text-slate-550 dark:text-slate-400 text-[10px] leading-relaxed font-semibold mt-1.5">
                  Tell us what helps, what needs work, and what to improve next.
                </p>
              </div>
            </div>
            <button className="mt-6 flex items-center gap-1.5 text-brand-cyan dark:text-brand-mint hover:text-brand-mint font-black text-[10px] uppercase tracking-widest group-hover:translate-x-1 duration-200 cursor-pointer relative z-10">
              Share Your Thoughts <FaArrowRight className="text-[9px]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
