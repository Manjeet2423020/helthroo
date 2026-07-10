import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import CategoryPage from "./pages/CategoryPage";
import TagPage from "./pages/TagPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration on navigation */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main home index */}
          <Route index element={<Home />} />
          
          {/* Detail and parameter routing */}
          <Route path="news/:slug" element={<ArticleDetail />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="tag/:tag" element={<TagPage />} />
          
          {/* 404 handler */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
