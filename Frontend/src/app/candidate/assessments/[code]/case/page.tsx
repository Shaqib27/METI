"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const caseSections = [
    {
        title: "Company context",
        content:
            "A mid-sized consumer business has experienced slowing growth over the past three years. Revenue remains stable, but margins have declined and customer acquisition costs have increased.",
    },
    {
        title: "Market context",
        content:
            "The market is becoming more competitive, with several digital-first competitors offering lower prices and faster customer experiences. Customer expectations are also changing.",
    },
    {
        title: "Business situation",
        content:
            "Management is considering investing in digital channels and customer experience while also reviewing its existing cost structure.",
    },
];

const dataPoints = [
    ["Revenue growth", "3.2%", "Current annual growth"],
    ["Gross margin", "34%", "Down from 41%"],
    ["Customer acquisition cost", "+27%", "Three-year change"],
    ["Digital sales", "18%", "Share of total sales"],
];

export default function CaseWorkspacePage() {
    const params = useParams();
    const router = useRouter();

    const code = params.code as string;

    const [response, setResponse] = useState("");

    const wordCount = response.trim()
        ? response.trim().split(/\s+/).length
        : 0;

    function handleSubmit() {
        if (!response.trim()) return;

        router.push(
            `/candidate/assessments/${code}/case/complete`
        );
    }

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

                        <div className="flex items-center gap-4">

                            <span className="hidden text-sm text-[#526170] sm:inline">
                                Business Case
                            </span>

                            <span className="rounded-full bg-[#EAF2FB] px-3 py-1 text-xs font-semibold text-[#2563A6]">
                                In progress
                            </span>

                        </div>

                    </div>
                </Container>
            </header>

            {/* Case heading */}
            <section className="border-b border-[#DCE2E8] bg-white">
                <Container>
                    <div className="py-8 sm:py-10">

                        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#526F8F]">
                                    Case workspace
                                </p>

                                <h1 className="mt-3 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                    Improving profitable growth
                                </h1>

                                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526170]">
                                    Analyse the situation, identify the key
                                    business issue, and provide a structured
                                    recommendation.
                                </p>

                            </div>

                            <div className="rounded-lg border border-[#DCE2E8] bg-[#F6F7F9] px-5 py-4">

                                <p className="text-xs text-[#7A8794]">
                                    Estimated time
                                </p>

                                <p className="mt-1 text-sm font-semibold text-[#17212B]">
                                    25–30 minutes
                                </p>

                            </div>

                        </div>

                    </div>
                </Container>
            </section>

            {/* Workspace */}
            <section className="py-8 sm:py-10">
                <Container>

                    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

                        {/* Case information */}
                        <div className="space-y-5">

                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Business case
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                    Client situation
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-[#526170]">
                                    You are supporting the leadership team of a
                                    consumer business that wants to restore
                                    profitable growth. The company has a stable
                                    customer base but is experiencing pressure
                                    on margins and increasing acquisition costs.
                                </p>

                                <div className="mt-6 space-y-3">

                                    {caseSections.map((section) => (
                                        <div
                                            key={section.title}
                                            className="rounded-lg border border-[#E9EDF1] bg-[#F6F7F9] p-5"
                                        >

                                            <h3 className="text-sm font-semibold text-[#17212B]">
                                                {section.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-[#526170]">
                                                {section.content}
                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* Data */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                            Available data
                                        </p>

                                        <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                            Selected business indicators
                                        </h2>
                                    </div>

                                </div>

                                <div className="mt-6 overflow-hidden rounded-lg border border-[#E9EDF1]">

                                    <div className="grid grid-cols-3 border-b border-[#E9EDF1] bg-[#F6F7F9] px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#7A8794]">
                                        <span>Metric</span>
                                        <span>Value</span>
                                        <span>Context</span>
                                    </div>

                                    {dataPoints.map(([metric, value, context]) => (
                                        <div
                                            key={metric}
                                            className="grid grid-cols-3 border-b border-[#E9EDF1] px-4 py-4 last:border-b-0"
                                        >
                                            <span className="text-sm font-medium text-[#17212B]">
                                                {metric}
                                            </span>

                                            <span className="text-sm font-semibold text-[#0B1F33]">
                                                {value}
                                            </span>

                                            <span className="text-xs leading-5 text-[#526170]">
                                                {context}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* Question */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Your task
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                    What should management do next?
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-[#526170]">
                                    Based on the information provided, identify
                                    the most important business issue, explain
                                    the reasoning behind your assessment, and
                                    recommend a practical course of action.
                                </p>

                            </div>

                        </div>

                        {/* Response panel */}
                        <aside className="lg:sticky lg:top-24 lg:self-start">

                            <div className="rounded-xl border border-[#DCE2E8] bg-white">

                                <div className="border-b border-[#E9EDF1] p-6">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        Your response
                                    </p>

                                    <h2 className="mt-2 text-lg font-bold text-[#17212B]">
                                        Recommendation
                                    </h2>

                                    <p className="mt-2 text-xs leading-5 text-[#7A8794]">
                                        Structure your response clearly. Explain
                                        the issue, supporting evidence, and
                                        recommended action.
                                    </p>

                                </div>

                                <div className="p-6">

                                    <textarea
                                        value={response}
                                        onChange={(event) =>
                                            setResponse(event.target.value)
                                        }
                                        placeholder="Start with the key business issue, then explain your analysis and recommendation..."
                                        className="min-h-[340px] w-full resize-y rounded-lg border border-[#C5CED8] bg-white p-4 text-sm leading-6 text-[#17212B] outline-none transition focus:border-[#163A5F] focus:ring-4 focus:ring-[#163A5F]/10"
                                    />

                                    <div className="mt-3 flex items-center justify-between text-xs text-[#7A8794]">
                                        <span>
                                            {wordCount} words
                                        </span>

                                        <span>
                                            Response saved locally
                                        </span>
                                    </div>

                                </div>

                                <div className="border-t border-[#E9EDF1] p-6">

                                    <Button
                                        type="button"
                                        variant="primary"
                                        size="lg"
                                        disabled={!response.trim()}
                                        onClick={handleSubmit}
                                        className="w-full"
                                    >
                                        Submit Case Response →
                                    </Button>

                                    <p className="mt-3 text-center text-xs leading-5 text-[#7A8794]">
                                        Review your response before submitting.
                                        You will not be able to edit it after
                                        submission.
                                    </p>

                                </div>

                            </div>

                        </aside>

                    </div>

                </Container>
            </section>

        </main>
    );
}