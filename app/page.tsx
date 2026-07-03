import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const TechStack = dynamic(() => import("@/components/TechStack"), { ssr: true });
const Packages = dynamic(() => import("@/components/Packages"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

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
