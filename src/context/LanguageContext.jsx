import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const TRANSLATIONS = {
  EN: {
    // Navigation
    "News": "News",
    "Wellness": "Wellness",
    "Health": "Health",
    "Video": "Video",
    "Resources": "Resources",
    "Other": "Other",

    // Section Titles & Subtitles
    "Featured News": "Featured News",
    "Major reports and investigations making waves this week.": "Major reports and investigations making waves this week.",
    "Trending": "Trending",
    "Most popular articles.": "Most popular articles.",
    "Editor's Picks": "Editor's Picks",
    "Curated coverage hand-selected by our advisory board for research excellence.": "Curated coverage hand-selected by our advisory board for research excellence.",
    "Wellness Insights": "Wellness Insights",
    "Nutrition, mindfulness, and everyday habit scheduling.": "Nutrition, mindfulness, and everyday habit scheduling.",
    "Clinical Health": "Clinical Health",
    "Pathology reviews, diagnostic guides, and vaccination updates.": "Pathology reviews, diagnostic guides, and vaccination updates.",
    "Latest Publications": "Latest Publications",
    "The complete stream of medical news chronologically ordered.": "The complete stream of medical news chronologically ordered.",
    "Related Articles": "Related Articles",
    "Comments": "Comments",
    "Search Suggestions": "Search Suggestions",
    "Recent Publications": "Recent Publications",
    "Matching Results": "Matching Results",

    // Buttons / Actions
    "Read Full Article": "Read Full Article",
    "Read Article": "Read Article",
    "Back to Newsroom": "Back to Newsroom",
    "Return Home": "Return Home",
    "Load More Publications": "Load More Publications",
    "Subscribe Now": "Subscribe Now",
    "Like": "Like",
    "Liked": "Liked",
    "Bookmark": "Bookmark",
    "Bookmarked": "Bookmarked",
    "Copy Link": "Copy Link",
    "Copied": "Copied",
    "Back": "Back",
    "All Wellness": "All Wellness",
    "All Health": "All Health",
    "Subscribing...": "Subscribing...",

    // Widgets & Other UI
    "AQI MONITOR": "AQI MONITOR",
    "HEALTH POLL": "HEALTH POLL",
    "PM2.5 in": "PM2.5 in",
    "VOTE RECORDED SUCCESSFULLY.": "VOTE RECORDED SUCCESSFULLY.",
    "Search (Ctrl+K)...": "Search (Ctrl+K)...",
    "Search...": "Search...",
    "Search by title, category, or hashtag...": "Search by title, category, or hashtag...",
    "No Articles Found": "No Articles Found",
    "Return Home": "Return Home",
    "There are currently no mock entries populated for the": "There are currently no mock entries populated for the",
    "category": "category",
    "tag": "tag",
    "No publications matched": "No publications matched",
    "Try searching for a different keyword or category.": "Try searching for a different keyword or category.",
    
    // Header & Tagline
    "Health & Diagnostics Review": "Health & Diagnostics Review",
    "IMPACTING": "IMPACTING",
    "GLOBAL HEALTH": "GLOBAL HEALTH",
    "Hero Description": "Bridging clinical science with everyday wellness indicators. Stay updated with state diagnostics, peer-reviewed medical reports, and environmental indexes.",

    // AQI Cities & Statuses
    "Delhi": "Delhi",
    "Mumbai": "Mumbai",
    "Bengaluru": "Bengaluru",
    "Moderate": "Moderate",
    "Good": "Good",
    "Excellent": "Excellent",
    "Sensitive groups should wear masks outdoors.": "Sensitive groups should wear masks outdoors.",
    "Air quality is ideal for outdoor activities.": "Air quality is ideal for outdoor activities.",
    "Perfect day for morning yoga or runs.": "Perfect day for morning yoga or runs.",

    // Poll Option Texts
    "How much water have you consumed so far today?": "How much water have you consumed so far today?",
    "Less than 1 Litre": "Less than 1 Litre",
    "1 to 2 Litres": "1 to 2 Litres",
    "More than 2 Litres": "More than 2 Litres",
    "< 1 Litre": "< 1 Litre",
    "1 - 2 Litres": "1 - 2 Litres",
    "2+ Litres": "2+ Litres",

    // Newsletter & Footer
    "Subscribe to our Newsletter": "Subscribe to our Newsletter",
    "Stay updated with clinical breakthroughs and healthcare diagnostics delivered weekly.": "Stay updated with clinical breakthroughs and healthcare diagnostics delivered weekly.",
    "Subscription registered successfully!": "Subscription registered successfully!",
    "Enter your email address": "Enter your email address",
    "Please enter a valid email address.": "Please enter a valid email address.",
    "Newsletter Note": "By subscribing, you agree to our Editorial Guidelines and Privacy terms. We respect your inbox privacy.",
    "Footer Mission": "India's premier health and scientific research portal. We bridge the gap between complex medical publications and daily wellness insights.",
    "Newsroom": "Newsroom",
    "Calculators": "Calculators",
    "Company": "Company",
    "Legal": "Legal",
    "Home": "Home",
    "Wellness Hub": "Wellness Hub",
    "Health Columns": "Health Columns",
    "Medical Studies": "Medical Studies",
    "Tech Diagnostics": "Tech Diagnostics",
    "BMI Calculator": "BMI Calculator",
    "Water Intake": "Water Intake",
    "Daily Calories": "Daily Calories",
    "Health Tools": "Health Tools",
    "About Us": "About Us",
    "Careers": "Careers",
    "Press Room": "Press Room",
    "Contact Support": "Contact Support",
    "Privacy Policy": "Privacy Policy",
    "Terms of Service": "Terms of Service",
    "Editorial Standards": "Editorial Standards",
    "Cookie Policy": "Cookie Policy",
    "Copyright Note": "© 2026 Health Boat Foundation (India). All rights reserved.",
    "Disclaimer": "Disclaimer: The editorial content on Helthro is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.",

    // Article Detail Metadata
    "Published Date": "Published Date",
    "Reading Time": "Reading Time",
    "Views": "Views",
    "Likes": "Likes",
    "Author Bio": "Author Bio",
    "Author Bio Text": "Dedicated correspondent analyzing major clinical advancements and peer-reviewed journals to provide clear medical summaries.",

    // Additional keys for Article Detail and Category/Tag pages
    "Article not found": "Article not found",
    "Back to home": "Back to home",
    "Write a comment...": "Write a comment...",
    "Post Comment": "Post Comment",
    "ON THIS PAGE": "ON THIS PAGE",
    "Overview": "Overview",
    "Key Findings": "Key Findings",
    "Medical Implications": "Medical Implications",
    "ABOUT AUTHOR": "ABOUT AUTHOR",
    "Related News": "Related News",
    "Read more related articles on this subject.": "Read more related articles on this subject.",
    "Spotlight": "Spotlight",
    "RECOMMENDED READS": "RECOMMENDED READS",
    "FEATURED": "FEATURED",
    "Portal": "Portal",
    "Explore all dynamic reporting, research, and analysis matching": "Explore all dynamic reporting, research, and analysis matching",
    "Tag:": "Tag:",
    "Browse all publications tagged under the hashtag": "Browse all publications tagged under the hashtag",
    "PAGE NOT FOUND": "PAGE NOT FOUND",
    "NotFound Description": "The requested page is missing or has been relocated within our diagnostics directory.",
    "Return to Diagnostics Hub": "Return to Diagnostics Hub",
    "FEATURED REPORT": "FEATURED REPORT",
    "Min Read": "Min Read",
    "Technology": "Technology",
    "Medical Research": "Medical Research",
    "Opinion": "Opinion",
    "Breaking": "Breaking"
  },
  HI: {
    // Navigation
    "News": "समाचार",
    "Wellness": "कल्याण",
    "Health": "स्वास्थ्य",
    "Video": "वीडियो",
    "Resources": "संसाधन",
    "Other": "अन्य",

    // Section Titles & Subtitles
    "Featured News": "मुख्य समाचार",
    "Major reports and investigations making waves this week.": "इस सप्ताह चर्चा में रहे मुख्य समाचार और शोध।",
    "Trending": "ट्रेंडिंग",
    "Most popular articles.": "सबसे लोकप्रिय लेख।",
    "Editor's Picks": "संपादक की पसंद",
    "Curated coverage hand-selected by our advisory board for research excellence.": "अनुसंधान उत्कृष्टता के लिए हमारे सलाहकार बोर्ड द्वारा चुने गए विशेष लेख।",
    "Wellness Insights": "वेलनेस अंतर्दृष्टि",
    "Nutrition, mindfulness, and everyday habit scheduling.": "पोषण, मानसिक एकाग्रता, और दैनिक आदतों का नियोजन।",
    "Clinical Health": "नैदानिक स्वास्थ्य",
    "Pathology reviews, diagnostic guides, and vaccination updates.": "रोगविज्ञान समीक्षाएं, नैदानिक गाइड और टीकाकरण अपडेट।",
    "Latest Publications": "नवीनतम प्रकाशन",
    "The complete stream of medical news chronologically ordered.": "चिकित्सा समाचारों का कालानुक्रमिक क्रम में पूरा प्रवाह।",
    "Related Articles": "संबंधित लेख",
    "Comments": "टिप्पणियाँ",
    "Search Suggestions": "खोज सुझाव",
    "Recent Publications": "हाल के प्रकाशन",
    "Matching Results": "मिलते-जुलते परिणाम",

    // Buttons / Actions
    "Read Full Article": "पूरा लेख पढ़ें",
    "Read Article": "लेख पढ़ें",
    "Back to Newsroom": "न्यूज़ रूम में वापस जाएं",
    "Return Home": "होम पर वापस जाएं",
    "Load More Publications": "और प्रकाशन लोड करें",
    "Subscribe Now": "अभी सब्सक्राइब करें",
    "Like": "पसंद करें",
    "Liked": "पसंद किया",
    "Bookmark": "बुकमार्क",
    "Bookmarked": "बुकमार्क किया",
    "Copy Link": "लिंक कॉपी करें",
    "Copied": "कॉपी किया गया",
    "Back": "वापस",
    "All Wellness": "सभी कल्याण",
    "All Health": "सभी स्वास्थ्य",
    "Subscribing...": "सदस्यता ली जा रही है...",

    // Widgets & Other UI
    "AQI MONITOR": "वायु गुणवत्ता (AQI) मॉनिटर",
    "HEALTH POLL": "स्वास्थ्य सर्वेक्षण",
    "PM2.5 in": "PM2.5 शहर:",
    "VOTE RECORDED SUCCESSFULLY.": "मत सफलतापूर्वक दर्ज किया गया।",
    "Search (Ctrl+K)...": "खोजें (Ctrl+K)...",
    "Search...": "खोजें...",
    "Search by title, category, or hashtag...": "शीर्षक, श्रेणी, या हैशटैग द्वारा खोजें...",
    "No Articles Found": "कोई लेख नहीं मिला",
    "Return Home": "होम पेज पर जाएं",
    "There are currently no mock entries populated for the": "वर्तमान में इस श्रेणी के लिए कोई लेख नहीं है: ",
    "category": "श्रेणी",
    "tag": "टैग",
    "No publications matched": "कोई लेख मैच नहीं हुआ",
    "Try searching for a different keyword or category.": "कृपया अन्य कीवर्ड या श्रेणी खोजें।",

    // Header & Tagline
    "Health & Diagnostics Review": "स्वास्थ्य एवं नैदानिक समीक्षा",
    "IMPACTING": "प्रभावित कर रहा है",
    "GLOBAL HEALTH": "वैश्विक स्वास्थ्य",
    "Hero Description": "दैनिक कल्याण संकेतकों के साथ नैदानिक ​​विज्ञान को जोड़ना। राज्य निदान, सहकर्मी-समीक्षित चिकित्सा रिपोर्टों और पर्यावरणीय सूचकांकों के साथ अपडेट रहें।",

    // AQI Cities & Statuses
    "Delhi": "दिल्ली",
    "Mumbai": "मुंबई",
    "Bengaluru": "बेंगलुरु",
    "Moderate": "सामान्य",
    "Good": "अच्छा",
    "Excellent": "उत्कृष्ट",
    "Sensitive groups should wear masks outdoors.": "संवेदनशील समूहों को बाहर मास्क पहनना चाहिए।",
    "Air quality is ideal for outdoor activities.": "बाहरी गतिविधियों के लिए वायु गुणवत्ता आदर्श है।",
    "Perfect day for morning yoga or runs.": "सुबह के योग या दौड़ने के लिए उत्तम दिन।",

    // Poll Option Texts
    "How much water have you consumed so far today?": "आज आपने अब तक कितना पानी पिया है?",
    "Less than 1 Litre": "1 लीटर से कम",
    "1 to 2 Litres": "1 से 2 लीटर",
    "More than 2 Litres": "2 लीटर से अधिक",
    "< 1 Litre": "< 1 लीटर",
    "1 - 2 Litres": "1 - 2 लीटर",
    "2+ Litres": "2+ लीटर",

    // Newsletter & Footer
    "Subscribe to our Newsletter": "हमारे न्यूज़लेटर की सदस्यता लें",
    "Stay updated with clinical breakthroughs and healthcare diagnostics delivered weekly.": "साप्ताहिक रूप से नैदानिक सफलताओं और स्वास्थ्य सेवा से अपडेट रहें।",
    "Subscription registered successfully!": "सदस्यता सफलतापूर्वक दर्ज की गई!",
    "Enter your email address": "अपना ईमेल पता दर्ज करें",
    "Please enter a valid email address.": "कृपया एक मान्य ईमेल पता दर्ज करें।",
    "Newsletter Note": "सदस्यता लेकर, आप हमारे संपादकीय दिशानिर्देशों और गोपनीयता शर्तों से सहमत होते हैं।",
    "Footer Mission": "भारत का प्रमुख स्वास्थ्य और वैज्ञानिक अनुसंधान पोर्टल। हम जटिल चिकित्सा प्रकाशनों और दैनिक कल्याण अंतर्दृष्टि के बीच की दूरी को कम करते हैं।",
    "Newsroom": "न्यूज़रूम",
    "Calculators": "कैलकुलेटर",
    "Company": "कंपनी",
    "Legal": "कानूनी",
    "Home": "होम",
    "Wellness Hub": "कल्याण हब",
    "Health Columns": "स्वास्थ्य कॉलम",
    "Medical Studies": "चिकित्सा अध्ययन",
    "Tech Diagnostics": "टेक निदान",
    "BMI Calculator": "बीएमआई कैलकुलेटर",
    "Water Intake": "जल अंतर्ग्रहण",
    "Daily Calories": "दैनिक कैलोरी",
    "Health Tools": "स्वास्थ्य उपकरण",
    "About Us": "हमारे बारे में",
    "Careers": "करियर",
    "Press Room": "प्रेस रूम",
    "Contact Support": "सहायता से संपर्क करें",
    "Privacy Policy": "गोपनीयता नीति",
    "Terms of Service": "सेवा की शर्तें",
    "Editorial Standards": "संपादकीय मानक",
    "Cookie Policy": "कुकी नीति",
    "Copyright Note": "© 2026 हेल्थ बोट फाउंडेशन (भारत)। सर्वाधिकार सुरक्षित।",
    "Disclaimer": "अस्वीकरण: हेल्थ्रो पर संपादकीय सामग्री केवल सूचनात्मक और शैक्षिक उद्देश्यों के लिए है। इसका उद्देश्य पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प होना नहीं है। किसी चिकित्सीय स्थिति के संबंध में आपके किसी भी प्रश्न के लिए हमेशा अपने चिकित्सक या अन्य योग्य स्वास्थ्य प्रदाता की सलाह लें।",

    // Article Detail Metadata
    "Published Date": "प्रकाशन तिथि",
    "Reading Time": "पढ़ने का समय",
    "Views": "दृश्य",
    "Likes": "पसंद",
    "Author Bio": "लेखक जीवनी",
    "Author Bio Text": "समर्पित संवाददाता जो स्पष्ट चिकित्सा सारांश प्रदान करने के लिए प्रमुख नैदानिक प्रगति और सहकर्मी-समीक्षित पत्रिकाओं का विश्लेषण करते हैं।",

    // Additional keys for Article Detail and Category/Tag pages
    "Article not found": "लेख नहीं मिला",
    "Back to home": "होम पर वापस जाएं",
    "Write a comment...": "एक टिप्पणी लिखें...",
    "Post Comment": "टिप्पणी पोस्ट करें",
    "ON THIS PAGE": "इस पृष्ठ पर",
    "Overview": "अवलोकन",
    "Key Findings": "मुख्य निष्कर्ष",
    "Medical Implications": "चिकित्सा प्रभाव",
    "ABOUT AUTHOR": "लेखक के बारे में",
    "Related News": "संबंधित समाचार",
    "Read more related articles on this subject.": "इस विषय पर अधिक संबंधित लेख पढ़ें।",
    "Spotlight": "स्पॉटलाइट",
    "RECOMMENDED READS": "अनुशंसित लेख",
    "FEATURED": "विशेष",
    "Portal": "पोर्टल",
    "Explore all dynamic reporting, research, and analysis matching": "सभी संबंधित रिपोर्टिंग, अनुसंधान और विश्लेषण देखें",
    "Tag:": "टैग:",
    "Browse all publications tagged under the hashtag": "इस हैशटैग के अंतर्गत सभी प्रकाशनों को ब्राउज़ करें",
    "PAGE NOT FOUND": "पृष्ठ नहीं मिला",
    "NotFound Description": "अनुरोधित पृष्ठ मौजूद नहीं है या हमारे निर्देशिका में स्थानांतरित कर दिया गया है।",
    "Return to Diagnostics Hub": "डायग्नोस्टिक्स हब पर वापस जाएं",
    "FEATURED REPORT": "विशेष रिपोर्ट",
    "Min Read": "मिनट पाठ",
    "Technology": "तकनीक",
    "Medical Research": "चिकित्सा अनुसंधान",
    "Opinion": "विचार",
    "Breaking": "ताज़ा खबर"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("EN");

  // Sync html attributes and fonts automatically
  useEffect(() => {
    const root = document.documentElement;
    if (lang === "HI") {
      root.classList.remove("lang-en");
      root.classList.add("lang-hi");
      root.setAttribute("lang", "hi");
    } else {
      root.classList.remove("lang-hi");
      root.classList.add("lang-en");
      root.setAttribute("lang", "en");
    }
  }, [lang]);

  const t = (key) => {
    return TRANSLATIONS[lang]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
