export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const companyInfo = {
  nameEn: "Marafeq Al-Banaa",
  nameAr: "مرافق البناء",
  addressEn: "Al Jawharah, Al Khobar 34434, Kingdom of Saudi Arabia",
  addressAr: "الجوهرة، الخبر 34434، المملكة العربية السعودية",
  phone: "+966530555067",
  phoneDisplay: "+966 53 055 5067",
  email: "marafeq.hm@gmail.com",
  instagram: "@marafeq_albnaa",
  whatsappLink: "https://wa.me/966530555067",
  mapEmbed:
    "https://www.google.com/maps?q=Al%20Jawharah%2C%20Al%20Khobar%2034434&output=embed",
};

export const services = [
  {
    slug: "electromechanical",
    icon: "bolt",
    image: "/assets/Electromechanical Works.png",
    en: {
      title: "Electromechanical Works",
      description:
        "Integrated mechanical, electrical, and plumbing execution covering power, control, and technical infrastructure with strict safety standards.",
    },
    ar: {
      title: "الأعمال الكهربائية والميكانيكية",
      description:
        "تنفيذ متكامل لأعمال الميكانيكا والكهرباء والبنية التحتية وفق أعلى معايير السلامة والجودة.",
    },
  },
  {
    slug: "hvac",
    icon: "fan",
    image: "/assets/PLACEHOLDER_HVAC.png",
    en: {
      title: "HVAC Systems (Air-Conditioning & Cooling)",
      description:
        "Design, installation, and maintenance of efficient cooling and ventilation systems for residential and commercial spaces.",
    },
    ar: {
      title: "أنظمة التكييف والتبريد",
      description:
        "تصميم وتركيب وصيانة أنظمة تكييف وتهوية عالية الكفاءة للمشاريع السكنية والتجارية.",
    },
  },
  {
    slug: "plumbing",
    icon: "droplets",
    image: "/assets/Plumbing,Systems.png",
    en: {
      title: "Plumbing & Sanitary Systems",
      description:
        "Reliable piping, water supply, and drainage solutions for long-lasting building performance.",
    },
    ar: {
      title: "أنظمة السباكة والصرف الصحي",
      description:
        "حلول موثوقة لشبكات المياه والصرف والتمديدات الصحية لضمان استدامة وكفاءة المبنى.",
    },
  },
  {
    slug: "low-voltage",
    icon: "cable",
    image: "/assets/service-low-voltage.png",
    en: {
      title: "Low-Voltage Works",
      description:
        "Smart low-current systems including access control and structured communication cabling.",
    },
    ar: {
      title: "أعمال الجهد المنخفض",
      description:
        "أنظمة ذكية تشمل التحكم بالدخول وتمديدات الاتصالات والشبكات للمباني الحديثة.",
    },
  },
  {
    slug: "security",
    icon: "shield",
    image: "/assets/PLACEHOLDER_SECURITY.png",
    en: {
      title: "Security Systems",
      description:
        "Integrated security systems including CCTV, alarms, and safety monitoring for industrial, commercial, and residential facilities.",
    },
    ar: {
      title: "أنظمة الأمان",
      description:
        "أنظمة أمنية متكاملة تشمل كاميرات المراقبة والإنذار ومراقبة السلامة للمنشآت الصناعية والتجارية والسكنية.",
    },
  },
  {
    slug: "cleaning",
    icon: "sparkles",
    image: "/assets/service-cleaning.png",
    en: {
      title: "Professional Cleaning for Industrial, Commercial & Residential",
      description:
        "Industrial, commercial, and residential cleaning operations delivered by trained teams and professional tools.",
    },
    ar: {
      title: "خدمات تنظيف احترافية للاحتياجات الصناعية والتجارية والسكنية",
      description:
        "خدمات تنظيف صناعية وتجارية وسكنية بواسطة فرق مدربة ومعدات احترافية.",
    },
  },
] as const;

export const partners = [
  "HEX",
  "Al Zamil — Industry, Trade & Transport",
  "Zamillight",
  "KDK",
  "Masdar Building Materials",
  "Tredex",
  "Ideal Standard",
  "hansgrohe",
];

