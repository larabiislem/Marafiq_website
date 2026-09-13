export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const companyInfo = {
  nameEn: "Marafiq Pro",
  nameAr: "مرافق PRO",
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
    slug: "facility-operations",
    icon: "building",
    image: "/assets/team-training-landscape.jpg",
    en: {
      title: "Facility Operations",
      description: "Integrated operational management to elevate property readiness, commercial buildings, and daily rental units with the highest efficiency.",
      detailsIntro: "Comprehensive operation and preparation for apartments, daily rentals, and residential complexes.",
      features: [
        "Operation and preparation of apartments and daily rentals",
        "On-site supervision and hotel-style preparation for guests",
        "Daily operational follow-up ensuring service continuity",
        "Organizing maintenance and cleaning schedules per property needs"
      ]
    },
    ar: {
      title: "إدارة وتشغيل المرافق",
      description: "إدارة تشغيلية متكاملة لرفع جاهزية العقارات والمباني التجارية وتجهيز وحدات الإيجار اليومي بأعلى كفاءة.",
      detailsIntro: "إدارة متكاملة تشمل التجهيز الفندقي والإشراف המيداني.",
      features: [
        "تشغيل وتجهيز الشقق ووحدات الإيجار اليومي والمجمعات السكنية.",
        "الإشراف الميداني والتجهيز الفندقي لاستقبال الضيوف والمستأجرين.",
        "متابعة أعمال التشغيل اليومي وضمان استمرارية الخدمات في الموقع.",
        "تنظيم جداول الصيانة والنظافة وفق احتياج كل عقار."
      ]
    },
  },
  {
    slug: "electrical-plumbing",
    icon: "zap",
    image: "/assets/Plumbing,Systems.png",
    en: {
      title: "Electrical & Plumbing Services",
      description: "Comprehensive maintenance solutions to repair electrical faults, plumbing networks, and protect properties from leaks.",
      detailsIntro: "Expert resolution of electrical and plumbing issues ensuring safety and longevity.",
      features: [
        "Electrical Services: Maintenance of distribution boards, breakers, lighting systems, and load safety.",
        "Plumbing Services: Fixing clogs, water leaks, and maintaining pumps, heaters, and grease traps.",
        "General Maintenance: Replacing damaged parts and updating property connections periodically."
      ]
    },
    ar: {
      title: "صيانة الكهرباء والسباكة",
      description: "حلول صيانة شاملة لإصلاح أعطال الكهرباء وشبكات السباكة وحماية العقار من التسريبات.",
      detailsIntro: "حلول صيانة متكاملة لضمان سلامة المبنى وكفاءته.",
      features: [
        "الخدمات الكهربائية: صيانة لوحات التوزيع، القواطع، منظومات الإنارة، وتأمين سلامة الأحمال.",
        "خدمات السباكة: معالجة الانسدادات والتسربات المائية، وصيانة المضخات والسخانات ومصايد الدهون.",
        "الصيانة العامة: استبدال القطع التالفة وتحديث التمديدات الدورية للعقار."
      ]
    },
  },
  {
    slug: "cleaning",
    icon: "sparkles",
    image: "/assets/deep-cleaning-new.jpg",
    en: {
      title: "Cleaning Services",
      description: "Daily, periodic, and deep cleaning programs for facilities, restaurants, and properties based on structured work plans.",
      detailsIntro: "Customized cleaning protocols spanning general, deep, and periodic maintenance.",
      features: [
        "General and comprehensive cleaning for buildings, factories, and common areas.",
        "Deep cleaning for commercial kitchens and the commercial surroundings of restaurants and cafes.",
        "Periodic cleaning and preparation of apartments and properties (for daily rentals).",
        "Cleaning entrances, facades, and facilities according to scheduled plans."
      ]
    },
    ar: {
      title: "خدمات النظافة المتخصصة",
      description: "برامج نظافة يومية ودورية وعميقة للمرافق، المطاعم، والعقارات وفق خطط عمل وقوائم تحقق.",
      detailsIntro: "خدمات نظافة شاملة تلبي احتياجات مختلف المرافق والقطاعات.",
      features: [
        "النظافة العامة والشاملة للمباني والمصانع والمناطق المشتركة.",
        "التنظيف العميق للمطابخ والمحيط التجاري للمطاعم والمقاهي.",
        "تنظيف وتجهيز الشقق والعقارات بين فترة وأخرى (لصالح الإيجار اليومي).",
        "تنظيف المداخل والواجهات والمرافق وفق جداول دورية."
      ]
    },
  },
  {
    slug: "mep-installation",
    icon: "hard-hat",
    image: "/assets/Electromechanical Works.png",
    en: {
      title: "MEP Installation",
      description: "Establishment and routing of electrical and plumbing networks for new buildings and commercial expansions according to approved standards.",
      detailsIntro: "Professional mechanical, electrical, and plumbing installations for new construction and expansions.",
      features: [
        "Establishing and routing clean water and sewage networks for buildings.",
        "Electrical establishment, cable routing, and installation of distribution boards.",
        "Installation of pumps, tanks, and pressure systems.",
        "Comprehensive engineering testing and inspection prior to final handover."
      ]
    },
    ar: {
      title: "التأسيس والتنفيذ الفني",
      description: "تأسيس وتمديد شبكات الكهرباء والسباكة للمباني الجديدة والتوسعات التجارية وفق المعايير المعتمدة.",
      detailsIntro: "أعمال التأسيس الكهروميكانيكي للمباني والمشاريع الجديدة.",
      features: [
        "تأسيس وتمديد شبكات المياه الصافية والصرف الصحي للمباني.",
        "التأسيس الكهربائي وتمديد الكابلات وتركيب لوحات التوزيع.",
        "تركيب المضخات والخزانات وأنظمة الضغط.",
        "الفحص والاختبار الهندسي الشامل قبل التسليم النهائي."
      ]
    },
  },
  {
    slug: "equipment-maintenance",
    icon: "wrench",
    image: "/assets/industrial-inspection.jpg",
    en: {
      title: "Equipment Maintenance",
      description: "Maintenance and repair of professional equipment and devices for restaurants and cafes to minimize downtime and extend operational life.",
      detailsIntro: "Rapid preventive and corrective maintenance for commercial kitchen and cafe equipment.",
      features: [
        "Maintenance and repair of commercial kitchen equipment and cooking lines.",
        "Maintenance of cafe setups, beverage, and food preparation equipment.",
        "Inspection and repair of electromechanical and electrical faults in equipment.",
        "Fast preventive maintenance and provision of approved spare parts."
      ]
    },
    ar: {
      title: "صيانة وإصلاح المعدات",
      description: "صيانة وإصلاح المعدات والأجهزة الاحترافية للمطاعم والمقاهي لتقليل التوقفات وإطالة عمرها التشغيلي.",
      detailsIntro: "صيانة وقائية وتصحيحية لمعدات المطابخ والمقاهي لضمان استمرارية العمل.",
      features: [
        "صيانة وإصلاح معدات المطابخ التجارية وخطوط الطهي.",
        "صيانة تجهيزات المقاهي ومعدات تحضير المشروبات والأغذية.",
        "فحص وتعديل الأعطال الكهروميكانيكية والكهربائية للمعدات.",
        "الصيانة الوقائية السريعة وتوفير قطع الغيار المعتمدة."
      ]
    },
  },
  {
    slug: "parts-fabrication",
    icon: "hammer",
    image: "/assets/service-industrial.jpg",
    en: {
      title: "Parts Fabrication",
      description: "Engineering fabrication, lathing of spare parts, and pipe spooling to support factories and equipment, overcoming parts shortages.",
      detailsIntro: "Custom machining, fabrication, and technical support for industrial machinery.",
      features: [
        "Fabrication and lathing of spare parts and steel/metal components.",
        "Pre-assembly and fabrication of pipes and engineering joints (Pipe & Spool Fabrication).",
        "Re-forming and manufacturing of damaged or unavailable parts based on samples or drawings.",
        "Providing technical support to factories, workshops, and industrial equipment."
      ]
    },
    ar: {
      title: "التصنيع الهندسي وخرط القطع",
      description: "تصنيع وخرط قطع الغيار وتجميع الأنابيب مسبقاً لدعم المصانع والمعدات وتجاوز نقص القطع.",
      detailsIntro: "حلول هندسية متقدمة تشمل الخراطة وتصنيع القطع غير المتوفرة.",
      features: [
        "تصنيع وخرط قطع الغيار والمكونات الفولاذية والمعدنية.",
        "التجميع والتصنيع المسبق للأنابيب والوصلات الهندسية (Pipe & Spool Fabrication).",
        "إعادة تشكيل وتصنيع القطع التالفة أو غير المتوفرة حسب العينة أو الرسم.",
        "تقديم الدعم الفني للمصانع، الورش، والمعدات الصناعية."
      ]
    },
  },
  {
    slug: "hvac",
    icon: "fan",
    image: "/assets/PLACEHOLDER_HVAC.png",
    en: {
      title: "HVAC Services",
      description: "Preventive and corrective maintenance for central air conditioning and cooling systems to ensure efficiency and thermal stability.",
      detailsIntro: "Complete maintenance and cleaning solutions for all types of cooling and HVAC systems.",
      features: [
        "Maintenance of central and independent AC units (Central, Package, Split).",
        "Maintenance of cold rooms, freezers, and thermal equipment.",
        "Cleaning and maintenance of air ducts and purification filters."
      ]
    },
    ar: {
      title: "خدمات التكييف والتبريد",
      description: "صيانة وقائية وتصحيحية لأنظمة التكييف والتبريد المركزي لضمان الكفاءة والاستقرار الحراري.",
      detailsIntro: "صيانة متكاملة لكافة أنظمة التكييف لضمان بيئة مثالية ومستقرة.",
      features: [
        "صيانة وحدات التكييف المركزية والمستقلة (Central, Package, Split).",
        "صيانة غرف التبريد والجمادات والتجهيزات الحرارية.",
        "تنظيف وصيانة مجاري الهواء (Ducts) وفلاتر التنقية."
      ]
    },
  }
];



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
    image: "/assets/team-training-landscape.jpg",
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
    titleEn: "Commercial Façade & Exterior Cleaning",
    titleAr: "تنظيف الواجهات الخارجية والزجاج",
    category: "cleaning",
    image: "/assets/facade-cleaning.jpg",
    client: "Entrecôte QD",
    location: "Al Khobar",
    completion: "2026-08",
    typeEn: "Exterior cleaning",
    typeAr: "تنظيف خارجي",
  },
  {
    titleEn: "Team Deployment — Post-Construction Cleaning",
    titleAr: "انتشار الفريق — تنظيف ما بعد البناء",
    category: "cleaning",
    image: "/assets/deep-cleaning-new.jpg",
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
    typeEn: "Furniture cleaning",
    typeAr: "تنظيف الأثاث",
  },
  {
    titleEn: "Industrial Equipment Maintenance",
    titleAr: "صيانة المعدات الصناعية",
    category: "electromechanical",
    image: "/assets/industrial-inspection.jpg",
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
        { label: "Strategic Partners", value: "+12" },
        { label: "Cities Served", value: "12+" },
      ],
    },
    about: {
      title: "Integrated Solutions, One Reliable Team",
      intro:
        "Marafiq Pro provides integrated solutions for operating, maintaining, and cleaning facilities and properties. We serve companies, restaurants, cafés, commercial and residential buildings, and owners associations through flexible contracts tailored to each site.",
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
        { label: "شريك استراتيجي", value: "+12" },
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

export const sectors = [
  {
    titleEn: "Commercial & Hospitality",
    titleAr: "القطاع التجاري والضيافة",
    descriptionEn: "Maintenance and operational support solutions tailored for restaurants, cafes, and commercial establishments to ensure uninterrupted operation.",
    descriptionAr: "حلول صيانة ودعم تشغيلي مخصص للمطاعم، المقاهي، والمنشآت التجارية لضمان استمرارية التشغيل دون توقف.",
    image: "/assets/sector-commercial.jpg"
  },
  {
    titleEn: "Residential & HOA",
    titleAr: "القطاع السكني واتحادات الملاك",
    descriptionEn: "Management and operation of residential complexes, apartments, daily rental units, and providing maintenance and cleaning services for common areas.",
    descriptionAr: "إدارة وتشغيل المجمعات السكنية، الشقق، وحدات الإيجار اليومي، وتقديم خدمات الصيانة والنظافة للمناطق المشتركة.",
    image: "/assets/sector-residential.jpg"
  },
  {
    titleEn: "Administrative Buildings & Offices",
    titleAr: "المباني الإدارية والمكاتب",
    descriptionEn: "Periodic maintenance programs and integrated facility management for companies, cafes, and offices to raise the efficiency of the work environment.",
    descriptionAr: "برامج صيانة دورية وإدارة مرافق متكاملة للشركات والمقاهي والمكاتب لرفع كفاءة بيئة العمل.",
    image: "/assets/sector-offices.jpg"
  },
  {
    titleEn: "Industrial & Workshops",
    titleAr: "القطاع الصناعي والورش",
    descriptionEn: "Technical and engineering support for factories and workshops including spare parts manufacturing, metal turning, and heavy equipment maintenance.",
    descriptionAr: "دعم فني وهندسي للمصانع والورش يشمل تصنيع قطع الغيار، وخرط المعادن، وصيانة المعدات الثقيلة.",
    image: "/assets/sector-industrial.jpg"
  },
  {
    titleEn: "Exhibitions & Stores",
    titleAr: "المعارض والمتاجر",
    descriptionEn: "Maintenance of installations, technical foundations, electrical systems, and air conditioning for shops and commercial exhibitions.",
    descriptionAr: "صيانة التمديدات والتأسيسات الفنية والأنظمة الكهربائية والتكييف للمحلات والمعارض التجارية.",
    image: "/assets/sector-retail.jpg"
  }
];
