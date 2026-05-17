import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "With very little guidance team delivered designs that were consistently spot on. Felt like an extension of our team from day one.",
    name: "Marcus Anderson",
    role: "CEO",
    company: "Data.storage",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "Viktor led the creation of our best fundraising deck to date! The clarity and craft pushed our story to a new level.",
    name: "alexwu",
    role: "Founder",
    company: "Nexgate",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "Working with Viktor transformed our product vision. The team understood our business and shipped fast.",
    name: "James Mitchell",
    role: "VP Product",
    company: "LaunchPad",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "The design quality exceeded our expectations on every milestone. A rare blend of speed and craft.",
    name: "Rachel Foster",
    role: "Co-founder",
    company: "Nexus Labs",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      "Incredible work from start to finish. The studio brought taste, rigor, and a clear point of view.",
    name: "David Zhang",
    role: "Head of Design",
    company: "Paradigm Labs",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

const tripled = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(testimonials.length);
  const [paused, setPaused] = useState(false);
  const cardWidth = 427.5 + 24; // width + gap

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearInterval(id);
  }, [paused]);

  // wrap around
  useEffect(() => {
    if (index >= testimonials.length * 2) {
      const t = setTimeout(() => setIndex(testimonials.length), 800);
      return () => clearTimeout(t);
    }
    if (index < testimonials.length) {
      const t = setTimeout(() => setIndex(testimonials.length * 2 - 1), 800);
      return () => clearTimeout(t);
    }
  }, [index]);

  const trackRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="md:max-w-4xl md:ml-auto px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight text-[#0D212C]">
          What <span className="font-mondwest">builders</span> say
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <span className="text-sm text-[#051A24]">Clutch 5/5</span>
        </div>
      </div>

      <div
        className="pl-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{
            transform: `translateX(-${index * cardWidth}px)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {tripled.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8 shrink-0"
              style={{ width: "min(calc(100vw - 48px), 427.5px)" }}
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                <path
                  d="M0 22V14C0 6.27 4.36 1.18 12 0V5.45C7.91 6.27 6 8.91 6 13H12V22H0ZM16 22V14C16 6.27 20.36 1.18 28 0V5.45C23.91 6.27 22 8.91 22 13H28V22H16Z"
                  fill="#0D212C"
                />
              </svg>
              <p className="text-base text-[#0D212C] leading-relaxed mt-6">{t.quote}</p>
              <div className="flex items-center gap-3 mt-8">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm text-[#0D212C]">{t.name}</div>
                  <div className="text-xs text-[#273C46]">→ {t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-8 px-0">
          <button
            onClick={() => setIndex((i) => i - 1)}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-black/5"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-[#0D212C]" />
          </button>
          <button
            onClick={() => setIndex((i) => i + 1)}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-black/5"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-[#0D212C]" />
          </button>
        </div>
      </div>
    </section>
  );
}
