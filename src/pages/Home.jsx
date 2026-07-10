import React, { useState } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import NewsCard from "../components/NewsCard";
import Button from "../components/Button";
import { ARTICLES } from "../constants/articles";
import { NEWSLETTER_CONTENT } from "../constants/siteData";
import { useLanguage } from "../context/LanguageContext";
import { FiTrendingUp, FiAward, FiMail, FiCheckCircle, FiBookOpen, FiArrowRight } from "react-icons/fi";

const Home = () => {
  const { t } = useLanguage();
  // Latest articles pagination state
  const [visibleLatestCount, setVisibleLatestCount] = useState(4);

  // Newsletter subscription states
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'loading', 'success', 'error'

  // Filter article subsets
  const featuredArticles = ARTICLES.slice(0, 2);
  const trendingArticles = ARTICLES.slice(2, 6);
  const editorsPicks = ARTICLES.slice(6, 9);
  
  const wellnessArticles = ARTICLES.filter((a) => a.category?.toLowerCase() === "wellness").slice(0, 3);
  const healthArticles = ARTICLES.filter((a) => a.category?.toLowerCase() === "health").slice(0, 3);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setNewsletterStatus("error");
      return;
    }

    setNewsletterStatus("loading");
    setTimeout(() => {
      setNewsletterStatus("success");
      setEmail("");
    }, 1000);
  };

  const handleLoadMoreLatest = () => {
    setVisibleLatestCount((prev) => Math.min(prev + 4, ARTICLES.length));
  };

  return (
    <>
      {/* 1. Hero Spotlight & Interactive Widgets */}
      <Hero />

      {/* 2. Featured & Trending Split Section */}
      <Container className="py-12 border-t border-slate-200/40 dark:border-slate-800/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Featured News Grid (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            <SectionTitle
              title={t("Featured News")}
              subtitle={t("Major reports and investigations making waves this week.")}
              highlightColor="bg-teal-500/15 dark:bg-teal-500/10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <NewsCard key={article.id} article={article} variant="grid" />
              ))}
            </div>
          </div>

          {/* Trending News List (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            <SectionTitle
              title={t("Trending")}
              subtitle={t("Most popular articles.")}
              highlightColor="bg-emerald-500/15 dark:bg-emerald-500/10"
              rightAction={<FiTrendingUp className="text-emerald-500 text-lg" />}
            />
            <div className="glass-premium rounded-3xl border border-slate-200/40 dark:border-slate-800/30 overflow-hidden divide-y divide-slate-200/25 dark:divide-slate-800/25">
              {trendingArticles.map((article) => (
                <NewsCard key={article.id} article={article} variant="compact" />
              ))}
            </div>
          </div>

        </div>
      </Container>

      {/* 3. Editor's Picks Section */}
      <div className="w-full bg-slate-100/50 dark:bg-[#070b16]/40 py-16 border-y border-slate-200/40 dark:border-slate-850/40">
        <Container>
          <SectionTitle
            title={t("Editor's Picks")}
            subtitle={t("Curated coverage hand-selected by our advisory board for research excellence.")}
            highlightColor="bg-teal-500/15 dark:bg-teal-500/10"
            rightAction={<FiAward className="text-teal-500 text-xl" />}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {editorsPicks.map((article) => (
              <NewsCard key={article.id} article={article} variant="grid" />
            ))}
          </div>
        </Container>
      </div>

      {/* 4. Category Sections */}
      <Container className="py-16 space-y-16">
        
        {/* Wellness Insights */}
        <div>
          <SectionTitle
            title={t("Wellness Insights")}
            subtitle={t("Nutrition, mindfulness, and everyday habit scheduling.")}
            highlightColor="bg-emerald-500/15 dark:bg-emerald-500/10"
            rightAction={
              <Button variant="text" color="emerald">
                {t("All Wellness")} <FiArrowRight size={8} />
              </Button>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {wellnessArticles.map((article) => (
              <NewsCard key={article.id} article={article} variant="grid" />
            ))}
          </div>
        </div>

        {/* Clinical Health */}
        <div>
          <SectionTitle
            title={t("Clinical Health")}
            subtitle={t("Pathology reviews, diagnostic guides, and vaccination updates.")}
            highlightColor="bg-teal-500/15 dark:bg-teal-500/10"
            rightAction={
              <Button variant="text" color="teal">
                {t("All Health")} <FiArrowRight size={8} />
              </Button>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {healthArticles.map((article) => (
              <NewsCard key={article.id} article={article} variant="grid" />
            ))}
          </div>
        </div>

      </Container>

      {/* 5. Latest Articles Section (with dynamic paging load-more) */}
      <div className="w-full bg-slate-100/50 dark:bg-[#070b16]/40 py-16 border-t border-slate-200/40 dark:border-slate-850/40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Feed List (8 Columns) */}
            <div className="lg:col-span-8 space-y-8">
              <SectionTitle
                title={t("Latest Publications")}
                subtitle={t("The complete stream of medical news chronologically ordered.")}
                highlightColor="bg-teal-500/15 dark:bg-teal-500/10"
              />
              <div className="space-y-4">
                {ARTICLES.slice(0, visibleLatestCount).map((article) => (
                  <NewsCard key={article.id} article={article} variant="horizontal" />
                ))}
              </div>

              {/* Load More Trigger */}
              {visibleLatestCount < ARTICLES.length && (
                <div className="pt-4 text-center">
                  <Button
                    variant="outline"
                    color="teal"
                    onClick={handleLoadMoreLatest}
                    className="w-full sm:w-auto px-8 h-12 rounded-2xl"
                  >
                    {t("Load More Publications")}
                  </Button>
                </div>
              )}
            </div>

            {/* Newsletter Subscription Card (4 Columns) */}
            <div className="lg:col-span-4 text-left">
              <div className="sticky top-28 glass-premium p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/35 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex items-center justify-center mb-6">
                  <FiMail size={22} />
                </div>
                
                <h3 className="text-lg font-black text-slate-850 dark:text-white font-heading uppercase tracking-wide">
                  {t(NEWSLETTER_CONTENT.title)}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-3 font-semibold">
                  {t(NEWSLETTER_CONTENT.subtitle)}
                </p>

                {newsletterStatus === "success" ? (
                  <div className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-wider flex items-center gap-2">
                    <FiCheckCircle size={14} className="shrink-0 animate-bounce" />
                    <span>{t(NEWSLETTER_CONTENT.successMessage)}</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="mt-6 space-y-3">
                    <input
                      type="email"
                      placeholder={t("Enter your email address")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={newsletterStatus === "loading"}
                      className="w-full px-4 py-3 bg-white/20 dark:bg-slate-900/35 border border-slate-200/45 dark:border-slate-800/40 rounded-xl outline-none text-xs font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-455 dark:placeholder:text-slate-555 focus:border-teal-500 transition-colors"
                    />
                    {newsletterStatus === "error" && (
                      <p className="text-[10px] text-rose-500 font-extrabold uppercase tracking-wide">
                        {t("Please enter a valid email address.")}
                      </p>
                    )}
                    <Button
                      type="submit"
                      variant="solid"
                      color="teal"
                      disabled={newsletterStatus === "loading"}
                      className="w-full h-11 rounded-xl text-[9px]"
                    >
                      {newsletterStatus === "loading" ? t("Subscribing...") : t(NEWSLETTER_CONTENT.buttonText)}
                    </Button>
                  </form>
                )}

                <p className="text-[9.5px] text-slate-400 dark:text-slate-600 mt-6 leading-relaxed font-bold">
                  {t("Newsletter Note")}
                </p>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
