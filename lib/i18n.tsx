"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "en" | "ar";

const TRANSLATIONS: Record<Locale, Record<string, string>> = {
  en: {
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.packages": "Packages",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.techstack": "Tech Stack",
    "nav.faq": "FAQ",
    "nav.get_started": "Get Started",

    "hero.badge": "Next-Gen Software Solutions",
    "hero.title1": "We Build",
    "hero.title2": "Software That",
    "hero.title3": "Shapes Tomorrow",
    "hero.subtitle":
      "NextVision Software crafts powerful, scalable digital solutions that transform ideas into market-defining products. From startups to enterprises — we build the future.",
    "hero.btn_services": "Explore Services",
    "hero.btn_talk": "Let\u2019s Talk",
    "hero.stat_projects": "Projects",
    "hero.stat_clients": "Clients",
    "hero.stat_years": "Years Exp.",
    "hero.float_fast": "Fast Dev",
    "hero.float_secure": "Secure",
    "hero.float_scalable": "Scalable",
    "hero.float_ontime": "On-Time",

    "about.badge": "About NextVision",
    "about.title": "We Turn Bold Ideas Into",
    "about.title_highlight": " Digital Reality",
    "about.p1":
      "NextVision Software was born from a simple belief: great technology should be accessible to every business. Since 2024, we\u2019ve been helping companies of all sizes build powerful digital products that make a real impact.",
    "about.p2":
      "Our team of passionate engineers, designers, and strategists combine deep technical expertise with creative thinking to deliver solutions that don\u2019t just work \u2014 they perform.",
    "about.check1": "Agile development methodology",
    "about.check2": "24/7 dedicated support",
    "about.check3": "Transparent communication",
    "about.check4": "Proven track record across 15+ industries",
    "about.stat_founded": "Founded",
    "about.stat_projects": "Projects Done",
    "about.stat_clients": "Happy Clients",
    "about.stat_rate": "Success Rate",

    "services.badge": "What We Do",
    "services.title": "Our ",
    "services.title_highlight": "Services",
    "services.subtitle": "End-to-end software solutions crafted to accelerate your business growth.",
    "services.web_title": "Web Development",
    "services.web_desc":
      "Blazing-fast, SEO-optimized web apps using React, Next.js, and modern stacks that scale with your business.",
    "services.frontend_title": "Frontend Development",
    "services.frontend_desc":
      "Pixel-perfect, responsive interfaces built with React, Next.js, and TypeScript for exceptional user experiences.",
    "services.backend_title": "Backend Development",
    "services.backend_desc":
      "Robust APIs, serverless functions, and database architecture that power your web applications securely.",
    "services.ecom_title": "E-commerce Solutions",
    "services.ecom_desc":
      "Custom online stores, payment integrations, and inventory management systems tailored to your business.",
    "services.cms_title": "CMS & Headless CMS",
    "services.cms_desc":
      "Flexible content management systems — from WordPress to headless CMS — so you control your content effortlessly.",
    "services.perf_title": "Web Performance & SEO",
    "services.perf_desc":
      "Speed optimization, Core Web Vitals, and technical SEO to make your site load fast and rank higher.",
    "services.web_detail":
      "From simple landing pages to complex web applications, we build full-stack solutions using the latest technologies. Our team handles everything from architecture design to deployment and maintenance, ensuring your web presence is fast, secure, and scalable.",
    "services.web_feats": "Custom web application development|React, Next.js, Node.js expertise|SEO-optimized architecture|Responsive & mobile-first design|Third-party API integrations|Ongoing support & maintenance",
    "services.frontend_detail":
      "We craft beautiful, intuitive user interfaces that delight your users and drive engagement. Using modern frameworks and component-based architecture, we deliver consistent, maintainable frontend code that performs flawlessly across all devices.",
    "services.frontend_feats": "React / Next.js component development|TypeScript for type-safe code|Animations & micro-interactions|Cross-browser compatibility|Design system implementation|Progressive Web App (PWA) support",
    "services.backend_detail":
      "Your application needs a solid backend to handle data, authentication, business logic, and integrations. We build secure, scalable server-side systems using modern architectures including serverless, microservices, and traditional APIs.",
    "services.backend_feats": "RESTful & GraphQL API development|Serverless functions (AWS Lambda, Vercel)|Database design (SQL & NoSQL)|Authentication & authorization|File storage & CDN setup|Performance monitoring & logging",
    "services.ecom_detail":
      "Launch and scale your online store with a custom e-commerce solution built for your specific products and audience. We integrate leading payment gateways, manage inventory, and optimize the checkout flow to maximize conversions.",
    "services.ecom_feats": "Custom storefront development|Payment gateway integration (Stripe, PayPal)|Shopping cart & checkout optimization|Inventory & order management|Admin dashboard & analytics|Multi-currency & multi-language support",
    "services.cms_detail":
      "Take full control of your content with a CMS tailored to your workflow. Whether you prefer the familiarity of WordPress, the flexibility of a headless CMS, or a custom-built solution, we make content management effortless for your team.",
    "services.cms_feats": "WordPress custom theme & plugin dev|Headless CMS (Sanity, Strapi, Contentful)|Custom admin interfaces|Content modeling & structured data|Media management & CDN|Editor training & documentation",
    "services.perf_detail":
      "A fast website isn't just nice to have — it's essential for user retention, conversions, and search rankings. We audit, optimize, and monitor your site's performance to ensure it loads in under two seconds and scores top marks on Core Web Vitals.",
    "services.perf_feats": "Performance audits & Core Web Vitals|Image & asset optimization|Code splitting & lazy loading|Caching strategies & CDN|Technical SEO audit & fixes|Ongoing performance monitoring",
    "services.learn": "Learn more \u2192",

    "techstack.badge": "Our Stack",
    "techstack.title": "Technologies We ",
    "techstack.title_highlight": "Work With",
    "techstack.subtitle": "Modern, battle-tested technologies that power scalable and high-performance web applications.",

    "faq.badge": "FAQ",
    "faq.title": "Frequently Asked ",
    "faq.title_highlight": "Questions",
    "faq.q1": "How much does a website or web app cost?",
    "faq.a1": "Pricing depends on complexity, features, and timeline. A simple landing page starts around $2,999, while a full-featured web application can range from $7,999 to $20,000+. We provide a detailed quote after understanding your project requirements.",
    "faq.q2": "How long does it take to build a website?",
    "faq.a2": "A standard website takes 4–8 weeks from kickoff to launch. More complex applications with backend systems, APIs, and custom features typically take 8–16 weeks. We follow an agile process so you see progress every week.",
    "faq.q3": "Do you offer maintenance and support after launch?",
    "faq.a3": "Yes. We offer post-launch maintenance packages including security updates, performance monitoring, content updates, and technical support. Plans start with 30-day basic support and scale to 12-month enterprise SLAs.",
    "faq.q4": "What technologies do you use?",
    "faq.a4": "Our core stack includes the MERN stack (MongoDB, Express.js, React, Node.js), Next.js for full-stack React, and NestJS for enterprise-grade backend applications. We also use TypeScript, Tailwind CSS, and cloud platforms like AWS and Vercel.",
    "faq.q5": "Will my website be mobile-friendly?",
    "faq.a5": "Absolutely. Every site we build is fully responsive and mobile-first. We design and test across all device sizes to ensure a seamless experience on phones, tablets, and desktops.",
    "faq.q6": "Can you work with my existing team or codebase?",
    "faq.a6": "Yes. We regularly collaborate with in-house teams and can integrate into existing projects. We'll review your current codebase, suggest improvements, and work within your existing workflow and tools.",

    "packages.badge": "Pricing",
    "packages.title": "Simple, Transparent ",
    "packages.title_highlight": "Packages",
    "packages.subtitle": "Choose the plan that fits your ambitions. No hidden fees, ever.",
    "packages.starter_name": "Starter",
    "packages.starter_desc": "Perfect for MVPs and early-stage startups.",
    "packages.starter_feat1": "Up to 5 pages / screens",
    "packages.starter_feat2": "Responsive design",
    "packages.starter_feat3": "Basic CMS integration",
    "packages.starter_feat4": "3 rounds of revisions",
    "packages.starter_feat5": "30-day support",
    "packages.starter_feat6": "Delivery in 4 weeks",
    "packages.growth_name": "Growth",
    "packages.growth_desc": "For businesses ready to scale fast.",
    "packages.growth_feat1": "Up to 20 pages / screens",
    "packages.growth_feat2": "Custom UI/UX design",
    "packages.growth_feat3": "API integrations",
    "packages.growth_feat4": "SEO optimization",
    "packages.growth_feat5": "6 months support",
    "packages.growth_feat6": "Delivery in 8 weeks",
    "packages.growth_feat7": "Performance audits",
    "packages.enterprise_name": "Enterprise",
    "packages.enterprise_desc": "Tailored solutions for large organizations.",
    "packages.enterprise_feat1": "Unlimited pages / screens",
    "packages.enterprise_feat2": "Dedicated dev team",
    "packages.enterprise_feat3": "Advanced security",
    "packages.enterprise_feat4": "CI/CD pipeline setup",
    "packages.enterprise_feat5": "12 months support",
    "packages.enterprise_feat6": "SLA guarantee",
    "packages.enterprise_feat7": "Priority support 24/7",
    "packages.most_popular": "Most Popular",
    "packages.per_project": "/ project",
    "packages.per_quote": "/ quote",
    "packages.cta_started": "Get Started Now",
    "packages.cta_contact": "Contact Us",

    "testimonials.badge": "Testimonials",
    "testimonials.title": "What Our ",
    "testimonials.title_highlight": "Clients Say",

    "contact.badge": "Get In Touch",
    "contact.title": "Ready to Build ",
    "contact.title_highlight": "Something Great?",
    "contact.subtitle":
      "Let\u2019s talk about your project. Our team responds within 24 hours with a tailored solution proposal \u2014 no obligations, no fluff.",
    "contact.email_label": "Email Us",
    "contact.call_label": "Call Us",
    "contact.location_label": "Location",
    "contact.first_name": "First Name",
    "contact.last_name": "Last Name",
    "contact.email": "Email Address",
    "contact.service": "Service Needed",
    "contact.message": "Tell Us About Your Project",
    "contact.first_placeholder": "John",
    "contact.last_placeholder": "Doe",
    "contact.email_placeholder": "john@company.com",
    "contact.service_placeholder": "Select a service...",
    "contact.message_placeholder": "Describe your project, goals, and timeline...",
    "contact.submit": "Send Message \u2192",
    "contact.sending": "Sending...",
    "contact.footer_note": "We respond within 24 hours \u00b7 No spam, ever",
    "contact.service_web": "Web Development",
    "contact.service_frontend": "Frontend Development",
    "contact.service_backend": "Backend Development",
    "contact.service_ecom": "E-commerce Solutions",
    "contact.service_cms": "CMS & Headless CMS",
    "contact.service_perf": "Web Performance & SEO",
    "contact.service_other": "Other",

    "footer.copyright": "\u00a9 {year} NextVision Software. All rights reserved.",
    "locale.toggle": "AR",
  },
  ar: {
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.packages": "الباقات",
    "nav.testimonials": "آراء العملاء",
    "nav.contact": "اتصل بنا",
    "nav.techstack": "التقنيات",
    "nav.faq": "الأسئلة الشائعة",
    "nav.get_started": "ابدأ الآن",

    "hero.badge": "حلول برمجية متطورة",
    "hero.title1": "نبني",
    "hero.title2": "برمجيات تشكل",
    "hero.title3": "المستقبل",
    "hero.subtitle":
      "تقوم NextVision Software بصناعة حلول رقمية قوية وقابلة للتوسع تحوّل الأفكار إلى منتجات تحدد السوق. من الشركات الناشئة إلى الكبرى — نبني المستقبل.",
    "hero.btn_services": "استكشف الخدمات",
    "hero.btn_talk": "لنتحدث",
    "hero.stat_projects": "مشروع",
    "hero.stat_clients": "عميل",
    "hero.stat_years": "سنة خبرة",
    "hero.float_fast": "تطوير سريع",
    "hero.float_secure": "آمن",
    "hero.float_scalable": "قابل للتوسع",
    "hero.float_ontime": "في الموعد",

    "about.badge": "عن NextVision",
    "about.title": "نحوّل الأفكار الجريئة إلى",
    "about.title_highlight": " واقع رقمي",
    "about.p1":
      "ولدت NextVision Software من إيمان بسيط: التكنولوجيا العظيمة يجب أن تكون متاحة لكل شركة. منذ عام 2024، ونحن نساعد الشركات من جميع الأحجام في بناء منتجات رقمية قوية تحقق تأثيراً حقيقياً.",
    "about.p2":
      "يجمع فريقنا من المهندسين والمصممين والاستراتيجيين بين الخبرة التقنية العميقة والتفكير الإبداعي لتقديم حلول لا تقتصر على العمل فقط، بل تتفوق.",
    "about.check1": "منهجية تطوير رشيقة",
    "about.check2": "دعم متواصل 24/7",
    "about.check3": "تواصل شفاف",
    "about.check4": "سجل مثبت في أكثر من 15 صناعة",
    "about.stat_founded": "تأسيس",
    "about.stat_projects": "مشروع منجز",
    "about.stat_clients": "عميل سعيد",
    "about.stat_rate": "نسبة نجاح",

    "services.badge": "ما نقدم",
    "services.title": "خدماتنا",
    "services.title_highlight": "",
    "services.subtitle": "حلول برمجية متكاملة مصممة لتسريع نمو عملك.",
    "services.web_title": "تطوير مواقع الويب",
    "services.web_desc":
      "تطبيقات ويب فائقة السرعة ومحسنة لمحركات البحث باستخدام React و Next.js وتقنيات حديثة تتوسع مع عملك.",
    "services.frontend_title": "تطوير الواجهات الأمامية",
    "services.frontend_desc":
      "واجهات متجاوبة ومتقنة باستخدام React و Next.js و TypeScript لتجارب مستخدم استثنائية.",
    "services.backend_title": "تطوير الخوادم والـ API",
    "services.backend_desc":
      "APIs قوية، دوال Serverless، وبنية قواعد بيانات تدعم تطبيقات الويب الخاصة بك بأمان.",
    "services.ecom_title": "حلول التجارة الإلكترونية",
    "services.ecom_desc":
      "متاجر إلكترونية مخصصة، تكامل بوابات الدفع، وأنظمة إدارة المخزون مصممة حسب احتياجك.",
    "services.cms_title": "أنظمة إدارة المحتوى",
    "services.cms_desc":
      "أنظمة إدارة محتوى مرنة — من WordPress إلى Headless CMS — لتتحكم بالمحتوى بكل سهولة.",
    "services.perf_title": "أداء المواقع وتحسين محركات البحث",
    "services.perf_desc":
      "تحسين السرعة و Core Web Vitals وتحسين محركات البحث التقني لجعل موقعك أسرع وأفضل في الترتيب.",
    "services.web_detail":
      "من الصفحات التعريفية البسيطة إلى تطبيقات الويب المعقدة، نبني حلولاً متكاملة باستخدام أحدث التقنيات. يتولى فريقنا كل شيء من تصميم البنية إلى النشر والصيانة، لضمان أن يكون موقعك سريعاً وآمناً وقابلاً للتوسع.",
    "services.web_feats": "تطوير تطبيقات ويب مخصصة|خبرة في React و Next.js و Node.js|بنية محسّنة لمحركات البحث|تصميم متجاوب يركز على الجوال|تكامل مع APIs خارجية|دعم وصيانة مستمرة",
    "services.frontend_detail":
      "نصنع واجهات مستخدم جميلة وبديهية تبهج زوارك وتزيد التفاعل. باستخدام أطر العمل الحديثة والبنية القائمة على المكونات، نقدم أكواد أمامية متسقة وقابلة للصيانة تعمل بشكل لا تشوبه شائبة على جميع الأجهزة.",
    "services.frontend_feats": "تطوير مكونات React / Next.js|TypeScript لكود آمن من الأخطاء|رسوم متحركة وتفاعلات دقيقة|توافق عبر جميع المتصفحات|تنفيذ أنظمة التصميم|دعم تطبيقات الويب التقدمية (PWA)",
    "services.backend_detail":
      "تطبيقك يحتاج إلى خلفية قوية لإدارة البيانات والمصادقة ومنطق الأعمال والتكاملات. نبني أنظمة خادم آمنة وقابلة للتوسع باستخدام بنى حديثة تشمل Serverless والخدمات المصغرة و APIs التقليدية.",
    "services.backend_feats": "تطوير RESTful و GraphQL APIs|دوال Serverless (AWS Lambda, Vercel)|تصميم قواعد بيانات (SQL و NoSQL)|المصادقة والتفويض|إعداد تخزين الملفات و CDN|مراقبة الأداء وتسجيل الأخطاء",
    "services.ecom_detail":
      "أطلق متجرك الإلكتروني ووسّع نطاقه مع حل تجارة إلكترونية مخصص بني حسب منتجاتك وجمهورك. ندمج بوابات الدفع الرائدة وندير المخزون ونحسّن عملية الدفع لتعظيم المبيعات.",
    "services.ecom_feats": "تطوير واجهة متجر مخصصة|تكامل بوابات الدفع (Stripe, PayPal)|تحسين سلة التسوق وعملية الدفع|إدارة المخزون والطلبات|لوحة تحكم وتحليلات|دعم العملات المتعددة واللغات",
    "services.cms_detail":
      "تحكم الكامل بالمحتوى الخاص بك مع نظام إدارة محتوى مصمم حسب سير عملك. سواء كنت تفضل WordPress المألوف أو مرونة Headless CMS أو حل مخصص، نجعل إدارة المحتوى سهلة لفريقك.",
    "services.cms_feats": "قوالب وإضافات WordPress مخصصة|Headless CMS (Sanity, Strapi, Contentful)|واجهات إدارة مخصصة|نمذجة المحتوى والبيانات المنظمة|إدارة الوسائط و CDN|تدريب المحررين وتوثيق",
    "services.perf_detail":
      "الموقع السريع ليس مجرد رفاهية — إنه ضروري للاحتفاظ بالمستخدمين والتحويلات وترتيب البحث. ندقق ونحسّن ونراقب أداء موقعك لضمان تحميله في أقل من ثانيتين وتحقيق أعلى الدرجات في Core Web Vitals.",
    "services.perf_feats": "تدقيق الأداء و Core Web Vitals|تحسين الصور والموارد|تقسيم الكود والتحميل البطيء|استراتيجيات التخزين المؤقت و CDN|تدقيق تقني لمحركات البحث وإصلاحات|مراقبة أداء مستمرة",
    "services.learn": "اعرف المزيد \u2192",

    "techstack.badge": "التقنيات",
    "techstack.title": "التقنيات التي ",
    "techstack.title_highlight": "نعمل بها",
    "techstack.subtitle": "تقنيات حديثة ومجرّبة لبناء تطبيقات ويب قابلة للتوسع وعالية الأداء.",

    "faq.badge": "الأسئلة الشائعة",
    "faq.title": "أسئلة ",
    "faq.title_highlight": "شائعة",
    "faq.q1": "كم تكلفة موقع أو تطبيق ويب؟",
    "faq.a1": "تعتمد التكلفة على التعقيد والميزات والجدول الزمني. صفحة تعريفية بسيطة تبدأ من $2,999، بينما تطبيق ويب متكامل يتراوح من $7,999 إلى $20,000+. نقدم عرض سعر مفصل بعد فهم متطلبات مشروعك.",
    "faq.q2": "كم من الوقت يستغرق بناء موقع؟",
    "faq.a2": "موقع قياسي يستغرق 4–8 أسابيع من البداية للإطلاق. التطبيقات الأكثر تعقيداً مع أنظمة خلفية و APIs وميزات مخصصة تستغرق 8–16 أسبوعاً. نتبع منهجية رشيقة لتتمكن من رؤية التقدم كل أسبوع.",
    "faq.q3": "هل تقدمون صيانة ودعماً بعد الإطلاق؟",
    "faq.a3": "نعم. نقدم باقات صيانة بعد الإطلاق تتضمن التحديثات الأمنية ومراقبة الأداء وتحديث المحتوى والدعم الفني. الباقات تبدأ بدعم أساسي لمدة 30 يوماً وتمتد لاتفاقيات SLA لمدة 12 شهراً.",
    "faq.q4": "ما التقنيات التي تستخدمونها؟",
    "faq.a4": "مجموعة تقنياتنا الأساسية تشمل MERN (MongoDB, Express.js, React, Node.js) و Next.js لتطوير React الكامل و NestJS لتطبيقات الخلفية على مستوى المؤسسات. نستخدم أيضاً TypeScript و Tailwind CSS ومنصات سحابية مثل AWS و Vercel.",
    "faq.q5": "هل سيكون موقعي متوافقاً مع الجوال؟",
    "faq.a5": "بالتأكيد. كل موقع نبنيه متجاوب بالكامل وي prioritise الجوال أولاً. نصمم ونختبر على جميع أحجام الأجهزة لضمان تجربة سلسة على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر.",
    "faq.q6": "هل يمكنكم العمل مع فريقي الحالي أو قاعدة البيانات الموجودة؟",
    "faq.a6": "نعم. نتعاون بانتظام مع فرق داخلية ويمكننا الاندماج في مشاريع قائمة. سنراجع قاعدة البيانات الحالية ونقترح تحسينات ونعمل ضمن سير العمل والأدوات الموجودة لديكم.",

    "packages.badge": "الأسعار",
    "packages.title": "باقات بسيطة،",
    "packages.title_highlight": " شفافة",
    "packages.subtitle": "اختر الخطة التي تناسب طموحاتك. لا وجود لرسوم مخفية، أبداً.",
    "packages.starter_name": "البدء",
    "packages.starter_desc": "مثالي لنماذج الأعمال الأولية والشركات الناشئة.",
    "packages.starter_feat1": "حتى 5 صفحات / شاشات",
    "packages.starter_feat2": "تصميم متجاوب",
    "packages.starter_feat3": "تكامل أساسي لنظام إدارة المحتوى",
    "packages.starter_feat4": "3 جولات من المراجعات",
    "packages.starter_feat5": "دعم لمدة 30 يوماً",
    "packages.starter_feat6": "التسليم في 4 أسابيع",

    "packages.growth_name": "نمو",
    "packages.growth_desc": "للشركات المستعدة للنمو السريع",
    "packages.growth_feat1": "حتى 20 صفحة / شاشة",
    "packages.growth_feat2": "تصميم مخصص UI/UX",
    "packages.growth_feat3": "تكاملات API",
    "packages.growth_feat4": "تحسين محركات البحث",
    "packages.growth_feat5": "دعم لمدة 6 أشهر",
    "packages.growth_feat6": "التسليم في 8 أسابيع",
    "packages.growth_feat7": "مراجعات الأداء",

    "packages.enterprise_name": "المؤسسات",
    "packages.enterprise_desc": "حلول مخصصة للمؤسسات الكبرى",
    "packages.enterprise_feat1": "عدد غير محدود من الصفحات",
    "packages.enterprise_feat2": "فريق تطوير مخصص",
    "packages.enterprise_feat3": "أمان متقدم",
    "packages.enterprise_feat4": "إنشاء خط تسليم CI/CD",
    "packages.enterprise_feat5": "دعم لمدة 12 شهراً",
    "packages.enterprise_feat6": "ضمان SLA",
    "packages.enterprise_feat7": "دعم أولوي 24/7",
    "packages.most_popular": "الأكثر شيوعاً",
    "packages.per_project": "/ مشروع",
    "packages.per_quote": "/ عرض سعر",
    "packages.cta_started": "ابدأ الآن",
    "packages.cta_contact": "اتصل بنا",

    "testimonials.badge": "آراء العملاء",
    "testimonials.title": "ما يقوله ",
    "testimonials.title_highlight": "عملاؤنا",

    "contact.badge": "تواصل معنا",
    "contact.title": "مستعد لبناء ",
    "contact.title_highlight": "شيء عظيم؟",
    "contact.subtitle":
      "دعنا نتحدث عن مشروعك. يستجيب فريقنا خلال 24 ساعة باقتراح حل مخصص — دون التزامات أو كلام فارغ.",
    "contact.email_label": "راسلنا بالبريد",
    "contact.call_label": "اتصل بنا",
    "contact.location_label": "الموقع",
    "contact.first_name": "الاسم الأول",
    "contact.last_name": "الاسم العائلي",
    "contact.email": "البريد الإلكتروني",
    "contact.service": "الخدمة المطلوبة",
    "contact.message": "أخبرنا عن مشروعك",
    "contact.first_placeholder": "جون",
    "contact.last_placeholder": "دو",
    "contact.email_placeholder": "john@company.com",
    "contact.service_placeholder": "اختر خدمة...",
    "contact.message_placeholder": "صف تفاصيل مشروعك وأهدافه والجدول الزمني...",
    "contact.submit": "أرسل الرسالة \u2192",
    "contact.sending": "جارٍ الإرسال...",
    "contact.footer_note": "نرد خلال 24 ساعة \u00B7 لا بريد عشوائي أبداً",
    "contact.service_web": "تطوير مواقع الويب",
    "contact.service_frontend": "تطوير الواجهات الأمامية",
    "contact.service_backend": "تطوير الخوادم والـ API",
    "contact.service_ecom": "حلول التجارة الإلكترونية",
    "contact.service_cms": "أنظمة إدارة المحتوى",
    "contact.service_perf": "أداء المواقع وتحسين محركات البحث",
    "contact.service_other": "أخرى",

    "footer.copyright": "\u00A9 {year} NextVision Software. جميع الحقوق محفوظة.",
    "locale.toggle": "EN",
  },
};

export function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: string;
  t: (key: string) => string;
} | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "ar" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.style.fontFamily = locale === "ar" ? "'Tajawal', sans-serif" : "";
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  const dir = getDir(locale);
  const t = (key: string): string => {
    const val = TRANSLATIONS[locale]?.[key];
    if (val !== undefined && val !== null) return val;
    const fallback = TRANSLATIONS.en[key];
    return fallback ?? key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dir, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useTranslation() {
  const { t } = useLocale();
  return { t };
}
