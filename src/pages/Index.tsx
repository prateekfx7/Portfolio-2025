import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";
import projectShakti from "@/assets/project-shakti.png";
import projectReels from "@/assets/project-reels.png";

// ============ Reusable: FadeIn ============
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <motion.div
    initial={{ opacity: 0, x, y }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "50px", amount: 0 }}
    transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

// ============ Reusable: Magnet ============
const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
  style,
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.max(Math.abs(dx) - rect.width / 2, Math.abs(dy) - rect.height / 2);
      if (dist < padding) {
        setActive(true);
        setPos({ x: dx / strength, y: dy / strength });
      } else {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

// ============ Reusable: ContactButton ============
const ContactButton = ({ href = "#contact", label = "Contact Me" }: { href?: string; label?: string }) => (
  <a
    href={href}
    className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest"
    style={{
      background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
      boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      outline: "2px solid #ffffff",
      outlineOffset: "-3px",
    }}
  >
    {label}
  </a>
);

const LiveProjectButton = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors"
  >
    Live Project
  </a>
);

// ============ Reusable: AnimatedText ============
const AnimatedText = ({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const chars = text.split("");
  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        const start = i / chars.length;
        const end = (i + 1) / chars.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <span key={i} style={{ position: "relative", display: "inline" }}>
            <span style={{ opacity: 0 }}>{c}</span>
            <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>{c}</motion.span>
          </span>
        );
      })}
    </p>
  );
};

// ============ Hero ============
const HeroSection = () => (
  <section className="h-screen flex flex-col" style={{ overflowX: "clip" }}>
    <FadeIn y={-20} delay={0}>
      <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
        <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
        <a href="#pricing" className="hover:opacity-70 transition-opacity duration-200">Price</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
      </nav>
    </FadeIn>

    <div className="flex-1 flex flex-col justify-between relative px-6 md:px-10">
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn y={40} delay={0.15}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m prateek
          </h1>
        </FadeIn>
      </div>

      <Magnet
        padding={150}
        strength={3}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <FadeIn y={30} delay={0.6}>
          <img
            src={profilePhoto}
            alt="Prateek Maurya"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </FadeIn>
      </Magnet>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn y={20} delay={0.35}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a web developer & video editor crafting striking and unforgettable digital experiences
          </p>
        </FadeIn>
        <FadeIn y={20} delay={0.5}>
          <ContactButton />
        </FadeIn>
      </div>
    </div>
  </section>
);

// ============ Marquee ============
const MARQUEE_GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const MarqueeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const row1 = MARQUEE_GIFS.slice(0, 11);
  const row2 = MARQUEE_GIFS.slice(11);
  const triple = (arr: string[]) => [...arr, ...arr, ...arr];

  const tile = (src: string, i: number) => (
    <img
      key={i}
      src={src}
      alt=""
      loading="lazy"
      className="rounded-2xl object-cover shrink-0"
      style={{ width: 420, height: 270 }}
    />
  );

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden" style={{ background: "#0C0C0C" }}>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}>
          {triple(row1).map(tile)}
        </div>
        <div className="flex gap-3" style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}>
          {triple(row2).map(tile)}
        </div>
      </div>
    </section>
  );
};

// ============ About ============
const AboutSection = () => (
  <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20">
    <FadeIn x={-80} y={0} delay={0.1} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
      <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" />
    </FadeIn>
    <FadeIn x={-80} y={0} delay={0.25} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
      <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" />
    </FadeIn>
    <FadeIn x={80} y={0} delay={0.15} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
      <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" />
    </FadeIn>
    <FadeIn x={80} y={0} delay={0.3} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
      <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" />
    </FadeIn>

    <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
      <FadeIn y={40} delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>
      <AnimatedText
        text="With more than 5 years of experience in web development and video editing, I help creators, startups, and businesses turn ideas into clean, high-impact digital experiences. I truly enjoy working with brands that aim to stand out and present their best image. Let's build something incredible together!"
        className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
        style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
      />
    </div>
    <div className="mt-16 sm:mt-20 md:mt-24 relative z-10">
      <ContactButton />
    </div>
  </section>
);

