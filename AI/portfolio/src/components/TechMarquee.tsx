"use client";

import { motion } from "framer-motion";
import { 
  SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, 
  SiOpenai, SiPostgresql, SiSupabase, SiPrisma, SiTailwindcss, SiFastapi,
  SiJavascript, SiGit, SiGithub, SiN8N
} from "react-icons/si";

import { AnthropicIcon, LangChainIcon, ElevenLabsIcon } from "./CustomIcons";

const TECHNOLOGIES = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Next.js", icon: SiNextdotjs },
  {name: "React.js", icon: SiReact},
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "OpenAI", icon: SiOpenai },
  { name: "Claude", icon: AnthropicIcon },
  { name: "LangChain", icon: LangChainIcon },
  { name: "Voice Agents", icon: ElevenLabsIcon },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Prisma", icon: SiPrisma },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "n8n", icon: SiN8N },
];

// Duplicate the array to create a seamless infinite loop
const MARQUEE_ITEMS = [...TECHNOLOGIES, ...TECHNOLOGIES];

export default function TechMarquee() {
  return (
    <section className="w-full bg-[#121212] pt-12 md:pt-16 pb-0 overflow-hidden">
      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right Fading Gradients for Smoothness */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#121212] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#121212] to-transparent z-10" />

        <motion.div
          className="flex items-center gap-24 md:gap-32 whitespace-nowrap pl-24 md:pl-32 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
        >
          {MARQUEE_ITEMS.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 text-3xl md:text-5xl font-bold text-white/20 hover:text-white transition-colors duration-300 cursor-default"
              >
                <Icon className="w-8 h-8 md:w-12 md:h-12" />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
