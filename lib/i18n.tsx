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

    "nav.casestudy": "Case Study",
    "nav.process": "Our Process",
    "nav.founder": "Founder",

    "packages.fastpay_banner_badge": "FastPay SaaS",
    "packages.fastpay_banner_title": "Want a ready-made e-commerce solution?",
    "packages.fastpay_banner_text": "Ask us about our FastPay SaaS \u2014 launch your store today with zero technical hassle.",
    "packages.fastpay_banner_btn": "Explore FastPay \u2192",
    "packages.fastpay_banner_ask": "Inquire About FastPay",
    "packages.inquire_title": "I would like to inquire about and book the package: ",
    "packages.inquire_desc_label": "Description: ",
    "packages.inquire_features_label": "Included Features:\n",
    "packages.inquire_footer": "Please reach out to me with a timeline and project quote.",
    "packages.fastpay_inquire_msg": "Hello NextVision,\n\nI am interested in your ready-made e-commerce solution (FastPay SaaS) and would like to learn how to launch our store with zero technical hassle.",

    "casestudy.badge": "Enterprise Case Study \u00b7 Private Beta",
    "casestudy.title": "FastPay: Multi-Tenant ",
    "casestudy.title_highlight": "E-Commerce SaaS Platform",
    "casestudy.subtitle":
      "How NextVision engineered a high-velocity, multi-tenant digital commerce infrastructure tailored for modern merchants and regional market growth.",
    "casestudy.metric1_val": "< 3 Min",
    "casestudy.metric1_label": "Storefront Provisioning",
    "casestudy.metric2_val": "100%",
    "casestudy.metric2_label": "Multi-Tenant Isolation",
    "casestudy.metric3_val": "+45%",
    "casestudy.metric3_label": "Checkout Conversion",
    "casestudy.metric4_val": "99.9%",
    "casestudy.metric4_label": "Target Cloud SLA",
    "casestudy.challenge_badge": "The Challenge",
    "casestudy.challenge_title": "Complex Global Platforms vs. Social Media Selling",
    "casestudy.challenge_quote":
      "Merchants and local businesses struggle with complex global platforms and rely heavily on social media. They need a simple, fast, and secure way to launch their stores.",
    "casestudy.challenge_p1":
      "Regional retailers and growing merchants are caught in a painful dilemma: either wrestle with bloated global platforms that require weeks of setup and charge punishing transaction fees, or depend on chaotic direct messages across WhatsApp and Instagram where customer orders get lost and payments are manually tracked.",
    "casestudy.challenge_p2":
      "They required a frictionless, turn-key e-commerce engine that automates storefront generation, streamlines payment workflows, and bridges the gap between modern web checkout and conversational commerce.",
    "casestudy.solution_badge": "The Solution",
    "casestudy.solution_title": "Glassmorphism Architecture with Instant Deployment",
    "casestudy.solution_quote":
      "We built a custom SaaS platform with a stunning Glassmorphism UI, allowing users to create stores in minutes. It features multi-tenant isolation, automated Stripe payments, WhatsApp checkout integration, and advanced analytics.",
    "casestudy.solution_p1":
      "NextVision architected FastPay from the ground up as an enterprise-grade multi-tenant platform. Designed with a luxury dark Glassmorphism aesthetic, merchant administrators can configure inventory, customize brand identity, and go live in minutes.",
    "casestudy.feat1_title": "Multi-Tenant Isolation",
    "casestudy.feat1_desc":
      "Schema-level data isolation via PostgreSQL and Prisma ORM guarantees strict tenant security, zero data leakage, and seamless independent scaling.",
    "casestudy.feat2_title": "Automated Stripe Payments",
    "casestudy.feat2_desc":
      "Instant checkout with automatic currency conversion, PCI-compliant Stripe tokenization, and webhook-driven subscription billing.",
    "casestudy.feat3_title": "WhatsApp Checkout Integration",
    "casestudy.feat3_desc":
      "One-tap conversational checkout that formats order summaries, customer addresses, and payment proof directly into merchant WhatsApp chats.",
    "casestudy.feat4_title": "Advanced Analytics Engine",
    "casestudy.feat4_desc":
      "Real-time revenue monitoring, cart abandonment tracking, inventory velocity alerts, and cohort retention metrics.",
    "casestudy.tech_title": "Enterprise Technology Stack",
    "casestudy.tech_role_nextjs": "SSR & Edge Storefronts",
    "casestudy.tech_role_nestjs": "Modular Microservices Backend",
    "casestudy.tech_role_postgres": "Schema-Isolated Multi-Tenancy",
    "casestudy.tech_role_prisma": "Type-Safe ORM Modeling",
    "casestudy.tech_role_stripe": "Automated Global Billing",
    "casestudy.btn_arch": "View Technical Architecture",
    "casestudy.btn_inquire": "Inquire About Beta Access",
    "casestudy.tab_dash": "Merchant Dashboard",
    "casestudy.tab_store": "Live Storefront",
    "casestudy.tab_checkout": "WhatsApp & Stripe Checkout",
    "casestudy.mockup_label_dash": "UI Preview 1/3: Real-Time Analytics & Store Management",
    "casestudy.mockup_label_store": "UI Preview 2/3: High-Converting Glassmorphism Storefront",
    "casestudy.mockup_label_checkout": "UI Preview 3/3: Hybrid Stripe & WhatsApp Checkout",
    "casestudy.mockup_ssl": "SSL 256-bit",
    "casestudy.mockup_tenant_id": "Tenant ID",
    "casestudy.mockup_status_beta": "\u25cf Private Beta Active",
    "casestudy.mockup_mrr_label": "Monthly Volume",
    "casestudy.mockup_mrr_change": "\u2191 +28.4% vs last mo",
    "casestudy.mockup_orders_label": "Orders (Stripe + WA)",
    "casestudy.mockup_fulfillment": "\u2191 94.2% fulfillment",
    "casestudy.mockup_velocity_label": "Sales Velocity (Hourly Sync)",
    "casestudy.mockup_realtime": "Real-time",
    "casestudy.mockup_feed_label": "Live Order Feed",
    "casestudy.mockup_paid_stripe": "Paid (Stripe)",
    "casestudy.mockup_wa_confirmed": "WhatsApp Confirmed",
    "casestudy.mockup_store_brand": "OASIS COLLECTION",
    "casestudy.mockup_cart": "Cart (2)",
    "casestudy.mockup_new_drop": "New Drop",
    "casestudy.mockup_store_hero_title": "Minimalist Tech & Apparel",
    "casestudy.mockup_store_hero_sub": "Express checkout via WhatsApp & Stripe Card.",
    "casestudy.mockup_prod1_name": "Urban Tech Pack v2",
    "casestudy.mockup_prod1_badge": "Bestseller",
    "casestudy.mockup_prod2_name": "Chrono Minimal Watch",
    "casestudy.mockup_prod2_badge": "Few Left",
    "casestudy.mockup_quick_add": "Quick Add +",
    "casestudy.mockup_checkout_header": "FastPay Dual-Gateway Checkout",
    "casestudy.mockup_shipping": "Storefront Shipping",
    "casestudy.mockup_free": "Free",
    "casestudy.mockup_total_due": "Total Due",
    "casestudy.mockup_wa_title": "Order via WhatsApp (Instant)",
    "casestudy.mockup_popular": "Popular",
    "casestudy.mockup_wa_sub": "Generates a pre-formatted order link straight into the merchant\u2019s chat for rapid fulfillment.",
    "casestudy.mockup_wa_btn": "Complete Order on WhatsApp \u2192",
    "casestudy.mockup_stripe_title": "Credit / Debit Card (Powered by Stripe)",
    "casestudy.mockup_stripe_sub": "Automated multi-currency processing & invoice dispatch.",
    "casestudy.mockup_pay_btn": "Pay $129.00",
    "casestudy.modal_badge": "SYSTEM BLUEPRINT & ARCHITECTURE",
    "casestudy.modal_title": "FastPay Technical Architecture",
    "casestudy.modal_subtitle": "High-Level System Design & Multi-Tenant Infrastructure Blueprint",
    "casestudy.node1_title": "Client & Edge",
    "casestudy.node1_sub": "Next.js 16 SSR + Tailwind Glassmorphism",
    "casestudy.node2_title": "API Gateway",
    "casestudy.node2_sub": "NestJS Microservices + JWT Tenant Guards",
    "casestudy.node3_title": "Data Layer",
    "casestudy.node3_sub": "PostgreSQL Schema-per-Tenant + Prisma",
    "casestudy.node4_title": "Gateways",
    "casestudy.node4_sub": "Stripe Webhooks & WhatsApp Cloud API",
    "casestudy.flow_edge": "Storefront Edge",
    "casestudy.flow_api": "NestJS API",
    "casestudy.flow_db": "Isolated DB Schema",
    "casestudy.flow_webhooks": "Real-Time Webhooks",
    "casestudy.detail1_title": "Strict Multi-Tenant Isolation",
    "casestudy.detail1_desc": "Every merchant store operates within an isolated PostgreSQL schema governed by Prisma query middleware. This guarantees 100% data partition, preventing cross-tenant leakage.",
    "casestudy.detail2_title": "Hybrid Conversational Checkout",
    "casestudy.detail2_desc": "Combines automated Stripe payment intents with one-click WhatsApp order encryption. Local customers complete purchases in under 15 seconds.",
    "casestudy.modal_close": "Close Architecture View",
    "casestudy.modal_download": "Download Architecture Brief (PDF)",
    "casestudy.inquire_msg": "Hello NextVision team,\n\nI am interested in learning more about your FastPay Multi-Tenant SaaS platform and would like to request private beta access or discuss a custom implementation.",

    "process.badge": "Our Process",
    "process.title": "A Transparent, 4-Step ",
    "process.title_highlight": "Engineering Framework",
    "process.subtitle":
      "We de-risk digital investments with an agile, milestone-driven delivery process that keeps you in full control from kickoff to launch and beyond.",
    "process.step1_num": "01",
    "process.step1_title": "Discovery",
    "process.step1_ar_tag": "\u0627\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641",
    "process.step1_summary": "Understanding your business goals and target audience.",
    "process.step1_desc":
      "Understanding your business goals and target audience. We dive deep into your commercial vision, analyze your target personas, map architectural requirements, and design a delivery roadmap that guarantees product-market fit.",
    "process.step1_deliverables": "Deliverables: System Architecture Blueprint, Requirements Scope & Milestone Roadmap",
    "process.step2_num": "02",
    "process.step2_title": "Design",
    "process.step2_ar_tag": "\u0627\u0644\u062a\u0635\u0645\u064a\u0645",
    "process.step2_summary": "Crafting a modern, user-centric UI/UX.",
    "process.step2_desc":
      "Crafting a modern, user-centric UI/UX. We transform user journeys into intuitive wireframes, polished Glassmorphism design systems, and clickable prototypes that delight users and drive conversion.",
    "process.step2_deliverables": "Deliverables: Clickable Figma Prototype, Responsive UI Kit & Design System Tokens",
    "process.step3_num": "03",
    "process.step3_title": "Development",
    "process.step3_ar_tag": "\u0627\u0644\u062a\u0637\u0648\u064a\u0631",
    "process.step3_summary": "Building with the latest tech stack for speed and security.",
    "process.step3_desc":
      "Building with the latest tech stack for speed and security. We write clean, modular, type-safe full-stack code with automated test suites, secure APIs, and scalable PostgreSQL database structures.",
    "process.step3_deliverables": "Deliverables: Production-Ready Codebase, Weekly Staging Previews & Automated CI/CD",
    "process.step4_num": "04",
    "process.step4_title": "Launch & Support",
    "process.step4_ar_tag": "\u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0648\u0627\u0644\u062f\u0639\u0645",
    "process.step4_summary": "Deploying your product and providing ongoing maintenance.",
    "process.step4_desc":
      "Deploying your product and providing ongoing maintenance. We orchestrate zero-downtime production deployment, configure live monitoring alerts, and back your product with dedicated ongoing SLAs.",
    "process.step4_deliverables": "Deliverables: Zero-Downtime Cloud Deployment, Performance & Security Audit & Ongoing SLA Support",
    "process.callout_title": "Zero Guesswork \u00b7 100% Transparent Weekly Sprints",
    "process.callout_desc": "You get weekly staging links, interactive progress demos, and direct access to your engineering lead.",
    "process.callout_btn": "Book Discovery Session \u2192",
    "process.discovery_msg": "Hello NextVision,\n\nI would like to book a strategic Discovery Session to discuss my project goals, technical requirements, and plan the first milestone.",

    "founder.badge": "Meet the Founder",
    "founder.title": "Engineering Leadership Driven by ",
    "founder.title_highlight": "Purpose & Precision",
    "founder.subtitle":
      "Direct technical leadership that bridges deep software craftsmanship with real-world business growth.",
    "founder.name": "Mohammad Darweesh",
    "founder.role": "Founder & Lead Full-Stack Architect",
    "founder.bio":
      "\"Hi, I'm Mohammad Darweesh, the founder of NextVision. I am a Full Stack Developer passionate about building scalable SaaS solutions and helping local businesses transition to digital. I combine technical expertise with a deep understanding of the local market.\"",
    "founder.p2":
      "At NextVision, we don't treat software engineering as transactional coding. We partner with ambitious founders and business owners to build enduring digital assets that streamline operations, maximize revenue, and outcompete the market.",
    "founder.pillar1_title": "Hands-On Senior Architecture",
    "founder.pillar1_desc": "Every project is directly architected, reviewed, and overseen by senior engineering talent.",
    "founder.pillar2_title": "Deep Local Market Empathy",
    "founder.pillar2_desc": "We understand regional consumer habits, local payment rails, and conversational commerce dynamics.",
    "founder.pillar3_title": "Scalable SaaS Foundations",
    "founder.pillar3_desc": "Architectures built for growth \u2014 multi-tenancy, clean schemas, and enterprise cloud reliability.",
    "founder.skill1": "Full-Stack SaaS",
    "founder.skill2": "NestJS & Next.js",
    "founder.skill3": "PostgreSQL",
    "founder.skill4": "Cloud Architecture",
    "founder.status_tooltip": "Active & Available for Projects",
    "founder.cta_btn": "Discuss Your Project With Mohammad",
    "founder.status_available": "Available for High-Impact Software Engagements",
    "founder.consult_msg": "Hello Mohammad,\n\nI would like to discuss my project with you directly and explore how NextVision can help build our software solution.",

    "testimonials.t1_name": "Sarah Al-Rashid",
    "testimonials.t1_role": "CEO, TechFlow UAE",
    "testimonials.t1_quote": "NextVision transformed our outdated platform into a world-class product in just 10 weeks. Their attention to detail and proactive communication set them apart.",
    "testimonials.t2_name": "Ahmed Mansour",
    "testimonials.t2_role": "CTO, FinBridge",
    "testimonials.t2_quote": "The team delivered a complex fintech app with zero critical bugs on launch day. Their expertise in security and performance is genuinely world-class.",
    "testimonials.t3_name": "Layla Hassan",
    "testimonials.t3_role": "Founder, EduNova",
    "testimonials.t3_quote": "Working with NextVision felt like having an in-house team that actually cared. They challenged our assumptions and pushed us toward a far better product.",
    "testimonials.t4_name": "Omar Khalil",
    "testimonials.t4_role": "Product Director, RetailX",
    "testimonials.t4_quote": "From discovery to deployment, the process was seamless. They delivered on time, on budget, and the results exceeded all our KPIs within the first month.",
    "testimonials.t5_name": "Nora Al-Sayed",
    "testimonials.t5_role": "VP Engineering, CloudBase",
    "testimonials.t5_quote": "NextVision is the rare agency that combines technical excellence with real business understanding. Highly recommended for any serious product.",
    "testimonials.t6_name": "Khalid Ibrahim",
    "testimonials.t6_role": "Co-founder, LogiTrack",
    "testimonials.t6_quote": "The mobile app they built scaled from 0 to 50,000 users without a single performance issue. Their cloud architecture expertise saved us months.",

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
    "services.learn": "اعرف المزيد ←",

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

    "nav.casestudy": "دراسة الحالة",
    "nav.process": "منهجية العمل",
    "nav.founder": "المؤسس",

    "packages.fastpay_banner_badge": "منصة FastPay SaaS",
    "packages.fastpay_banner_title": "هل تبحث عن حل تجارة إلكترونية جاهز؟",
    "packages.fastpay_banner_text": "اسألنا عن منصة FastPay SaaS \u2014 أطلق متجرك الإلكتروني اليوم بدون أي تعقيد تقني.",
    "packages.fastpay_banner_btn": "استكشف FastPay \u2190",
    "packages.fastpay_banner_ask": "استفسر عن FastPay",
    "packages.inquire_title": "أرغب في الاستفسار والاشتراك في باقة: ",
    "packages.inquire_desc_label": "الوصف: ",
    "packages.inquire_features_label": "الميزات المضمنة:\n",
    "packages.inquire_footer": "يرجى التواصل معي لمناقشة تفاصيل المشروع والجدول الزمني والبدء في التنفيذ.",
    "packages.fastpay_inquire_msg": "مرحباً NextVision،\n\nأود الاستفسار عن منصة FastPay SaaS الجاهزة للتجارة الإلكترونية، ومعرفة كيف يمكننا إطلاق متجرنا بدون أي تعقيد تقني.",

    "casestudy.badge": "دراسة حالة مؤسسية \u00b7 بيتا خاصة",
    "casestudy.title": "منصة FastPay: ",
    "casestudy.title_highlight": "تجارة إلكترونية SaaS متعددة المستأجرين",
    "casestudy.subtitle":
      "كيف طوّرت NextVision بنية تحتية سحابية متقدمة لتجارة رقمية سريعة ومتعددة المستأجرين صُممت خصيصاً للتجار والنمو الإقليمي.",
    "casestudy.metric1_val": "أقل من 3 دقائق",
    "casestudy.metric1_label": "إطلاق وتفعيل المتجر",
    "casestudy.metric2_val": "100%",
    "casestudy.metric2_label": "عزل تام لبيانات المستأجرين",
    "casestudy.metric3_val": "+45%",
    "casestudy.metric3_label": "زيادة معدل إتمام الشراء",
    "casestudy.metric4_val": "99.9%",
    "casestudy.metric4_label": "استقرار وجاهزية سحابية",
    "casestudy.challenge_badge": "التحدي والمشكلة",
    "casestudy.challenge_title": "تعقيد المنصات العالمية مقابل فوضى البيع على شبكات التواصل",
    "casestudy.challenge_quote":
      "يعاني التجار والشركات المحلية من تعقيد منصات التجارة العالمية وصعوبة إعدادها، مما يدفعهم للاعتماد الكثيف على رسائل شبكات التواصل. كانوا بحاجة ماسة لطريقة بسيطة وسريعة وآمنة لإطلاق متاجرهم ومضاعفة مبيعاتهم.",
    "casestudy.challenge_p1":
      "يعاني التجار والشركات الصاعدة بين خيارين صعبين: إما المعاناة مع منصات عالمية معقدة تتطلب أسابيع من الإعداد وتفرض رسوماً شهرية باهظة، أو الاعتماد على الفوضى اليدوية في رسائل واتساب وإنستغرام حيث تضيع الطلبات وتصعب إدارة الدفعات والمخزون.",
    "casestudy.challenge_p2":
      "كانت الحاجة ملحة لمحرك تجارة إلكترونية متكامل وفوري ينشئ المتاجر آلياً، ويدعم الدفع الإلكتروني المباشر، ويدمج قوة المحادثة في إتمام الصفقات بدون عوائق تقنية.",
    "casestudy.solution_badge": "الحل الهندسي",
    "casestudy.solution_title": "واجهة زجاجية Glassmorphism وبنية تحتية متعددة المستأجرين",
    "casestudy.solution_quote":
      "قمنا ببناء منصة SaaS مخصصة بواجهة Glassmorphism فائقة الجمال والسلاسة، تمكّن المستخدمين من إنشاء متاجرهم في دقائق. تتميز بعزل تام للمستأجرين، دفع إلكتروني تلقائي عبر Stripe، تكامل فوري للطلب عبر WhatsApp، وتحليلات متقدمة.",
    "casestudy.solution_p1":
      "طوّرت NextVision منصة FastPay من الصفر لتكون بنية سحابية بمعايير المؤسسات. صُممت بواجهة زجاجية داكنة راقية تتيح للتاجر إدارة المنتجات وتخصيص هوية المتجر والبدء في البيع خلال دقائق معدودة.",
    "casestudy.feat1_title": "عزل تام للمستأجرين (Multi-Tenancy)",
    "casestudy.feat1_desc":
      "بنية قواعد بيانات PostgreSQL معزولة عبر Prisma ORM تضمن الأمان المطلق للبيانات، وسرية معلومات كل متجر، وسهولة التوسع المستقل.",
    "casestudy.feat2_title": "دفع تلقائي عبر Stripe",
    "casestudy.feat2_desc":
      "معالجة بطاقات بنكية فورية متوافقة مع معايير PCI مع دعم الاشتراكات والفواتير الآلية والتسويات المالية السريعة.",
    "casestudy.feat3_title": "تكامل الطلب عبر WhatsApp",
    "casestudy.feat3_desc":
      "نظام إتمام طلبات بنقرة واحدة ينشئ ملخص الفاتورة وعنوان العميل ويوجهها مباشرة لمحادثة التاجر على واتساب لتسريع البيع.",
    "casestudy.feat4_title": "محرك تحليلات متقدم للتاجر",
    "casestudy.feat4_desc":
      "رصد لحظي لحجم المبيعات، ومعدلات السلات المتروكة، وتنبيهات المخزون، وسلوك المشترين لاتخاذ قرارات تجارية ذكية.",
    "casestudy.tech_title": "حزمة التقنيات المستخدمة",
    "casestudy.tech_role_nextjs": "واجهات سريعة على الـ Edge",
    "casestudy.tech_role_nestjs": "خدمات خلفية مصغرة",
    "casestudy.tech_role_postgres": "عزل كامل لبيانات المستأجرين",
    "casestudy.tech_role_prisma": "نمذجة بيانات آمنة الأنماط",
    "casestudy.tech_role_stripe": "فواتير ودفع إلكتروني آلي",
    "casestudy.btn_arch": "عرض البنية الهندسية",
    "casestudy.btn_inquire": "طلب تجربة النسخة الخاصة",
    "casestudy.tab_dash": "لوحة تحكم التاجر",
    "casestudy.tab_store": "واجهة المتجر الحية",
    "casestudy.tab_checkout": "الدفع والطلب عبر واتساب",
    "casestudy.mockup_label_dash": "معاينة النظام 1/3: لوحة التحليلات وإدارة المبيعات",
    "casestudy.mockup_label_store": "معاينة النظام 2/3: واجهة متجر عصرية عالية التحويل",
    "casestudy.mockup_label_checkout": "معاينة النظام 3/3: بوابة الدفع الهجينة بـ Stripe والواتساب",
    "casestudy.mockup_ssl": "تشفير SSL 256-bit",
    "casestudy.mockup_tenant_id": "معرّف المتجر",
    "casestudy.mockup_status_beta": "\u25cf النسخة الخاصة نشطة",
    "casestudy.mockup_mrr_label": "حجم المبيعات الشهري",
    "casestudy.mockup_mrr_change": "\u2191 +28.4% مقارنة بالشهر السابق",
    "casestudy.mockup_orders_label": "الطلبات (Stripe + واتساب)",
    "casestudy.mockup_fulfillment": "\u2191 94.2% نسبة التنفيذ",
    "casestudy.mockup_velocity_label": "تدفق المبيعات (تحديث لحظي)",
    "casestudy.mockup_realtime": "مباشر",
    "casestudy.mockup_feed_label": "سجل الطلبات المباشر",
    "casestudy.mockup_paid_stripe": "مدفوع (Stripe)",
    "casestudy.mockup_wa_confirmed": "مؤكد عبر واتساب",
    "casestudy.mockup_store_brand": "تشكيلة الواحة",
    "casestudy.mockup_cart": "السلة (2)",
    "casestudy.mockup_new_drop": "تشكيلة جديدة",
    "casestudy.mockup_store_hero_title": "أزياء وتقنيات عصرية راقية",
    "casestudy.mockup_store_hero_sub": "شراء فوري عبر WhatsApp وبطاقات Stripe.",
    "casestudy.mockup_prod1_name": "حقيبة تقنية ذكية v2",
    "casestudy.mockup_prod1_badge": "الأكثر مبيعاً",
    "casestudy.mockup_prod2_name": "ساعة كرونوغراف عصرية",
    "casestudy.mockup_prod2_badge": "كمية محدودة",
    "casestudy.mockup_quick_add": "إضافة سريعة +",
    "casestudy.mockup_checkout_header": "بوابة دفع FastPay الهجينة",
    "casestudy.mockup_shipping": "الشحن والتوصيل",
    "casestudy.mockup_free": "مجاني",
    "casestudy.mockup_total_due": "الإجمالي المستحق",
    "casestudy.mockup_wa_title": "طلب مباشر عبر WhatsApp (فوري)",
    "casestudy.mockup_popular": "الأكثر شيوعاً",
    "casestudy.mockup_wa_sub": "ينشئ رابط طلب مرمزاً ومباشراً لمحادثة التاجر لتأكيد وتجهيز الطلب في ثوانٍ.",
    "casestudy.mockup_wa_btn": "إتمام الطلب عبر WhatsApp \u2190",
    "casestudy.mockup_stripe_title": "بطاقات الدفع (مدعوم بواسطة Stripe)",
    "casestudy.mockup_stripe_sub": "معالجة متعددة العملات مع إصدار فوري للفواتير الإلكترونية.",
    "casestudy.mockup_pay_btn": "دفع $129.00",
    "casestudy.modal_badge": "المخطط الهيكلي والبنية السحابية",
    "casestudy.modal_title": "البنية الهندسية لمنصة FastPay",
    "casestudy.modal_subtitle": "مخطط النظام السحابي وتكامل الخدمات متعددة المستأجرين",
    "casestudy.node1_title": "الواجهة والـ Edge",
    "casestudy.node1_sub": "تطبيقات Next.js 16 وتصميم زجاجي",
    "casestudy.node2_title": "بوابة الـ API",
    "casestudy.node2_sub": "خدمات NestJS وحماية المستأجرين",
    "casestudy.node3_title": "طبقة البيانات",
    "casestudy.node3_sub": "قواعد بيانات معزولة مع Prisma",
    "casestudy.node4_title": "البوابات الخارجية",
    "casestudy.node4_sub": "ربط Stripe و WhatsApp Cloud API",
    "casestudy.flow_edge": "متاجر الـ Edge",
    "casestudy.flow_api": "خوادم NestJS",
    "casestudy.flow_db": "قاعدة بيانات معزولة",
    "casestudy.flow_webhooks": "إشعارات Webhook لحظية",
    "casestudy.detail1_title": "عزل صارم لبيانات كل مستأجر",
    "casestudy.detail1_desc": "يعمل متجر كل تاجر داخل مخطط PostgreSQL معزول ومحمٍ عبر وسائط استعلام Prisma، مما يضمن فصلاً كاملاً بنسبة 100% ويمنع تسرب البيانات بين المتاجر.",
    "casestudy.detail2_title": "بوابة شراء هجينة ومحادثة",
    "casestudy.detail2_desc": "تجمع بين بوابات الدفع الإلكتروني عبر Stripe وإمكانية إرسال الطلب المشفر بنقرة واحدة عبر WhatsApp، مما يتيح إتمام الشراء خلال أقل من 15 ثانية.",
    "casestudy.modal_close": "إغلاق المخطط",
    "casestudy.modal_download": "تحميل ملخص البنية الهندسية (PDF)",
    "casestudy.inquire_msg": "مرحباً فريق NextVision،\n\nأنا مهتم بالتعرف أكثر على منصة FastPay SaaS متعددة المستأجرين، وأود طلب تجربة النسخة التجريبية الخاصة (Private Beta) أو مناقشة تنفيذ مخصص لمشروعنا.",

    "process.badge": "منهجية العمل",
    "process.title": "مسار هندسي مدروس من 4 مراحل: ",
    "process.title_highlight": "كيف نحول فكرتك لواقع",
    "process.subtitle":
      "نقلل المخاطر الاستثمارية عبر منهجية رشيقة ومحطات تسليم واضحة تمنحك شفافية وتحكماً كاملاً من البداية وحتى الإطلاق وما بعده.",
    "process.step1_num": "01",
    "process.step1_title": "الاستكشاف والتحليل",
    "process.step1_ar_tag": "Discovery",
    "process.step1_summary": "فهم أهداف عملك وتحليل الجمهور المستهدف.",
    "process.step1_desc":
      "الاستكشاف (Discovery): فهم أهداف عملك والجمهور المستهدف. نقوم بتحليل عميق لنموذج عملك، ونحدد نقاط ألم المستخدمين، ونحلل المنافسين، ونرسم المتطلبات التقنية الدقيقة لضمان ملاءمة المنتج للسوق.",
    "process.step1_deliverables": "المخرجات: وثيقة النطاق التقني، مخطط البنية الهندسية، وخارطة طريق المراحل",
    "process.step2_num": "02",
    "process.step2_title": "التصميم وتجربة المستخدم",
    "process.step2_ar_tag": "Design",
    "process.step2_summary": "صناعة تجربة مستخدم عصرية تركز على التحويل.",
    "process.step2_desc":
      "التصميم (Design): صياغة واجهات مستخدم حديثة ومتمحورة حول العميل. نحوّل تدفقات المستخدم إلى نماذج تفاعلية ونظام تصميم عصري بلمسات زجاجية يعكس هويتك ويرفع التحويلات.",
    "process.step2_deliverables": "المخرجات: نموذج تفاعلي كامل على Figma، ومكتبة عناصر التصميم (Design System)",
    "process.step3_num": "03",
    "process.step3_title": "التطوير البرمجي المتقدم",
    "process.step3_ar_tag": "Development",
    "process.step3_summary": "البناء بأحدث حزم التقنيات لأقصى سرعة وأمان.",
    "process.step3_desc":
      "التطوير (Development): البرمجة بأحدث التقنيات لضمان السرعة والأمان التام. نكتب كوداً متكاملاً، نظيفاً وآمناً مع اختبارات مؤتمتة، وبنية خوادم وقواعد بيانات PostgreSQL قابلة للتوسع السريع.",
    "process.step3_deliverables": "المخرجات: قاعدة كود جاهزة للإنتاج، ومعاينات تجريبية أسبوعية، وخطوط CI/CD مؤتمتة",
    "process.step4_num": "04",
    "process.step4_title": "الإطلاق والدعم المستمر",
    "process.step4_ar_tag": "Launch & Support",
    "process.step4_summary": "نشر المنتج وتقديم الصيانة والدعم الفني المستمر.",
    "process.step4_desc":
      "الإطلاق والدعم (Launch & Support): نشر منتجك وتوفير الصيانة الدورية. ندير الإطلاق السحابي الحي بدون أي توقف، ونربط أنظمة المراقبة اللحظية، ونقدم اتفاقيات دعم فني مستمر لحماية استثمارك.",
    "process.step4_deliverables": "المخرجات: إطلاق سحابي حي، تدقيق الأداء والأمان، واتفاقية صيانة ودعم SLA مخصصة",
    "process.callout_title": "وضوح تام \u00b7 دورات عمل أسبوعية شفافة 100%",
    "process.callout_desc": "تحصل أسبوعياً على روابط اختبار حية، واستعراضات تفاعلية للإنجاز، وتواصل مباشر مع مهندس مشروعك.",
    "process.callout_btn": "احجز جلسة استكشاف \u2190",
    "process.discovery_msg": "مرحباً NextVision،\n\nأود حجز جلسة استكشاف استراتيجية (Discovery Session) لمناقشة أهداف مشروعي والتخطيط للمرحلة الأولى.",

    "founder.badge": "تعرف على المؤسس",
    "founder.title": "قيادة هندسية تقودها ",
    "founder.title_highlight": "الرؤية والدقة",
    "founder.subtitle":
      "إشراف تقني مباشر يدمج المهارة البرمجية المتقدمة مع تحقيق نتائج تجارية حقيقية وملموسة.",
    "founder.name": "محمد درويش",
    "founder.role": "المؤسس ومهندس البرمجيات الرئيسي",
    "founder.bio":
      "\"مرحباً، أنا محمد درويش، مؤسس NextVision. مطور Full Stack شغوف ببناء حلول SaaS قابلة للتوسع ومساعدة الشركات المحلية في التحول الرقمي. أجمع بين الخبرة التقنية العميقة والفهم الدقيق لمتطلبات السوق المحلي.\"",
    "founder.p2":
      "في NextVision، لا ننظر للبرمجة كمجرد سطور كود تُكتب، بل نبني مع رواد الأعمال أصولاً رقمية تدوم وتطور العمليات التشغيلية وتفتح آفاقاً جديدة للمبيعات والتفوق في السوق.",
    "founder.pillar1_title": "إشراف هندسي مباشر",
    "founder.pillar1_desc": "كل مشروع يُصمم وتُراجع بنيته الهندسية مباشرة بواسطة كبار المهندسين التقنيين.",
    "founder.pillar2_title": "فهم حقيقي للسوق المحلي",
    "founder.pillar2_desc": "إلمام كامل بآليات الدفع الإقليمية، وسلوك المستهلك، وقنوات التجارة المعتمدة على المحادثة.",
    "founder.pillar3_title": "بنية SaaS قابلة للتوسع",
    "founder.pillar3_desc": "تصميم معماري يستوعب التوسع السريع ومستأجرين متعددين واستقرار سحابي طويل الأمد.",
    "founder.skill1": "تطوير SaaS متكامل",
    "founder.skill2": "خبرة NestJS و Next.js",
    "founder.skill3": "قواعد بيانات PostgreSQL",
    "founder.skill4": "بنية سحابية متقدمة",
    "founder.status_tooltip": "نشط ومتاح لاستقبال المشاريع",
    "founder.cta_btn": "ناقش مشروعك مباشرة مع محمد",
    "founder.status_available": "متاح لاستقبال مشاريع نوعية مختارة",
    "founder.consult_msg": "مرحباً محمد،\n\nأود مناقشة مشروعي معك مباشرة واستكشاف كيف يمكن لـ NextVision مساعدتنا في بناء حلنا البرمجي وتطوير أعمالنا.",

    "testimonials.t1_name": "سارة الراشد",
    "testimonials.t1_role": "الرئيس التنفيذي، TechFlow الإمارات",
    "testimonials.t1_quote": "حوّلت NextVision منصتنا القديمة إلى منتج بمواصفات عالمية خلال 10 أسابيع فقط. دقة اهتمامهم بالتفاصيل وتواصلهم الاستباقي صنعا الفارق الحقيقي.",
    "testimonials.t2_name": "أحمد منصور",
    "testimonials.t2_role": "المدير التقني، FinBridge",
    "testimonials.t2_quote": "سلّم الفريق تطبيقاً مالياً معقداً دون أي خطأ برمجي حرج يوم الإطلاق. خبرتهم في الأمان البرمجي والأداء العالي استثنائية وعالمية بحق.",
    "testimonials.t3_name": "ليلى حسن",
    "testimonials.t3_role": "المؤسس، EduNova",
    "testimonials.t3_quote": "العمل مع NextVision كان كامتلاك فريق تقني داخلي يهتم بنجاحك حقاً. ساعدونا في تحسين نموذج عملنا ووجهونا لبناء منتج أكثر نضجاً وقوة.",
    "testimonials.t4_name": "عمر خليل",
    "testimonials.t4_role": "مدير المنتجات، RetailX",
    "testimonials.t4_quote": "من مرحلة الاستكشاف إلى الإطلاق، كان مسار العمل سلساً واحترافياً. التزموا بالوقت والميزانية، وتجاوزت النتائج مستهدفاتنا في الشهر الأول.",
    "testimonials.t5_name": "نورة السيد",
    "testimonials.t5_role": "نائب رئيس الهندسة، CloudBase",
    "testimonials.t5_quote": "NextVision من الشركات النادرة التي تجمع بين التفوق الهندسي والفهم التجاري العميق. أوصي بهم بشدة لأي مشروع يسعى للتميز.",
    "testimonials.t6_name": "خالد إبراهيم",
    "testimonials.t6_role": "شريك مؤسس، LogiTrack",
    "testimonials.t6_quote": "التطبيق الذي بنوه توسع من 0 إلى أكثر من 50,000 مستخدم دون أي تباطؤ أو مشكلة في الأداء. خبرتهم في البنية السحابية وفرت علينا شهوراً.",

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
