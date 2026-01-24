import { Github, Linkedin, Instagram, Globe, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/prateekfx7", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/prateekfx/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/prateek.fx", label: "Instagram" },
  { icon: Globe, href: "https://prateekfx.super.site/", label: "Website" },
];

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50 bg-muted/20 relative overflow-hidden">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-display font-bold text-foreground inline-block mb-4">
              Prateek<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Web Developer & Video Editor helping brands create impactful digital experiences.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a 
                  href="mailto:prateekmaurya862@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  prateekmaurya862@gmail.com
                </a>
              </li>
              <li>Based in India 🇮🇳</li>
              <li>Available for remote work worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Prateek Maurya. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
