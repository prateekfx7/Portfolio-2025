import { Code, Video, Palette, Layers, Smartphone, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Clean, responsive, and fast websites that work beautifully on every device.",
    features: ["React & Next.js", "Tailwind CSS", "SEO Optimized"],
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "YouTube, reels, shorts, promos, and social media edits that captivate audiences.",
    features: ["Motion Graphics", "Color Grading", "Sound Design"],
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    icon: Palette,
    title: "UI / Visual Design",
    description: "Minimal designs focused on clarity, impact, and exceptional user experience.",
    features: ["Figma Design", "Prototyping", "Design Systems"],
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Cohesive visual identity that makes your brand memorable and recognizable.",
    features: ["Logo Design", "Style Guides", "Assets Creation"],
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Experiences optimized for mobile users who make up most of today's traffic.",
    features: ["Responsive", "Touch-Friendly", "Fast Loading"],
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/9/3/13]",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast websites and optimized videos for maximum engagement.",
    features: ["Core Web Vitals", "Optimization", "Analytics"],
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:3/1/4/13]",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30 -z-10" />
      
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Services tailored for <span className="text-primary italic">your success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your brand thrive in the modern landscape.
          </p>
        </motion.div>
        
        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.li 
              key={service.title} 
              variants={itemVariants}
              className={cn("min-h-[14rem] list-none", service.area)}
            >
              <div className="relative h-full rounded-2xl border border-border/50 p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl bg-card p-6 shadow-card md:p-6">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {service.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Services;
