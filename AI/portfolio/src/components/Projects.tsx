import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    title: "Pitchsense - AI Sales Training Platform",
    category: "Software Engineering Intern @ HSV",
    description: "An AI-driven platform that simulates sales scenarios and evaluates agent performance using advanced LLMs, Voice Agents, and Evals pipelines.",
    link: "#" // Internship, no direct repo
  },
  {
    id: 2,
    title: "MCP Context Bridge",
    category: "AI Architecture",
    description: "Cross-LLM communication system with real-time memory transfer, achieving 80-85% data compression.",
    link: "https://github.com/vansh-903/context-mcp"
  },
  {
    id: 3,
    title: "GoBeyond - Travel Planner",
    category: "Full Stack Web App",
    description: "Personalized travel itinerary platform using React, Firebase Auth/Firestore, and Tailwind CSS.",
    link: "https://github.com/vansh-903"
  },
  {
    id: 4,
    title: "LocateME - RealTime Tracker",
    category: "Real-time Application",
    description: "Live geolocation tracking platform utilizing Node.js, WebSockets, and the Google Maps API.",
    link: "https://github.com/vansh-903"
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] pt-16 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
             Work <span className="text-gray-500">Experience</span>
           </h2>
           
           {/* Social Links */}
           <div className="flex gap-4 items-center">
             <Link href="https://github.com/vansh-903" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
               <Github className="w-5 h-5 text-gray-300" />
             </Link>
             <Link href="https://www.linkedin.com/in/im-vansharora/" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
               <Linkedin className="w-5 h-5 text-gray-300" />
             </Link>
             <Link href="https://drive.google.com/file/d/1ybyips4W8Iu-mcc-GuQiGPGEIqzUaAAj/view?usp=sharing" target="_blank" className="flex items-center gap-2 px-4 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-medium text-sm">
               <FileText className="w-4 h-4" />
               View Resume
             </Link>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
             <Link 
               href={project.link}
               target={project.link !== "#" ? "_blank" : "_self"}
               key={project.id}
               className="group relative flex flex-col justify-end p-8 md:p-12 h-96 rounded-2xl overflow-hidden cursor-pointer"
             >
                {/* Background Base */}
                 <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 transition-colors duration-500 group-hover:bg-white/10" />
                
                {/* Glow Effect */}
                 <div className="absolute -inset-px rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                <div className="relative z-10 flex flex-col gap-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="flex items-center justify-between">
                     <p className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                       {project.category}
                     </p>
                     {project.link !== "#" && (
                       <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     )}
                   </div>
                   <h3 className="text-2xl md:text-3xl font-semibold text-white">
                     {project.title}
                   </h3>
                   <p className="mt-2 text-gray-300 text-sm md:text-base max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                   </p>
                </div>
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
