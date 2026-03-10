"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We track the scroll progress of the self-contained 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: Intro (Center) - Fades out quickly
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: "I build digital experiences" (Left)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, -50]);

  // Section 3: "Bridging design and engineering" (Right)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-8 overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
            Vansh Arora
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-light text-gray-200 drop-shadow-md">
            AI Engineer
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 max-w-2xl text-left"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-lg leading-tight">
            I engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">intelligent systems.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 font-light max-w-md pointer-events-auto">
             Specializing in AI automation, creating Voice Agents, LLM evaluations, and high-performance backend architecture.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 max-w-2xl text-right"
        >
           <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-lg leading-tight">
            Bridging AI and <br/> <span className="italic font-light">high-end interfaces.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
