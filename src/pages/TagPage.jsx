import React from "react";
import { useParams, Link } from "react-router-dom";
import { ARTICLES } from "../constants/articles";
import Card from "../components/Card";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { FiChevronLeft, FiAlertTriangle } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const TagPage = () => {
  const { t } = useLanguage();
  const { tag } = useParams();

  const displayTag = tag
    ? tag.charAt(0).toUpperCase() + tag.slice(1)
    : "";

  // Filter articles that contain the tag case-insensitively
  const filteredArticles = ARTICLES.filter(
    (item) => item.tags?.some((t) => t.toLowerCase() === tag?.toLowerCase())
  );

  return (
    <Container className="py-12">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-[10px] font-black text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 uppercase tracking-widest mb-8 cursor-pointer text-left"
      >
        <FiChevronLeft size={12} /> {t("Back to Newsroom")}
      </Link>

      <SectionTitle
        title={`${t("Tag:")} #${t(displayTag)}`}
        subtitle={`${t("Browse all publications tagged under the hashtag")} #${t(displayTag)}.`}
        highlightColor="bg-teal-500/15 dark:bg-teal-500/10"
        className="mb-10"
      />

      {filteredArticles.length === 0 ? (
        <div className="py-16 text-center glass-premium rounded-3xl border border-slate-200/40 dark:border-slate-800/30">
          <FiAlertTriangle className="text-amber-500 text-3xl mx-auto mb-4" />
          <h3 className="text-sm font-black uppercase text-slate-800 dark:text-slate-200">{t("No Articles Found")}</h3>
          <p className="text-slate-500 dark:text-slate-455 text-xs mt-2 font-semibold">
            {t("There are currently no mock entries populated for the")} #{t(tag)} {t("tag")}.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block bg-teal-500 hover:bg-teal-450 dark:bg-teal-400 dark:hover:bg-teal-350 text-slate-950 font-black text-[9px] uppercase tracking-widest px-4 py-2 rounded-xl transition-colors duration-250 cursor-pointer"
          >
            {t("Return Home")}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default TagPage;
