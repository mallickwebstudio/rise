import { BlurFade } from "@/components/blur-fade";
import { TextAnimate } from "@/components/text-animate";
import { Button } from "@/components/ui/button";

export default function AdditionalData() {
    return (
        <section
            className="relativemin-h-screen bg-background"
            role="region"
            aria-label="Promotional hero section with call to action"
        >
            <div className="relative h-full mx-auto container px-6 py-12 md:p-16 lg:py-20">
                {/* Text Content */}
                <header className="h-full flex flex-col justify-between space-y-40">
                    <h2 className="max-w-md font-vogue text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance">
                        <TextAnimate animation="blurIn" once={true}>
                            POWER
                        </TextAnimate>
                    </h2>

                    <h2 className="mx-auto font-vogue max-w-md text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance">
                        <TextAnimate animation="blurIn" once={true}>
                            ELEGANCE
                        </TextAnimate>
                    </h2>

                    <h2 className="max-w-md font-vogue text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance place-self-end">
                        <TextAnimate animation="blurIn" once={true}>
                            CONFIDENCE
                        </TextAnimate>
                    </h2>
                </header>
            </div>
        </section>
    );
}
