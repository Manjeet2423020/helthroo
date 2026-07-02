import { FaArrowRight } from "react-icons/fa6";
import { FaRegEnvelope, FaRegHeart, FaRegCommentDots } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="px-[10%] py-16 bg-transparent">
      {/* Top Banner section */}
      <div className="border border-slate-100 bg-white p-8 md:p-12 rounded-3xl shadow-premium text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <span className="bg-brand-cyan/10 text-brand-cyan px-3 py-1 rounded-md text-3xs font-extrabold uppercase tracking-widest">
              Newsletter
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-black text-brand-dark leading-tight font-heading">
              Get the week's sharpest health briefings in your inbox.
            </h1>
            <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-xl">
              One concise editorial mailer that covers policy shifts, diagnostics, research signals, and care delivery trends worth tracking.
            </p>
          </div>

          {/* Right Highlights Lists */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="border border-slate-100 hover:border-brand-cyan/20 bg-slate-50/50 p-5 rounded-2xl cursor-pointer hover:bg-white hover:shadow-premium duration-300">
              <h3 className="text-sm font-extrabold text-brand-dark font-heading">Weekly Digest</h3>
              <p className="text-3xs font-extrabold text-brand-cyan tracking-wider uppercase mt-1">Editorial Digest</p>
            </div>
            <div className="border border-slate-100 hover:border-brand-cyan/20 bg-slate-50/50 p-5 rounded-2xl cursor-pointer hover:bg-white hover:shadow-premium duration-300">
              <h3 className="text-sm font-extrabold text-brand-dark font-heading">Research</h3>
              <p className="text-3xs font-extrabold text-brand-cyan tracking-wider uppercase mt-1">Clinical Highlights</p>
            </div>
            <div className="border border-slate-100 hover:border-brand-cyan/20 bg-slate-50/50 p-5 rounded-2xl cursor-pointer hover:bg-white hover:shadow-premium duration-300">
              <h3 className="text-sm font-extrabold text-brand-dark font-heading">Media</h3>
              <p className="text-3xs font-extrabold text-brand-cyan tracking-wider uppercase mt-1">Podcast and Shorts Picks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 text-left">
        
        {/* Input box */}
        <div className="lg:col-span-8 border border-slate-100 bg-white p-8 rounded-3xl shadow-premium flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-2xl md:text-3xl font-black text-brand-dark font-heading">
                Subscribe
              </h2>
              <span className="bg-brand-mint/15 text-brand-cyan border border-brand-mint/30 px-3 py-1 rounded-full text-4xs font-extrabold uppercase tracking-widest">
                Free Editorial Access
              </span>
            </div>
            
            {/* Input & button flex */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 rounded-xl border border-slate-200 px-4 text-xs font-semibold focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all"
              />
              <button className="h-12 px-6 bg-brand-cyan hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-cyan/15 hover:shadow-none transition-all duration-300">
                Subscribe Now <FaArrowRight />
              </button>
            </div>
          </div>

          <p className="mt-4 text-slate-400 text-4xs font-medium">
            No spam. One focused update per week. Unsubscribe anytime.
          </p>
        </div>

        {/* Why subscribe list */}
        <div className="lg:col-span-4 border border-slate-100 bg-white p-8 rounded-3xl shadow-premium flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
              Why Subscribe
            </h3>
            <ul className="mt-5 space-y-3.5">
              <li className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></span>
                <p className="text-3xs font-bold text-slate-600 uppercase tracking-wide">
                  Weekly editorial briefings
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></span>
                <p className="text-3xs font-bold text-slate-600 uppercase tracking-wide">
                  Topic-specific health science digests
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></span>
                <p className="text-3xs font-bold text-slate-600 uppercase tracking-wide">
                  Early access to research highlights
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></span>
                <p className="text-3xs font-bold text-slate-600 uppercase tracking-wide">
                  Curated media, podcasts & shorts
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
        
        {/* Contact */}
        <div className="border border-slate-100 hover:border-brand-cyan/20 bg-white p-6 rounded-3xl shadow-premium hover:shadow-xl duration-300 group cursor-pointer flex flex-col justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
              <FaRegEnvelope className="text-brand-cyan text-xl" />
            </div>
            <div>
              <h3 className="text-xs font-black tracking-wider uppercase text-brand-dark font-heading">
                Contact Us
              </h3>
              <p className="text-slate-500 text-4xs leading-relaxed font-semibold mt-1">
                Reach our team for support, partnerships, and editorial queries.
              </p>
            </div>
          </div>
          <button className="mt-5 flex items-center gap-1.5 text-brand-cyan hover:text-brand-mint font-extrabold text-3xs uppercase tracking-widest group-hover:translate-x-1 duration-200">
            Start A Conversation <FaArrowRight className="text-4xs" />
          </button>
        </div>

        {/* Donate */}
        <div className="border border-slate-100 hover:border-brand-cyan/20 bg-white p-6 rounded-3xl shadow-premium hover:shadow-xl duration-300 group cursor-pointer flex flex-col justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
              <FaRegHeart className="text-brand-cyan text-xl" />
            </div>
            <div>
              <h3 className="text-xs font-black tracking-wider uppercase text-brand-dark font-heading">
                Donate
              </h3>
              <p className="text-slate-500 text-4xs leading-relaxed font-semibold mt-1">
                Support health coverage, awareness, and community outreach.
              </p>
            </div>
          </div>
          <button className="mt-5 flex items-center gap-1.5 text-brand-cyan hover:text-brand-mint font-extrabold text-3xs uppercase tracking-widest group-hover:translate-x-1 duration-200">
            Support The Mission <FaArrowRight className="text-4xs" />
          </button>
        </div>

        {/* Feedback */}
        <div className="border border-slate-100 hover:border-brand-cyan/20 bg-white p-6 rounded-3xl shadow-premium hover:shadow-xl duration-300 group cursor-pointer flex flex-col justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
              <FaRegCommentDots className="text-brand-cyan text-xl" />
            </div>
            <div>
              <h3 className="text-xs font-black tracking-wider uppercase text-brand-dark font-heading">
                Feedback
              </h3>
              <p className="text-slate-500 text-4xs leading-relaxed font-semibold mt-1">
                Tell us what helps, what needs work, and what to improve next.
              </p>
            </div>
          </div>
          <button className="mt-5 flex items-center gap-1.5 text-brand-cyan hover:text-brand-mint font-extrabold text-3xs uppercase tracking-widest group-hover:translate-x-1 duration-200">
            Share Your Thoughts <FaArrowRight className="text-4xs" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
