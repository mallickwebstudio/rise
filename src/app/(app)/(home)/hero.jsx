import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/text-animate";
import { BlurFade } from "@/components/blur-fade";
import ZoomIn from "@/components/zoom-in";

export default function Hero() {
    return (
        <section
            className="relative bg-backgroundmin-h-screen flex justify-center items-center overflow-hidden"
            role="region"
            aria-label="Promotional hero section with call to action"
        >

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-neutral-950/70" aria-hidden="true" /> */}

            <div className="relative mx-auto container px-6 py-12 md:p-16 lg:py-20">
                {/* Text Content */}
                <div>
                    <header>
                        <BlurFade once>
                            <h1 className="h1 flex items-center justify-between dark:text-foreground text-9xl sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-extrabold text-balance">
                                <span>R</span>
                                <span>I</span>
                                <span>S</span>
                                <span>E</span>
                            </h1>
                        </BlurFade>
                        {/* <p className="mt-3 md:mt-4 md:text-lg text-muted/70 dark:text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p> */}
                    </header>

                    <div className="mt-6 font-bold text-2xl text-center">
                        <TextAnimate delay={0.9}>
                            Comming Soon
                        </TextAnimate>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {/* <Button
                            className="cursor-pointer"
                            variant="default"
                            size="lg"
                            aria-label="Get started with the service"
                        >
                            Buy Now
                        </Button> */}
                        {/* <Button
                            className="cursor-pointer"
                            variant="outline"
                            size="lg"
                            aria-label="Learn more about the offering"
                        >
                            Learn more
                        </Button> */}
                    </div>
                </div>

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
        </section>
    );
}
