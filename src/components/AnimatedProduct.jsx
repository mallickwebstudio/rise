"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function AnimatedProduct({ children }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ Track container height for vertical travel
  const [containerHeight, setContainerHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const updateMetrics = () => {
        setContainerHeight(containerRef.current.scrollHeight);
        setViewportWidth(window.innerWidth);
      };

      updateMetrics();
      window.addEventListener("resize", updateMetrics);
      return () => window.removeEventListener("resize", updateMetrics);
    }
  }, []);

  // ✅ Helper: clamp width at 1400px max
  const vw = (percent) => {
    const baseWidth = Math.min(viewportWidth || 0, 1400); // cap at 1400px
    return (baseWidth * percent) / 100;
  };

  // ✅ Scroll-based transforms
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [vw(-5), vw(30), vw(-30), vw(30)]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight * 0.75]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [-10, 15, -15, 15]
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Product (absolute overlay) */}
      <motion.div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          translateX: "-50%",
          scale,
          x,
          y,
          rotate,
          zIndex: 50,
          pointerEvents: "none",
        }}
        className="w-[10rem] hidden md:block"
      >
        <Image
          className="w-full object-cover select-none pointer-events-none"
          src="/perfume-bottle.svg"
          width={400}
          height={400}
          alt="Product Image"
          priority
        />
      </motion.div>

      {/* Sections */}
      {children}
    </div>
  );
}
