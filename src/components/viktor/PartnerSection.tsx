import { useRef, useState } from "react";
import Button from "./Button";
import { marqueeImages } from "./Marquee";
import profilePhoto from "@/assets/profile-photo.png";

interface Trail {
  id: number;
  x: number;
  y: number;
  src: string;
  rot: number;
}

export default function PartnerSection() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const lastSpawn = useRef(0);
  const idRef = useRef(0);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastSpawn.current < 80) return;
    lastSpawn.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const src = marqueeImages[Math.floor(Math.random() * marqueeImages.length)];
    const rot = Math.random() * 20 - 10;
    const id = ++idRef.current;
    setTrails((t) => [...t, { id, x, y, src, rot }]);
    setTimeout(() => setTrails((t) => t.filter((tr) => tr.id !== id)), 1000);
  };

  return (
    <section className="w-full py-12 px-6">
      <div
        className="relative max-w-7xl mx-auto py-48 rounded-[40px] bg-white shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.06)] overflow-hidden"
        onMouseMove={onMove}
      >
        {trails.map((t) => (
          <img
            key={t.id}
            src={t.src}
            alt=""
            className="absolute pointer-events-none rounded-xl shadow-lg trail-fade"
            style={{
              left: t.x - 80,
              top: t.y - 60,
              width: 160,
              height: 120,
              transform: `rotate(${t.rot}deg)`,
              objectFit: "cover",
            }}
          />
        ))}
        <div className="relative text-center">
          <h2 className="font-mondwest text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12">
            Work with me
          </h2>
          <Button variant="primary" href="mailto:prateekmaurya862@gmail.com" className="!pl-2">
            <img
              src={profilePhoto}
              alt="Prateek"
              className="w-10 h-10 rounded-full object-cover object-top mr-3"
            />
            Start a chat with Prateek
          </Button>
        </div>
      </div>
    </section>
  );
}
