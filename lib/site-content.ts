export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const companyInfo = {
  nameEn: "Marafeq Facility Operations",
  nameAr: "مرافق التشغيل",
  addressEn: "Al Jawharah, Al Khobar 34434, Kingdom of Saudi Arabia",
  addressAr: "الجوهرة، الخبر 34434، المملكة العربية السعودية",
  phone: "+966530555067",
  phoneDisplay: "+966 53 055 5067",
  phone2: "+966550890199",
  phone2Display: "+966 55 089 0199",
  email: "Hmohammed@malbnaa.com",
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
      description: "Integrated mechanical, electrical, and plumbing execution covering power, control, and technical infrastructure with strict safety standards.",
      detailsIntro: "Comprehensive execution, management, and maintenance of electrical and mechanical systems, engineered to ensure operational continuity and maximum safety for all facility types.",
      features: ["Power Distribution & Switchgear", "Generator Servicing & Backup Systems", "Control Panels & Automation", "Elevator & Escalator Maintenance", "Fire Alarm & Suppression Systems", "High-Efficiency Lighting Networks"]
    },
    ar: {
      title: "الأعمال الكهربائية والميكانيكية",
      description: "تنفيذ متكامل لأعمال الميكانيكا والكهرباء والبنية التحتية وفق أعلى معايير السلامة والجودة.",
      detailsIntro: "تنفيذ وإدارة وصيانة شاملة للأنظمة الكهربائية والميكانيكية، مصممة لضمان استمرارية التشغيل وأقصى درجات السلامة لجميع أنواع المرافق.",
      features: ["توزيع الطاقة والمفاتيح الكهربائية", "صيانة المولدات وأنظمة الدعم", "لوحات التحكم والأتمتة", "صيانة المصاعد والسلالم المتحركة", "أنظمة إنذار وإطفاء الحريق", "شبكات الإضاءة عالية الكفاءة"]
    },
  },
  {
    slug: "hvac",
    icon: "fan",
    image: "/assets/PLACEHOLDER_HVAC.png",
    en: {
      title: "HVAC Systems (Air-Conditioning & Cooling)",
      description: "Design, installation, and maintenance of efficient cooling and ventilation systems for residential and commercial spaces.",
      detailsIntro: "Advanced climate control solutions prioritizing energy efficiency, superior air quality, and optimal thermal comfort for residential, commercial, and industrial spaces.",
      features: ["Chiller & Boiler Maintenance", "Duct Cleaning & Sanitization", "Preventative Maintenance Contracts", "Smart Thermostat Calibration", "Industrial Ventilation Systems", "Air Purification & Filtration"]
    },
    ar: {
      title: "أنظمة التكييف والتبريد",
      description: "تصميم وتركيب وصيانة أنظمة تكييف وتهوية عالية الكفاءة للمشاريع السكنية والتجارية.",
      detailsIntro: "حلول متقدمة للتحكم في المناخ تعطي الأولوية لكفاءة الطاقة، وجودة الهواء الفائقة، والراحة الحرارية المثلى للمساحات السكنية والتجارية والصناعية.",
      features: ["صيانة المبردات والغلايات", "تنظيف وتعقيم مجاري الهواء", "عقود الصيانة الوقائية", "معايرة أجهزة تنظيم الحرارة الذكية", "أنظمة التهوية الصناعية", "تنقية وفلترة الهواء"]
    },
  },
  {
    slug: "plumbing",
    icon: "droplets",
    image: "/assets/Plumbing,Systems.png",
    en: {
      title: "Plumbing & Sanitary Systems",
      description: "Reliable piping, water supply, and drainage solutions for long-lasting building performance.",
      detailsIntro: "Robust sanitary and drainage solutions engineered for long-term reliability, optimal water management, and strict compliance with health and safety standards.",
      features: ["Water Supply & Piping Systems", "Drainage & Sewage Networks", "Sanitary Fixture Installation", "Leak Detection & Pressure Testing", "Pump Station Maintenance", "Water Tank Sterilization"]
    },
    ar: {
      title: "أنظمة السباكة والصرف الصحي",
      description: "حلول موثوقة لشبكات المياه والصرف والتمديدات الصحية لضمان استدامة وكفاءة المبنى.",
      detailsIntro: "حلول صحية وشبكات صرف قوية مصممة لضمان الموثوقية طويلة الأمد، والإدارة المثلى للمياه، والامتثال الصارم لمعايير الصحة والسلامة.",
      features: ["أنظمة إمداد المياه والأنابيب", "شبكات الصرف الصحي والمجاري", "تركيب الأجهزة الصحية", "كشف التسربات واختبار الضغط", "صيانة محطات الضخ", "تعقيم خزانات المياه"]
    },
  },
  {
    slug: "low-voltage",
    icon: "cable",
    image: "/assets/service-low-voltage.png",
    en: {
      title: "Low-Voltage Works",
      description: "Smart low-current systems including access control and structured communication cabling.",
      detailsIntro: "State-of-the-art low-current systems integrating smart communication, robust security, and seamless facility management protocols.",
      features: ["Access Control & Biometrics", "CCTV & Surveillance Networks", "Structured Communication Cabling", "Public Address & Voice Alarm", "Building Management Systems (BMS)", "Data Center Infrastructure"]
    },
    ar: {
      title: "أعمال الجهد المنخفض",
      description: "أنظمة ذكية تشمل التحكم بالدخول وتمديدات الاتصالات والشبكات للمباني الحديثة.",
      detailsIntro: "أحدث أنظمة التيار الخفيف التي تدمج اتصالات ذكية، أماناً قوياً، وبروتوكولات سلسة لإدارة المرافق.",
      features: ["التحكم بالدخول والأنظمة الحيوية", "شبكات المراقبة والكاميرات", "تمديدات كابلات الاتصالات", "الأنظمة الصوتية والإنذار", "أنظمة إدارة المباني (BMS)", "البنية التحتية لمراكز البيانات"]
    },
  },
  {
    slug: "cleaning",
    icon: "sparkles",
    image: "/assets/service-cleaning.png",
    en: {
      title: "Professional Cleaning for Industrial, Commercial & Residential",
      description: "Industrial, commercial, and residential cleaning operations delivered by trained teams and professional tools.",
      detailsIntro: "Daily or scheduled cleaning shaped around the needs of every facility.",
      features: ["General Cleaning", "Deep Cleaning", "Glass & Window Polishing", "Common-Area Cleaning", "Commercial Cleaning", "Scheduled Cleaning Plans"]
    },
    ar: {
      title: "خدمات تنظيف احترافية للاحتياجات الصناعية والتجارية والسكنية",
      description: "خدمات تنظيف صناعية وتجارية وسكنية بواسطة فرق مدربة ومعدات احترافية.",
      detailsIntro: "نظافة يومية أو دورية تناسب احتياج كل منشأة.",
      features: ["النظافة العامة", "التنظيف العميق", "تلميع الزجاج والنوافذ", "تنظيف المناطق المشتركة", "نظافة المنشآت التجارية", "خطط نظافة مجدولة"]
    },
  },
  {
    slug: "material-maintenance",
    icon: "hammer",
    image: "/assets/service-material.png",
    en: {
      title: "Material Maintenance",
      description: "Specialized care, restoration, and preservation of structural and interior materials to extend asset lifecycles.",
      detailsIntro: "Specialized care, restoration, and preservation of structural and interior materials to protect your investment and extend asset lifecycles.",
      features: ["Marble & Stone Restoration", "Metal & Steel Polishing", "Woodwork Preservation", "Epoxy Floor Coating", "Protective Surface Treatments", "Fabric & Upholstery Care"]
    },
    ar: {
      title: "العناية بالمواد وصيانتها",
      description: "عناية متخصصة وترميم وحفظ للمواد الهيكلية والداخلية لإطالة عمر الأصول.",
      detailsIntro: "عناية متخصصة وترميم وحفظ للمواد الهيكلية والداخلية لحماية استثمارك وإطالة عمر الأصول.",
      features: ["ترميم الرخام والحجر", "تلميع المعادن والصلب", "حفظ المصنوعات الخشبية", "طلاء الأرضيات الإيبوكسي", "معالجة الأسطح الواقية", "العناية بالأقمشة والمفروشات"]
    },
  },
  {
    slug: "industrial",
    icon: "factory",
    image: "/assets/service-industrial.jpg",
    en: {
      title: "Industrial Services",
      description: "Heavy-duty operational support and maintenance tailored for complex industrial environments and machinery.",
      detailsIntro: "Heavy-duty operational support and rigorous maintenance protocols tailored for complex industrial environments and heavy machinery.",
      features: ["Production Line Maintenance", "Heavy Equipment Servicing", "Industrial Safety Compliance", "Conveyor System Operations", "Pneumatic & Hydraulic Systems", "Shutdown & Turnaround Support"]
    },
    ar: {
      title: "الخدمات الصناعية",
      description: "دعم تشغيلي وصيانة مخصصة للبيئات الصناعية المعقدة والآليات الثقيلة.",
      detailsIntro: "دعم تشغيلي عالي التحمل وبروتوكولات صيانة دقيقة مصممة للبيئات الصناعية المعقدة والآليات الثقيلة.",
      features: ["صيانة خطوط الإنتاج", "خدمة المعدات الثقيلة", "الامتثال للسلامة الصناعية", "عمليات أنظمة الحزام الناقل", "الأنظمة الهوائية والهيدروليكية", "دعم فترات التوقف والإغلاق"]
    },
  },
] as const;

