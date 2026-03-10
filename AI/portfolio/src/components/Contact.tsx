"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Animate elements as the user scrolls down into the contact section
  const yText = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacityText = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  
  const scaleGlow = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityGlow = useTransform(scrollYProgress, [0, 1], [0, 0.4]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[80vh] min-h-[600px] bg-black flex flex-col items-center justify-center text-center overflow-hidden"
    >
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Ambient Moving Orbs */}
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[100vw] h-[150vw] md:h-[100vw] opacity-40"
        >
           <div className="absolute top-[20%] left-[20%] w-64 md:w-96 h-64 md:h-96 bg-gray-500/20 rounded-full blur-[80px] md:blur-[120px]" />
           <div className="absolute bottom-[20%] right-[20%] w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-[80px] md:blur-[120px]" />
        </motion.div>

        {/* Central interactive scroll glow */}
        <motion.div 
          style={{ scale: scaleGlow, opacity: opacityGlow }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] h-[50vh] bg-white/10 rounded-full blur-[100px] md:blur-[150px]" 
        />
      </div>

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-4xl flex flex-col items-center gap-8 px-6"
      >
        <h2 className="flex flex-col items-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          <span className="text-center text-3xl md:text-5xl lg:text-6xl">Let's build something</span>
          <span className="text-gray-400 italic font-light drop-shadow-2xl mt-2 md:mt-4">together.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
          I'm always open to discussing new opportunities, AI integrations, or just chatting about high-performance architecture.
        </p>
      </motion.div>

      {/* Social Links Footer Bar pinned to the bottom of the section */}
      <motion.div 
         style={{ opacity: opacityText }}
         className="absolute bottom-12 flex gap-8 md:gap-16 items-center"
      >
           <Link href="https://github.com/vansh-903" target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors p-2 hover:scale-110 transform duration-300">
             <Github className="w-6 h-6 md:w-8 md:h-8" />
             <span className="text-sm md:text-lg font-medium tracking-wide">GitHub</span>
           </Link>
           <Link href="https://www.linkedin.com/in/im-vansharora/" target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors p-2 hover:scale-110 transform duration-300">
             <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
             <span className="text-sm md:text-lg font-medium tracking-wide">LinkedIn</span>
           </Link>
      </motion.div>
    </section>
  );
}
