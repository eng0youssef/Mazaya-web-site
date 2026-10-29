export interface ModuleSubFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface SystemModule {
  id: string;
  slug: string;
  number: string;
  title: string;
  badge: string;
  shortDesc: string;
  heroHeadline: string;
  heroSubtitle: string;
  iconName: string;
  accentColor: string;
  keyBenefits: string[];
  subFeatures: ModuleSubFeature[];
  videoId?: string;
}

export type VideoCategory = 
  | "basic" 
  | "inventory" 
  | "purchases" 
  | "sales" 
  | "manufacturing" 
  | "treasury" 
  | "banking" 
  | "general"
  | "gym";

export interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  categoryLabel: string;
  youtubeId: string;
  duration: string;
  code?: string;
  thumbnailPlaceholderColor?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  companyName: string;
  commercialName: string;
  tagline: string;
  phones: {
    sales: string;
    support: string;
    formattedSales: string;
    formattedSupport: string;
  };
  whatsapp: {
    sales: string;
    salesMessage: string;
    support: string;
    supportMessage: string;
  };
  email: string;
  address: string;
  workingHours: string;
  remoteSupport: {
    anydeskUrl: string;
    teamviewerUrl: string;
  };
}

export const COMPANY_INFO: ContactInfo = {
  companyName: "شركة مزايا للبرمجيات",
  commercialName: "مزايا للبرمجيات (Mazaya for programming)",
  tagline: "شريكك من البداية للنهاية",
  phones: {
    sales: "+201000503370",
    support: "+201026535655",
    formattedSales: "01000 50 3370",
    formattedSupport: "010 2653 5655",
  },
  whatsapp: {
    sales: "201000503370",
    salesMessage: "أهلاً شركة مزايا، محتاج استفسر عن أسعار ومواصفات أنظمة مزايا البرمجية والنسخة التجريبية.",
    support: "201026535655",
    supportMessage: "أهلاً بالدعم الفني لشركة مزايا، محتاج مساعدة فنية أو استفسار بخصوص السيستم.",
  },
  email: "info@mazaya-soft.com",
  address: "خدماتنا تغطي كافة المحافظات المصرية والمملكة العربية السعودية",
  workingHours: "السبت إلى الخميس: 10:00 ص إلى 7:00 م ",
  remoteSupport: {
    anydeskUrl: "https://anydesk.com/ar/downloads",
    teamviewerUrl: "https://www.teamviewer.com/en/download/windows/",
  },
};

export const TRUST_METRICS = [
  { value: "+1200", label: "شركة ونشاط تجاري", subLabel: "يعتمدون على أنظمة مزايا يومياً" },
  { value: "100%", label: "استقرار ودقة متناهية", subLabel: "مفيش ولا غلطة في الحسابات" },
  { value: "8 أنظمة", label: "حلول تخصصية قطاعية", subLabel: "مصممة خصيصاً لكل مجال عمل" },
  { value: "مباشر", label: "دعم فني وتدريب", subLabel: "عن بعد وحضوري مع شروحات يوتيوب" },
];

