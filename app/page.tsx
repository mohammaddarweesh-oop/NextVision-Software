import nextDynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const dynamic = "force-dynamic";

const About = nextDynamic(() => import("@/components/About"), { ssr: true });
const Services = nextDynamic(() => import("@/components/Services"), { ssr: true });
const TechStack = nextDynamic(() => import("@/components/TechStack"), { ssr: true });
const Packages = nextDynamic(() => import("@/components/Packages"), { ssr: true });
const FAQ = nextDynamic(() => import("@/components/FAQ"), { ssr: true });
const Testimonials = nextDynamic(() => import("@/components/Testimonials"), { ssr: true });
const Contact = nextDynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = nextDynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main style={{ background: "#050810", color: "#e8eaf0", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <AnimateOnScroll><About /></AnimateOnScroll>
      <AnimateOnScroll><Services /></AnimateOnScroll>
      <AnimateOnScroll><TechStack /></AnimateOnScroll>
      <AnimateOnScroll><Packages /></AnimateOnScroll>
      <AnimateOnScroll><FAQ /></AnimateOnScroll>
      <AnimateOnScroll><Testimonials /></AnimateOnScroll>
      <AnimateOnScroll><Contact /></AnimateOnScroll>
      <Footer />
    </main>
  );
}