"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const dimensions = [
    {
        name: "Structured Problem Solving",
        score: 82,
        level: "Strong",
        interpretation:
            "You demonstrate a consistent tendency to structure ambiguous problems into manageable components before considering solutions.",
        evidence: [
            "Breaks complex problems into relevant drivers.",
            "Looks for underlying causes rather than isolated symptoms.",
            "Shows preference for structured analytical approaches.",
        ],
    },
    {
        name: "Business Analysis",
        score: 76,
        level: "Strong",
        interpretation:
            "Your responses indicate a good foundation in evidence-led business analysis and decision-making.",
        evidence: [
            "Considers evidence before reaching conclusions.",
            "Recognises assumptions and trade-offs.",
            "Connects analysis with practical recommendations.",
        ],
    },
    {
        name: "Strategic Thinking",
        score: 71,
        level: "Developing",
        interpretation:
            "You show awareness of broader business factors, while there is room to strengthen longer-term strategic framing.",
        evidence: [
            "Recognises multiple factors influencing business decisions.",
            "Shows awareness of competitive context.",
            "Can further strengthen prioritisation of strategic implications.",
        ],
    },
    {
        name: "Enterprise Thinking",
        score: 84,
        level: "Strong",
        interpretation:
            "Your responses demonstrate a strong appreciation of interconnected organisational systems and dependencies.",
        evidence: [
            "Considers relationships between business functions.",
            "Recognises downstream effects of decisions.",
            "Looks beyond isolated functional outcomes.",
        ],
    },
    {
        name: "Consulting Readiness",
        score: 68,
        level: "Developing",
        interpretation:
            "You demonstrate a developing ability to operate confidently when information is incomplete or ambiguous.",
        evidence: [
            "Shows willingness to work with incomplete information.",
            "Can further strengthen recommendation confidence.",
            "Opportunity exists to improve communication under ambiguity.",
        ],
    },
];

