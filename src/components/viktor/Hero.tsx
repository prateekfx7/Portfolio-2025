import Button from "./Button";
import profilePhoto from "@/assets/profile-photo.png";

export default function Hero() {
  return (
    <section className="max-w-[440px] mx-auto px-6 pt-12 md:pt-16 text-left">
      <div
        className="flex items-center gap-3 mb-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <img
          src={profilePhoto}
          alt="Prateek Maurya"
          className="w-12 h-12 rounded-full object-cover object-top"
        />
        <h2 className="font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold tracking-tight text-[#051A24]">
          Prateek Maurya
        </h2>
      </div>
      <p
        className="font-mono text-xs md:text-sm text-[#051A24] mb-2 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        Web Developer & Video Editor
      </p>
      <h1
        className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight text-[#0D212C] whitespace-nowrap opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        Web & Video <span className="font-mondwest">solutions</span>
        <br />
        that <span className="font-mondwest">stand out.</span>
      </h1>
      <div
        className="flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        <p>
          I'm Prateek Maurya — a freelance Web Developer and Video Editor helping creators,
          startups, and businesses turn ideas into clean, high-impact digital experiences.
        </p>
        <p>
          I work solo, end to end. From concept and design to a launched website or a finished cut,
          I keep things sharp, fast, and made to convert.
        </p>
        <p>Projects start at ₹15,000.</p>
      </div>
      <div
        className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.5s" }}
      >
        <Button variant="primary" href="mailto:prateekmaurya862@gmail.com">
          Start a chat
        </Button>
        <Button variant="secondary" href="#projects">
          View projects
        </Button>
      </div>
    </section>
  );
}
