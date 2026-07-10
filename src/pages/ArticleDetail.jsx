import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ARTICLES } from "../constants/articles";
import Card from "../components/Card";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { useLanguage } from "../context/LanguageContext";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  FiClock,
  FiEye,
  FiShare2,
  FiHeart,
  FiBookmark,
  FiLink,
  FiCornerDownRight,
  FiChevronLeft,
  FiCheckCircle
} from "react-icons/fi";

const ArticleDetail = () => {
  const { t } = useLanguage();
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Retrieve matching article
  const article = ARTICLES.find((item) => item.slug === slug) || ARTICLES[0];

  useEffect(() => {
    if (article) {
      setLikesCount(article.likes || 120);
      setLiked(false);
      setBookmarked(false);
    }
  }, [slug, article]);

  const handleLikeToggle = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!article) {
    return (
      <Container className="py-24 text-center">
        <h2 className="text-xl font-black text-slate-800 dark:text-slate-200">{t("Article not found")}</h2>
        <Link to="/" className="text-teal-500 font-bold hover:underline mt-4 inline-block">
          {t("Back to home")}
        </Link>
      </Container>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Find related articles (same category, excluding current one)
  const relatedArticles = ARTICLES.filter(
    (item) => item.category === article.category && item.slug !== article.slug
  ).slice(0, 3);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-slate-200 dark:bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-sky-400 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Container className="py-12 gsap-reveal">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-[10px] font-black text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 uppercase tracking-widest mb-8 cursor-pointer"
        >
          <FiChevronLeft size={12} /> {t("Back to Newsroom")}
        </Link>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content (8 Cols) */}
          <article className="lg:col-span-8 text-left">
            {/* Header info */}
            <div>
              <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/25 px-3 py-1 text-[9px] font-black tracking-widest rounded uppercase">
                {article.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-850 dark:text-white leading-tight mt-6 font-heading">
                {article.title}
              </h1>
              <p className="text-slate-550 dark:text-slate-400 text-sm mt-4 leading-relaxed font-semibold">
                {article.description}
              </p>
            </div>

            {/* Author / Metadata Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 py-5 border-y border-slate-200/40 dark:border-slate-800/30 text-[10px] text-slate-450 dark:text-slate-500 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-black text-[10px] text-slate-600 dark:text-slate-400">
                  {article.author.avatar}
                </span>
                <div>
                  <h4 className="text-slate-800 dark:text-slate-200 font-black">{article.author.name}</h4>
                  <p className="text-[8px] mt-0.5 text-slate-400 dark:text-slate-600 font-bold">
                    {article.author.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <span className="flex items-center gap-1.5">
                  <FiClock size={12} /> {article.publishedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiEye size={12} /> {article.views} {t("Views")}
                </span>
              </div>
            </div>

            {/* Main Featured Image */}
            {article.image && (
              <div className="overflow-hidden rounded-3xl mt-8 shadow-xl max-h-[420px] w-full border border-slate-200/20 dark:border-slate-800/20">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Content Body */}
            <div className="mt-8 text-slate-650 dark:text-slate-300 text-sm leading-relaxed space-y-6 font-semibold max-w-none">
              {article.content.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Article Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-200/40 dark:border-slate-800/30">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/tag/${tag}`}
                    className="px-3 py-1.5 bg-white/20 dark:bg-slate-900/35 border border-slate-200/40 dark:border-slate-800/50 hover:bg-white/40 dark:hover:bg-slate-800/40 hover:text-slate-800 dark:hover:text-slate-200 text-slate-550 dark:text-slate-405 rounded-xl text-[9px] font-black uppercase tracking-wider"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Action Bar (Share, Like, Bookmark) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 p-4 rounded-2xl bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/35">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  color={liked ? "emerald" : "slate"}
                  onClick={handleLikeToggle}
                  className="h-9 px-4 rounded-xl text-[10px]"
                >
                  <FiHeart className={liked ? "fill-emerald-500 text-emerald-500 animate-pulse" : ""} />
                  <span>{liked ? `${t("Liked")} (${likesCount})` : `${t("Like")} (${likesCount})`}</span>
                </Button>
                <Button
                  variant="outline"
                  color={bookmarked ? "teal" : "slate"}
                  onClick={() => setBookmarked(!bookmarked)}
                  className="h-9 px-4 rounded-xl text-[10px]"
                >
                  <FiBookmark className={bookmarked ? "fill-teal-500 text-teal-500" : ""} />
                  <span>{bookmarked ? t("Bookmarked") : t("Bookmark")}</span>
                </Button>
              </div>

              <div className="flex items-center gap-3">
                {/* Social Share Icons */}
                <div className="flex items-center gap-1.5 border-r border-slate-200/40 dark:border-slate-800/40 pr-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/30 dark:bg-slate-850 border border-slate-200/30 dark:border-slate-800/30 text-slate-500 dark:text-slate-450 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300"
                    title="Share on Twitter"
                  >
                    <FaTwitter size={11} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/30 dark:bg-slate-850 border border-slate-200/30 dark:border-slate-800/30 text-slate-550 dark:text-slate-450 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300"
                    title="Share on Facebook"
                  >
                    <FaFacebookF size={11} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/30 dark:bg-slate-850 border border-slate-200/30 dark:border-slate-800/30 text-slate-550 dark:text-slate-450 hover:bg-teal-500 hover:text-slate-950 dark:hover:bg-teal-400 dark:hover:text-slate-950 flex items-center justify-center transition-all duration-300"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedinIn size={11} />
                  </a>
                </div>

                <Button
                  variant="outline"
                  color="slate"
                  onClick={handleCopyLink}
                  className="h-8 px-3 rounded-lg text-[10px]"
                >
                  {copied ? <FiCheckCircle className="text-emerald-500" /> : <FiLink />}
                  <span>{copied ? t("Copied") : t("Copy Link")}</span>
                </Button>
              </div>
            </div>

            {/* Comment Section placeholder */}
            <div className="mt-12 p-8 rounded-3xl glass-premium border border-slate-200/40 dark:border-slate-800/35">
              <h3 className="text-base font-black text-slate-800 dark:text-slate-250 uppercase tracking-widest font-heading mb-6 pb-3 border-b border-slate-200/25 dark:border-slate-800/25">
                {t("Comments")}
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start text-left">
                  <span className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-black text-[10px] text-slate-650 dark:text-slate-400 shrink-0">
                    JD
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase">John Doe</h4>
                      <span className="text-[8px] font-bold text-slate-400">1 day ago</span>
                    </div>
                    <p className="text-xs text-slate-550 dark:text-slate-400 font-semibold mt-1">
                      This is an informative report. Early screening makes an enormous difference in treatment.
                    </p>
                  </div>
                </div>
              </div>

              <form className="mt-6 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <textarea
                  placeholder={t("Write a comment...")}
                  className="w-full min-h-[80px] p-4 bg-white/20 dark:bg-slate-900/35 border border-slate-200/40 dark:border-slate-800/40 rounded-xl outline-none text-xs font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-450 dark:placeholder:text-slate-555 focus:border-teal-500 transition-colors"
                ></textarea>
                <div className="text-right">
                  <Button variant="solid" color="teal" className="h-9 px-5 rounded-xl text-[9px]">
                    {t("Post Comment")} <FiCornerDownRight />
                  </Button>
                </div>
              </form>
            </div>
          </article>

          {/* Sidebar widget panel (4 Cols) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Table of contents */}
            <div className="glass-premium p-6 rounded-3xl border border-slate-200/40 dark:border-slate-800/30 text-left">
              <h3 className="font-black text-[10px] text-slate-800 dark:text-slate-250 tracking-widest font-heading uppercase pb-3 border-b border-slate-200/25 dark:border-slate-800/25">
                {t("ON THIS PAGE")}
              </h3>
              <ul className="mt-4 space-y-3 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                <li className="text-teal-600 dark:text-teal-400 flex items-center gap-1.5 cursor-pointer">
                  <FiCornerDownRight /> {t("Overview")}
                </li>
                <li className="hover:text-slate-850 dark:hover:text-slate-200 flex items-center gap-1.5 cursor-pointer">
                  {t("Key Findings")}
                </li>
                <li className="hover:text-slate-850 dark:hover:text-slate-200 flex items-center gap-1.5 cursor-pointer">
                  {t("Medical Implications")}
                </li>
              </ul>
            </div>

            {/* Author Bio Card */}
            <div className="glass-premium p-6 rounded-3xl border border-slate-200/40 dark:border-slate-800/30 text-left">
              <h3 className="font-black text-[10px] text-slate-800 dark:text-slate-250 tracking-widest font-heading uppercase pb-3 border-b border-slate-200/25 dark:border-slate-800/25">
                {t("ABOUT AUTHOR")}
              </h3>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-black text-xs text-slate-600 dark:text-slate-400">
                  {article.author.avatar}
                </span>
                <div>
                  <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase">{article.author.name}</h4>
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 font-bold">{article.author.title}</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-semibold">
                {t("Author Bio Text")}
              </p>
            </div>
          </aside>
        </div>

        {/* Related articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <SectionTitle
              title={t("Related News")}
              subtitle={t("Read more related articles on this subject.")}
              highlightColor="bg-teal-500/15 dark:bg-teal-500/10"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 gsap-reveal">
              {relatedArticles.map((item) => (
                <Card key={item.id} article={item} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default ArticleDetail;
