import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "About", to: "/about" },
  { label: "Chat", to: "/chat" },
];

const PortfolioNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-portfolio-surface/80 px-2 py-2 ${
          scrolled ? "shadow-md shadow-black/30" : ""
        }`}
      >
        <Link
          to="/"
          className="group relative w-9 h-9 rounded-full p-[1.5px] accent-gradient transition-transform hover:scale-110"
        >
          <div className="w-full h-full rounded-full bg-portfolio-bg flex items-center justify-center text-portfolio-text font-instrument italic text-[13px]">
            PM
          </div>
        </Link>
        <div className="w-px h-5 bg-portfolio-stroke mx-1 hidden sm:block" />
        {links.map((l) => {
          const active = pathname === l.to;
          return (
            <Link
              key={l.label}
              to={l.to}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                active
                  ? "text-portfolio-text bg-portfolio-stroke/60"
                  : "text-portfolio-muted hover:text-portfolio-text hover:bg-portfolio-stroke/50"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
        <div className="w-px h-5 bg-portfolio-stroke mx-1 hidden sm:block" />
        <Link to="/contact" className="relative group ml-1">
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative inline-flex items-center gap-1 bg-portfolio-surface rounded-full backdrop-blur-md text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-portfolio-text">
            Say hi <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default PortfolioNav;
