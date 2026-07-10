import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import wellness1 from "../assets/wellness1.jpg";
import wellness2 from "../assets/wellness2.jpg";
import health1 from "../assets/health1.jpg";
import health2 from "../assets/health2.jpg";
import medical1 from "../assets/medical1.jpg";
import card1 from "../assets/card1.jpg";

export const ARTICLES = [
  {
    id: 1,
    title: "National Pulse Polio Campaign Launched, Polio Drops Given to Children Across the Country",
    slug: "national-pulse-polio-campaign-launched",
    description: "National Campaign Launched across the country. Health department reports widespread distribution of vaccine drops to children under five.",
    content: `The National Pulse Polio Campaign was officially launched today with millions of children across the country receiving vaccine drops. The health ministry highlighted that the drive aims to sustain the polio-free status of the nation and ensure robust immunity levels among infants and toddlers.

Special vaccination booths were set up in major transit hubs, including railway stations, bus terminals, and airports, alongside regular community health centers. Health workers and volunteers are conducting door-to-door visits to cover any missed children.

"Sustaining our polio-free certification requires continuous vigilance and vaccine coverage," stated the health minister during the launch event. The campaign is supported by local health departments and international public health organizations.`,
    category: "Health",
    image: hero1,
    author: {
      name: "Ramesh Sharma",
      avatar: "RS",
      title: "Senior Health Editor"
    },
    publishedDate: "Jun 28, 2026",
    readingTime: "5 Min Read",
    views: 1240,
    language: "en",
    tags: ["Vaccination", "National Campaign", "Child Care", "Public Health"],
    shareCount: 156,
    likes: 342,
    bookmarks: 88
  },
  {
    id: 2,
    title: "PM Modi Highlights Birds, Yoga and Farmers in 135th Episode",
    slug: "pm-modi-highlights-birds-yoga",
    description: "In the latest episode of Mann Ki Baat, PM Narendra Modi spoke about the importance of yoga, bird conservation, and sustainable farming.",
    content: `During the 135th episode of the monthly radio program Mann Ki Baat, Prime Minister Narendra Modi addressed several community initiatives across the country. He emphasized the growing global embrace of Yoga as a daily practice for mental and physical wellness.

The Prime Minister also praised local conservationists working to protect migratory bird habitats and shared stories of innovative farmers utilizing organic methods to boost yield while maintaining soil health.

"Community effort is the driver of conservation and wellness," PM Modi stated, urging citizens to integrate natural practices into their routines.`,
    category: "Wellness",
    image: hero2,
    author: {
      name: "Amit Patel",
      avatar: "AP",
      title: "Political Correspondent"
    },
    publishedDate: "Jun 28, 2026",
    readingTime: "4 Min Read",
    views: 890,
    language: "en",
    tags: ["Yoga", "Farmers", "Wellness", "Government"],
    shareCount: 230,
    likes: 412,
    bookmarks: 54
  },
  {
    id: 3,
    title: "Aarogya Setu 2.0: JP Nadda to Launch India's Unified Platform",
    slug: "aarogya-setu-unified-platform",
    description: "The Indian government plans to upgrade the contact-tracing app into a comprehensive national health platform.",
    content: `Union Health Minister JP Nadda is set to officially launch Aarogya Setu 2.0. The revamped application transitions from a contact-tracing tool into a unified national digital health portal, offering health records management, online consultations, and lab booking integration.

The upgrade aligns with the Digital Health Mission to create accessible health ids and electronic health records for all citizens.

"Our goal is to bring diagnostic tracking and primary consultations directly to citizens' smartphones," officials reported.`,
    category: "Technology",
    image: hero3,
    author: {
      name: "Sanjay Sen",
      avatar: "SS",
      title: "Tech Reporter"
    },
    publishedDate: "Jun 28, 2026",
    readingTime: "3 Min Read",
    views: 1450,
    language: "en",
    tags: ["Aarogya Setu", "Digital Health", "Technology", "Government"],
    shareCount: 112,
    likes: 288,
    bookmarks: 90
  },
  {
    id: 4,
    title: "No Criminal Action for Minor Technical Violations: Pharma Reforms",
    slug: "pharma-reforms-no-criminal-action",
    description: "Government introduces reforms to decriminalize minor administrative lapses in pharmaceutical manufacturing units.",
    content: `The government has announced critical reforms for the pharmaceutical sector, aimed at improving the ease of doing business. Under the new guidelines, minor technical or administrative violations in drug manufacturing will no longer attract criminal penalties.

Instead, companies will face warnings and monetary fines for non-compliance, allowing them to rectify procedural errors without facing prolonged legal disputes.

"Decriminalizing administrative mistakes encourages industry growth while keeping consumer safety standards paramount," a ministry official noted.`,
    category: "Medical Research",
    image: hero4,
    author: {
      name: "Neha Gupta",
      avatar: "NG",
      title: "Pharma Analyst"
    },
    publishedDate: "Jun 27, 2026",
    readingTime: "4 Min Read",
    views: 720,
    language: "en",
    tags: ["Pharma Reforms", "Policy", "Industry", "Government"],
    shareCount: 45,
    likes: 120,
    bookmarks: 32
  },
  {
    id: 5,
    title: "Government Doctors Doing Private Practice is Concern: SC",
    slug: "government-doctors-private-practice",
    description: "Supreme Court flags the conflict of interest in government-employed doctors engaging in external private practice.",
    content: `The Supreme Court of India expressed concerns over government-employed doctors conducting private practice in their off-hours. The court noted that it affects the quality of service provided at public clinics and creates an ethical conflict.

State governments were urged to enforce stricter regulations and provide adequate non-practicing allowances to compensate public sector medical staff.

"Public health services deserve the undivided attention of state-employed professionals," the bench observed.`,
    category: "Opinion",
    image: hero5,
    author: {
      name: "Rajesh Kumar",
      avatar: "RK",
      title: "Legal Correspondent"
    },
    publishedDate: "Jun 25, 2026",
    readingTime: "3 Min Read",
    views: 1100,
    language: "en",
    tags: ["Supreme Court", "Public Health", "Doctors", "Ethics"],
    shareCount: 189,
    likes: 310,
    bookmarks: 78
  },
  {
    id: 6,
    title: "Perspective on Health Has Changed, Focus Now on Prevention and Better Lifestyle Along with Treatment",
    slug: "perspective-on-health-preventative-lifestyle",
    description: "Public awareness shifts toward preventative screening and wellness tracking to reduce dependency on active treatments.",
    content: `Health awareness across urban and rural sectors has undergone a significant transformation. The primary focus of public wellness programs is shifting away from reactive treatment to proactive prevention.

Regular diagnostics, heart rate tracking, metabolic coefficient assessments, and balanced diets are forming the cornerstone of modern wellness regimes.

"When citizens are healthy, productivity increases, economic growth accelerates, and community resilience strengthens," writes Kavita Singh.`,
    category: "Wellness",
    image: hero6,
    author: {
      name: "Kavita Singh",
      avatar: "KS",
      title: "Health Correspondent"
    },
    publishedDate: "Jun 24, 2026",
    readingTime: "3 Min Read",
    views: 2010,
    language: "en",
    tags: ["Prevention", "Lifestyle", "Wellness", "Public Health"],
    shareCount: 450,
    likes: 920,
    bookmarks: 310
  },
  {
    id: 7,
    title: "Meal planning cuts dietary waste and improves heart health indices",
    slug: "meal-planning-cuts-dietary-waste",
    description: "Consistent scheduling of home-cooked meals fosters positive metabolic adaptations and lower cholesterol.",
    content: `A new study tracking domestic eating habits shows that meal planning has double-sided benefits. First, it cuts dietary waste by up to 30% through planned ingredient purchasing. Second, and more importantly, it correlates with a significant reduction in cardiovascular risk factors.

By scheduling meals, families are less likely to rely on high-sodium fast food options, choosing instead fiber-rich, balanced homemade dishes.`,
    category: "Wellness",
    image: wellness1,
    author: {
      name: "Kavita Singh",
      avatar: "KS",
      title: "Health Correspondent"
    },
    publishedDate: "Jun 22, 2026",
    readingTime: "5 Min Read",
    views: 950,
    language: "en",
    tags: ["Meal Planning", "Diet & Nutrition", "Heart Health"],
    shareCount: 110,
    likes: 380,
    bookmarks: 140
  },
  {
    id: 8,
    title: "Mindfulness in mornings shows correlation with low daytime stress",
    slug: "mindfulness-mornings-low-stress",
    description: "Practicing morning mindfulness techniques reduces cortisol peaks and helps maintain balanced emotional responses.",
    content: `Starting the day with ten minutes of breathing exercises or silent meditation shows a measured correlation with lower emotional reactivity during peak work hours. 

Researchers monitoring salivary cortisol levels found that subjects practicing morning mindfulness experienced a smoother endocrine baseline throughout the day compared to active control groups.`,
    category: "Wellness",
    image: wellness2,
    author: {
      name: "Anjali Mehta",
      avatar: "AM",
      title: "Mental Health Editor"
    },
    publishedDate: "Jun 21, 2026",
    readingTime: "4 Min Read",
    views: 1320,
    language: "en",
    tags: ["Mindfulness", "Mental Wellness", "Stress Management"],
    shareCount: 310,
    likes: 670,
    bookmarks: 280
  },
  {
    id: 9,
    title: "New study shows preventative screening cuts chronic care burdens",
    slug: "preventative-screening-cuts-chronic-care",
    description: "Rigorous early diagnostic checks help mitigate progression indicators for common metabolic concerns, improving baseline safety parameters.",
    content: `Preventative screening programs are proving highly effective at lowering long-term hospitalization rates. By identifying insulin resistance and elevated blood pressures years before symptoms onset, clinics can prescribe lifestyle interventions that reverse disease progression.

Early diagnostics save health systems significant resources while enhancing the quality of life for aging populations.`,
    category: "Health",
    image: health1,
    author: {
      name: "Dr. Alok Verma",
      avatar: "AV",
      title: "Clinical Researcher"
    },
    publishedDate: "Jun 20, 2026",
    readingTime: "6 Min Read",
    views: 1840,
    language: "en",
    tags: ["Screening", "General Health", "Diagnostics", "Preventative Care"],
    shareCount: 220,
    likes: 540,
    bookmarks: 195
  },
  {
    id: 10,
    title: "Cardiovascular insights: What modern screenings tend to miss",
    slug: "cardiovascular-insights-screenings-miss",
    description: "Traditional cholesterol panels might not tell the full story. Specialists highlight newer markers for microvascular health.",
    content: `Cardiovascular diagnostics are evolving beyond simple LDL/HDL cholesterol measurements. Recent trials highlight that coronary inflammation and apolipoprotein-B levels serve as stronger predictors for vascular plaques.

Doctors recommend high-sensitivity C-reactive protein (hs-CRP) checks for patients with hereditary heart disease risk who present with standard cholesterol panels.`,
    category: "Health",
    image: health2,
    author: {
      name: "Dr. Alok Verma",
      avatar: "AV",
      title: "Clinical Researcher"
    },
    publishedDate: "Jun 19, 2526",
    readingTime: "4 Min Read",
    views: 990,
    language: "en",
    tags: ["Cardiovascular", "General Health", "Heart Disease"],
    shareCount: 88,
    likes: 215,
    bookmarks: 72
  },
  {
    id: 11,
    title: "Guava Juice May Help Boost Hemoglobin Levels",
    slug: "guava-juice-boosts-hemoglobin",
    description: "Recent trials show vitamin C rich guava extracts significantly aid iron absorption and help manage anemia symptoms naturally.",
    content: `A clinical trial examining dietary aids for iron-deficiency anemia found that guava juice intake significantly boosted hemoglobin levels. Because guavas are extremely rich in vitamin C, drinking the juice alongside iron-rich meals enhances non-heme iron absorption in the gut.

Nutritionists suggest that natural fruits could be used as dietary adjuvants in settings with high rates of iron deficiency.`,
    category: "Medical Research",
    image: medical1,
    author: {
      name: "Dr. Priya Roy",
      avatar: "PR",
      title: "Nutrition Scientist"
    },
    publishedDate: "May 26, 2026",
    readingTime: "3 Min Read",
    views: 2450,
    language: "en",
    tags: ["Guava Juice", "Hemoglobin", "Anemia", "Nutrition"],
    shareCount: 520,
    likes: 830,
    bookmarks: 410,
    premium: true
  },
  {
    id: 12,
    title: "Mediterranean Diet Associated with 23% Lower Risk of Mortality in Women",
    slug: "mediterranean-diet-lower-mortality-women",
    description: "A long-term study tracking over 25,000 women finds substantial cardiovascular and longevity benefits from healthy fat intake.",
    content: `Published in JAMA Internal Medicine, a twenty-five-year study on 25,000 female participants showed that adherence to a Mediterranean diet led to a 23% drop in all-cause mortality.

The benefits were driven by improvements in cardiometabolic markers, inflammation status, and insulin sensitivity. Researchers advocate for olive oils, whole grains, and lean fish.`,
    category: "Medical Research",
    image: card1,
    author: {
      name: "JAMA Internal Medicine",
      avatar: "JA",
      title: "Medical Journal"
    },
    publishedDate: "May 15, 2026",
    readingTime: "5 Min Read",
    views: 3100,
    language: "en",
    tags: ["Mediterranean Diet", "Mortality", "Women's Health"],
    shareCount: 680,
    likes: 1240,
    bookmarks: 560,
    premium: true
  }
];
