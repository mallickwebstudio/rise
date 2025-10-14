"use client";

import { TextAnimate } from "@/components/text-animate";
import { motion } from "motion/react";

const features = [
  {
    title: "Unleash Confidence, Instantly",
    description: "A fragrance crafted to empower your presence wherever you go.",
    align: "start",
    delay: 0,
  },
  {
    title: "Luxury in Every Drop.",
    description:
      "High-quality ingredients, blended with precision for a timeless aura.",
    align: "end",
    delay: 0.2,
  },
  {
    title: "Stay Fresh, Stay Unforgettable.",
    description:
      "Long-lasting scent that lingers effortlessly from day to night.",
    align: "start",
    delay: 0.4,
  },
];

export default function Feature() {
  return (
    <section
      className="relative bg-background flex items-center"
      role="region"
      aria-label="Promotional feature section with call to action"
    >
      <div className="relative h-full mx-auto container px-6 py-12 md:p-16 lg:py-20">
        <header className="h-full flex flex-col justify-between space-y-40">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className={`max-w-lg ${
                item.align === "end" ? "place-self-end text-right" : "text-left"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: item.delay,
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-vogue font-extrabold tracking-tight text-balance">
                <TextAnimate animation="blurIn" once={true}>
                  {item.title}
                </TextAnimate>
              </h2>

              <p className="mt-4 text-muted-foreground text-xl">
                <TextAnimate animation="blurIn" once={true} delay={item.delay + 0.3}>
                  {item.description}
                </TextAnimate>
              </p>
            </motion.div>
          ))}
        </header>
      </div>
    </section>
  );
}

