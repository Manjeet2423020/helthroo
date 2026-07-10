import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import CategoryPage from "./pages/CategoryPage";
import TagPage from "./pages/TagPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Authentication & Member System Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Membership from "./pages/Membership";
import ProtectedRoute from "./components/ProtectedRoute";

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

          {/* Authentication Routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="membership" element={<Membership />} />

          {/* Protected Routes */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          
          {/* 404 handler */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
