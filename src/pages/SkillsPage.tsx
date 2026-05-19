import { motion } from "framer-motion";
import PortfolioPageShell from "@/components/portfolio/PortfolioPageShell";
import { Code2, Video, Palette, Sparkles, Wrench, Brain } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Web Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "Node.js", "Supabase"],
  },
  {
    icon: Video,
    title: "Video Editing",
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "Color Grading", "Motion Graphics"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "UI/UX", "Typography", "Brand Identity", "Prototyping"],
  },
  {
    icon: Brain,
    title: "AI & Tools",
    skills: ["Gemini API", "OpenAI", "Prompt Engineering", "LangChain", "Vector DBs"],
  },
  {
    icon: Wrench,
    title: "Tooling",
    skills: ["Git", "Vite", "Bun", "Vercel", "Cloudflare", "Linux"],
  },
  {
    icon: Sparkles,
    title: "Soft Skills",
    skills: ["Storytelling", "Client Communication", "Problem Solving", "Self-Directed Learning"],
  },
];

const SkillsPage = () => (
  <PortfolioPageShell
    eyebrow="Skills"
    title="The toolkit I"
    italicWord="craft with"
    subtext="A blend of code, motion, and design — the disciplines I lean on to ship work that feels considered end-to-end."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {groups.map((g, i) => {
        const Icon = g.icon;
        return (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group relative rounded-3xl border border-portfolio-stroke bg-portfolio-surface p-6 md:p-7 hover:border-portfolio-text/30 transition-colors"
          >
            <div className="w-11 h-11 rounded-full bg-portfolio-bg border border-portfolio-stroke flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-portfolio-text" />
            </div>
            <h3 className="text-xl font-instrument italic text-portfolio-text mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full bg-portfolio-bg border border-portfolio-stroke text-portfolio-muted group-hover:text-portfolio-text transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  </PortfolioPageShell>
);

export default SkillsPage;
