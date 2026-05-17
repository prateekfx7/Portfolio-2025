import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";

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
        I build <span className="font-mondwest">websites</span> and edit{" "}
        <span className="font-mondwest">videos</span> that actually move the needle.
      </p>
      <p
        className="italic text-sm text-[#273C46] mt-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        Prateek Maurya
      </p>
      <div
        className="flex items-center gap-8 mt-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        <span style={{ fontSize: 24 }} className="font-medium text-slate-900">
          React
        </span>
        <span style={{ fontSize: 24 }} className="font-medium text-slate-900">
          Next.js
        </span>
        <span style={{ fontSize: 24 }} className="font-medium text-slate-900">
          Premiere
        </span>
        <span style={{ fontSize: 24 }} className="font-medium text-slate-900">
          AE
        </span>
      </div>
      <div
        ref={imgWrapRef}
        className="mt-10 opacity-0 animate-fade-in-up overflow-hidden"
        style={{ animationDelay: "0.5s" }}
      >
        <img
          src={profilePhoto}
          alt="Prateek Maurya"
          className="w-full max-w-xs rounded-2xl shadow-lg object-cover"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>
    </section>
  );
}
