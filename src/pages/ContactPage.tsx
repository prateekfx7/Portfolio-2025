import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Github, Instagram, Globe } from "lucide-react";
import PortfolioPageShell from "@/components/portfolio/PortfolioPageShell";

const cards = [
  { icon: Mail, label: "Email", value: "prateekmaurya862@gmail.com", href: "mailto:prateekmaurya862@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6264638602", href: "tel:+916264638602" },
  { icon: MapPin, label: "Based in", value: "India — Remote worldwide" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/prateekfx/" },
  { icon: Github, label: "GitHub", href: "https://github.com/prateekfx7" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/prateek.fx" },
  { icon: Globe, label: "Website", href: "https://prateekfx.super.site/" },
];

const ContactPage = () => (
  <PortfolioPageShell
    eyebrow="Contact"
    title="Let's"
    italicWord="connect"
    subtext="Fastest reply on email. Open to freelance, collaborations, and the occasional chat about craft."
    hideFooter
  >
    <div className="grid gap-5 md:gap-6 md:grid-cols-3">
      {cards.map((c, i) => {
        const Icon = c.icon;
        const Content = (
          <>
            <div className="w-11 h-11 rounded-full bg-portfolio-bg border border-portfolio-stroke flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-portfolio-text" />
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-portfolio-muted mb-2">{c.label}</p>
            <p className="text-lg text-portfolio-text break-all">{c.value}</p>
            {c.href && (
              <span className="inline-flex items-center gap-1 mt-4 text-sm text-portfolio-muted group-hover:text-portfolio-text transition-colors">
                Reach out <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            )}
          </>
        );
        return (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            {c.href ? (
              <a
                href={c.href}
                className="group block rounded-3xl border border-portfolio-stroke bg-portfolio-surface p-6 md:p-7 hover:border-portfolio-text/30 transition-colors h-full"
              >
                {Content}
              </a>
            ) : (
              <div className="rounded-3xl border border-portfolio-stroke bg-portfolio-surface p-6 md:p-7 h-full">
                {Content}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>

    <div className="mt-12 md:mt-16 rounded-3xl border border-portfolio-stroke bg-portfolio-surface p-6 md:p-10">
      <p className="text-xs uppercase tracking-[0.25em] text-portfolio-muted mb-4">Elsewhere</p>
      <div className="flex flex-wrap gap-3">
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-portfolio-stroke bg-portfolio-bg px-4 py-2 text-sm text-portfolio-muted hover:text-portfolio-text hover:border-portfolio-text/30 transition-colors"
            >
              <Icon className="w-4 h-4" />
              {s.label}
            </a>
          );
        })}
      </div>
    </div>

    <div className="mt-16 text-center">
      <p className="text-xs text-portfolio-muted uppercase tracking-[0.3em] mb-4">Prefer email?</p>
      <a href="mailto:prateekmaurya862@gmail.com" className="relative inline-flex items-center gap-2 group">
        <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative inline-flex items-center gap-2 bg-portfolio-text text-portfolio-bg rounded-full px-7 py-3.5 text-base">
          prateekmaurya862@gmail.com <ArrowUpRight className="w-4 h-4" />
        </span>
      </a>
    </div>
  </PortfolioPageShell>
);

export default ContactPage;
