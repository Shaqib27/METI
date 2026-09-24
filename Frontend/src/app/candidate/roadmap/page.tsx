"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const priorities = [
    {
        number: "01",
        title: "Strategic Framing",
        category: "Strategic Thinking",
        priority: "High focus",
        description:
            "Strengthen the ability to move from structured analysis toward longer-term strategic implications and choices.",
        actions: [
            "Practice framing business problems around strategic choices.",
            "Evaluate market, competitive, and organisational implications.",
            "Summarise analysis into clear strategic recommendations.",
        ],
    },
    {
        number: "02",
        title: "Decision-Making Under Ambiguity",
        category: "Consulting Readiness",
        priority: "High focus",
        description:
            "Build confidence in forming and communicating recommendations when information is incomplete or uncertain.",
        actions: [
            "Practice making explicit assumptions.",
            "Separate known facts from hypotheses.",
            "Communicate recommendation confidence and key risks.",
        ],
    },
    {
        number: "03",
        title: "Executive Communication",
        category: "Consulting Readiness",
        priority: "Develop",
        description:
            "Improve the ability to communicate complex analysis clearly, concisely, and with a strong recommendation.",
        actions: [
            "Lead with the conclusion before supporting analysis.",
            "Use concise evidence to support recommendations.",
            "Practise communicating trade-offs to senior audiences.",
        ],
    },
];

const completedAreas = [
    "Structured Problem Solving",
    "Business Analysis",
    "Enterprise Thinking",
];

