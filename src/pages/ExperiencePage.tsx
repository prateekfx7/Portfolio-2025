import { motion } from "framer-motion";
import PortfolioPageShell from "@/components/portfolio/PortfolioPageShell";

const items = [
  {
    period: "2024 — Present",
    role: "Freelance Web Developer & Editor",
    org: "Self-employed",
    points: [
      "Built AI-driven web apps including Shakti AI, CityMind AI, and She Shield AI.",
      "Designed and shipped landing pages and product sites for early-stage founders.",
      "Edited short-form reels and brand films for creators and small businesses.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer (Contract)",
    org: "Various Clients",
    points: [
      "Delivered production React/TypeScript dashboards with Tailwind and Framer Motion.",
      "Integrated Supabase auth, RLS, and edge functions across multiple products.",
      "Owned UI from wireframe to deploy with weekly client reviews.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Video Editor & Motion Designer",
    org: "Prateek.fx",
    points: [
      "Produced 200+ short-form videos for Instagram and YouTube.",
      "Built recurring edit workflows in Premiere Pro + After Effects.",
      "Color-graded brand films with DaVinci Resolve.",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Self-taught Builder",
    org: "Independent",
    points: [
      "Learned web stack end-to-end: HTML, CSS, JS, React.",
      "Shipped first portfolio and experimental side projects.",
      "Started exploring AI tooling and prompt design.",
    ],
  },
];

const ExperiencePage = () => (
  <PortfolioPageShell
    eyebrow="Experience"
    title="A short"
    italicWord="timeline"
    subtext="The shape of how I've worked — clients, crafts, and the kinds of problems I keep coming back to."
  >
    <div className="relative">
      <div className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-portfolio-stroke md:-translate-x-1/2" />
      <div className="space-y-10 md:space-y-14">
        {items.map((it, i) => (
          <motion.div
            key={it.period}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`relative md:grid md:grid-cols-2 md:gap-12 ${
              i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
            }`}
          >
            <div className="md:text-right pl-10 md:pl-0 md:pr-10">
              <div className="absolute left-3 md:left-1/2 top-2 w-2.5 h-2.5 rounded-full accent-gradient -translate-x-1/2 md:-translate-x-1/2 ring-4 ring-portfolio-bg" />
              <p className="text-xs uppercase tracking-[0.25em] text-portfolio-muted mb-2">{it.period}</p>
              <h3 className="text-2xl md:text-3xl font-instrument italic text-portfolio-text">{it.role}</h3>
              <p className="text-portfolio-muted mt-1">{it.org}</p>
            </div>
            <div className="pl-10 md:pl-10 mt-4 md:mt-0">
              <ul className="space-y-2 text-portfolio-muted text-sm md:text-base">
                {it.points.map((p) => (
                  <li key={p} className="leading-relaxed">— {p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PortfolioPageShell>
);

export default ExperiencePage;
