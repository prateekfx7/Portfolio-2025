import { ReactNode } from "react";
import { motion } from "framer-motion";
import PortfolioNav from "./PortfolioNav";
import PortfolioFooter from "./PortfolioFooter";

interface Props {
  children: ReactNode;
  eyebrow: string;
  title: string;
  italicWord: string;
  subtext?: string;
  hideFooter?: boolean;
}

const PortfolioPageShell = ({ children, eyebrow, title, italicWord, subtext, hideFooter }: Props) => (
  <motion.div
    className="min-h-screen bg-portfolio-bg text-portfolio-text font-body antialiased overflow-x-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <PortfolioNav />
    <main className="pt-28 md:pt-36 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-portfolio-stroke" />
            <span className="text-xs text-portfolio-muted uppercase tracking-[0.3em]">{eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-7xl text-portfolio-text font-light tracking-tight mb-4">
            {title} <span className="font-instrument italic">{italicWord}</span>
          </h1>
          {subtext && <p className="text-portfolio-muted max-w-xl">{subtext}</p>}
        </motion.div>
        {children}
      </div>
    </main>
    {!hideFooter && <PortfolioFooter />}
  </motion.div>
);

export default PortfolioPageShell;