export default function RoadmapPage() {
    const [expanded, setExpanded] = useState<string | null>(
        "Strategic Framing"
    );

    return (
        <main className="min-h-screen bg-[#F6F7F9]">

            {/* Header */}
            <header className="sticky top-0 z-30 border-b border-[#DCE2E8] bg-white/95 backdrop-blur">
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
                            ← Dashboard
                        </Link>

                    </div>
                </Container>
            </header>

            {/* Hero */}
            <section className="border-b border-[#DCE2E8] bg-white">
                <Container>

                    <div className="py-10 sm:py-12">

                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#526F8F]">
                            Development roadmap
                        </p>

                        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                            <div>

                                <h1 className="text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                    Turn insight into development action.
                                </h1>

                                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#526170]">
                                    Your roadmap translates the assessment
                                    signals into practical areas of focus,
                                    development actions, and measurable
                                    progress.
                                </p>

                            </div>

                            <div className="rounded-xl border border-[#DCE2E8] bg-[#F6F7F9] px-6 py-5">

                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                                    Roadmap progress
                                </p>

                                <div className="mt-2 flex items-end gap-2">

                                    <span className="text-3xl font-bold text-[#0B1F33]">
                                        0%
                                    </span>

                                    <span className="pb-1 text-xs text-[#7A8794]">
                                        started
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </Container>
            </section>

            {/* Main */}
            <section className="py-8 sm:py-10">
                <Container>

                    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

                        {/* Priorities */}
                        <div>

                            <div className="mb-5">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Priority areas
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                    Your development focus
                                </h2>

                            </div>

                            <div className="space-y-4">

                                {priorities.map((item) => {
                                    const isExpanded =
                                        expanded === item.title;

                                    return (
                                        <div
                                            key={item.title}
                                            className="overflow-hidden rounded-xl border border-[#DCE2E8] bg-white"
                                        >

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setExpanded(
                                                        isExpanded
                                                            ? null
                                                            : item.title
                                                    )
                                                }
                                                className="w-full p-6 text-left"
                                            >

                                                <div className="flex items-start gap-4">

                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1F33] text-xs font-bold text-white">
                                                        {item.number}
                                                    </div>

                                                    <div className="min-w-0 flex-1">

                                                        <div className="flex flex-wrap items-center gap-2">

                                                            <h3 className="text-base font-bold text-[#17212B]">
                                                                {item.title}
                                                            </h3>

                                                            <span className="rounded-full bg-[#FFF7E6] px-2.5 py-1 text-[11px] font-semibold text-[#B7791F]">
                                                                {item.priority}
                                                            </span>

                                                        </div>

                                                        <p className="mt-1 text-xs font-medium text-[#7A8794]">
                                                            {item.category}
                                                        </p>

                                                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526170]">
                                                            {item.description}
                                                        </p>

                                                    </div>

                                                    <span className="shrink-0 text-lg text-[#7A8794]">
                                                        {isExpanded ? "−" : "+"}
                                                    </span>

                                                </div>

                                            </button>

                                            {isExpanded && (
                                                <div className="border-t border-[#E9EDF1] bg-[#F6F7F9] px-6 py-5">

                                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#526F8F]">
                                                        Suggested actions
                                                    </p>

                                                    <div className="mt-4 space-y-3">

                                                        {item.actions.map(
                                                            (action) => (
                                                                <div
                                                                    key={action}
                                                                    className="flex gap-3"
                                                                >

                                                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs text-[#167A5B]">
                                                                        ✓
                                                                    </span>

                                                                    <p className="text-sm leading-5 text-[#526170]">
                                                                        {action}
                                                                    </p>

                                                                </div>
                                                            )
                                                        )}

                                                    </div>

                                                </div>
                                            )}

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-5">

                            {/* Profile snapshot */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Capability snapshot
                                </p>

                                <div className="mt-5 space-y-4">

                                    {[
                                        ["Enterprise Thinking", 84],
                                        ["Problem Solving", 82],
                                        ["Business Analysis", 76],
                                        ["Strategic Thinking", 71],
                                        ["Consulting Readiness", 68],
                                    ].map(([name, score]) => (
                                        <div key={name as string}>

                                            <div className="flex justify-between gap-3">

                                                <span className="text-xs text-[#526170]">
                                                    {name}
                                                </span>

                                                <span className="text-xs font-semibold text-[#17212B]">
                                                    {score}
                                                </span>

                                            </div>

                                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E9EDF1]">

                                                <div
                                                    className="h-full rounded-full bg-[#0B1F33]"
                                                    style={{
                                                        width: `${score}%`,
                                                    }}
                                                />

                                            </div>

                                        </div>
                                    ))}

                                </div>

                                <Link
                                    href="/candidate/assessments/consulting/report"
                                    className="mt-5 block"
                                >
                                    <Button
                                        variant="secondary"
                                        className="w-full"
                                    >
                                        View Full Report
                                    </Button>
                                </Link>

                            </div>

                            {/* Completed strengths */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Established strengths
                                </p>

                                <div className="mt-5 space-y-3">

                                    {completedAreas.map((area) => (
                                        <div
                                            key={area}
                                            className="flex items-start gap-3"
                                        >

                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF6F1] text-xs font-semibold text-[#167A5B]">
                                                ✓
                                            </span>

                                            <span className="text-sm leading-5 text-[#526170]">
                                                {area}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* Progress */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Development progress
                                </p>

                                <p className="mt-2 text-sm leading-6 text-[#526170]">
                                    Start working on a priority area to begin
                                    tracking your development progress.
                                </p>

                                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#E9EDF1]">
                                    <div
                                        className="h-full rounded-full bg-[#167A5B]"
                                        style={{ width: "0%" }}
                                    />
                                </div>

                                <p className="mt-2 text-xs text-[#7A8794]">
                                    No activities completed yet
                                </p>

                            </div>

                        </aside>

                    </div>

                </Container>
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-[#DCE2E8] bg-white py-10">
                <Container>

                    <div className="rounded-xl bg-[#0B1F33] p-7 sm:p-9">

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8FA8BE]">
                                    Continue developing
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-white">
                                    Your next step is deliberate practice.
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#B8C4CF]">
                                    Use the priorities above as a structured
                                    starting point for your development journey.
                                </p>

                            </div>

                            <Link href="/candidate/dashboard">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                >
                                    Return to Dashboard
                                </Button>
                            </Link>

                        </div>

                    </div>

                </Container>
            </section>

        </main>
    );
}