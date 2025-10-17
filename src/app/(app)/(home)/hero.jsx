"use client"
import Image from "next/image";
import { BlurFade } from "@/components/blur-fade";
import ZoomIn from "@/components/zoom-in";
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

export default function Hero() {
    return (
        <section
            className="relative bg-backgroundmin-h-screen flex justify-center items-center overflow-hidden"
            role="region"
            aria-label="Promotional hero section with call to action"
        >

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-neutral-950/70" aria-hidden="true" /> */}

            <div className="relative mx-auto container min-h-[150vh] px-6 py-12 md:p-16 lg:py-20 flex flex-col justify-between gap-40">
                {/* Text Content */}
                <div className="relative">
                    <header>
                        <BlurFade once>
                            <h1 className="h1 flex items-center justify-between dark:text-foreground text-9xl sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-extrabold text-balance">
                                <span>R</span>
                                <span>I</span>
                                <span>S</span>
                                <span>E</span>
                            </h1>
                        </BlurFade>
                        <div className="mt-6 font-bold text-2xl text-center">
                            <TextAnimate delay={0.9} once={true}>
                                Comming Soon
                            </TextAnimate>
                        </div>
                    </header>

                    {/* Background Image */}
                    <div className="-mt-20 absolute md:hidden mx-auto w-1/4 flex items-center rotate-12 justify-center inset-0">
                        <ZoomIn>
                            <Image
                                className='w-full object-contain bg-center select-none pointer-events-none'
                                src='/perfume-bottle.svg'
                                width={400}
                                height={400}
                                alt='Image Description'
                                priority
                            />
                        </ZoomIn>
                    </div>
                </div>


                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`max-w-lg ${item.align === "end" ? "place-self-end text-right" : "text-left"
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
            </div>
        </section>
    );
}
