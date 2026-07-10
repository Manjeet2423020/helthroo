import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiX, FiCornerDownLeft, FiClock, FiFileText } from "react-icons/fi";
import { ARTICLES } from "../constants/articles";

const SUGGESTIONS = [
  { type: "category", label: "Wellness", value: "wellness" },
  { type: "category", label: "Health", value: "health" },
  { type: "tag", label: "Vaccines", value: "vaccination" },
  { type: "tag", label: "Modi", value: "modi" }
];

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  // Listen to open-search-modal event and Ctrl+K shortcut
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };

    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Esc to close
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("open-search-modal", handleOpen);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-search-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Autofocus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 80);
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Click outside to close
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Helper to highlight matching characters
  const highlightText = (text, search) => {
    if (!search.trim()) return text;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-teal-500/25 text-teal-600 dark:text-teal-400 rounded px-0.5 font-extrabold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Dynamic filter
  const searchResults =
    query.trim() === ""
      ? []
      : ARTICLES.filter((article) => {
          const q = query.toLowerCase();
          return (
            article.title?.toLowerCase().includes(q) ||
            article.category?.toLowerCase().includes(q) ||
            article.tags?.some((t) => t.toLowerCase().includes(q))
          );
        });

  const selectSuggestion = (val) => {
    setQuery(val);
    inputRef.current?.focus();
  };

  const handleResultClick = (slug) => {
    setIsOpen(false);
    navigate(`/news/${slug}`);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 bg-slate-950/60 backdrop-blur-md animate-fade-in"
    >
      <div
        ref={modalRef}
        className="w-full max-w-2xl bg-white dark:bg-[#0b0f19] border border-slate-200/50 dark:border-slate-800/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] text-left animate-slide-up"
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-3 p-5 border-b border-slate-200/25 dark:border-slate-800/25">
          <FiSearch className="text-slate-400 dark:text-slate-500 text-lg shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by title, category, or hashtag..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm font-extrabold outline-none text-slate-850 dark:text-slate-200 placeholder:text-slate-450 dark:placeholder:text-slate-550 border-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-350 cursor-pointer"
            >
              <FiX size={16} />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/35 text-[9px] text-slate-450 dark:text-slate-500 font-black">
            <span>ESC</span>
          </div>
        </div>

        {/* Scrollable Results Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {query.trim() === "" ? (
            /* Suggestions & Recent */
            <div className="space-y-4">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                  Search Suggestions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((sugg, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectSuggestion(sugg.value)}
                      className="px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase border border-slate-250/50 dark:border-slate-850 bg-slate-50/20 dark:bg-slate-900/10 text-slate-500 dark:text-slate-450 hover:border-teal-500/40 dark:hover:border-teal-400/40 hover:text-teal-500 transition-colors cursor-pointer"
                    >
                      {sugg.type === "tag" ? `#${sugg.label}` : sugg.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                  Recent Publications
                </h4>
                <div className="space-y-2">
                  {ARTICLES.slice(0, 3).map((art) => (
                    <button
                      key={art.id}
                      onClick={() => handleResultClick(art.slug)}
                      className="w-full flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50/40 dark:hover:bg-slate-900/25 transition-all text-left group cursor-pointer"
                    >
                      <FiFileText className="text-slate-400 group-hover:text-teal-500 shrink-0" size={14} />
                      <span className="text-[11px] font-extrabold text-slate-700 dark:text-slate-350 line-clamp-1 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                        {art.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            /* No Results Found */
            <div className="py-10 text-center">
              <p className="text-slate-500 dark:text-slate-450 text-xs font-semibold">
                No publications matched "<span className="font-extrabold text-slate-700 dark:text-slate-200">{query}</span>"
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-550 mt-1 font-bold">
                Try searching for a different keyword or category.
              </p>
            </div>
          ) : (
            /* Results List */
            <div className="space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                Matching Results ({searchResults.length})
              </h4>
              <div className="divide-y divide-slate-200/20 dark:divide-slate-800/20">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleResultClick(result.slug)}
                    className="flex gap-4 py-4 hover:bg-slate-50/20 dark:hover:bg-slate-900/10 cursor-pointer transition-colors group first:pt-0 last:pb-0"
                  >
                    {result.image && (
                      <img
                        src={result.image}
                        alt=""
                        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200/20 dark:border-slate-800/20 shadow-sm"
                      />
                    )}
                    <div className="flex-1 flex flex-col justify-center text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-black tracking-widest uppercase text-teal-500 dark:text-teal-400">
                          {highlightText(result.category, query)}
                        </span>
                        <span className="text-slate-400 dark:text-slate-600 text-[8px] font-bold uppercase shrink-0">
                          • {result.publishedDate}
                        </span>
                      </div>
                      <h4 className="text-[11.5px] font-black text-slate-800 dark:text-slate-200 leading-snug group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors mt-1">
                        {highlightText(result.title, query)}
                      </h4>
                      {result.tags && result.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[7.5px] font-black uppercase text-slate-400 dark:text-slate-550 bg-slate-100/40 dark:bg-slate-900/35 border border-slate-200/25 dark:border-slate-800/25 px-1.5 py-0.5 rounded-md shrink-0"
                            >
                              #{highlightText(tag, query)}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <FiCornerDownLeft className="text-slate-350 dark:text-slate-600 group-hover:text-teal-500 shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
