import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
    return (
        <section className="bg-[#0B1F33] py-20 sm:py-24 lg:py-28">
            <Container>
                <div className="mx-auto max-w-4xl text-center">

                    {/* Eyebrow */}
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FA8BE]">
                        Begin your assessment journey
                    </p>

                    {/* Heading */}
                    <h2 className="mt-5 text-3xl font-bold tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                        Understand where you are.
                        <span className="block text-[#C5D2DE]">
                            Discover where to develop.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#B8C4CF] sm:text-lg">
                        Start your METI journey with a structured assessment
                        designed to help turn capability evidence into meaningful
                        insight and development direction.
                    </p>

                    {/* CTA */}
                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link href="/auth/register">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full sm:w-auto"
                            >
                                Start Assessment
                            </Button>
                        </Link>

                        <Link href="#how-it-works">
                            <Button
                                variant="ghost"
                                size="lg"
                                className="w-full text-[#DCE5EC] hover:bg-white/10 hover:text-white sm:w-auto"
                            >
                                Review How It Works
                            </Button>
                        </Link>
                    </div>

                    {/* Supporting points */}
                    <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#8FA0AF]">
                        <span>Structured assessment</span>

                        <span className="hidden sm:inline">•</span>

                        <span>Evidence-based insights</span>

                        <span className="hidden sm:inline">•</span>

                        <span>Development direction</span>
                    </div>

                </div>
            </Container>
        </section>
    );
}