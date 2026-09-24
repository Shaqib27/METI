"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const findings = [
    {
        name: "Structured Problem Solving",
        score: 82,
        level: "Strong",
        description:
            "Demonstrates a structured approach to breaking down business problems and identifying relevant drivers.",
    },
    {
        name: "Business Analysis",
        score: 76,
        level: "Strong",
        description:
            "Shows a good tendency to use evidence, assumptions, alternatives, and trade-offs when evaluating decisions.",
    },
    {
        name: "Strategic Thinking",
        score: 71,
        level: "Developing",
        description:
            "Shows awareness of broader business considerations, with further opportunity to strengthen strategic framing.",
    },
    {
        name: "Enterprise Thinking",
        score: 84,
        level: "Strong",
        description:
            "Demonstrates an understanding of how different organisational areas influence one another.",
    },
    {
        name: "Consulting Readiness",
        score: 68,
        level: "Developing",
        description:
            "Shows a developing ability to work through ambiguity and communicate recommendations with incomplete information.",
    },
];

export default function FindingsPage() {
    const params = useParams();

    const code = params.code as string;

    const averageScore = Math.round(
        findings.reduce((sum, item) => sum + item.score, 0) /
        findings.length
    );

    return (
        <main className="min-h-screen bg-[#F6F7F9]">

            {/* Header */}
            <header className="border-b border-[#DCE2E8] bg-white">
                <Container>
                    <div className="flex h-16 items-center justify-between">

                        <Link
                            href="/"
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B1F33] text-sm font-bold text-white">
                                M
                            </div>

                            <span className="text-lg font-bold tracking-[-0.02em] text-[#0B1F33]">
                                METI
                            </span>
                        </Link>

                        <Link
                            href="/candidate/dashboard"
                            className="text-sm font-medium text-[#526170] hover:text-[#0B1F33]"
                        >
                            Dashboard
                        </Link>

                    </div>
                </Container>
            </header>

            {/* Page intro */}
            <section className="border-b border-[#DCE2E8] bg-white">
                <Container>
                    <div className="py-10 sm:py-12">

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#526F8F]">
                                    Initial assessment findings
                                </p>

                                <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                    Your capability profile is taking shape.
                                </h1>

                                <p className="mt-4 max-w-2xl text-base leading-7 text-[#526170]">
                                    These initial findings summarise the capability
                                    signals identified from your assessment
                                    responses.
                                </p>
                            </div>

                            <div className="shrink-0 rounded-xl border border-[#DCE2E8] bg-[#F6F7F9] px-6 py-5 lg:min-w-[190px]">
                                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#7A8794]">
                                    Overall indicator
                                </p>

                                <div className="mt-2 flex items-end gap-2">
                                    <span className="text-4xl font-bold tracking-[-0.03em] text-[#0B1F33]">
                                        {averageScore}
                                    </span>

                                    <span className="pb-1 text-sm text-[#7A8794]">
                                        / 100
                                    </span>
                                </div>

                                <p className="mt-1 text-xs text-[#526170]">
                                    Initial assessment indicator
                                </p>
                            </div>

                        </div>

                    </div>
                </Container>
            </section>

            {/* Findings */}
            <section className="py-10 sm:py-14">
                <Container>

                    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

                        {/* Main findings */}
                        <div>

                            <div className="mb-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7A8794]">
                                    Capability dimensions
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                    Assessment findings
                                </h2>
                            </div>

                            <div className="space-y-4">

                                {findings.map((finding) => (
                                    <div
                                        key={finding.name}
                                        className="rounded-xl border border-[#DCE2E8] bg-white p-6"
                                    >

                                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                                            <div className="max-w-2xl">

                                                <div className="flex flex-wrap items-center gap-3">

                                                    <h3 className="text-base font-semibold text-[#17212B]">
                                                        {finding.name}
                                                    </h3>

                                                    <span
                                                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${finding.level === "Strong"
                                                                ? "bg-[#EAF6F1] text-[#167A5B]"
                                                                : "bg-[#FFF7E6] text-[#B7791F]"
                                                            }`}
                                                    >
                                                        {finding.level}
                                                    </span>

                                                </div>

                                                <p className="mt-3 text-sm leading-6 text-[#526170]">
                                                    {finding.description}
                                                </p>

                                            </div>

                                            <div className="shrink-0 text-left sm:text-right">

                                                <div className="flex items-baseline gap-1 sm:justify-end">
                                                    <span className="text-2xl font-bold text-[#0B1F33]">
                                                        {finding.score}
                                                    </span>

                                                    <span className="text-xs text-[#7A8794]">
                                                        / 100
                                                    </span>
                                                </div>

                                                <p className="mt-1 text-xs text-[#7A8794]">
                                                    Capability indicator
                                                </p>

                                            </div>

                                        </div>

                                        {/* Score bar */}
                                        <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#E9EDF1]">
                                            <div
                                                className="h-full rounded-full bg-[#0B1F33]"
                                                style={{
                                                    width: `${finding.score}%`,
                                                }}
                                            />
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Right panel */}
                        <aside className="space-y-4">

                            {/* Key strengths */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Emerging strengths
                                </p>

                                <h2 className="mt-2 text-lg font-bold text-[#17212B]">
                                    Where signals are strongest
                                </h2>

                                <div className="mt-5 space-y-3">

                                    {[
                                        "Enterprise Thinking",
                                        "Structured Problem Solving",
                                        "Business Analysis",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF6F1] text-[#167A5B]">
                                                ✓
                                            </span>

                                            <span className="text-sm leading-5 text-[#526170]">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* Development */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Development signals
                                </p>

                                <h2 className="mt-2 text-lg font-bold text-[#17212B]">
                                    Areas to explore further
                                </h2>

                                <div className="mt-5 space-y-3">

                                    {[
                                        "Consulting Readiness",
                                        "Strategic Thinking",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#B7791F]" />

                                            <span className="text-sm leading-5 text-[#526170]">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </aside>

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                            <div className="max-w-2xl">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Continue your METI journey
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                    Go beyond the initial findings.
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-[#526170]">
                                    A more detailed report can translate these
                                    capability signals into deeper evidence,
                                    interpretation, and development direction.
                                </p>

                            </div>

                            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                                <Link
                                    href={`/candidate/assessments/${code}/report`}
                                >
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-full sm:w-auto"
                                    >
                                        View Detailed Report →
                                    </Button>
                                </Link>

                                <Link href="/candidate/dashboard">
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        className="w-full sm:w-auto"
                                    >
                                        Dashboard
                                    </Button>
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* Demo notice */}
                    <p className="mt-5 text-center text-xs text-[#7A8794]">
                        Assessment ID: {code} · Initial findings shown here are
                        demonstration data and will later be generated from the
                        assessment scoring service.
                    </p>

                </Container>
            </section>

        </main>
    );
}