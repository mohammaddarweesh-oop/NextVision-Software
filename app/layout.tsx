import type { Metadata } from "next";
import { Syne, DM_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n";
import WhatsAppButton from "@/components/WhatsAppButton";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "NextVision Software | Custom MERN & Next.js Development Agency",
//   description:
//     "NextVision Software crafts powerful, scalable digital solutions for startups and enterprises. Web, Mobile, Cloud, AI & more.",
//   keywords: [
//     "web development",
//     "software company",
//     "NextVision",
//     "React",
//     "Next.js",
//     "Node.js",
//     "MongoDB",
//     "TypeScript",
//     "custom software",
//     "Jordanian software company",
//   ],
//   openGraph: {
//     title: "NextVision Software | Custom MERN & Next.js Development Agency",
//     description:
//       "NextVision Software crafts powerful, scalable digital solutions for startups and enterprises.",
//     url: "https://nextvision-software.com",
//     siteName: "NextVision Software",
//     locale: "en_US",
//     alternateLocale: "ar_SA",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "NextVision Software — We Build Software That Shapes Tomorrow",
//     description:
//       "NextVision Software crafts powerful, scalable digital solutions for startups and enterprises.",
//   },
//   robots: "index, follow",
// };

export const metadata: Metadata = {
  title: "NextVision Software | Custom MERN & Next.js Development Agency in GCC",
  description:
    "Partner with NextVision Software for scalable web applications and SaaS solutions. Specialized in custom MERN stack, Next.js, and NestJS for businesses in Saudi Arabia, UAE, and Qatar.",
  keywords: [
    "software development company Saudi Arabia",
    "web development agency Riyadh",
    "custom SaaS development KSA",
    "enterprise software development Saudi Arabia",
    "MERN stack developers Dubai",
    "Next.js web development UAE",
    "software company Qatar",
    "web application development Doha",
    "NestJS backend solutions GCC",
    "TypeScript enterprise software",
    "React and Node.js agency",
    "NextVision software"
  ],
  openGraph: {
    title: "NextVision Software — Premier Web Development Agency in Saudi Arabia & GCC",
    description:
      "Transform your business with scalable, high-performance web applications. Specializing in MERN stack, Next.js, and enterprise SaaS solutions across KSA, UAE, and Qatar.",
    url: "https://nextvision-software.com",
    siteName: "NextVision Software",
    locale: "en_US", 
    alternateLocale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://nextvision-software.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextVision Software - Custom Web Development Agency in KSA & UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextVision Software — Top Web Development Agency in GCC",
    description:
      "Scalable MERN, Next.js, and SaaS solutions for enterprises and startups in Saudi Arabia, UAE, and Qatar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${tajawal.variable}`}>
      <body>
        <LocaleProvider>{children}<WhatsAppButton /></LocaleProvider>
      </body>
    </html>
  );
}