export const SYSTEM_MODULES: SystemModule[] = [
  {
    id: "mazaya-max",
    slug: "mazaya-max",
    number: "01",
    title: "مزايا ماكس (Mazaya Max)",
    badge: "مزايا ماكس - نظامنا الأساسي المتكامل",
    shortDesc: "النظام الشامل لإدارة المبيعات والمشتريات وإدارة المخازن  والخزينة والحسابات.",
    heroHeadline: "المنظومة الأساسية الشاملة لإدارة المبيعات والمشتريات والمخازن",
    heroSubtitle: "الحل البرمجي الأقوى والأساسي من مزايا؛ يغطي الدورة  الكاملة للشركات التجارية والمعارض والمحلات؛ شاشات كاشير سريعة، كارت صنف لحظي، حسابات الموردين والعملاء، والربط مع الفاتورة الإلكترونية في السعودية ZATCA.",
    iconName: "ShoppingCart",
    accentColor: "#0A507A",
    videoId: "dQw4w9WgXcQ",
    keyBenefits: [
      "إدارة شاملة لدورة المبيعات (نقدي وآجل).",
      "متابعة دورة المشتريات وحسابات الموردين وتكلفة البضاعة بدقة.",
      "رقابة محكمة على المخازن، كارت صنف لحظي، وأذون الإضافة والصرف والتحويل.",
      "إدارة الخزينة والبنوك والشيكات وسندات القبض والصرف.",
      "تطبيق موبايل ذكي لمتابعة مبيعاتك وحركة الخزينة وإصدار الفواتير من أي مكان في العالم.",
      "تكامل رسمي مع منظومة الفاتورة والإيصال الإلكتروني لمصلحة الضرائب السعودية.",
    ],
    subFeatures: [
      {
        title: "شاشات كاشير سريعة ودعم كامل للباركود",
        description: "بيع فوري بالباركود وطباعة فواتير (80mm و 58mm و A4 و A5)متوافقة مع كافة أجهزة نقاط البيع واسكانر الباركود .",
        iconName: "ScanLine",
      },
      {
        title: "كارت الصنف ومتابعة الأرصدة",
        description: "متابعة حركة كل قطعة بالمخزن بالثانية، تنبيهات أوتوماتيكية عند وصول البضاعة لحد النواقص، وجرد وتسوية للمخزون.",
        iconName: "Boxes",
      },
      {
        title: "حسابات الموردين وتكلفة البضاعة الحقيقية",
        description: "تسجيل فواتير الشراء، حسب المصاريف، وجدولة سداد دفعات وشيكات الموردين بدقة.",
        iconName: "Truck",
      },
      {
        title: "كشوف حسابات العملاء والبيع الآجل",
        description: "تحديد سقف المديونية لكل عميل، إصدار كشف حساب تفصيلي ، وتنبيهات بمواعيد التحصيل وإرسالها عبر الواتساب.",
        iconName: "UserCheck",
      },
    ],
  },
  {
    id: "mazaya-glass",
    slug: "mazaya-glass",
    number: "02",
    title: "مزايا جلاس (Mazaya Glass)",
    badge: "مصانع وشركات وورش الزجاج",
    shortDesc: "نظام ذكي لحساب مقاسات الزجاج، تحسين التقطيع لتقليل الهدر، وحساب تكاليف الشطف والسنفرة والسيكوريت.",
    heroHeadline: "السيستم الأول المتخصص في حسابات ومقاسات الزجاج وتقليل الهدر",
    heroSubtitle: "صُمم مزايا جلاس بالتعاون مع كبرى مصانع وورش الزجاج في مصر؛ يتولى حساب المقاسات بالملم والمتر المربع، وحساب مصنعيات التشغيل (شطف، دبل، سيكوريت، ثقوب).",
    iconName: "Layers",
    accentColor: "#0A507A",
    videoId: "dQw4w9WgXcQ",
    keyBenefits: [
      
      "حساب تكلفة وتكسير المتر المربع وإضافة أسعار المصنعيات.",
      "إدارة طلبات تفصيل واجهات، الشاور روم، والمرايا الديكورية.",
      "متابعة بوليصات التشغيل والمراحل.",
      "ربط مخازن الألواح الخام ومخلفات الزجاج الصالحة لإعادة الاستخدام.",
    ],
    subFeatures: [
      {
        title: "تقطيع الألواح",
        description: "أدخل مقاسات الطلبيات المطلوبة بالمليمتر،مع استغلال البواقي وتقليل الهدر.",
        iconName: "Calculator",
      },
      {
        title: "تسعير خدمات ومصنعيات الزجاج التفصيلية",
        description: "تسعير تلقائي للشطف، السنفرة، تخريم المفصلات، السيكوريت، وحقن الغاز للزجاج الدبل بضغطة زر.",
        iconName: "Receipt",
      },
      {
        title: "إدارة عقود ومقايسات الواجهات والمشاريع",
        description: "إصدار عروض أسعار هندسية تفصيلية للمقاولين والعملاء مع جدول مواعيد التوريد والتركيب.",
        iconName: "FileSpreadsheet",
      },
      {
        title: "متابعة أوامر التشغيل ومراحل المصنع (Job Orders)",
        description: "تتبع كل طلبية من مرحلة التقطيع ← التغليف والتسليم للعميل مع باركود خاص لكل قطعة.",
        iconName: "Clock",
      },
    ],
  },
  {
    id: "mazaya-restaurant",
    slug: "mazaya-restaurant",
    number: "03",
    title: "مزايا ريستورانت (Mazaya Restaurant)",
    badge: "المطاعم والكافيهات",
    shortDesc: "شاشات تاتش سريعة، كابتن أوردر، إدارة الصالة والتيك أواي والدليفري من المخزن.",
    heroHeadline: "سرعة متناهية في خدمة الزبائن",
    heroSubtitle: "سواء بتدير مطعم ، كافيه، أو سلسلة فروع سريعة؛ مزايا ريستورانت بيوفرلك شاشات بيع لمس سريعة،  طابعات بونات المطبخ",
    iconName: "UtensilsCrossed",
    accentColor: "#F2C12E",
    videoId: "dQw4w9WgXcQ",
    keyBenefits: [
      "شاشات كاشير لمس (Touch POS) فائقة السرعة مع صور الأصناف والمجموعات.",
      " نقل الطلبات للمطبخ فورياً.",
      "توزيع تلقائي لبونات الأوردر على طابعات أقسام المطبخ والشواية والبار.",
      "نظام الدليفري الذكي بالبحث برقم هاتف العميل ومتابعة الطيارين وحساباتهم.",
      "إدارة الصالة والطاولات والدمج والتقسيم ونقل الشيكات بسهولة.",
    ],
    subFeatures: [
      {
        title: "حساب الأرباح",
        description: "تقدر تعرف مبيعاتك خلال فترة زمنية محددة (يوم - شهر - سنة) وتعرف ربح كل صنف والربح من الدلفيري قد ايه و من التيك أوي و الصالة.",
        iconName: "Calculator",
      },
      {
        title: "إدارة الصالة والترابيزات والتيك أواي والدليفري",
        description: "وإدارة كاملة لطلبات التوصيل والطيارين وترابيزات الصالة.",
        iconName: "Clock",
      },
      {
        title: "شاشات عرض المطبخ وبونات التحضير",
        description: "طباعة بون التحضير في المطبخ فور تسجيل الأوردر مع ملاحظات العميل الخاصة (بدون بصل، زيادة صوص) لضمان دقة التنفيذ.",
        iconName: "Printer",
      },
      {
        title: "تقفيل ورديات الكاشير وتقارير المبيعات بالدقيقة",
        description: "جرد الدرج وتقفيل الوردية لكل كاشير مع حصر مبيعات الصالة والدليفري وخدمة التوصيل وتطبيقات التوصيل الخارجية.",
        iconName: "Receipt",
      },
    ],
  },
  {
    id: "mazaya-school",
    slug: "mazaya-school",
    number: "04",
    title: "مزايا سكول (Mazaya School)",
    badge: "المدارس والمؤسسات التعليمية",
    shortDesc: "إدارة شؤون الطلاب، تحصيل المصروفات والأقساط المدرسية، شيت الكنترول والدرجات، وحسابات الباصات والمرتبات.",
    heroHeadline: "المنظومة الذكية لإدارة المدارس والمنشآت التعليمية وحسابات المصروفات",
    heroSubtitle: "حل رقمي شامل للمدارس الخاصة والتجريبية والدولية؛ يجمع بين الدقة المحاسبية في تحصيل المصروفات المدرسية والأقساط، وإدارة شؤون الطلاب، الكنترول المدرسي، واشتراكات خطوط الباصات.",
    iconName: "GraduationCap",
    accentColor: "#0A507A",
    videoId: "dQw4w9WgXcQ",
    keyBenefits: [
      "إدارة ملفات الطلاب وقيد التلاميذ وتوزيع الفصول والمراحل الدراسية.",
      "جدولة المصروفات الدراسية وأقساط أولياء الأمور وإصدار إيصالات السداد.",
      "تنبيهات تلقائية لأولياء الأمور بمواعيد استحقاق الأقساط عبر الواتساب.",
      "كنترول الامتحانات، رصد الدرجات، واستخراج الشهادات المدرسية الرسمية.",
      "إدارة خطوط باصات المدرسة والاشتراكات ومصروفات الصيانة والوقود.",
    ],
    subFeatures: [
      {
        title: "جدولة أقساط المصروفات المدرسية وتحصيلها",
        description: "تحديد رسوم كل صف دراسي، تقسيم المصروفات على أقساط محددة التواريخ، وإصدار إيصالات قبض مميكنة مع متابعة المتأخرات بدقة.",
        iconName: "FileCheck2",
      },
      {
        title: "شؤون الطلاب وقيد وتوزيع الفصول",
        description: "حفظ بيانات الطالب الشخصية والصحية، مستندات القبول، الغياب والحضور اليومي، وسجل السلوك بملف إلكتروني موحد.",
        iconName: "Users",
      },
      {
        title: "كنترول الامتحانات ورصد الدرجات والشهادات",
        description: "رصد درجات أعمال السنة والامتحانات النصفية والنهائية.",
        iconName: "FileText",
      },
      {
        title: "إدارة اشتراكات الباصات والأنشطة والزي المدرسي",
        description: "تسكين الطلاب على خطوط وسيارات المدرسة، متابعة اشتراكات الباص والزي المدرسي والكتب مع تقارير مالية مخصصة لكل بند.",
        iconName: "Truck",
      },
    ],
  },
  {
    id: "mazaya-realty",
    slug: "mazaya-realty",
    number: "05",
    title: "مزايا ريلتي (Mazaya Realty)",
    badge: "إدارة العقارات والاستثمار والمقاولات",
    shortDesc: "إدارة الوحدات والأبراج، جداول أقساط العملاء، محفظة الشيكات، عقود الإيجار والبيع، ومستخلصات المقاولين.",
    heroHeadline: "السيطرة الكاملة على الوحدات العقارية والأقساط والشيكات والمقاولين",
    heroSubtitle: "مخصص لشركات التطوير والتسويق العقاري وإدارة الأملاك؛ متابعة حالة كل وحدة (متاحة، محجوزة، مباعة)، جدولة أقساط العملاء ومواعيد صرف الشيكات، وإدارة عقود الإيجار ومستخلصات التشطيب.",
    iconName: "Building2",
    accentColor: "#F2C12E",
    videoId: "dQw4w9WgXcQ",
    keyBenefits: [
      "مخطط بصري تفاعلي للمشاريع والأبراج وحالة كل وحدة وشقة ومحل.",
      "جدولة أقساط البيع الشهرية والربع سنوية والسنوية بدقة تامة.",
      "محفظة الشيكات البنكية، تتبع الصرف والتحصيل، وتنبيهات مواعيد الاستحقاق.",
      "إدارة عقود الإيجار والتحصيل الدوري وفواتير الصيانة والخدمات.",
      "حساب مستخلصات مقاولي الباطن ونسب التنفيذ وعمولات البروكرز (Brokers).",
    ],
    subFeatures: [
      {
        title: "كارت الوحدة العقارية ومخطط المشروع",
        description: "تسجيل بيانات الوحدة (المساحة، الدور، عدد الغرف، السعر الإجمالي، كود الوحدة) وحالتها اللحظية لمنع تكرار حجز الوحدة لأكثر من عميل.",
        iconName: "Building2",
      },
      {
        title: "جدولة الأقساط ومحفظة الشيكات البنكية",
        description: "حساب جدول دفعات العميل مع دفعة المقدم والاستلام ووديعة الصيانة، مع تقارير ذكية بالشيكات المستحقة التحصيل خلال الشهر.",
        iconName: "CreditCard",
      },
      {
        title: "عقود الإيجار وتحصيل فواتير الصيانة الدورية",
        description: "تنبيهات قبل انتهاء مدة الإيجار للتجديد أو الإخلاء، وتحصيل فواتير استهلاك الكهرباء والمياه وصيانة المصاعد من المستأجرين.",
        iconName: "FileCheck2",
      },
      {
        title: "حسابات المسوقين والوسطاء (Broker Commissions)",
        description: "حساب عمولات مبيعات البروكرز وفريق المبيعات الداخلي تلقائياً بعد تحصيل دفعة الحجز أو التعاقد مع تقارير أداء المبيعات.",
        iconName: "Users",
      },
    ],
  },
  {
    id: "mazaya-gym",
    slug: "mazaya-gym",
    number: "06",
    title: "مزايا جيم (Mazaya Gym)",
    badge: "الجيم والأندية الصحية والرياضية",
    shortDesc: "إدارة اشتراكات الأعضاء، الربط مع بوابات الدخول والبصمة، باقات التدريب الخاص (PT)، وبار المكملات والمشروبات.",
    heroHeadline: "إدارة متطورة لاشتراكات الجيم وبوابات الدخول ومبيعات المكملات",
    heroSubtitle: "السيستم الأفضل للصالات الرياضية والأندية الصحية؛ تسجيل الاشتراكات بمختلف الباقات، ربط مباشر مع بوابات الدخول الإلكترونية وأجهزة البصمة لمنع دخول غير المسددين، مع متابعة باقات الـ PT ومبيعات بار البروتين.",
    iconName: "Dumbbell",
    accentColor: "#0A507A",
    videoId: "dQw4w9WgXcQ",
    keyBenefits: [
      "تسجيل اشتراكات الأعضاء بمختلف الباقات (شهر، 3 شهور، نصف سنوي، سنوي).",
      "ربط مباشر مع بوابات الدخول (Turnstile) بالبصمة أو الكارت أو QR Code.",
      "إدارة تجميد الاشتراكات (Freeze) وتحديد الفترات المسموحة لكل باقة.",
      "متابعة جلسات التدريب الخاص (Personal Trainer) ونسب عمولات المدربين.",
      "نقطة بيع كاشير سريعة لبار المكملات الغذائية والمشروبات والملابس الرياضية.",
    ],
    subFeatures: [
      {
        title: "الربط مع بوابات الدخول الإلكترونية (Access Control)",
        description: "تفتح البوابة تلقائياً للمشترك صاحب الاشتراك الساري فقط؛ وتصدر تنبيهاً فورياً وتمنع الدخول في حال انتهاء الاشتراك أو تعليقه.",
        iconName: "Lock",
      },
      {
        title: "إدارة التجميد (Freeze) وتجديد الاشتراكات",
        description: "تسجيل فترات إيقاف الاشتراك المؤقتة مع تمديد تاريخ الانتهاء تلقائياً، وإرسال رسائل تذكير للتجديد عبر الواتساب قبل موعد الانتهاء.",
        iconName: "CalendarClock",
      },
      {
        title: "باقات التدريب الخاص (PT) وعمولات الكباتن",
        description: "حصر عدد الجلسات المتبقية لكل عضو مع كابتن التدريب، وتسجيل الحضور، وحساب مستحقات المدربين المالية تلقائياً.",
        iconName: "Users",
      },
      {
        title: "كاشير ومخزن المكملات الغذائية وبار العصائر",
        description: "شاشة بيع سريعة للمكملات والوجبات الصحية وعبوات المياه مع باركود الصنف وخصم الكميات من المخزن فورياً.",
        iconName: "ShoppingCart",
      },
    ],
  },
  {
    id: "mazaya-resorts",
    slug: "mazaya-resorts",
    number: "07",
    title: "مزايا للمنتجعات السياحية (Mazaya Resorts)",
    badge: "القرى والمنتجعات والفنادق",
    shortDesc: "حجز الغرف والشاليهات، دورة النزيل والنزول، فواتير الخدمات الإضافية، ونقاط بيع الأنشطة الترفيهية والمطاعم.",
    heroHeadline: "إدارة فندقية راقية لحجز حمام السباحة والغرف وإسعاد النزلاء",
    heroSubtitle: "وإداري متكامل للقرى والمنتجعات السياحية.",
    iconName: "Palmtree",
    accentColor: "#F2C12E",
    videoId: "dQw4w9WgXcQ",
    keyBenefits: [
      "تقدر تشتغل على الموبايل وتعمل حجوزات حتى لو مفيش نت.",
      "إجراءات تسكين وخروج النزلاء سريعة وسلسة مع طباعة بطاقات الإقامة.",
      "ترحيل استهلاك النزيل في المطاعم والأنشطة الترفيهية إلى شيك الغرفة الموحد.",
      "تحديد نوع الحجز.",
      "تقارير نسب الإشغال اليومية والإيرادات ومتوسط سعر الليلة.",
    ],
    subFeatures: [
      {
        title: "شاشة الحجوزات والتسكين والشاغر والمشغول",
        description: "رؤية شاملة لكافة وحدات المنتجع ومواعيد الوصول .",
        iconName: "Calendar",
      },
      {
        title: "فاتورة النزيل الشاملة",
        description: "تجميع كافة طلبات الإقامة والمأكولات والمشروبات والأنشطة في فاتورة موحدة.",
        iconName: "Receipt",
      },
      {
        title: "متاح على الموبايل أبلكيشن",
        description: "تقدر تتابع كل شغلك عن طريق الموبايل وتعمل حجوزات حتى لو مفيش نت.",
        iconName: "UtensilsCrossed",
      },
      {
        title: "مزامنة فورية",
        description: "بمجرد ما النت يرجع على الموبايل يتم عمل مزامنة ومطابقة على الكمبيوتر السيرفر.",
        iconName: "Sparkles",
      },
    ],
  },
  {
    id: "mazaya-moto",
    slug: "mazaya-moto",
    number: "08",
    title: "مزايا موتو (Mazaya Moto)",
    badge: "معارض الموتوسيكلات والسيارات وقطع الغيار",
    shortDesc: "تتبع أرقام الشاسيه والموتور، البيع نقداً وبالتقسيط، كشف أقساط العميل والكمبيالات، وإدارة قطع الغيار وورش الصيانة.",
    heroHeadline: "السيستم المتكامل لمعارض الموتوسيكلات والسيارات والتقسيط وقطع الغيار",
    heroSubtitle: "صُمم خصيصاً لتجار ومعارض الموتوسيكلات، التروسيكلات، السكوتر، والسيارات؛ تتبع دقيق لكل مركبة برقم الشاسيه ورقم الموتور، إدارة بيع الكاش والتقسيط المباشر مع استخراج الكمبيالات وإيصالات الأمانة، ومخازن قطع الغيار.",
    iconName: "Bike",
    accentColor: "#0A507A",
    videoId: "dQw4w9WgXcQ",
    keyBenefits: [
      "تسجيل المركبة برقم الشاسيه، رقم الموتور، اللون، الموديل، وبيانات الإفراج الجمركي.",
      "نظام بيع بالتقسيط المباشر مع حساب الفائدة وجدولة الأقساط الشهرية.",
      "طباعة عقود البيع.",
      "كشف حساب تفصيلي للعميل.",
      "إدارة مخزن قطع الغيار بأسماء الموديلات، وورشة الصيانة وأوامر الشغل.",
    ],
    subFeatures: [
      {
        title: "تتبع أرقام الشاسيه والموتور وحركة المركبات",
        description: "تتبع مسار كل موتوسيكل أو سيارة من فاتورة المورد وحتى تسليمها للمشتري مع منع تكرار أو خطأ تسجيل رقم الشاسيه.",
        iconName: "Barcode",
      },
      {
        title: "فحص الموتوسيكل او السيارة",
        description: "تقدر تعمل فحص كامل وشامل للموتوسيكل أو السيارة و تطبعه وتسلمه للعميل.",
        iconName: "Calculator",
      },
      {
        title: "مخازن قطع الغيار وتوافقها مع الموديلات",
        description: "تكويد آلاف قطع الغيار بالباركود وربط كل قطعة بالموديلات المتوافقة معها لتسهيل عمل موظف المبيعات وسرعة خدمة الزبائن.",
        iconName: "Boxes",
      },
      {
        title: "أوامر شغل الصيانة والإصلاح (Job Cards)",
        description: "فتح كارت صيانة للمركبة، تسجيل شكوى العميل، صرف قطع الغيار من المخزن، إصدار فاتورة الصيانة.",
        iconName: "Clock",
      },
    ],
  },
];

