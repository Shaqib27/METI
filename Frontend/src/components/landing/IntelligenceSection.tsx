import Container from "@/components/layout/Container";

const insights = [
    {
        label: "CAPABILITY",
        title: "Understand where capability stands",
        description:
            "Bring assessment evidence together into a structured view of capability areas and observed patterns.",
    },
    {
        label: "FINDINGS",
        title: "Identify meaningful development areas",
        description:
            "Surface areas that may require attention so development priorities are easier to understand and act on.",
    },
    {
        label: "REPORTING",
        title: "Turn evidence into a clearer picture",
        description:
            "Present assessment findings through structured reporting that connects evidence, insights, and development direction.",
    },
];

export default function IntelligenceSection() {
    return (
        <section className="border-b border-[#DCE2E8] bg-white py-24 lg:py-28">
            <Container>
                {/* Header */}
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4F6F8F]">
                            Intelligence & reporting
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                            Move from answers to meaningful insight.
                        </h2>
                    </div>

                    <p className="max-w-2xl text-base leading-7 text-[#526170] lg:ml-auto lg:text-lg">
                        METI organizes assessment evidence into a clearer view of
                        capability, findings, and development priorities—giving users
                        a structured way to understand what the assessment reveals.
                    </p>
                </div>

                {/* Main intelligence panel */}
                <div className="mt-16 overflow-hidden rounded-2xl border border-[#DCE2E8] bg-[#F6F7F9]">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                        {/* Left */}
                        <div className="border-b border-[#DCE2E8] p-7 sm:p-10 lg:border-b-0 lg:border-r">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7A8794]">
                                        Assessment intelligence
                                    </p>

                                    <h3 className="mt-2 text-xl font-semibold text-[#17212B]">
                                        Capability overview
                                    </h3>
                                </div>

                                <div className="rounded-lg border border-[#DCE2E8] bg-white px-3 py-2">
                                    <span className="text-xs font-medium text-[#167A5B]">
                                        Structured
                                    </span>
                                </div>
                            </div>

                            {/* Capability visualization */}
                            <div className="mt-10 space-y-6">
                                <Capability
                                    label="Strategic Thinking"
                                    value={86}
                                />

                                <Capability
                                    label="Problem Solving"
                                    value={79}
                                />

                                <Capability
                                    label="Communication"
                                    value={72}
                                />

                                <Capability
                                    label="Execution"
                                    value={81}
                                />
                            </div>

                            <div className="mt-8 border-t border-[#DCE2E8] pt-6">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-[#7A8794]">
                                            Development priority
                                        </p>

                                        <p className="mt-2 text-sm font-semibold text-[#17212B]">
                                            Executive communication
                                        </p>
                                    </div>

                                    <span className="text-2xl font-bold text-[#0B1F33]">
                                        Focus
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="bg-white p-7 sm:p-10">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#7A8794]">
                                What the output can help clarify
                            </p>

                            <div className="mt-7 divide-y divide-[#E9EDF1]">
                                {insights.map((insight) => (
                                    <div
                                        key={insight.label}
                                        className="py-6 first:pt-0 last:pb-0"
                                    >
                                        <p className="text-[11px] font-semibold tracking-[0.15em] text-[#4F6F8F]">
                                            {insight.label}
                                        </p>

                                        <h3 className="mt-2 text-lg font-semibold text-[#17212B]">
                                            {insight.title}
                                        </h3>

                                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#526170]">
                                            {insight.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}


function Capability({
    label,
    value,
}: {
    label: string;
    value: number;
}) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-[#17212B]">
                    {label}
                </span>

                <span className="text-sm font-semibold text-[#526170]">
                    {value}
                </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#E9EDF1]">
                <div
                    className="h-full rounded-full bg-[#0B1F33]"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}