import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hls from "hls.js";
import { ArrowUpRight, Linkedin, Github, Instagram, Globe } from "lucide-react";

const HLS_SRC = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const PortfolioFooter = () => {
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
    return () => {
      tween.kill();
    };
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
            {marqueeText}
            {marqueeText}
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="text-xs text-portfolio-muted uppercase tracking-[0.3em] mb-6">Let's work together</p>
          <h2 className="text-5xl md:text-7xl font-instrument italic text-portfolio-text mb-10">
            Have a project in mind?
          </h2>
          <a href="mailto:prateekmaurya862@gmail.com" className="relative inline-flex items-center gap-2 group">
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

export default PortfolioFooter;
