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

  // ✅ Dynamically store container height for y animation
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const updateHeight = () => {
        setContainerHeight(containerRef.current.scrollHeight);
      };

      updateHeight(); // set on mount
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  // ✅ Helper: convert percentage → pixel value based on viewport width
  const vw = (percent) =>
    typeof window !== "undefined"
      ? (window.innerWidth * percent) / 100
      : 0;

  // ✅ Use transforms (now dynamic)
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const x = useTransform(
    scrollYProgress,
    [0, 0.40, 0.70, 1],
    [
      vw(-5),  // -5% of viewport width
      vw(30),  // 30%
      vw(-30),
      vw(30),
    ]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight * 0.75] // travels 80% of total section height
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.40, 0.70, 1],
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
