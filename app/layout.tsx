import type { Metadata } from "next";
import { Syne, DM_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n";

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

export const metadata: Metadata = {
  title: "NextVision Software — We Build Software That Shapes Tomorrow",
  description:
    "NextVision Software crafts powerful, scalable digital solutions for startups and enterprises. Web, Mobile, Cloud, AI & more.",
  keywords: [
    "web development",
    "software company",
    "NextVision",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "custom software",
    "Egypt software company",
  ],
  openGraph: {
    title: "NextVision Software — We Build Software That Shapes Tomorrow",
    description:
      "NextVision Software crafts powerful, scalable digital solutions for startups and enterprises.",
    url: "https://nextvision-software.com",
    siteName: "NextVision Software",
    locale: "en_US",
    alternateLocale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextVision Software — We Build Software That Shapes Tomorrow",
    description:
      "NextVision Software crafts powerful, scalable digital solutions for startups and enterprises.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // تمرير متغيرات الخطوط للـ HTML
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${tajawal.variable}`}>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}