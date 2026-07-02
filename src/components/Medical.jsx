import medical1 from "../assets/medical1.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FiBookOpen, FiAward, FiActivity, FiTrendingUp } from "react-icons/fi";

const HIGHLIGHTS = [
  {
    id: 1,
    icon: <FiActivity className="text-emerald-500 text-xl" />,
    journal: "JAMA Internal Medicine • May 2026",
    title: "Mediterranean Diet Associated with 23% Lower Risk of Mortality in Women",
    badge: "23% Reduction",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    desc: "A long-term study tracking over 25,000 women finds substantial cardiovascular and longevity benefits from healthy fat intake."
  },
  {
    id: 2,
    icon: <FiAward className="text-blue-500 text-xl" />,
    journal: "Lancet Digital Health • June 2026",
    title: "AI Model Predicts Early-Stage Alzheimer's with 99% Accuracy",
    badge: "99% Accuracy",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
    desc: "A new deep learning model analyzes subtle structural brain changes from standard MRI scans years before symptoms manifest."
  },
  {
    id: 3,
    icon: <FiTrendingUp className="text-teal-500 text-xl" />,
    journal: "The Lancet • May 2026",
    title: "New Malaria Vaccine Shows High Efficacy of 77% in Phase 3 Trials",
    badge: "77% Efficacy",
    badgeColor: "bg-teal-50 text-teal-600 border-teal-100",
    desc: "The R21/Matrix-M malaria vaccine meets the WHO-specified target efficacy, promising a breakthrough in child healthcare."
  },
  {
    id: 4,
    icon: <FiBookOpen className="text-purple-500 text-xl" />,
    journal: "Circulation Journal • June 2026",
    title: "Daily 20-Minute Brisk Walk Significantly Lowers Cardiovascular Risks",
    badge: "Heart Health",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
    desc: "Consistent moderate exercise shows a major preventive effect against coronary diseases, independent of age or genetics."
  }
];

const Medical = () => {
  return (
    <section className="px-[10%] py-16 bg-transparent">
      {/* Heading */}
      <div className="flex items-end justify-between border-b border-slate-100 pb-6">
        <div className="text-left">
          <h2 className="text-4xl font-black text-[#14384A] relative inline-block font-heading">
            Medical Research
            <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#77E6DE]/60 -z-10 rounded"></span>
          </h2>
          <p className="text-slate-500 text-lg mt-3 font-medium">
            Latest studies and findings, summarized for quick reading.
          </p>
        </div>

        <button className="px-6 py-3 border border-slate-200 text-brand-cyan hover:bg-brand-cyan hover:text-white hover:border-brand-cyan rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300">
          View All Studies
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        
        {/* Left Card (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col text-left">
          <div className="bg-white border border-slate-100 overflow-hidden group cursor-pointer rounded-2xl shadow-premium shadow-hover transition-all flex flex-col h-full justify-between">
            <div>
              {/* Image */}
              <div className="overflow-hidden h-72">
                <img
                  src={medical1}
                  alt="Guava Juice"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-3xs font-extrabold tracking-wider text-slate-400 block uppercase">
                  MAY 26, 2026 • BMJ JOURNALS
                </span>
                <h3 className="mt-3 text-lg font-extrabold leading-snug text-[#14384A] group-hover:text-brand-cyan transition-colors duration-200 font-heading">
                  Guava Juice May Help Boost Hemoglobin Levels
                </h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed font-medium">
                  Recent trials show vitamin C rich guava extracts significantly aid iron absorption and help manage anemia symptoms naturally.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button className="flex items-center gap-2 uppercase tracking-wider text-brand-cyan hover:text-brand-mint font-bold text-xs transition-colors duration-200">
                View Abstract <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Right Highlights Grid (col-span-8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/50 border border-slate-100 hover:border-brand-cyan/20 p-6 rounded-2xl flex flex-col justify-between hover:bg-white hover:shadow-premium duration-300 group cursor-pointer"
            >
              <div>
                {/* Journal & Icon */}
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                    {item.journal}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm shrink-0">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-sm font-extrabold text-slate-800 leading-snug mt-3 group-hover:text-brand-cyan duration-200 font-heading">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[11px] text-slate-500 mt-2.5 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Footer Badges/Button */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded border text-[10px] font-extrabold uppercase tracking-wide ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <span className="text-[10px] font-bold text-brand-cyan group-hover:translate-x-1 duration-200 flex items-center gap-1">
                  Abstract <FaArrowRight className="text-[9px]" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Medical;
