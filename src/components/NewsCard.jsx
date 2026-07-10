import React from "react";
import { Link } from "react-router-dom";
import { FiClock, FiEye, FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const NewsCard = ({ article, variant = "grid", className = "" }) => {
  const { t } = useLanguage();

  const formatReadingTime = (time) => {
    if (!time) return `3 ${t("Min Read")}`;
    const match = time.match(/^(\d+)\s+Min\s+Read$/i);
    if (match) {
      return `${match[1]} ${t("Min Read")}`;
    }
    return t(time);
  };

  if (!article) return null;

  const {
    title,
    slug,
    description,
    category,
    image,
    author,
    publishedDate,
    readingTime,
    views
  } = article;

  // Colors based on category
  const isWellness = category?.toLowerCase() === "wellness";
  const accentColor = isWellness
    ? "text-emerald-600 dark:text-emerald-450"
    : "text-teal-600 dark:text-teal-450";
  const hoverAccentColor = isWellness
    ? "group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
    : "group-hover:text-teal-600 dark:group-hover:text-teal-400";

  // Handle MouseMove shine/tilt effects visually (styled via CSS hover)
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg) translateY(-4px)`;
    
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

  // SPOTLIGHT VARIANT (Large tall card like Health clinical spotlight or Wellness featured)
  if (variant === "spotlight") {
    return (
      <div className={`gradient-border-wrapper rounded-3xl h-full ${className}`}>
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="gradient-border-inner group glass-card glow-card-shadow p-6 border-none cursor-pointer shadow-lg relative transition-all duration-350 flex flex-col justify-between h-full min-h-[460px]"
        >
          <div className="card-shine absolute w-[300px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>
          
          <div className="relative overflow-hidden h-[260px] rounded-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="text-left mt-6 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[8px] font-black tracking-widest uppercase">
                <Link to={`/category/${category.toLowerCase()}`} className={`${accentColor} hover:underline`}>
                  {t(category)}
                </Link>
                <span className="text-slate-400 dark:text-slate-600"> • {t("FEATURED REPORT")}</span>
              </span>
              <Link to={`/news/${slug}`}>
                <h3 className={`text-lg font-black text-slate-800 dark:text-slate-200 leading-snug mt-2 font-heading transition-colors duration-200 ${hoverAccentColor}`}>
                  {title}
                </h3>
              </Link>
              {description && (
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-2 font-semibold line-clamp-3">
                  {description}
                </p>
              )}
            </div>
            
            <div className="mt-5 pt-4 border-t border-slate-200/25 dark:border-slate-800/25 flex items-center justify-between text-[9px] text-slate-450 dark:text-slate-500 font-bold uppercase">
              <span className="flex items-center gap-1"><FiClock /> {publishedDate}</span>
              <Link to={`/news/${slug}`} className={`flex items-center gap-1 font-black ${accentColor}`}>
                {t("Read Article")} <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // HORIZONTAL VARIANT (Image left, text right for feeds/row widgets)
  if (variant === "horizontal") {
    return (
      <div className={`flex gap-4 cursor-pointer group p-4 rounded-3xl bg-white/20 dark:bg-slate-900/30 border border-slate-250/20 dark:border-slate-800/40 hover:bg-white/40 dark:hover:bg-slate-900/50 hover:shadow-md transition-all duration-300 text-left ${className}`}>
        {image && (
          <img
            src={image}
            alt=""
            className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm border border-slate-200/30 dark:border-slate-800/30"
          />
        )}
        <div className="flex flex-col justify-center flex-1">
          <Link to={`/category/${category.toLowerCase()}`} className={`text-[7.5px] font-black tracking-widest uppercase hover:underline ${accentColor}`}>
            {t(category)}
          </Link>
          <Link to={`/news/${slug}`}>
            <h4 className={`text-xs font-black text-slate-800 dark:text-slate-250 leading-snug transition-colors duration-200 line-clamp-2 mt-1 ${hoverAccentColor}`}>
              {title}
            </h4>
          </Link>
          <div className="flex items-center gap-3 text-[8px] text-slate-450 dark:text-slate-550 font-black mt-2">
            <span>{publishedDate}</span>
            {readingTime && <span>• {formatReadingTime(readingTime)}</span>}
          </div>
        </div>
      </div>
    );
  }

  // COMPACT VARIANT (Text list for Recommended/Trending widgets)
  if (variant === "compact") {
    return (
      <div className={`flex gap-3 p-4 hover:bg-white/30 dark:hover:bg-slate-850/20 transition-colors duration-200 cursor-pointer group text-left ${className}`}>
        {image && (
          <img
            src={image}
            alt=""
            className="w-16 h-16 rounded-lg object-cover shrink-0 border border-white/10 shadow-sm"
          />
        )}
        <div className="flex flex-col justify-center flex-1">
          <Link to={`/category/${category.toLowerCase()}`} className={`text-[8px] font-black tracking-widest uppercase hover:underline ${accentColor}`}>
            {t(category)}
          </Link>
          <Link to={`/news/${slug}`}>
            <h4 className={`mt-0.5 text-[11px] font-bold text-slate-850 dark:text-slate-200 leading-snug line-clamp-2 transition-colors duration-200 ${hoverAccentColor}`}>
              {title}
            </h4>
          </Link>
          <span className="text-[8px] text-slate-400 dark:text-slate-550 font-black mt-1 uppercase">
            {publishedDate}
          </span>
        </div>
      </div>
    );
  }

  // DEFAULT / GRID VARIANT (Standard responsive grid card)
  return (
    <div className={`gradient-border-wrapper rounded-3xl h-full ${className}`}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="gradient-border-inner group glass-card glow-card-shadow p-6 border-none cursor-pointer shadow-lg relative transition-all duration-350 flex flex-col justify-between h-full"
      >
        <div className="card-shine absolute w-[250px] h-[250px] bg-white rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-15"></div>

        <div>
          {image && (
            <div className="overflow-hidden rounded-2xl h-48 relative z-10">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          <div className="mt-5 relative z-10 text-left">
            <span className="text-[8px] font-black tracking-widest uppercase">
              <Link to={`/category/${category.toLowerCase()}`} className={`${accentColor} hover:underline`}>
                {t(category)}
              </Link>
              <span className="text-slate-400 dark:text-slate-600"> • {formatReadingTime(readingTime)}</span>
            </span>
            <Link to={`/news/${slug}`}>
              <h3 className={`text-base font-black text-slate-800 dark:text-slate-200 leading-snug mt-2 font-heading transition-colors duration-200 ${hoverAccentColor}`}>
                {title}
              </h3>
            </Link>
            {description && (
              <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed mt-2 font-semibold line-clamp-3">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-200/25 dark:border-slate-800/25 flex items-center justify-between relative z-10 text-left text-[9px] text-slate-450 dark:text-slate-500 font-bold uppercase">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-850 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center font-black text-[8px] text-slate-600 dark:text-slate-400 shrink-0">
              {author?.avatar || author?.name?.slice(0, 2) || "U"}
            </span>
            <span className="truncate max-w-[80px]">{author?.name || "Author"}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <FiClock size={10} /> {publishedDate}
            </span>
            {views !== undefined && (
              <span className="flex items-center gap-0.5">
                <FiEye size={10} /> {views}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