// ============ Services ============
const SERVICES = [
  { n: "01", name: "Web Development", desc: "Modern, responsive websites built with React and the latest tools — fast, scalable, and optimized for conversion." },
  { n: "02", name: "Video Editing", desc: "Professional video editing, motion graphics, and reels that capture attention and tell your story." },
  { n: "03", name: "UI / Visual Design", desc: "Clean, purposeful interface design with attention to typography, layout, and user experience." },
  { n: "04", name: "Brand Identity", desc: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a memorable presence." },
  { n: "05", name: "Mobile-First", desc: "Designs and builds that look and perform beautifully across every device, starting with the smallest screen." },
];

const ServicesSection = () => (
  <section id="services" className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" style={{ background: "#FFFFFF" }}>
    <h2
      className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
      style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
    >
      Services
    </h2>
    <div className="max-w-5xl mx-auto">
      {SERVICES.map((s, i) => (
        <FadeIn key={s.n} delay={i * 0.1}>
          <div
            className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
            style={{ borderTop: i === 0 ? "1px solid rgba(12,12,12,0.15)" : "none", borderBottom: "1px solid rgba(12,12,12,0.15)" }}
          >
            <div className="font-black shrink-0" style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}>
              {s.n}
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="font-medium uppercase" style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}>
                {s.name}
              </div>
              <div className="font-light leading-relaxed max-w-2xl" style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}>
                {s.desc}
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

// ============ Projects (stacking cards) ============
const PROJECTS = [
  {
    n: "01",
    category: "Web",
    name: "Shakti AI",
    link: "https://shaktiai.vercel.app/",
    images: [projectShakti, projectShakti, projectShakti],
  },
  {
    n: "02",
    category: "Video",
    name: "Video Edits & Reels",
    link: "https://www.instagram.com/prateek.fx/",
    images: [projectReels, projectReels, projectReels],
  },
  {
    n: "03",
    category: "Personal",
    name: "Portfolio",
    link: "https://prateekfx.super.site/",
    images: [projectShakti, projectReels, projectShakti],
  },
];

const ProjectCard = ({
  project,
  index,
  total,
  containerRef,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const start = index / total;
  const scale = useTransform(scrollYProgress, [start, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32" style={{ top: `${96 + index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4 sm:mb-6">
          <div className="flex items-end gap-4 sm:gap-6">
            <div className="font-black text-[#D7E2EA]" style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}>
              {project.n}
            </div>
            <div className="flex flex-col gap-1 pb-3">
              <div className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest">{project.category}</div>
              <div className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: "clamp(1rem, 2.2vw, 2rem)" }}>{project.name}</div>
            </div>
          </div>
          <LiveProjectButton href={project.link} />
        </div>

        <div className="grid grid-cols-5 gap-3 sm:gap-4">
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
            <img
              src={project.images[0]}
              alt=""
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.images[1]}
              alt=""
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="col-span-3">
            <img
              src={project.images[2]}
              alt=""
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>
      <div ref={containerRef} className="max-w-6xl mx-auto">
        {PROJECTS.map((p, i) => (
          <div key={p.n} className="h-[85vh]">
            <ProjectCard project={p} index={i} total={PROJECTS.length} containerRef={containerRef} />
          </div>
        ))}
      </div>
    </section>
  );
};

// ============ Contact / Footer ============
const ContactFooter = () => (
  <section id="contact" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" style={{ background: "#0C0C0C" }}>
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}
      >
        Let&apos;s talk
      </h2>
      <p
        className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[520px]"
        style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)" }}
      >
        Have a project in mind? Reach out via email or phone and let&apos;s create something impactful together.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <ContactButton href="mailto:prateekmaurya862@gmail.com" label="Email Me" />
        <ContactButton href="tel:+916264638602" label="Call Me" />
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-6 text-[#D7E2EA]/70 text-sm uppercase tracking-widest">
        <a href="https://github.com/prateekfx7" target="_blank" rel="noopener noreferrer" className="hover:text-[#D7E2EA] transition">GitHub</a>
        <a href="https://www.linkedin.com/in/prateekfx/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D7E2EA] transition">LinkedIn</a>
        <a href="https://prateekfx.super.site/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D7E2EA] transition">Website</a>
        <a href="/chat" className="hover:text-[#D7E2EA] transition">Chat AI</a>
      </div>
      <div className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest pt-10">
        © {new Date().getFullYear()} Prateek Maurya — 3D Creator
      </div>
    </div>
  </section>
);

// ============ Page ============
const Index = () => {
  useEffect(() => {
    document.title = "Prateek — Web Developer & Video Editor";
    document.documentElement.style.background = "#0C0C0C";
    document.body.style.background = "#0C0C0C";
    return () => {
      document.documentElement.style.background = "";
      document.body.style.background = "";
    };
  }, []);

  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip", fontFamily: "'Kanit', sans-serif" }}>
      <style>{`
        .hero-heading {
          background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
      `}</style>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
};

export default Index;
