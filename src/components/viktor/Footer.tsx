import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <Button variant="primary" href="mailto:prateekmaurya862@gmail.com">
          Start a chat
        </Button>
        <div className="flex items-start gap-8">
          <ArrowUpRight className="w-5 h-5 text-[#051A24] mt-1" />
          <div className="flex flex-col gap-2">
            <a href="mailto:prateekmaurya862@gmail.com" className="text-base text-[#051A24] hover:opacity-70 transition">
              Email
            </a>
            <a href="tel:+916264638602" className="text-base text-[#051A24] hover:opacity-70 transition">
              Phone
            </a>
            <a href="#projects" className="text-base text-[#051A24] hover:opacity-70 transition">
              Projects
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/prateekfx7"
              target="_blank"
              rel="noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prateekfx/"
              target="_blank"
              rel="noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://prateekfx.super.site/"
              target="_blank"
              rel="noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
