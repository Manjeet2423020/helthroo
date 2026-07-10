import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";
import Button from "../components/Button";
import { FiUser, FiMail, FiPhone, FiLock, FiSettings, FiCreditCard } from "react-icons/fi";

const Profile = () => {
  const { t } = useLanguage();
  const { user, updateProfile, changePassword, loading } = useAuth();

  const [activeTab, setActiveTab] = useState("info"); // info, edit, password

  // Edit Profile fields
  const [profileData, setProfileData] = useState({
    fullName: user?.fullName || "",
    username: user?.username || "",
    mobileNumber: user?.mobileNumber || "",
  });

  // Change Password fields
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [profileErrors, setProfileErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
    if (profileErrors[name]) {
      setProfileErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
    if (passwordErrors[name]) {
      setPasswordErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateProfile = () => {
    const errs = {};
    if (!profileData.fullName.trim()) {
      errs.fullName = t("Full Name is required");
    }
    setProfileErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validatePassword = () => {
    const errs = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordData.currentPassword) {
      errs.currentPassword = t("Current password is required");
    }
    if (!passwordData.newPassword) {
      errs.newPassword = t("New password is required");
    } else if (!passwordRegex.test(passwordData.newPassword)) {
      errs.newPassword = t(
        "Password must be at least 8 characters long, contain an uppercase letter, lowercase letter, a number, and a special character."
      );
    }
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      errs.confirmNewPassword = t("Passwords do not match");
    }

    setPasswordErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    if (!validateProfile()) return;

    try {
      await updateProfile(
        profileData.fullName,
        profileData.username,
        profileData.mobileNumber
      );
      setActiveTab("info");
    } catch (err) {
      // Handled by context
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword()) return;

    try {
      await changePassword(
        passwordData.currentPassword,
        passwordData.newPassword
      );
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      setActiveTab("info");
    } catch (err) {
      // Handled by context
    }
  };

  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-850 dark:text-white uppercase tracking-widest font-heading mb-8 text-left relative inline-block">
          {t("My Profile Settings")}
          <span className="absolute left-0 bottom-0.5 w-full h-2.5 bg-teal-500/20 -z-10 rounded"></span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {/* Sidebar Menu Navigation */}
          <div className="md:col-span-1 space-y-2">
            <button
              onClick={() => setActiveTab("info")}
              className={`w-full text-left px-4 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "info"
                  ? "bg-teal-500 text-slate-950 shadow-lg"
                  : "bg-white/10 dark:bg-slate-900/20 hover:bg-white/20 dark:hover:bg-slate-900/35 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/35"
              }`}
            >
              <FiUser size={13} /> {t("Account Overview")}
            </button>
            <button
              onClick={() => setActiveTab("edit")}
              className={`w-full text-left px-4 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "edit"
                  ? "bg-teal-500 text-slate-950 shadow-lg"
                  : "bg-white/10 dark:bg-slate-900/20 hover:bg-white/20 dark:hover:bg-slate-900/35 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/35"
              }`}
            >
              <FiSettings size={13} /> {t("Edit Details")}
            </button>
            <button
              onClick={() => setActiveTab("password")}
              className={`w-full text-left px-4 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "password"
                  ? "bg-teal-500 text-slate-950 shadow-lg"
                  : "bg-white/10 dark:bg-slate-900/20 hover:bg-white/20 dark:hover:bg-slate-900/35 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/35"
              }`}
            >
              <FiLock size={13} /> {t("Change Password")}
            </button>
          </div>

          {/* Main content viewport */}
          <div className="md:col-span-3">
            <div className="glass-premium border border-slate-200/40 dark:border-slate-800/35 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-[30%] -right-[30%] w-72 h-72 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[90px] pointer-events-none"></div>

              {/* View Account Info */}
              {activeTab === "info" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-black text-slate-850 dark:text-white uppercase tracking-wider border-b border-slate-200/20 dark:border-slate-800/20 pb-3">
                      {t("Account Overview")}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <span className="text-[9px] font-black uppercase text-slate-450 dark:text-slate-500 tracking-wider">
                        {t("Display Name")}
                      </span>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                        {user?.fullName}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] font-black uppercase text-slate-450 dark:text-slate-500 tracking-wider">
                        {t("Username")}
                      </span>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                        @{user?.username}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] font-black uppercase text-slate-450 dark:text-slate-500 tracking-wider">
                        {t("Email Address")}
                      </span>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                        {user?.email}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] font-black uppercase text-slate-450 dark:text-slate-500 tracking-wider">
                        {t("Mobile Number")}
                      </span>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                        {user?.mobileNumber || t("Not Provided")}
                      </p>
                    </div>
                  </div>

                  {/* Plan Badge Card */}
                  <div className="mt-8 p-6 rounded-2xl bg-white/10 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/35 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-teal-500/10 dark:bg-teal-400/5 text-teal-600 dark:text-teal-400 rounded-xl">
                        <FiCreditCard size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">
                          {t("Subscription Plan")}
                        </h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-1">
                          {user?.memberLevel === "premium"
                            ? t("You have an active Premium Membership. Enjoy unlimited articles.")
                            : t("You are currently on a Free tier. Upgrade to unlock clinical reports.")}
                        </p>
                      </div>
                    </div>
                    <div>
                      {user?.memberLevel === "premium" ? (
                        <span className="inline-block px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 text-[9px] font-black uppercase tracking-widest shadow-md">
                          👑 PREMIUM
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-1 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-350 text-[9px] font-black uppercase tracking-widest">
                          FREE
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Edit Details Form */}
              {activeTab === "edit" && (
                <form onSubmit={handleProfileSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-sm font-black text-slate-850 dark:text-white uppercase tracking-wider border-b border-slate-200/20 dark:border-slate-800/20 pb-3">
                      {t("Edit Details")}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                        {t("Full Name")} *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                          <FiUser size={13} />
                        </span>
                        <input
                          type="text"
                          name="fullName"
                          value={profileData.fullName}
                          onChange={handleProfileChange}
                          disabled={loading}
                          placeholder={t("Full Name")}
                          className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-205 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                      {profileErrors.fullName && (
                        <p className="text-[9px] font-bold text-rose-500">{profileErrors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                        {t("Username")}
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                          <FiUser size={13} />
                        </span>
                        <input
                          type="text"
                          name="username"
                          value={profileData.username}
                          onChange={handleProfileChange}
                          disabled={loading}
                          placeholder={t("Username")}
                          className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-205 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                        {t("Mobile Number")}
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                          <FiPhone size={13} />
                        </span>
                        <input
                          type="text"
                          name="mobileNumber"
                          value={profileData.mobileNumber}
                          onChange={handleProfileChange}
                          disabled={loading}
                          placeholder="+1234567890"
                          className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-205 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="solid"
                      color="teal"
                      disabled={loading}
                      className="px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest"
                    >
                      {loading ? t("Saving...") : t("Save Changes")}
                    </Button>
                  </div>
                </form>
              )}

              {/* Change Password Form */}
              {activeTab === "password" && (
                <form onSubmit={handlePasswordSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-sm font-black text-slate-850 dark:text-white uppercase tracking-wider border-b border-slate-200/20 dark:border-slate-800/20 pb-3">
                      {t("Change Password")}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                        {t("Current Password")} *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                          <FiLock size={13} />
                        </span>
                        <input
                          type="password"
                          name="currentPassword"
                          value={passwordData.currentPassword}
                          onChange={handlePasswordChange}
                          disabled={loading}
                          placeholder={t("Current password")}
                          className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-205 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                      {passwordErrors.currentPassword && (
                        <p className="text-[9px] font-bold text-rose-500">{passwordErrors.currentPassword}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                        {t("New Password")} *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                          <FiLock size={13} />
                        </span>
                        <input
                          type="password"
                          name="newPassword"
                          value={passwordData.newPassword}
                          onChange={handlePasswordChange}
                          disabled={loading}
                          placeholder={t("New password")}
                          className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-255 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                      {passwordErrors.newPassword && (
                        <p className="text-[9px] font-bold text-rose-500 leading-normal">{passwordErrors.newPassword}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-wider text-slate-450 dark:text-slate-500">
                        {t("Confirm New Password")} *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                          <FiLock size={13} />
                        </span>
                        <input
                          type="password"
                          name="confirmNewPassword"
                          value={passwordData.confirmNewPassword}
                          onChange={handlePasswordChange}
                          disabled={loading}
                          placeholder={t("Confirm new password")}
                          className="w-full pl-9 pr-4 py-2.5 bg-white/20 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-205 placeholder:text-slate-400 dark:placeholder:text-slate-550 focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                      {passwordErrors.confirmNewPassword && (
                        <p className="text-[9px] font-bold text-rose-500">{passwordErrors.confirmNewPassword}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="solid"
                      color="teal"
                      disabled={loading}
                      className="px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest"
                    >
                      {loading ? t("Updating...") : t("Update Password")}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
