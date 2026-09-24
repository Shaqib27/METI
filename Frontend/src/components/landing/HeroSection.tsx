import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden border-b border-[#DCE2E8] bg-white">
            {/* Subtle background structure */}
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            >
                <div className="absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#F2F0EB] opacity-60 blur-3xl" />

                <div className="absolute bottom-[-30%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[#EAF2FB] opacity-40 blur-3xl" />
            </div>

            <Container>
                <div className="relative grid min-h-[650px] items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">

                    {/* Left */}
                    <div className="max-w-3xl">

                        <div className="mb-6 inline-flex items-center rounded-full border border-[#DCE2E8] bg-[#F6F7F9] px-3 py-1.5">
                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#167A5B]" />

                            <span className="text-xs font-semibold uppercase tracking-wider text-[#526170]">
                                Enterprise Talent Intelligence
                            </span>
                        </div>

                        <h1 className="text-5xl font-bold tracking-[-0.035em] text-[#17212B] sm:text-6xl lg:text-[64px] lg:leading-[1.05]">
                            Understand capability.
                            <span className="block text-[#163A5F]">
                                Develop potential.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#526170] sm:text-xl">
                            METI combines structured assessment, evidence-based
                            intelligence, and development insights to help
                            organizations understand talent capability and
                            identify meaningful development priorities.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Link href="/auth/register">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Start Assessment
                                </Button>
                            </Link>

                            <Link href="#how-it-works">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                >
                                    See How It Works
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#7A8794]">
                            <span>Structured assessment</span>
                            <span>Evidence-based insights</span>
                            <span>Development roadmap</span>
                        </div>
                    </div>

                    {/* Right — Intelligence Panel */}
                    <div className="relative hidden lg:block">

                        <div className="relative mx-auto max-w-md">

                            {/* Main panel */}
                            <div className="rounded-2xl border border-[#DCE2E8] bg-white p-6 shadow-[0_20px_60px_rgba(11,31,51,0.08)]">

                                <div className="flex items-center justify-between border-b border-[#E9EDF1] pb-5">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#7A8794]">
                                            Capability Profile
                                        </p>

                                        <p className="mt-1 text-lg font-semibold text-[#17212B]">
                                            Assessment Overview
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-[#EAF6F1] px-2.5 py-1 text-xs font-medium text-[#167A5B]">
                                        Complete
                                    </span>
                                </div>

                                <div className="space-y-5 pt-6">

                                    <CapabilityRow
                                        label="Strategic Thinking"
                                        score={86}
                                    />

                                    <CapabilityRow
                                        label="Problem Solving"
                                        score={79}
                                    />

                                    <CapabilityRow
                                        label="Communication"
                                        score={72}
                                    />

                                    <CapabilityRow
                                        label="Execution"
                                        score={81}
                                    />

                                </div>

                                <div className="mt-7 border-t border-[#E9EDF1] pt-5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#526170]">
                                            Overall capability
                                        </span>

                                        <span className="text-2xl font-bold text-[#0B1F33]">
                                            80
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Small insight card */}
                            <div className="absolute -bottom-8 -left-10 w-56 rounded-xl border border-[#DCE2E8] bg-white p-4 shadow-[0_16px_40px_rgba(11,31,51,0.08)]">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#7A8794]">
                                    Development Focus
                                </p>

                                <p className="mt-2 text-sm font-semibold text-[#17212B]">
                                    Executive communication
                                </p>

                                <p className="mt-1 text-xs leading-5 text-[#526170]">
                                    Identified as a priority development area.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}


function CapabilityRow({
    label,
    score,
}: {
    label: string;
    score: number;
}) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-[#17212B]">
                    {label}
                </span>

                <span className="text-sm font-semibold text-[#526170]">
                    {score}
                </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#E9EDF1]">
                <div
                    className="h-full rounded-full bg-[#0B1F33]"
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );
}