export const projectItems = [
  {
    titleEn: "Advanced HVAC Retrofit",
    titleAr: "تحديث متقدم لأنظمة التكييف",
    category: "hvac",
    image: "/assets/reference-1.png",
    client: "Private Villa",
    location: "Al Khobar",
    completion: "2026-03",
    typeEn: "Cooling & ventilation",
    typeAr: "تكييف وتهوية",
  },
  {
    titleEn: "Mechanical, Electrical and Plumbing Installation Package",
    titleAr: "حزمة تنفيذ الأعمال الميكانيكية والكهربائية والسباكة",
    category: "electromechanical",
    image: "/assets/reference-2.png",
    client: "Commercial Complex",
    location: "Dammam",
    completion: "2026-01",
    typeEn: "Electromechanical works",
    typeAr: "أعمال كهروميكانيكية",
  },
  {
    titleEn: "High-Pressure Plumbing System",
    titleAr: "نظام سباكة عالي الضغط",
    category: "plumbing",
    image: "/assets/reference-3.png",
    client: "Residential Compound",
    location: "Khobar",
    completion: "2025-11",
    typeEn: "Plumbing & sanitary",
    typeAr: "سباكة وصحي",
  },
  {
    titleEn: "Security & Access Control Deployment",
    titleAr: "تنفيذ أنظمة الأمن والتحكم",
    category: "low-voltage",
    image: "/assets/reference-4.png",
    client: "Office Towers",
    location: "Riyadh",
    completion: "2025-12",
    typeEn: "Low-voltage systems",
    typeAr: "أنظمة تيار خفيف",
  },
  {
    titleEn: "Industrial Cleaning Campaign",
    titleAr: "حملة تنظيف صناعية",
    category: "cleaning",
    image: "/assets/reference-5.png",
    client: "Manufacturing Plant",
    location: "Jubail",
    completion: "2026-04",
    typeEn: "Industrial cleaning",
    typeAr: "تنظيف صناعي",
  },
  {
    titleEn: "Integrated Facility Maintenance",
    titleAr: "صيانة مرافق متكاملة",
    category: "cleaning",
    image: "/assets/reference-6.png",
    client: "Mixed-use Building",
    location: "Dhahran",
    completion: "2026-05",
    typeEn: "Facility management",
    typeAr: "إدارة مرافق",
  },
  {
    titleEn: "Fit-out and Mechanical, Electrical, Plumbing Coordination",
    titleAr: "تنسيق التشطيبات والأعمال الميكانيكية والكهربائية والسباكة",
    category: "electromechanical",
    image: "/assets/reference-7.png",
    client: "Retail Center",
    location: "Khobar",
    completion: "2025-10",
    typeEn: "Mechanical, electrical and plumbing coordination",
    typeAr: "تنسيق الأعمال الميكانيكية والكهربائية والسباكة",
  },
];

