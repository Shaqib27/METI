import Container from "@/components/layout/Container";

const capabilities = [
    {
        number: "01",
        title: "Assess",
        description:
            "Evaluate capability through structured assessment experiences designed around consistent criteria and evidence.",
        items: [
            "Structured questions",
            "Capability dimensions",
            "Assessment responses",
        ],
    },
    {
        number: "02",
        title: "Understand",
        description:
            "Convert assessment evidence into meaningful findings that help make capability patterns easier to understand.",
        items: [
            "AI-assisted scoring",
            "Summary findings",
            "Detailed insights",
        ],
    },
    {
        number: "03",
        title: "Develop",
        description:
            "Translate identified development areas into practical priorities and a clearer path for continued development.",
        items: [
            "Development priorities",
            "Roadmap",
            "Progress tracking",
        ],
    },
];

export default function WhatMETIDoes() {
    return (
        <section
            id="assessment"
            className="border-b border-[#DCE2E8] bg-white py-24 lg:py-28"
        >
            <Container>
                {/* Section heading */}
                <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4F6F8F]">
                        The METI approach
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl lg:text-[42px]">
                        From assessment to actionable development intelligence.
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#526170] sm:text-lg">
                        METI brings assessment, evidence, insight, and development
                        into a connected experience—helping users move from
                        understanding capability to identifying meaningful next steps.
                    </p>
                </div>

                {/* Capability cards */}
                <div className="mt-16 grid gap-5 lg:grid-cols-3">
                    {capabilities.map((capability) => (
                        <article
                            key={capability.number}
                            className="group rounded-xl border border-[#DCE2E8] bg-[#F6F7F9] p-7 transition-colors duration-200 hover:border-[#C5CED8] hover:bg-white"
                        >
                            <div className="flex items-start justify-between">
                                <span className="text-xs font-semibold tracking-[0.15em] text-[#7A8794]">
                                    {capability.number}
                                </span>

                                <div className="h-2 w-2 rounded-full bg-[#163A5F]" />
                            </div>

                            <h3 className="mt-10 text-2xl font-semibold tracking-tight text-[#17212B]">
                                {capability.title}
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-[#526170]">
                                {capability.description}
                            </p>

                            <div className="mt-7 border-t border-[#DCE2E8] pt-5">
                                <ul className="space-y-3">
                                    {capability.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-3 text-sm text-[#526170]"
                                        >
                                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F6F8F]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}