export default function ReportPage() {
    const params = useParams();

    const code = params.code as string;

    const averageScore = Math.round(
        dimensions.reduce((sum, item) => sum + item.score, 0) /
        dimensions.length
    );

    return (
        <main className="min-h-screen bg-[#F6F7F9]">

            {/* Header */}
            <header className="border-b border-[#DCE2E8] bg-white">
                <Container>
                    <div className="flex h-16 items-center justify-between">

                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B1F33] text-sm font-bold text-white">
                                M
                            </div>

                            <span className="text-lg font-bold tracking-[-0.02em] text-[#0B1F33]">
                                METI
                            </span>
                        </Link>

                        <div className="flex items-center gap-4">
                            <span className="hidden text-sm text-[#526170] sm:inline">
                                Assessment Report
                            </span>

                            <Link
                                href="/candidate/dashboard"
                                className="text-sm font-medium text-[#526170] hover:text-[#0B1F33]"
                            >
                                Dashboard
                            </Link>
                        </div>

                    </div>
                </Container>
            </header>

            {/* Report Hero */}
            <section className="border-b border-[#DCE2E8] bg-white">
                <Container>
                    <div className="py-10 sm:py-14">

                        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#526F8F]">
                                    METI Assessment Report
                                </p>

                                <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl lg:text-5xl">
                                    Capability, interpreted.
                                </h1>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-[#526170]">
                                    This report translates your assessment
                                    responses into a structured view of
                                    capability signals, observed strengths,
                                    and development opportunities.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <span className="rounded-full bg-[#EAF6F1] px-3 py-1.5 text-xs font-semibold text-[#167A5B]">
                                        Assessment completed
                                    </span>

                                    <span className="rounded-full bg-[#EAF2FB] px-3 py-1.5 text-xs font-semibold text-[#2563A6]">
                                        Initial report
                                    </span>
                                </div>

                            </div>

                            <div className="rounded-xl border border-[#DCE2E8] bg-[#F6F7F9] p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#7A8794]">
                                    Overall indicator
                                </p>

                                <div className="mt-2 flex items-end gap-2">
                                    <span className="text-5xl font-bold tracking-[-0.04em] text-[#0B1F33]">
                                        {averageScore}
                                    </span>

                                    <span className="pb-2 text-sm text-[#7A8794]">
                                        / 100
                                    </span>
                                </div>

                                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#E1E6EB]">
                                    <div
                                        className="h-full rounded-full bg-[#0B1F33]"
                                        style={{
                                            width: `${averageScore}%`,
                                        }}
                                    />
                                </div>

                                <p className="mt-3 text-xs leading-5 text-[#526170]">
                                    Composite indicator across the assessed
                                    capability dimensions.
                                </p>

                            </div>

                        </div>

                    </div>
                </Container>
            </section>

            {/* Executive Summary */}
            <section className="py-10 sm:py-14">
                <Container>

                    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">

                        <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                Executive interpretation
                            </p>

                            <h2 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-[#17212B]">
                                A strong analytical foundation with clear
                                opportunities for development.
                            </h2>

                            <div className="mt-6 space-y-4 text-sm leading-7 text-[#526170]">

                                <p>
                                    The assessment signals a strong foundation
                                    in structured problem solving, enterprise
                                    thinking, and evidence-led business
                                    analysis.
                                </p>

                                <p>
                                    The results also indicate opportunities to
                                    further develop strategic framing and
                                    confidence when operating with incomplete
                                    information.
                                </p>

                                <p>
                                    These findings should be considered as
                                    assessment indicators rather than a
                                    standalone judgement of professional
                                    capability.
                                </p>

                            </div>

                        </div>

                        <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                Profile summary
                            </p>

                            <div className="mt-5 space-y-5">

                                <div>
                                    <p className="text-xs text-[#7A8794]">
                                        Strongest signal
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#17212B]">
                                        Enterprise Thinking
                                    </p>

                                    <p className="mt-1 text-xs text-[#526170]">
                                        84 / 100
                                    </p>
                                </div>

                                <div className="border-t border-[#E9EDF1]" />

                                <div>
                                    <p className="text-xs text-[#7A8794]">
                                        Development signal
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#17212B]">
                                        Consulting Readiness
                                    </p>

                                    <p className="mt-1 text-xs text-[#526170]">
                                        68 / 100
                                    </p>
                                </div>

                                <div className="border-t border-[#E9EDF1]" />

                                <div>
                                    <p className="text-xs text-[#7A8794]">
                                        Dimensions assessed
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#17212B]">
                                        {dimensions.length}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </Container>
            </section>

            {/* Capability Analysis */}
            <section className="border-t border-[#DCE2E8] bg-white py-10 sm:py-14">
                <Container>

                    <div className="mb-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                            Detailed capability analysis
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-[#17212B]">
                            What the assessment indicates
                        </h2>
                    </div>

                    <div className="space-y-5">

                        {dimensions.map((dimension, index) => (
                            <div
                                key={dimension.name}
                                className="rounded-xl border border-[#DCE2E8] bg-[#FDFDFD] p-6 sm:p-8"
                            >

                                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                                    <div className="flex gap-4">

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1F33] text-xs font-bold text-white">
                                            {index + 1}
                                        </div>

                                        <div>

                                            <div className="flex flex-wrap items-center gap-3">

                                                <h3 className="text-lg font-bold text-[#17212B]">
                                                    {dimension.name}
                                                </h3>

                                                <span
                                                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${dimension.level === "Strong"
                                                            ? "bg-[#EAF6F1] text-[#167A5B]"
                                                            : "bg-[#FFF7E6] text-[#B7791F]"
                                                        }`}
                                                >
                                                    {dimension.level}
                                                </span>

                                            </div>

                                            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526170]">
                                                {dimension.interpretation}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="shrink-0 lg:min-w-[110px] lg:text-right">

                                        <span className="text-3xl font-bold text-[#0B1F33]">
                                            {dimension.score}
                                        </span>

                                        <span className="ml-1 text-xs text-[#7A8794]">
                                            / 100
                                        </span>

                                    </div>

                                </div>

                                <div className="mt-6 grid gap-3 border-t border-[#E9EDF1] pt-6 md:grid-cols-3">

                                    {dimension.evidence.map((item) => (
                                        <div
                                            key={item}
                                            className="flex gap-3 rounded-lg bg-[#F6F7F9] p-4"
                                        >
                                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#526F8F]" />

                                            <p className="text-sm leading-5 text-[#526170]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        ))}

                    </div>

                </Container>
            </section>

            {/* Development Direction */}
            <section className="bg-[#F6F7F9] py-10 sm:py-14">
                <Container>

                    <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Development direction
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-[#17212B]">
                                    Where to focus next
                                </h2>

                                <p className="mt-4 text-sm leading-6 text-[#526170]">
                                    The assessment suggests focusing development
                                    effort on translating analytical capability
                                    into stronger strategic judgement and
                                    confident communication under ambiguity.
                                </p>

                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">

                                <div className="rounded-lg border border-[#E9EDF1] bg-[#F6F7F9] p-5">

                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                                        Focus 01
                                    </p>

                                    <h3 className="mt-2 text-sm font-semibold text-[#17212B]">
                                        Strategic framing
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#526170]">
                                        Strengthen the ability to connect
                                        analysis with longer-term business
                                        implications.
                                    </p>

                                </div>

                                <div className="rounded-lg border border-[#E9EDF1] bg-[#F6F7F9] p-5">

                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                                        Focus 02
                                    </p>

                                    <h3 className="mt-2 text-sm font-semibold text-[#17212B]">
                                        Ambiguity management
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#526170]">
                                        Build confidence making and defending
                                        recommendations with incomplete data.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </Container>
            </section>

            {/* CTA */}
            <section className="bg-[#0B1F33] py-14 sm:py-16">
                <Container>

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8FA8BE]">
                                Continue with METI
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-white">
                                Turn assessment insight into development action.
                            </h2>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#B8C4CF]">
                                Continue to the next stage of your METI journey
                                and build a structured development roadmap.
                            </p>
                        </div>

                        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                            <Link href={`/candidate/assessments/${code}/case`}>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                >
                                    Continue to Case →
                                </Button>
                            </Link>

                            <Link href="/candidate/dashboard">
                                <Button
                                    variant="ghost"
                                    size="lg"
                                    className="w-full text-[#DCE5EC] hover:bg-white/10 hover:text-white sm:w-auto"
                                >
                                    Dashboard
                                </Button>
                            </Link>

                        </div>

                    </div>

                </Container>
            </section>

            {/* Footer note */}
            <div className="bg-[#071522] py-4 text-center text-xs text-[#7A8794]">
                Assessment ID: {code}
            </div>

        </main>
    );
}