export const dictionary = {
  en: {
    siteName: companyInfo.nameEn,
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      partners: "Partners",
      projects: "Projects",
      contact: "Contact",
      news: "News",
    },
    ctaQuote: "Request a Quote",
    ctaContact: "Contact Us",
    heroTitle: "Complete Solution, For Lasting Quality",
    heroSubtitle:
      "Professional construction, mechanical systems, electrical systems, plumbing, and facility services engineered for dependable long-term performance.",
    home: {
      serviceOverviewTitle: "Integrated Services",
      whyTitle: "Why Choose Us",
      featuredProjects: "Featured Projects",
      viewAllProjects: "View All Projects",
      partnersTitle: "Trusted Supply Chain Partners",
      metrics: [
        { label: "Years of Experience", value: "15+" },
        { label: "Completed Projects", value: "320+" },
        { label: "Strategic Partners", value: "8+" },
        { label: "Cities Served", value: "12+" },
      ],
    },
    about: {
      title: "Building with Quality, Delivering with Integrity",
      intro:
        "Marafeq Al-Banaa is a Saudi company specialized in construction support, mechanical and electrical contracting, plumbing infrastructure, and integrated facility services for residential, commercial, and industrial sectors.",
      visionTitle: "Vision",
      vision:
        "To become a leading Saudi reference for reliable and sustainable building services.",
      missionTitle: "Mission",
      mission:
        "To deliver integrated technical services that ensure safety, performance, and long-term value for every client.",
      promiseTitle: "Our Promise",
      promise:
        "We commit to quality execution, transparent communication, and on-time project delivery.",
      valuesTitle: "Core Values",
      values: ["Quality", "Innovation", "Sustainability", "Reliability"],
    },
    services: {
      title: "Our Services",
      subtitle:
        "Each service is delivered by specialized teams with strict quality assurance.",
      quoteForService: "Request a Quote for This Service",
      examplesTitle: "Completed Project Examples",
    },
    partners: {
      title: "Our Strategic Partners",
      subtitle:
        "We work with trusted global and regional suppliers to ensure quality and reliability in every project.",
    },
    projects: {
      title: "Projects Gallery",
      subtitle:
        "Filter by service category and open each image for a closer project view.",
      all: "All",
      beforeAfter: "Before / After View (where available)",
      detailClient: "Client",
      detailLocation: "Location",
      detailType: "Type of Work",
      detailDate: "Completion Date",
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "Get in touch for project consultation, quotation requests, or technical support.",
      fullName: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      serviceType: "Service Type",
      message: "Message",
      submit: "Send Request",
      antiSpam: "I am not a robot",
      mapTitle: "Our Location",
    },
    news: {
      title: "News & Insights",
      subtitle:
        "Upcoming section for project updates, maintenance tips, and company announcements.",
    },
  },
  ar: {
    siteName: companyInfo.nameAr,
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      partners: "الشركاء",
      projects: "المشاريع",
      contact: "اتصل بنا",
      news: "الأخبار",
    },
    ctaQuote: "اطلب عرض سعر",
    ctaContact: "تواصل معنا",
    heroTitle: "حلول متكاملة، لجودة تدوم",
    heroSubtitle:
      "خدمات احترافية في الإنشاءات والأنظمة الميكانيكية والكهربائية والسباكة وإدارة المرافق لضمان كفاءة طويلة الأمد.",
    home: {
      serviceOverviewTitle: "خدمات متكاملة",
      whyTitle: "لماذا نحن",
      featuredProjects: "مشاريع مميزة",
      viewAllProjects: "عرض كل المشاريع",
      partnersTitle: "شركاء سلسلة توريد موثوقون",
      metrics: [
        { label: "سنوات الخبرة", value: "+15" },
        { label: "مشروع مكتمل", value: "+320" },
        { label: "شريك استراتيجي", value: "+8" },
        { label: "مدينة مخدومة", value: "+12" },
      ],
    },
    about: {
      title: "نبني بالجودة وننجز بالثقة",
      intro:
        "مرافق البناء شركة سعودية متخصصة في دعم أعمال البناء والمقاولات الكهروميكانيكية وخدمات المرافق المتكاملة للقطاعات السكنية والتجارية والصناعية.",
      visionTitle: "الرؤية",
      vision: "أن نكون مرجعاً سعودياً رائداً في خدمات البناء الموثوقة والمستدامة.",
      missionTitle: "الرسالة",
      mission:
        "تقديم خدمات تقنية متكاملة تحقق السلامة والأداء والقيمة طويلة المدى لكل عميل.",
      promiseTitle: "وعدنا",
      promise: "نلتزم بجودة التنفيذ ووضوح التواصل والتسليم في الوقت المحدد.",
      valuesTitle: "القيم الأساسية",
      values: ["الجودة", "الابتكار", "الاستدامة", "الاعتمادية"],
    },
    services: {
      title: "خدماتنا",
      subtitle:
        "كل خدمة يتم تنفيذها بواسطة فرق متخصصة مع تطبيق صارم لمعايير الجودة.",
      quoteForService: "اطلب عرض سعر لهذه الخدمة",
      examplesTitle: "نماذج مشاريع منفذة",
    },
    partners: {
      title: "شركاؤنا الاستراتيجيون",
      subtitle:
        "نتعاون مع موردين عالميين وإقليميين موثوقين لضمان الجودة والاعتمادية في كل مشروع.",
    },
    projects: {
      title: "معرض المشاريع",
      subtitle: "يمكنك التصفية حسب نوع الخدمة وفتح الصور لعرض التفاصيل.",
      all: "الكل",
      beforeAfter: "عرض قبل / بعد (عند توفره)",
      detailClient: "العميل",
      detailLocation: "الموقع",
      detailType: "نوع العمل",
      detailDate: "تاريخ الإنجاز",
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "تواصل معنا للاستشارات الفنية أو طلبات التسعير أو الدعم.",
      fullName: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      serviceType: "نوع الخدمة",
      message: "الرسالة",
      submit: "إرسال الطلب",
      antiSpam: "أنا لست روبوتاً",
      mapTitle: "موقعنا",
    },
    news: {
      title: "الأخبار والمقالات",
      subtitle:
        "قسم قادم لنشر تحديثات المشاريع ونصائح الصيانة وأخبار الشركة.",
    },
  },
};

export function isLocale(input: string): input is Locale {
  return locales.includes(input as Locale);
}

export function isRtl(locale: Locale) {
  return locale === "ar";
}