export const partners = [
  { name: "HEX", logo: "/assets/HEX.png" },
  { name: "Al Zamil", logo: "/assets/ALZAMEL.png" },
  { name: "Zamillight", logo: "/assets/alzamilight.png" },
  { name: "KDK", logo: "/assets/kdk.png" },
  { name: "Masdar", logo: "/assets/masdar.png" },
  { name: "Tredex", logo: "/assets/Tredex.png" },
  { name: "Ideal Standard", logo: "/assets/idealstandar.png" },
  { name: "hansgrohe", logo: "/assets/hansgrohe.png" },
  { name: "Entrecôte Café de Paris", logo: "/assets/entrecote.png" },
  { name: "Classico Diet", logo: "/assets/classico-diet.png" },
  { name: "Opinion", logo: "/assets/opinion.jpg" },
  { name: "COSMO", logo: "/assets/cosmo.png" },
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
  {
    titleEn: "Office Technical Maintenance",
    titleAr: "صيانة فنية لمكاتب إدارية",
    category: "electromechanical",
    image: "/assets/project-p1.jpg",
    client: "Corporate Office",
    location: "Al Khobar",
    completion: "2026-06",
    typeEn: "Technical maintenance",
    typeAr: "صيانة فنية",
  },
  {
    titleEn: "Professional Deep Cleaning — Office Space",
    titleAr: "تنظيف عميق احترافي — بيئة مكتبية",
    category: "cleaning",
    image: "/assets/project-p2.jpg",
    client: "Corporate Office",
    location: "Al Khobar",
    completion: "2026-06",
    typeEn: "Deep cleaning",
    typeAr: "تنظيف عميق",
  },
  {
    titleEn: "Team Deployment — Post-Construction Cleaning",
    titleAr: "انتشار الفريق — تنظيف ما بعد البناء",
    category: "cleaning",
    image: "/assets/project-p3.jpg",
    client: "Commercial Building",
    location: "Al Khobar",
    completion: "2026-05",
    typeEn: "Post-construction cleaning",
    typeAr: "تنظيف ما بعد البناء",
  },
  {
    titleEn: "Furniture & Equipment Cleaning",
    titleAr: "تنظيف الأثاث والمعدات",
    category: "cleaning",
    image: "/assets/project-p4.jpg",
    client: "Corporate Office",
    location: "Al Khobar",
    completion: "2026-06",
    typeEn: "Furniture cleaning",
    typeAr: "تنظيف الأثاث",
  },
  {
    titleEn: "Industrial Equipment Maintenance",
    titleAr: "صيانة المعدات الصناعية",
    category: "electromechanical",
    image: "/assets/project-p5.jpg",
    client: "Industrial Facility",
    location: "Jubail",
    completion: "2026-04",
    typeEn: "Industrial maintenance",
    typeAr: "صيانة صناعية",
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
    ctaProfile: "Download Profile",
    heroTitle: "Complete Solution, For Lasting Quality",
    heroSubtitle:
      "Professional construction, mechanical systems, electrical systems, plumbing, and facility services engineered for dependable long-term performance.",
    home: {
      serviceOverviewTitle: "Integrated Services",
      whyTitle: "Why Choose Us",
      featuredProjects: "Featured Projects",
      viewAllProjects: "View All Projects",
      partnersTitle: "Partners of Success",
      metrics: [
        { label: "Years of Experience", value: "15+" },
        { label: "Completed Projects", value: "320+" },
        { label: "Strategic Partners", value: "8+" },
        { label: "Cities Served", value: "12+" },
      ],
    },
    about: {
      title: "Integrated Solutions, One Reliable Team",
      intro:
        "Marafeq Facility Operations provides integrated solutions for operating, maintaining, and cleaning facilities and properties. We serve companies, restaurants, cafés, commercial and residential buildings, and owners associations through flexible contracts tailored to each site.",
      visionTitle: "Vision",
      vision:
        "A trusted partner in keeping facilities efficient, ready, and well maintained.",
      missionTitle: "Mission",
      mission:
        "Coordinated maintenance, cleaning, and property support through one accountable team.",
      promiseTitle: "Our Promise",
      promise:
        "One team, one contract, and clear follow-up — so you focus on your business, not your facility.",
      valuesTitle: "Core Values",
      values: ["Quality", "Reliability", "Accountability", "Flexibility"],
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
    ctaProfile: "تحميل الملف التعريفي",
    heroTitle: "حلول متكاملة، لجودة تدوم",
    heroSubtitle:
      "خدمات احترافية في الإنشاءات والأنظمة الميكانيكية والكهربائية والسباكة وإدارة المرافق لضمان كفاءة طويلة الأمد.",
    home: {
      serviceOverviewTitle: "خدمات متكاملة",
      whyTitle: "لماذا نحن",
      featuredProjects: "مشاريع مميزة",
      viewAllProjects: "عرض كل المشاريع",
      partnersTitle: "شركاء النجاح",
      metrics: [
        { label: "سنوات الخبرة", value: "+15" },
        { label: "مشروع مكتمل", value: "+320" },
        { label: "شريك استراتيجي", value: "+8" },
        { label: "مدينة مخدومة", value: "+12" },
      ],
    },
    about: {
      title: "من نحن",
      intro:
        "نقدّم حلولاً متكاملة لإدارة وتشغيل وصيانة المرافق والعقارات، تجمع الخدمات الفنية والنظافة ضمن جهة واحدة. نخدم الشركات والمطاعم والمقاهي والمباني السكنية والتجارية واتحادات الملاك من خلال عقود مرنة مصممة حسب احتياج كل موقع.",
      visionTitle: "الرؤية",
      vision: "أن نكون شريكاً موثوقاً في الحفاظ على كفاءة المرافق وجاهزيتها.",
      missionTitle: "الرسالة",
      mission:
        "تقديم صيانة ونظافة ودعم تشغيلي متكامل من خلال فريق واحد وتنسيق واضح.",
      promiseTitle: "وعدنا",
      promise: "فريق واحد، عقد واحد، ومتابعة واضحة — حتى تركّز على عملك لا على مرافقك.",
      valuesTitle: "القيم الأساسية",
      values: ["الجودة", "الاعتمادية", "المسؤولية", "المرونة"],
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
