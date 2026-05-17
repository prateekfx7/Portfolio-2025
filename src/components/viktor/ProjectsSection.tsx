import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const projects = [
  {
    name: "SheShield AI",
    desc: "AI-powered safety companion designed for women.",
    url: "https://sheshieldai.vercel.app/",
    img: "https://api.microlink.io/?url=https%3A%2F%2Fsheshieldai.vercel.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800",
  },
  {
    name: "Shakti AI",
    desc: "Intelligent assistant focused on empowerment and productivity.",
    url: "https://shaktiai.vercel.app/",
    img: "https://api.microlink.io/?url=https%3A%2F%2Fshaktiai.vercel.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800",
  },
  {
    name: "CityMind AI",
    desc: "Smart city insights and AI-driven urban intelligence.",
    url: "https://citymindaii.vercel.app/",
    img: "https://api.microlink.io/?url=https%3A%2F%2Fcitymindaii.vercel.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800",
  },
];

function ProjectItem({ p }: { p: (typeof projects)[number] }) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className={inView ? "animate-fade-in-up" : "opacity-0"}>
      <div className="ml-20 md:ml-28 mb-6">
        <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-[#051A24]">
          {p.name}
        </h3>
        <p className="text-sm md:text-base text-[#051A24]/70 mt-2">{p.desc}</p>
      </div>
      <a href={p.url} target="_blank" rel="noreferrer" className="block">
        <img
          src={p.img}
          alt={p.name}
          className="w-full rounded-2xl shadow-lg object-cover aspect-[16/10] bg-[#0D212C]/5"
        />
      </a>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-16 md:gap-20"
    >
      {projects.map((p) => (
        <ProjectItem key={p.name} p={p} />
      ))}
    </section>
  );
}
