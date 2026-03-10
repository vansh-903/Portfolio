import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import TechMarquee from "@/components/TechMarquee";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white/30">
      <div className="relative">
        {/* The 500vh container for the scrolling canvas and overlay */}
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Tech Stack Marquee (Now above grid) */}
      <TechMarquee />

      {/* The grid below the marquee */}
      <Projects />

      {/* Contact Section replaces simple footer */}
      <Contact />
    </main>
  );
}