export const VIDEO_CATEGORIES = [
  { id: "all", label: "الكل (شروحات مزايا ماكس)" },
  { id: "basic", label: "1- البيانات الأساسية" },
  { id: "inventory", label: "2- المخازن" },
  { id: "purchases", label: "3- المشتريات" },
  { id: "sales", label: "4- المبيعات" },
  { id: "manufacturing", label: "5- التصنيع" },
  { id: "treasury", label: "6- عمليات الخزينة" },
  { id: "banking", label: "7- البنوك والشيكات" },
  { id: "general", label: "8- عام وإعدادات" },
  { id: "gym", label: "نظام مزايا جيم 🏋️" },
];

export const VIDEO_TUTORIALS: VideoTutorial[] = [
  // 1- البيانات الأساسية (Basic Data)
  {
    id: "v-eH4NrtZAxvw",
    code: "A01",
    title: "A01 - بيانات الشركة",
    description: "شرح كيفية إدخال وتعديل بيانات شركتك الأساسية والشعار وأرقام التسجيل الضريبي في مزايا ماكس.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "eH4NrtZAxvw",
    duration: "01:53 دقيقة",
  },
  {
    id: "v-4KGhzFT4hhQ",
    code: "A02",
    title: "A02 - بيانات الفروع",
    description: "طريقة تعريف وتكويد الفروع ومنافذ البيع وربطها بنظام مزايا ماكس .",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "4KGhzFT4hhQ",
    duration: "03:55 دقيقة",
  },
  {
    id: "v-FSWs9fthlqk",
    code: "A03",
    title: "A03 - بيانات المخازن",
    description: "كيفية إضافة المخازن الرئيسية والفرعية وسيارات المناديب.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "FSWs9fthlqk",
    duration: "02:13 دقيقة",
  },
  {
    id: "v-Hr8lS1Ps--g",
    code: "A04",
    title: "A04 - مجموعات الأصناف",
    description: "تنظيم شجرة وتصنيفات المنتجات إلى مجموعات رئيسية وفرعية لتسهيل الجرد والبحث.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "Hr8lS1Ps--g",
    duration: "02:45 دقيقة",
  },
  {
    id: "v-IEkaqbK2OIU",
    code: "A05",
    title: "A05 - مجموعات الكوبونات",
    description: "إنشاء مجموعات كوبونات الخصم وقسائم الشراء والعروض الترويجية في برنامج مزايا ماكس.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "IEkaqbK2OIU",
    duration: "08:23 دقيقة",
  },
  {
    id: "v-7o0HjrJjkjU",
    code: "A06",
    title: "A06 - وحدات الأصناف",
    description: "تعريف وحدات القياس (قطعة، دستة، كرتونة، كيلو، متر) .",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "7o0HjrJjkjU",
    duration: "02:51 دقيقة",
  },
  {
    id: "v-JWoxyVqdMSw",
    code: "A07",
    title: "A07 - بيانات الأصناف",
    description: "شرح تفصيلي شامل لإدخال الصنف بالباركود وسعر الشراء وسعر الجملة والقطاعي وحد الطلب.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "JWoxyVqdMSw",
    duration: "22:55 دقيقة",
  },
  {
    id: "v-lbT0U4lJ2jk",
    code: "A08",
    title: "A08 - بيانات المدن والمناطق",
    description: "تسجيل المحافظات والمدن ومناطق التوزيع لربطها بالعملاء ومسارات المناديب.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "lbT0U4lJ2jk",
    duration: "02:27 دقيقة",
  },
  {
    id: "v-QT4EYRrhfds",
    code: "A09",
    title: "A09 - بيانات المناديب",
    description: "تسجيل بيانات مناديب المبيعات والتوزيع .",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "QT4EYRrhfds",
    duration: "02:39 دقيقة",
  },
  {
    id: "v-80HYaw-Dc54",
    code: "A10",
    title: "A10 - بيانات العملاء",
    description: "إضافة العملاء، تسجيل أرقام الموبايل والحد الائتماني المسموح به.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "80HYaw-Dc54",
    duration: "07:31 دقيقة",
  },
  {
    id: "v-efUELDHNUPw",
    code: "A11",
    title: "A11 - بيانات الموردين",
    description: "تسجيل الموردين وبيانات الاتصال ورصيد أول المدة.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "efUELDHNUPw",
    duration: "03:31 دقيقة",
  },
  {
    id: "v-0QrlzUd41j0",
    code: "A12",
    title: "A12 - بيانات المصروفات",
    description: "شجرة بنود المصروفات العامة والإدارية والتشغيلية في برنامج مزايا ماكس.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "0QrlzUd41j0",
    duration: "04:32 دقيقة",
  },
  {
    id: "v-KMvO_ssS5PE",
    code: "A13",
    title: "A13 - بيانات البنوك والخزائن",
    description: "إضافة الخزينة الرئيسية وخزن الفروع والحسابات البنكية الجارية في السيستم.",
    category: "basic",
    categoryLabel: "1- البيانات الأساسية",
    youtubeId: "KMvO_ssS5PE",
    duration: "07:36 دقيقة",
  },

  // 2- المخازن (Inventory)
  {
    id: "v-7Po1VMhbgAg",
    code: "B01",
    title: "B01 - أذون الإضافة للمخزن",
    description: "شرح إصدار إذن إضافة بضاعة إلى المخزن .",
    category: "inventory",
    categoryLabel: "2- المخازن",
    youtubeId: "7Po1VMhbgAg",
    duration: "15:30 دقيقة",
  },
  {
    id: "v-GIERfAe-0o8",
    code: "B02",
    title: "B02 - أذون الصرف للمخزن",
    description: "طريقة صرف البضاعة من المخزن للاستهلاك الداخلي باعتماد أمين المخزن.",
    category: "inventory",
    categoryLabel: "2- المخازن",
    youtubeId: "GIERfAe-0o8",
    duration: "15:30 دقيقة",
  },
  {
    id: "v-As-IYX5WWLE",
    code: "B03",
    title: "B03 - أذون التحويل بين المخازن",
    description: "خطوات تحويل الأصناف بين المخزن الرئيسي ومخازن الفروع وسيارات التوزيع .",
    category: "inventory",
    categoryLabel: "2- المخازن",
    youtubeId: "As-IYX5WWLE",
    duration: "15:30 دقيقة",
  },
  {
    id: "v-4VerzGNEELM",
    code: "B04",
    title: "B04 - أذون التسوية للمخزن والجرد",
    description: "معالجة فروق الجرد الفعلي والدفتري وإصدار أذون التسوية بالزيادة أو العجز في مزايا ماكس.",
    category: "inventory",
    categoryLabel: "2- المخازن",
    youtubeId: "4VerzGNEELM",
    duration: "15:30 دقيقة",
  },

  // 3- المشتريات (Purchases)
  {
    id: "v-M2CH59FEUNE",
    code: "C01",
    title: "C01 - فواتير المشتريات",
    description: "شرح تسجيل فواتير الشراء من الموردين، احتساب ضريبة القيمة المضافة، والترحيل التلقائي للمخازن.",
    category: "purchases",
    categoryLabel: "3- المشتريات",
    youtubeId: "M2CH59FEUNE",
    duration: "18:38 دقيقة",
  },
  {
    id: "v-rPhm1Rwzt8c",
    code: "C02",
    title: "C02 - مرتجع المشتريات",
    description: "كيفية رد البضاعة للمورد وخصم قيمتها من رصيد المورد وتحديث كميات المخزن أوتوماتيكياً.",
    category: "purchases",
    categoryLabel: "3- المشتريات",
    youtubeId: "rPhm1Rwzt8c",
    duration: "05:15 دقيقة",
  },
  {
    id: "v-T9wGEPRl3To",
    code: "C05",
    title: "C05 - كوبونات الموردين",
    description: "التعامل مع كوبونات الموردين على فواتير المشتريات في مزايا ماكس.",
    category: "purchases",
    categoryLabel: "3- المشتريات",
    youtubeId: "T9wGEPRl3To",
    duration: "08:57 دقيقة",
  },

  // 4- المبيعات (Sales & POS)
  {
    id: "v-HMh0sv441YI",
    code: "D01",
    title: "D01 - شاشة المبيعات والكاشير",
    description: "شرح شامل وتفصيلي لشاشة البيع السريعة، استخدام الباركود، الخصومات، والطباعة الحرارية.",
    category: "sales",
    categoryLabel: "4- المبيعات",
    youtubeId: "HMh0sv441YI",
    duration: "31:01 دقيقة",
  },
  {
    id: "v-nIarsfrHZEs",
    code: "D02",
    title: "D02 - مرتجع المبيعات",
    description: "طريقة إرجاع صنف من العميل برقم الفاتورة الأصلية واسترداد النقدية أو ترحيلها على حسابه.",
    category: "sales",
    categoryLabel: "4- المبيعات",
    youtubeId: "nIarsfrHZEs",
    duration: "07:44 دقيقة",
  },
  {
    id: "v-eNksoSMXRaI",
    code: "D05",
    title: "D05 - كوبونات العملاء والمناديب",
    description: "تطبيق كوبونات المبيعات للعملاء والمناديب أثناء إصدار الفواتير.",
    category: "sales",
    categoryLabel: "4- المبيعات",
    youtubeId: "eNksoSMXRaI",
    duration: "07:50 دقيقة",
  },
  {
    id: "v-isQLy0h3zSE",
    code: "D07",
    title: "D07 - عروض الأسعار (Quotations)",
    description: "إصدار عروض أسعار رسمية للعملاء وإمكانية تحويل عرض السعر إلى فاتورة مبيعات بضغطة زر.",
    category: "sales",
    categoryLabel: "4- المبيعات",
    youtubeId: "isQLy0h3zSE",
    duration: "04:32 دقيقة",
  },
  {
    id: "v-cVLNkwwez-U",
    code: "D09",
    title: "D09 - بحث الأسعار السريع",
    description: "خاصية البحث اللحظي عن أسعار الأصناف بالباركود أو الاسم لمعرفة سعر القطاعي والجملة فوراً.",
    category: "sales",
    categoryLabel: "4- المبيعات",
    youtubeId: "cVLNkwwez-U",
    duration: "09:09 دقيقة",
  },
  {
    id: "v-JwWkRmTSRW0",
    code: "D10",
    title: "D10 - معادلة تعديل الأسعار الجماعية",
    description: "تعديل أسعار بيع مجموعة أصناف بالكامل بنسبة مئوية أو قيمة ثابتة بضغطة زر واحدة.",
    category: "sales",
    categoryLabel: "4- المبيعات",
    youtubeId: "JwWkRmTSRW0",
    duration: "12:25 دقيقة",
  },
  {
    id: "v-D_neGmohWU4",
    code: "D11",
    title: "البيع بالتقسيط في مزايا ماكس",
    description: "إدارة البيع بنظام الأقساط وجدولة الدفعات وطباعة الكمبيالات ومتابعة المتأخرات.",
    category: "sales",
    categoryLabel: "4- المبيعات",
    youtubeId: "D_neGmohWU4",
    duration: "23:24 دقيقة",
  },

  // 5- التصنيع (Manufacturing)
  {
    id: "v-LiFoLHeyJIM",
    code: "E01",
    title: "E01 - أوامر التصنيع والتشغيل",
    description: "شرح دورة التصنيع: سحب المواد الخام من المخزن، تشغيل أمر الإنتاج، وإضافة المنتج المصنع للمخزن.",
    category: "manufacturing",
    categoryLabel: "5- التصنيع",
    youtubeId: "LiFoLHeyJIM",
    duration: "08:32 دقيقة",
  },

  // 6- عمليات الخزينة (Treasury Operations)
  {
    id: "v-KYlzE8Vxn1s",
    code: "F01",
    title: "F01 - استلام نقدية وشيكات (تحصيل من العملاء)",
    description: "إصدار التحصيلات من العملاء وترحيلها أوتوماتيكياً للخزنة .",
    category: "treasury",
    categoryLabel: "6- عمليات الخزينة",
    youtubeId: "KYlzE8Vxn1s",
    duration: "07:43 دقيقة",
  },
  {
    id: "v-otAjyPSOCBM",
    code: "F02",
    title: "F02 - صرف نقدية وشيكات (سداد الموردين)",
    description: "إصدار سندات الصرف للموردين وتسديد الدفعات النقدية والشيكات البنكية.",
    category: "treasury",
    categoryLabel: "6- عمليات الخزينة",
    youtubeId: "otAjyPSOCBM",
    duration: "09:57 دقيقة",
  },
  {
    id: "v-Ohlsdw32AM",
    code: "F03",
    title: "F03 - تسجيل المصروفات الإدارية والتشغيلية",
    description: "إثبات مصاريف الإيجارات، الكهرباء، المرتبات، والصيانة وترحيلها للخزينة.",
    category: "treasury",
    categoryLabel: "6- عمليات الخزينة",
    youtubeId: "_Ohlsdw32AM",
    duration: "03:45 دقيقة",
  },
  {
    id: "v-WdfjAmEvPxw",
    code: "F04",
    title: "F04 - تحويلات النقدية بين الخزائن والبنوك",
    description: "طريقة إيداع الكاش من الخزينة في البنك أو التحويل بين خزن الفروع .",
    category: "treasury",
    categoryLabel: "6- عمليات الخزينة",
    youtubeId: "WdfjAmEvPxw",
    duration: "02:44 دقيقة",
  },
  {
    id: "v-eC1xX1LHAlA",
    code: "F05",
    title: "F05 - إيداع وسحب نقدية (التسويات النقدية)",
    description: "معالجة الفروق والتسويات النقدية في الدرج اليومي وإثباتها بسندات رسمية.",
    category: "treasury",
    categoryLabel: "6- عمليات الخزينة",
    youtubeId: "eC1xX1LHAlA",
    duration: "02:28 دقيقة",
  },

  // 7- البنوك والشيكات (Banks & Cheques)
  {
    id: "v-k42wKjMkKqE",
    code: "G01",
    title: "G01 - شيكات العملاء الواردة",
    description: "محفظة الشيكات الواردة، مواعيد الاستحقاق، التحصيل في البنك، وتتبع الشيك المرتد.",
    category: "banking",
    categoryLabel: "7- البنوك والشيكات",
    youtubeId: "k42wKjMkKqE",
    duration: "13:02 دقيقة",
  },
  {
    id: "v-rxNSUgxqoig",
    code: "G02",
    title: "G02 - شيكات الموردين الصادرة",
    description: "تتبع الشيكات الصادرة للموردين، مواعيد الصرف من الحساب البنكي، والتسوية المالية.",
    category: "banking",
    categoryLabel: "7- البنوك والشيكات",
    youtubeId: "rxNSUgxqoig",
    duration: "09:44 دقيقة",
  },
  {
    id: "v-sjlqLLstLS8",
    code: "G03",
    title: "G03 - شيكات المصروفات",
    description: "إصدار شيكات بنكية لسداد المصروفات الاستثمارية أو العقود الآجلة.",
    category: "banking",
    categoryLabel: "7- البنوك والشيكات",
    youtubeId: "sjlqLLstLS8",
    duration: "03:19 دقيقة",
  },

  // 8- عام وإعدادات (General & Setup)
  {
    id: "v-X0mdQtelSdk",
    code: "i00",
    title: "نظرة عامة على برنامج مزايا ماكس الجديد",
    description: "جولة سريعة ومميزات الواجهة العصرية لنظام مزايا ماكس لإدارة الأعمال التجارية.",
    category: "general",
    categoryLabel: "8- عام وإعدادات",
    youtubeId: "X0mdQtelSdk",
    duration: "03:37 دقيقة",
  },
  {
    id: "v-2-NKPSTjZZo",
    code: "i01",
    title: "i01 - إعدادات الاتصال بالسيرفر والشبكة",
    description: "كيفية ضبط إعدادات الاتصال بالسيرفر المحلي أو السحابي وتشغيل الأجهزة على شبكة واحدة.",
    category: "general",
    categoryLabel: "8- عام وإعدادات",
    youtubeId: "2-NKPSTjZZo",
    duration: "12:31 دقيقة",
  },
  {
    id: "v-a5bQ8WDczK4",
    code: "i02",
    title: "i02 - النسخ الاحتياطي (Backup) واستعادة البيانات (Restore)",
    description: "حماية بياناتك: طريقة عمل نسخة احتياطية يومية واسترجاعها في حال تغيير الجهاز.",
    category: "general",
    categoryLabel: "8- عام وإعدادات",
    youtubeId: "a5bQ8WDczK4",
    duration: "04:13 دقيقة",
  },
  {
    id: "v-iBreGt436_0",
    code: "i03",
    title: "i03 - إدارة المستخدمين وصلاحيات الموظفين",
    description: "تحديد صلاحيات كل كاشير ومحاسب ومنع الحذف وتعديل الأسعار.",
    category: "general",
    categoryLabel: "8- عام وإعدادات",
    youtubeId: "iBreGt436_0",
    duration: "13:48 دقيقة",
  },
  {
    id: "v-ABtcOSxPXVQ",
    code: "i04",
    title: "i04 - الإعدادات العامة لبرنامج مزايا ماكس",
    description: "ضبط خصائص النظام، إعدادات الفواتير، التقريب العشري، وخيارات الطباعة.",
    category: "general",
    categoryLabel: "8- عام وإعدادات",
    youtubeId: "ABtcOSxPXVQ",
    duration: "19:38 دقيقة",
  },
  {
    id: "v-2KDUrTLry78",
    code: "i05",
    title: "i05 - إعدادات الباركود وتصميم الباركود وطباعته",
    description: "شرح مقاسات ورق الباركود وتصميم باركود الصنف وطباعته على طابعات الباركود الحرارية.",
    category: "general",
    categoryLabel: "8- عام وإعدادات",
    youtubeId: "2KDUrTLry78",
    duration: "19:38 دقيقة",
  },
  {
    id: "v-dGM6Zqmz0Fk",
    code: "i06",
    title: "إقفال السنة المالية وترحيل الأرصدة في مزايا ماكس",
    description: "خطوات تقفيل العام المالي الحالي وفتح السنة المالية الجديدة وترحيل أرصدة العملاء والمخازن.",
    category: "general",
    categoryLabel: "8- عام وإعدادات",
    youtubeId: "dGM6Zqmz0Fk",
    duration: "06:06 دقيقة",
  },
  {
    id: "v-gQE_oLBzyx4",
    code: "i07",
    title: "إقفال السنة المالية ومميزات تحديث مزايا",
    description: "شرح شامل لإقفال الميزانية وحساب الأرباح السنوية ومميزات التحديث الجديد.",
    category: "general",
    categoryLabel: "8- عام وإعدادات",
    youtubeId: "gQE_oLBzyx4",
    duration: "14:45 دقيقة",
  },
  {
    id: "v-lDct2pPx9IE",
    code: "i08",
    title: "تحديثات وميزات نظام مزايا ماكس 2025",
    description: "استعراض الإضافات والتحسينات الحديثة لتسريع الأداء وتسهيل تجربة الاستخدام.",
    category: "general",
    categoryLabel: "8- عام وإعدادات",
    youtubeId: "lDct2pPx9IE",
    duration: "26:52 دقيقة",
  },

  // 9- نظام مزايا جيم (Mazaya Gym)
  {
    id: "v-ZmRwpiGm2M8",
    code: "GYM01",
    title: "شرح نظام مزايا جيم (Mazaya Gym) — الصالات والأندية الرياضية",
    description: "شرح تفصيلي متكامل لإدارة اشتراكات الأعضاء، الربط مع بوابات الدخول (Turnstile) بالبصمة، باقات التدريب الخاص PT، وبار المكملات.",
    category: "gym",
    categoryLabel: "نظام مزايا جيم",
    youtubeId: "ZmRwpiGm2M8",
    duration: "28:10 دقيقة",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "إيه الفرق بين 'مزايا ماكس' والأنظمة التخصصية التانية زي جلاس وموتو وريستورانت؟",
    answer: "مزايا ماكس هو نظام الـ ERP والتجارة العام المتكامل المناسب لكافة المحلات التجارية والمعارض وشركات التوزيع والمخازن. أما باقي الأنظمة فهي أنظمة تخصصية (Vertical SaaS) صممناها بخصائص حصرية تناسب مجالات معينة؛ مثل حسابات تقطيع الزجاج بالملم في مزايا جلاس، وبونات المطبخ في مزايا ريستورانت، وأرقام الشاسيه والتقسيط في مزايا موتو، وإدارة الحصص والطلاب في مزايا سكول.",
  },
  {
    id: "faq-2",
    question: "هل البرامج دي جاهزة للتشغيل الفوري في نشاطي التجاري في نفس اليوم؟",
    answer: "نعم، كافة أنظمة مزايا الـ 8 هي برامج مجربة ومستقرة بنسبة 100% وتخدم مئات الأنشطة في مصر ودول الخليج؛ يقوم فريقنا بتثبيت البرنامج على جهازك فوراً وضبط الإعدادات وتدريبك وتدريب موظفيك لتبدأ العمل في نفس اليوم.",
  },
  {
    id: "faq-3",
    question: "هل لو طلبت تعديل أو إضافة خاصة بنشاطي في السيستم بينفع تعملوها؟",
    answer: "بالتأكيد! ميزة مزايا الكبرى أننا شركة برمجيات نمتلك سورس كود أنظمتنا وفريق تطوير داخلي؛ نستطيع تخصيص أي شاشة أو تقرير، أو برمجة دورة عمل إضافية مخصصة 100% تناسب متطلبات شركتك الخاصة.",
  },
  {
    id: "faq-4",
    question: "إزاي بيتم التدريب والدعم الفني وخدمة ما بعد البيع؟",
    answer: "فريق الدعم الفني في مزايا متاح يومياً من 10ص إلى 7 م ما عدا يوم الجمعة عبر الاتصال المباشر وتطبيقات التحكم عن بعد (AnyDesk و TeamViewer) لحل أي استفسار على جهازك في ثواني، بالإضافة إلى شروحات فيديو تفصيلية لكل شاشة على قناتنا في يوتيوب.",
  },
  {
    id: "faq-5",
    question: "هل تدعم كافة أنظمة مزايا منظومة الفاتورة والإيصال الإلكتروني في مصر وهيئة الزكاة (ZATCA) في السعودية؟",
    answer: "نعم، كافة أنظمة مزايا متوافقة تماماً وتدعم الربط مع منظومة الفاتورة الإلكترونية والإيصال الإلكتروني المعتمدة من مصلحة الضرائب المصرية مع طباعة الـ QR Code المشفر على الإيصالات، بالإضافة للتوافق الكامل مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA) للمؤسسات في المملكة العربية السعودية.",
  },
];
