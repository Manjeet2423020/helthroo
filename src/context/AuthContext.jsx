import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

// Initial mock database setup if not present
const setupMockDB = () => {
  const existingUsers = localStorage.getItem("helthroo_users");
  if (!existingUsers) {
    const defaultUsers = [
      {
        fullName: "Premium Member Admin",
        username: "admin",
        email: "admin@helthroo.com",
        mobileNumber: "9876543210",
        password: "Admin123!",
        memberLevel: "premium",
        savedArticles: [],
        bookmarks: [],
        likedArticles: [],
        history: [],
      },
      {
        fullName: "Free Member User",
        username: "freeuser",
        email: "free@helthroo.com",
        mobileNumber: "9876543211",
        password: "Free123!",
        memberLevel: "free",
        savedArticles: [],
        bookmarks: [],
        likedArticles: [],
        history: [],
      }
    ];
    localStorage.setItem("helthroo_users", JSON.stringify(defaultUsers));
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  // Setup DB and look for active session on load
  useEffect(() => {
    setupMockDB();
    const rememberMeUser = localStorage.getItem("helthroo_active_user");
    const sessionUser = sessionStorage.getItem("helthroo_active_user");
    
    if (rememberMeUser) {
      setUser(JSON.parse(rememberMeUser));
    } else if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }
    setLoading(false);
  }, []);

  // Sync active user state helper
  const syncSession = (updatedUser, rememberMe = true) => {
    setUser(updatedUser);
    
    // Update active session storage
    if (rememberMe) {
      localStorage.setItem("helthroo_active_user", JSON.stringify(updatedUser));
    } else {
      sessionStorage.setItem("helthroo_active_user", JSON.stringify(updatedUser));
    }

    // Update global user array database in localStorage
    const users = JSON.parse(localStorage.getItem("helthroo_users") || "[]");
    const updatedUsers = users.map((u) => (u.email === updatedUser.email ? { ...u, ...updatedUser } : u));
    localStorage.setItem("helthroo_users", JSON.stringify(updatedUsers));
  };

  // Toast Helper
  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Login action
  const login = (emailOrUsername, password, rememberMe = false) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("helthroo_users") || "[]");
        const foundUser = users.find(
          (u) =>
            (u.email === emailOrUsername || u.username === emailOrUsername) &&
            u.password === password
        );

        setLoading(false);
        if (foundUser) {
          syncSession(foundUser, rememberMe);
          showToast(`Welcome back, ${foundUser.fullName}!`, "success");
          resolve(foundUser);
        } else {
          showToast("Invalid credentials. Please try again.", "error");
          reject(new Error("Invalid credentials"));
        }
      }, 500);
    });
  };

  // Register action
  const register = (userData) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("helthroo_users") || "[]");
        
        // Check duplicates
        const emailExists = users.some((u) => u.email === userData.email);
        if (emailExists) {
          setLoading(false);
          showToast("Email address already registered.", "error");
          reject(new Error("Email already exists"));
          return;
        }

        const newUser = {
          fullName: userData.fullName,
          username: userData.username || userData.email.split("@")[0],
          email: userData.email,
          mobileNumber: userData.mobile,
          password: userData.password,
          memberLevel: "free", // Defaults to Free member
          savedArticles: [],
          bookmarks: [],
          likedArticles: [],
          history: [],
        };

        const updatedUsers = [...users, newUser];
        localStorage.setItem("helthroo_users", JSON.stringify(updatedUsers));

        // Auto login
        syncSession(newUser, true);
        setLoading(false);
        showToast("Registration successful!", "success");
        resolve(newUser);
      }, 500);
    });
  };

  // Logout action
  const logout = () => {
    localStorage.removeItem("helthroo_active_user");
    sessionStorage.removeItem("helthroo_active_user");
    setUser(null);
    showToast("Logged out successfully.", "info");
  };

  // Forgot password
  const forgotPassword = (email) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("helthroo_users") || "[]");
        const found = users.some((u) => u.email === email);
        setLoading(false);
        if (found) {
          showToast("Password reset link sent to your email.", "success");
          resolve();
        } else {
          showToast("No account associated with this email.", "error");
          reject(new Error("Email not found"));
        }
      }, 500);
    });
  };

  // Reset password
  const resetPassword = (email, newPassword) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("helthroo_users") || "[]");
        const userIdx = users.findIndex((u) => u.email === email);
        if (userIdx !== -1) {
          users[userIdx].password = newPassword;
          localStorage.setItem("helthroo_users", JSON.stringify(users));
          
          // If active user is current, update session
          if (user && user.email === email) {
            syncSession(users[userIdx], true);
          }
          
          setLoading(false);
          showToast("Password updated successfully.", "success");
          resolve();
        } else {
          setLoading(false);
          showToast("Password reset failed.", "error");
          reject(new Error("User not found"));
        }
      }, 500);
    });
  };

  // Verify Email UI Action
  const verifyEmail = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        showToast("Email address verified successfully!", "success");
        resolve();
      }, 800);
    });
  };

  // Update Profile details
  const updateProfile = (fullName, username, mobileNumber) => {
    if (!user) return Promise.reject(new Error("Not logged in"));
    const updated = { ...user, fullName, username, mobileNumber };
    syncSession(updated, true);
    showToast("Profile details updated successfully.", "success");
    return Promise.resolve(updated);
  };

  // Change password profile settings
  const changePassword = (currentPassword, newPassword) => {
    if (!user) return Promise.reject(new Error("Not logged in"));
    if (user.password !== currentPassword) {
      showToast("Current password does not match.", "error");
      return Promise.reject(new Error("Invalid current password"));
    }
    const updated = { ...user, password: newPassword };
    syncSession(updated, true);
    showToast("Password updated successfully.", "success");
    return Promise.resolve(updated);
  };

  // Saved Articles toggle
  const toggleSaveArticle = (slug) => {
    if (!user) {
      showToast("Please log in to save articles.", "info");
      return;
    }
    const saved = user.savedArticles || [];
    const isSaved = saved.includes(slug);
    const updatedSaved = isSaved ? saved.filter((s) => s !== slug) : [...saved, slug];
    const updated = { ...user, savedArticles: updatedSaved };
    syncSession(updated, true);
    showToast(isSaved ? "Removed from Saved Articles." : "Saved to your list.", "success");
  };

  // Bookmarks toggle
  const toggleBookmarkArticle = (slug) => {
    if (!user) {
      showToast("Please log in to bookmark articles.", "info");
      return;
    }
    const bookmarked = user.bookmarks || [];
    const isBookmarked = bookmarked.includes(slug);
    const updatedBookmarked = isBookmarked ? bookmarked.filter((s) => s !== slug) : [...bookmarked, slug];
    const updated = { ...user, bookmarks: updatedBookmarked };
    syncSession(updated, true);
    showToast(isBookmarked ? "Bookmark removed." : "Added to Bookmarks.", "success");
  };

  // Likes toggle
  const toggleLikeArticle = (slug) => {
    if (!user) {
      showToast("Please log in to like articles.", "info");
      return;
    }
    const liked = user.likedArticles || [];
    const isLiked = liked.includes(slug);
    const updatedLiked = isLiked ? liked.filter((s) => s !== slug) : [...liked, slug];
    const updated = { ...user, likedArticles: updatedLiked };
    syncSession(updated, true);
    showToast(isLiked ? "Unliked article." : "Liked article.", "success");
  };

  // Add article to reading history
  const addToHistory = (slug) => {
    if (!user) return;
    const hist = user.history || [];
    // Remove if already in history list to bubble to top
    const filteredHist = hist.filter((s) => s !== slug);
    const updatedHist = [slug, ...filteredHist].slice(0, 10); // Keep last 10
    const updated = { ...user, history: updatedHist };
    syncSession(updated, true);
  };

  // Upgrade Plan Level
  const upgradeMembership = (level) => {
    if (!user) {
      showToast("Please log in to upgrade plan.", "info");
      return;
    }
    const updated = { ...user, memberLevel: level };
    syncSession(updated, true);
    showToast(`Successfully upgraded to ${level.toUpperCase()} Member!`, "success");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        toasts,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        verifyEmail,
        updateProfile,
        changePassword,
        toggleSaveArticle,
        toggleBookmarkArticle,
        toggleLikeArticle,
        addToHistory,
        upgradeMembership,
        showToast,
      }}
    >
      {children}

      {/* Premium Toast Container HUD overlay */}
      <div className="fixed bottom-6 right-6 z-100 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-2xl shadow-2xl border flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wider transition-all duration-300 animate-slide-up ${
              toast.type === "success"
                ? "bg-teal-500 text-slate-950 border-teal-400"
                : toast.type === "error"
                ? "bg-rose-500 text-white border-rose-400"
                : "bg-slate-900 text-slate-200 border-slate-800"
            }`}
          >
            <span>{toast.message}</span>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="font-black opacity-60 hover:opacity-100 cursor-pointer ml-3"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      
      {/* Toast slide-up styles injection */}
      <style>{`
        .animate-slide-up {
          animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
};
