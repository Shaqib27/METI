import Container from "@/components/layout/Container";

const steps = [
    {
        number: "01",
        title: "Register",
        description:
            "Create your profile and provide the information needed to begin your assessment journey.",
    },
    {
        number: "02",
        title: "Assess",
        description:
            "Complete structured assessment activities designed to capture relevant capability evidence.",
    },
    {
        number: "03",
        title: "Analyze",
        description:
            "Assessment responses are evaluated to generate structured capability insights and findings.",
    },
    {
        number: "04",
        title: "Review",
        description:
            "Where required, additional evidence such as work samples or recorded responses can support deeper review.",
    },
    {
        number: "05",
        title: "Report",
        description:
            "Receive a structured view of findings, capability areas, and identified development priorities.",
    },
    {
        number: "06",
        title: "Develop",
        description:
            "Use the resulting roadmap and progress view to focus on meaningful development actions.",
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="border-b border-[#DCE2E8] bg-[#F6F7F9] py-24 lg:py-28"
        >
            <Container>
                {/* Section heading */}
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4F6F8F]">
                            How it works
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                            A structured journey from assessment to development.
                        </h2>
                    </div>

                    <p className="max-w-2xl text-base leading-7 text-[#526170] lg:ml-auto lg:text-lg">
                        METI connects each stage of the experience so that assessment
                        evidence can progress into findings, reporting, and a clearer
                        development direction.
                    </p>
                </div>

                {/* Journey */}
                <div className="mt-16">
                    <div className="relative">

                        {/* Desktop connecting line */}
                        <div
                            className="absolute left-0 right-0 top-5 hidden h-px bg-[#C5CED8] lg:block"
                            aria-hidden="true"
                        />

                        <div className="grid gap-10 lg:grid-cols-6 lg:gap-5">
                            {steps.map((step) => (
                                <div key={step.number} className="relative">

                                    {/* Number */}
                                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#C5CED8] bg-white text-xs font-bold text-[#0B1F33]">
                                        {step.number}
                                    </div>

                                    <h3 className="mt-6 text-lg font-semibold text-[#17212B]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#526170]">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom note */}
                <div className="mt-16 rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-[#17212B]">
                                Built around structured evidence
                            </p>

                            <p className="mt-1 text-sm leading-6 text-[#526170]">
                                The experience is designed to connect assessment inputs
                                with the insights and development outputs that follow.
                            </p>
                        </div>

                        <div className="shrink-0 text-sm font-medium text-[#163A5F]">
                            Assessment → Insight → Development
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}