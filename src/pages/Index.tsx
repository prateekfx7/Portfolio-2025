import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hls from "hls.js";
import { ArrowUpRight, Linkedin, Github, Instagram, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import PortfolioNav from "@/components/portfolio/PortfolioNav";
import profilePhoto from "@/assets/profile-photo.png";
import projectShakti from "@/assets/project-shakti.png";
import projectReels from "@/assets/project-reels.png";
import projectCityMind from "@/assets/project-citymind.png";
import projectSheShield from "@/assets/project-sheshield.png";

gsap.registerPlugin(ScrollTrigger);

const HLS_SRC = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

// ============ Loading Screen ============
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Develop", "Create", "Inspire"];

  useEffect(() => {
    const start = performance.now();
    const duration = 2700;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onComplete, 400);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-portfolio-bg text-portfolio-text overflow-hidden">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-6 text-xs text-portfolio-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-instrument italic text-portfolio-text/80"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-6 text-6xl md:text-8xl lg:text-9xl font-instrument text-portfolio-text tabular-nums">
        {String(count).padStart(3, "0")}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-portfolio-stroke/50">
        <div
          className="h-full accent-gradient origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137,170,204,0.35)",
          }}
        />
      </div>
    </div>
  );
};

// ============ Navbar ============
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Journal", href: "#journal" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-portfolio-surface/80 px-2 py-2 ${
          scrolled ? "shadow-md shadow-black/30" : ""
        }`}
      >
        <a href="#home" className="group relative w-9 h-9 rounded-full p-[1.5px] accent-gradient transition-transform hover:scale-110">
          <div className="w-full h-full rounded-full bg-portfolio-bg flex items-center justify-center text-portfolio-text font-instrument italic text-[13px]">
            PM
          </div>
        </a>
        <div className="w-px h-5 bg-portfolio-stroke mx-1 hidden sm:block" />
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-portfolio-muted hover:text-portfolio-text hover:bg-portfolio-stroke/50 transition-colors"
          >
            {l.label}
          </a>
        ))}
        <Link
          to="/chat"
          className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-portfolio-muted hover:text-portfolio-text hover:bg-portfolio-stroke/50 transition-colors"
        >
          Chat
        </Link>
        <div className="w-px h-5 bg-portfolio-stroke mx-1 hidden sm:block" />
        <a href="#contact" className="relative group ml-1">
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative inline-flex items-center gap-1 bg-portfolio-surface rounded-full backdrop-blur-md text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-portfolio-text">
            Say hi <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </nav>
  );
};

// ============ Hero ============
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Developer", "Editor", "Creator", "Designer"];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".name-reveal", { opacity: 0, y: 50, duration: 1.2, delay: 0.1 });
      tl.from(".blur-in", { opacity: 0, filter: "blur(10px)", y: 20, duration: 1, stagger: 0.1 }, "-=0.8");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center text-center px-4">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-portfolio-bg to-transparent" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        <div className="blur-in text-xs text-portfolio-muted uppercase tracking-[0.3em] mb-8">
          PORTFOLIO '26
        </div>
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-instrument italic leading-[0.9] tracking-tight text-portfolio-text mb-6">
          Prateek Maurya
        </h1>
        <p className="blur-in text-lg md:text-2xl text-portfolio-text/80 mb-4">
          A{" "}
          <span
            key={roleIndex}
            className="font-instrument italic text-portfolio-text animate-role-fade-in inline-block"
          >
            {roles[roleIndex]}
          </span>{" "}
          based in India.
        </p>
        <p className="blur-in text-sm md:text-base text-portfolio-muted max-w-md mb-12">
          Helping creators, startups, and businesses turn ideas into clean, high-impact digital experiences.
        </p>
        <div className="blur-in inline-flex flex-wrap justify-center gap-4">
          <a
            href="#work"
            className="rounded-full text-sm px-7 py-3.5 bg-portfolio-text text-portfolio-bg hover:bg-portfolio-bg hover:text-portfolio-text transition-all hover:scale-105 relative group"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity" />
            See Works
          </a>
          <a
            href="#contact"
            className="rounded-full text-sm px-7 py-3.5 border-2 border-portfolio-stroke bg-portfolio-bg text-portfolio-text hover:border-transparent transition-all hover:scale-105 relative group"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity" />
            Reach out →
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-xs text-portfolio-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-portfolio-stroke relative overflow-hidden">
          <div className="absolute inset-0 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

// ============ Selected Works ============
const projects = [
  {
    title: "Shakti AI",
    tag: "Web",
    image: projectShakti,
    link: "https://shaktiai.vercel.app/",
    span: "md:col-span-7",
  },
  {
    title: "CityMind AI",
    tag: "Web",
    image: projectCityMind,
    link: "https://citymindaii.vercel.app/",
    span: "md:col-span-5",
  },
  {
    title: "She Shield AI",
    tag: "Web",
    image: projectSheShield,
    link: "https://sheshieldai.vercel.app/",
    span: "md:col-span-5",
  },
  {
    title: "Video Edits & Reels",
    tag: "Video",
    image: projectReels,
    link: "https://www.instagram.com/prateek.fx/",
    span: "md:col-span-7",
  },
];

const SectionHeader = ({ eyebrow, title, italicWord, subtext }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
    className="mb-12 md:mb-16"
  >
    <div className="flex items-center gap-3 mb-6">
      <span className="w-8 h-px bg-portfolio-stroke" />
      <span className="text-xs text-portfolio-muted uppercase tracking-[0.3em]">{eyebrow}</span>
    </div>
    <h2 className="text-4xl md:text-6xl text-portfolio-text font-light tracking-tight mb-4">
      {title} <span className="font-instrument italic">{italicWord}</span>
    </h2>
    <p className="text-portfolio-muted max-w-lg">{subtext}</p>
  </motion.div>
);

const Works = () => (
  <section id="work" className="bg-portfolio-bg py-12 md:py-16">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <SectionHeader
        eyebrow="Selected Work"
        title="Featured"
        italicWord="projects"
        subtext="A selection of projects I've worked on, from concept to launch."
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className={`group relative bg-portfolio-surface border border-portfolio-stroke rounded-3xl overflow-hidden aspect-[4/3] ${p.span}`}
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                backgroundSize: "4px 4px",
              }}
            />
            <div className="absolute inset-0 bg-portfolio-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="relative">
                <span className="absolute -inset-[2px] rounded-full accent-gradient" />
                <span className="relative inline-flex items-center gap-2 bg-portfolio-text text-portfolio-bg rounded-full px-5 py-2 text-sm">
                  View — <span className="font-instrument italic">{p.title}</span>
                </span>
              </span>
            </div>
            <div className="absolute top-4 left-4 text-xs text-portfolio-text/90 bg-portfolio-bg/50 backdrop-blur rounded-full px-3 py-1 uppercase tracking-wider">
              {p.tag}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

// ============ Journal / About ============
const About = () => (
  <section id="journal" className="bg-portfolio-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <SectionHeader
        eyebrow="About Me"
        title="A little"
        italicWord="about me"
        subtext="The creator behind the work — passion, process, and what drives me."
      />
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-portfolio-stroke aspect-[4/5]"
        >
          <img src={profilePhoto} alt="Prateek Maurya" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg/60 to-transparent" />
        </motion.div>
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl font-instrument italic text-portfolio-text leading-snug">
            "I build websites and edit videos that don't just look good — they move people."
          </p>
          <p className="text-portfolio-muted leading-relaxed">
            I'm Prateek Maurya, a web developer and video editor with a love for clean
            interfaces, sharp typography, and storytelling that converts. Whether it's a
            startup landing page or a brand reel, I bring craft and care to every pixel
            and frame.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-portfolio-stroke">
            {[
              { num: "5+", label: "Years" },
              { num: "50+", label: "Projects" },
              { num: "100%", label: "Effort" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-instrument italic text-portfolio-text">{s.num}</div>
                <div className="text-xs uppercase tracking-wider text-portfolio-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============ Contact / Footer ============
const ContactFooter = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
    return () => { tween.kill(); };
  }, []);

  const marqueeText = Array(10).fill("BUILDING THE FUTURE • ").join("");

  return (
    <section id="contact" className="relative bg-portfolio-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-60"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="overflow-hidden mb-16">
          <div ref={marqueeRef} className="whitespace-nowrap text-6xl md:text-8xl font-instrument italic text-portfolio-text/30">
            {marqueeText}{marqueeText}
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="text-xs text-portfolio-muted uppercase tracking-[0.3em] mb-6">Let's work together</p>
          <h2 className="text-5xl md:text-7xl font-instrument italic text-portfolio-text mb-10">
            Have a project in mind?
          </h2>
          <a
            href="mailto:prateekmaurya862@gmail.com"
            className="relative inline-flex items-center gap-2 group"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative inline-flex items-center gap-2 bg-portfolio-text text-portfolio-bg rounded-full px-8 py-4 text-base">
              prateekmaurya862@gmail.com <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
          <p className="text-portfolio-muted mt-4 text-sm">+91 6264638602</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-portfolio-stroke">
          <div className="flex items-center gap-2 text-sm text-portfolio-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for projects
          </div>
          <div className="flex items-center gap-5 text-portfolio-muted">
            <a href="https://www.linkedin.com/in/prateekfx/" target="_blank" rel="noreferrer" className="hover:text-portfolio-text transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com/prateekfx7" target="_blank" rel="noreferrer" className="hover:text-portfolio-text transition-colors"><Github className="w-4 h-4" /></a>
            <a href="https://instagram.com/prateek.fx" target="_blank" rel="noreferrer" className="hover:text-portfolio-text transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="https://prateekfx.super.site/" target="_blank" rel="noreferrer" className="hover:text-portfolio-text transition-colors"><Globe className="w-4 h-4" /></a>
          </div>
          <div className="text-xs text-portfolio-muted">© 2026 Prateek Maurya</div>
        </div>
      </div>
    </section>
  );
};

// ============ Page ============
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text font-body antialiased">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <Works />
      <About />
      <ContactFooter />
    </div>
  );
};

export default Index;
