import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function TestimonialSection() {
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible(e.isIntersecting)),
      { threshold: 0 }
    );
    obs.observe(el);
    const onScroll = () => {
      if (!visible || !el) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const progress = 1 - rect.top / window.innerHeight;
        const next = Math.max(-200, Math.min(200, progress * 200 - 100));
        setOffset(next);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <section className="py-12 px-6 max-w-2xl mx-auto text-left">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <Quote className="w-6 h-6 text-slate-900" />
      </div>
      <p
        className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight text-[#0D212C] mt-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        I left <span className="font-mondwest">Apple</span> to build the studio I always wanted to
        work with
      </p>
      <p
        className="italic text-sm text-[#273C46] mt-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        Viktor Oddy
      </p>
      <div
        className="flex items-center gap-8 mt-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        <span style={{ width: 80, fontSize: 24 }} className="font-medium text-slate-900">
          Apple
        </span>
        <span style={{ width: 83, fontSize: 24 }} className="font-medium text-slate-900">
          IDEO
        </span>
        <span style={{ width: 110, fontSize: 24 }} className="font-medium text-slate-900">
          Polygon
        </span>
      </div>
      <div
        ref={imgWrapRef}
        className="mt-10 opacity-0 animate-fade-in-up overflow-hidden"
        style={{ animationDelay: "0.5s" }}
      >
        <img
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85"
          alt="Chris Halaska"
          className="w-full max-w-xs rounded-2xl shadow-lg"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>
    </section>
  );
}
