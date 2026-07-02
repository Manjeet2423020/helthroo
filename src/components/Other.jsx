import { useState } from "react";
import other1 from "../assets/other1.jpg";
import other2 from "../assets/other2.jpg";

const TABS = [
  "Finance & Business",
  "Science & Tech",
  "Education & Career",
  "Viral News",
  "Environment",
  "Agriculture",
  "Weather"
];

const Other = () => {
  const [activeTab, setActiveTab] = useState("Finance & Business");

  return (
    <section className="px-[10%] py-16 bg-transparent">
      {/* Heading */}
      <div className="flex justify-between items-end border-b border-slate-100 pb-6">
        <div className="text-left">
          <h2 className="text-4xl font-black text-[#14384A] relative inline-block font-heading">
            Other Insights
            <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#77E6DE]/60 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 text-lg mt-3 font-medium">
            Finance, science, jobs, career, viral & more.
          </p>
        </div>

        <button className="text-brand-cyan font-bold text-sm hover:text-brand-mint transition-colors duration-200 uppercase tracking-wider">
          View All Insights →
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex gap-3 overflow-x-auto scrollbar-hide py-2 px-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === tab
                ? "bg-brand-cyan text-white shadow-md shadow-brand-cyan/20"
                : "bg-slate-50 text-slate-500 border border-slate-200/60 hover:bg-slate-100 hover:text-slate-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card */}
          <div className="group border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-premium shadow-hover cursor-pointer p-5">
            <div className="overflow-hidden rounded-xl h-56">
              <img
                src={other1}
                alt="Finance Checklists"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>
            <span className="text-3xs font-extrabold tracking-wider text-brand-cyan mt-4 block uppercase">{activeTab}</span>
            <h3 className="text-base font-extrabold text-slate-800 leading-snug mt-2 group-hover:text-brand-cyan transition-colors duration-200 font-heading">
              Financial checklists outperform long-form anxiety in service coverage
            </h3>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <img
              src={other2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-cyan duration-200 line-clamp-2">
                Investment basics are outperforming complex financial product coverage
              </h4>
              <span className="text-[10px] text-slate-400 font-medium mt-1.5 block">2 days ago</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <img
              src={other1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-cyan duration-200 line-clamp-2">
                Policy explainers are turning into the most valuable finance journalism
              </h4>
              <span className="text-[10px] text-slate-400 font-medium mt-1.5 block">3 days ago</span>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card */}
          <div className="group border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-premium shadow-hover cursor-pointer p-5">
            <div className="overflow-hidden rounded-xl h-56">
              <img
                src={other2}
                alt="Business Coverage"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>
            <span className="text-3xs font-extrabold tracking-wider text-brand-cyan mt-4 block uppercase">{activeTab}</span>
            <h3 className="text-base font-extrabold text-slate-800 leading-snug mt-2 group-hover:text-brand-cyan transition-colors duration-200 font-heading">
              Business coverage is more readable when anchored in everyday stakes
            </h3>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <img
              src={other1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-cyan duration-200 line-clamp-2">
                Household budgeting stories are becoming more practical and less prescriptive
              </h4>
              <span className="text-[10px] text-slate-400 font-medium mt-1.5 block">4 days ago</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <img
              src={other2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-cyan duration-200 line-clamp-2">
                Market updates land better when they explain impact, not just movement
              </h4>
              <span className="text-[10px] text-slate-400 font-medium mt-1.5 block">5 days ago</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Main Card */}
          <div className="group border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-premium shadow-hover cursor-pointer p-5">
            <div className="overflow-hidden rounded-xl h-56">
              <img
                src={other1}
                alt="Personal Finance"
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>
            <span className="text-3xs font-extrabold tracking-wider text-brand-cyan mt-4 block uppercase">{activeTab}</span>
            <h3 className="text-base font-extrabold text-slate-800 leading-snug mt-2 group-hover:text-brand-cyan transition-colors duration-200 font-heading">
              Personal finance clarity is replacing jargon-heavy market commentary
            </h3>
          </div>

          {/* Small News 1 */}
          <div className="flex gap-4 cursor-pointer group items-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <img
              src={other2}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-cyan duration-200 line-clamp-2">
                Smart saving habits can improve long-term financial stability
              </h4>
              <span className="text-[10px] text-slate-400 font-medium mt-1.5 block">6 days ago</span>
            </div>
          </div>

          {/* Small News 2 */}
          <div className="flex gap-4 cursor-pointer group items-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <img
              src={other1}
              alt=""
              className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm"
            />
            <div>
              <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-cyan duration-200 line-clamp-2">
                Inflation trends are easier to understand with practical examples
              </h4>
              <span className="text-[10px] text-slate-400 font-medium mt-1.5 block">1 week ago</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Other;
