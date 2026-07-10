import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { ARTICLES } from "../constants/articles";
import Container from "../components/Container";
import { FiHeart, FiBookmark, FiClock, FiActivity, FiArrowRight } from "react-icons/fi";

const Dashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [activeListTab, setActiveListTab] = useState("saved"); // saved, bookmarks, history

  // Filter global article arrays based on user context arrays
  const savedList = ARTICLES.filter((a) => user?.savedArticles?.includes(a.slug));
  const bookmarkedList = ARTICLES.filter((a) => user?.bookmarks?.includes(a.slug));
  
  // Reading history: maintain the exact order from user.history
  const historyList = (user?.history || [])
    .map((slug) => ARTICLES.find((a) => a.slug === slug))
    .filter(Boolean);

  const likedCount = user?.likedArticles?.length || 0;

  const currentTabList = () => {
    if (activeListTab === "saved") return savedList;
    if (activeListTab === "bookmarks") return bookmarkedList;
    return historyList;
  };

  const currentList = currentTabList();

  return (
    <Container className="py-12">
      <div className="max-w-5xl mx-auto space-y-8 text-left">
        {/* Welcome Header Hero Banner */}
        <div className="relative p-8 rounded-3xl glass-premium border border-slate-200/40 dark:border-slate-800/35 overflow-hidden shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="absolute -top-[30%] -right-[15%] w-72 h-72 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div>
            <span className="text-[9px] font-black uppercase text-teal-600 dark:text-teal-400 tracking-widest bg-teal-500/10 dark:bg-teal-400/5 border border-teal-500/20 dark:border-teal-400/10 px-2.5 py-1 rounded-md">
              {t("Member Portal")}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-850 dark:text-white uppercase tracking-widest font-heading mt-3.5">
              {t("Welcome")}, {user?.fullName}!
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 font-semibold">
              {t("Monitor your saved medical research journals, liked summaries, and reading history.")}
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2.5">
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
              {t("Membership Status")}
            </span>
            {user?.memberLevel === "premium" ? (
              <div className="flex items-center gap-2">
                <span className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 text-[9px] font-black uppercase tracking-widest shadow-md">
                  👑 PREMIUM ACCESS
                </span>
              </div>
            ) : (
              <div className="flex flex-col sm:items-end gap-2">
                <span className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[9px] font-black uppercase tracking-widest border border-slate-300/40 dark:border-slate-700/40">
                  {t("Free Level")}
                </span>
                <Link
                  to="/membership"
                  className="text-[9px] font-black text-teal-650 dark:text-teal-400 hover:underline uppercase tracking-wider"
                >
                  {t("Upgrade to Unlock Clinical Reports")} →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Stats Grid Widget */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl glass-premium border border-slate-200/40 dark:border-slate-800/35 flex justify-between items-center shadow-lg">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Saved Articles")}
              </span>
              <p className="text-2xl font-black text-slate-800 dark:text-white mt-1">{savedList.length}</p>
            </div>
            <div className="p-3 bg-purple-500/10 dark:bg-purple-400/5 text-purple-600 dark:text-purple-400 rounded-xl">
              <FiClock size={16} />
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-premium border border-slate-200/40 dark:border-slate-800/35 flex justify-between items-center shadow-lg">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Bookmarks")}
              </span>
              <p className="text-2xl font-black text-slate-800 dark:text-white mt-1">{bookmarkedList.length}</p>
            </div>
            <div className="p-3 bg-teal-500/10 dark:bg-teal-400/5 text-teal-600 dark:text-teal-400 rounded-xl">
              <FiBookmark size={16} />
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-premium border border-slate-200/40 dark:border-slate-800/35 flex justify-between items-center shadow-lg">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("Liked Content")}
              </span>
              <p className="text-2xl font-black text-slate-800 dark:text-white mt-1">{likedCount}</p>
            </div>
            <div className="p-3 bg-emerald-500/10 dark:bg-emerald-400/5 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <FiHeart size={16} />
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-premium border border-slate-200/40 dark:border-slate-800/35 flex justify-between items-center shadow-lg">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                {t("History Logs")}
              </span>
              <p className="text-2xl font-black text-slate-800 dark:text-white mt-1">{historyList.length}</p>
            </div>
            <div className="p-3 bg-blue-500/10 dark:bg-blue-400/5 text-blue-600 dark:text-blue-400 rounded-xl">
              <FiActivity size={16} />
            </div>
          </div>
        </div>

        {/* Tab Lists */}
        <div className="space-y-6">
          {/* Tab Selector Buttons */}
          <div className="flex border-b border-slate-200/25 dark:border-slate-800/25">
            <button
              onClick={() => setActiveListTab("saved")}
              className={`pb-3 px-6 text-[10px] font-black uppercase tracking-widest relative transition-colors cursor-pointer ${
                activeListTab === "saved"
                  ? "text-teal-650 dark:text-teal-400 font-extrabold"
                  : "text-slate-400 dark:text-slate-500 hover:text-slate-600"
              }`}
            >
              {t("Saved Articles")}
              {activeListTab === "saved" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 dark:bg-teal-400"></span>
              )}
            </button>
            <button
              onClick={() => setActiveListTab("bookmarks")}
              className={`pb-3 px-6 text-[10px] font-black uppercase tracking-widest relative transition-colors cursor-pointer ${
                activeListTab === "bookmarks"
                  ? "text-teal-650 dark:text-teal-400 font-extrabold"
                  : "text-slate-400 dark:text-slate-500 hover:text-slate-600"
              }`}
            >
              {t("Bookmarks")}
              {activeListTab === "bookmarks" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 dark:bg-teal-400"></span>
              )}
            </button>
            <button
              onClick={() => setActiveListTab("history")}
              className={`pb-3 px-6 text-[10px] font-black uppercase tracking-widest relative transition-colors cursor-pointer ${
                activeListTab === "history"
                  ? "text-teal-650 dark:text-teal-400 font-extrabold"
                  : "text-slate-400 dark:text-slate-500 hover:text-slate-600"
              }`}
            >
              {t("Reading History")}
              {activeListTab === "history" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 dark:bg-teal-400"></span>
              )}
            </button>
          </div>

          {/* Tab Render Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentList.length > 0 ? (
              currentList.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl glass-premium border border-slate-200/40 dark:border-slate-800/35 flex gap-4 hover:border-teal-500/40 dark:hover:border-teal-400/40 hover:-translate-y-0.5 transition-all duration-300 shadow-md group relative overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] font-black uppercase tracking-wider text-teal-650 dark:text-teal-400">
                          {t(item.category)}
                        </span>
                        {item.premium && (
                          <span className="px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[7px] font-black uppercase tracking-wider">
                            👑 Premium
                          </span>
                        )}
                      </div>
                      <h4 className="text-[11px] sm:text-xs font-black text-slate-850 dark:text-white uppercase mt-1 leading-normal tracking-wide line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                    <Link
                      to={`/news/${item.slug}`}
                      className="text-[8px] font-black text-slate-500 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 uppercase tracking-widest mt-2 flex items-center gap-1"
                    >
                      {t("Read Article")} <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 py-16 text-center glass-premium border border-slate-200/40 dark:border-slate-800/35 rounded-3xl p-8 flex flex-col items-center">
                <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
                  {t("No articles found in this category.")}
                </p>
                <Link
                  to="/"
                  className="mt-4 bg-teal-500 hover:bg-teal-450 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 font-black text-[9px] uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md"
                >
                  {t("Explore News Feed")}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
