import Button from "./Button";

export default function Hero() {
  return (
    <section className="max-w-[440px] mx-auto px-6 pt-12 md:pt-16 text-left">
      <h2
        className="font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold tracking-tight mb-4 text-[#051A24] opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        Viktor Oddy
      </h2>
      <p
        className="font-mono text-xs md:text-sm text-[#051A24] mb-2 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        The creative studio of Viktor Oddy
      </p>
      <h1
        className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight text-[#0D212C] whitespace-nowrap opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        Build the <span className="font-mondwest">next wave,</span>
        <br />
        the <span className="font-mondwest">bold way.</span>
      </h1>
      <div
        className="flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        <p>
          I spent seven years at Apple crafting products used by over a billion people. I founded
          Vortex Studio to bring that same level of thinking to innovators shaping what comes next.
        </p>
        <p>
          The studio is deliberately small. I guide the creative vision on every project, backed by
          a veteran design crew that moves fast without cutting corners.
        </p>
        <p>Projects start at $5,000 per month.</p>
      </div>
      <div
        className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.5s" }}
      >
        <Button variant="primary">Start a chat</Button>
        <Button variant="secondary">View projects</Button>
      </div>
    </section>
  );
}
