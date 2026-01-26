import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <StackedCircularFooter
      brandName="Prateek"
      email="prateekmaurya862@gmail.com"
      tagline="Web Developer & Video Editor helping brands create impactful digital experiences."
      socialLinks={{
        github: "https://github.com/prateekfx7",
        linkedin: "https://www.linkedin.com/in/prateekfx/",
        instagram: "https://instagram.com/prateek.fx",
        website: "https://prateekfx.super.site/",
      }}
      navLinks={footerLinks}
    />
  );
};

export default Footer;
