"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 192; // We verified the count of frames

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload Images to Avoid Flickering
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        // The files are named like `frame_000_delay-0.041s.webp`, up to `frame_191_delay-0.041s.webp`
        const numPattern = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${numPattern}_delay-0.041s.webp`;
        
        img.onload = () => {
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
                // Initial render once all loaded
               requestAnimationFrame(() => renderFrame(0));
            }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!images[index] || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use object-fit cover logic for Canvas
    const img = images[index];
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Resize canvas handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Set actual pixel dimensions to match display size
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame on resize
        const currentIndex = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.floor(scrollYProgress.get() * FRAME_COUNT))
        );
        renderFrame(currentIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Init

    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);


  // Tie Scroll to Canvas Update
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if(images.length === 0) return;
      
      const frameIndex = Math.floor(latest * (FRAME_COUNT - 1));
      
      // Use RequestAnimationFrame for butter smooth renders
      requestAnimationFrame(() => renderFrame(frameIndex));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
