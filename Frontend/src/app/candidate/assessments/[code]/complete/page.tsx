"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function AssessmentCompletePage() {
    const params = useParams();

    const code = params.code as string;

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

                        <span className="rounded-full bg-[#EAF6F1] px-3 py-1 text-xs font-semibold text-[#167A5B]">
                            Assessment completed
                        </span>
                    </div>
                </Container>
            </header>

            {/* Main */}
            <section className="py-14 sm:py-20 lg:py-24">
                <Container>
                    <div className="mx-auto max-w-4xl">

                        {/* Success Card */}
                        <div className="rounded-xl border border-[#DCE2E8] bg-white shadow-[0_8px_30px_rgba(11,31,51,0.05)]">

                            <div className="p-7 text-center sm:p-10 lg:p-12">

                                {/* Success Icon */}
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF6F1]">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-8 w-8 text-[#167A5B]"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>

                                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#526F8F]">
                                    Assessment complete
                                </p>

                                <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                    Your assessment has been submitted.
                                </h1>

                                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#526170]">
                                    Your responses have been recorded successfully.
                                    METI can now use the assessment evidence to
                                    generate your initial capability findings.
                                </p>

                                {/* Assessment Summary */}
                                <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">

                                    <div className="rounded-lg border border-[#E9EDF1] bg-[#F6F7F9] p-4">
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                                            Status
                                        </p>

                                        <p className="mt-2 text-sm font-semibold text-[#167A5B]">
                                            Submitted
                                        </p>
                                    </div>

                                    <div className="rounded-lg border border-[#E9EDF1] bg-[#F6F7F9] p-4">
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                                            Evidence
                                        </p>

                                        <p className="mt-2 text-sm font-semibold text-[#17212B]">
                                            Responses captured
                                        </p>
                                    </div>

                                    <div className="rounded-lg border border-[#E9EDF1] bg-[#F6F7F9] p-4">
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                                            Next
                                        </p>

                                        <p className="mt-2 text-sm font-semibold text-[#17212B]">
                                            Findings
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="mx-auto mt-10 max-w-2xl border-t border-[#E9EDF1]" />

                                {/* Findings Preview */}
                                <div className="mx-auto mt-8 max-w-2xl text-left">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        What happens next
                                    </p>

                                    <div className="mt-5 space-y-4">

                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2F0EB] text-xs font-bold text-[#0B1F33]">
                                                1
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-[#17212B]">
                                                    Assessment evidence is analysed
                                                </p>

                                                <p className="mt-1 text-sm leading-6 text-[#526170]">
                                                    Your responses are evaluated
                                                    against the assessment
                                                    framework.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2F0EB] text-xs font-bold text-[#0B1F33]">
                                                2
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-[#17212B]">
                                                    Capability findings are prepared
                                                </p>

                                                <p className="mt-1 text-sm leading-6 text-[#526170]">
                                                    Your assessment results are
                                                    organised into meaningful
                                                    capability insights.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2F0EB] text-xs font-bold text-[#0B1F33]">
                                                3
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-[#17212B]">
                                                    Your findings become available
                                                </p>

                                                <p className="mt-1 text-sm leading-6 text-[#526170]">
                                                    Continue to your assessment
                                                    findings and development
                                                    direction.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

                                    <Link
                                        href={`/candidate/assessments/${code}/findings`}
                                    >
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            className="w-full sm:w-auto"
                                        >
                                            View Initial Findings →
                                        </Button>
                                    </Link>

                                    <Link href="/candidate/dashboard">
                                        <Button
                                            variant="secondary"
                                            size="lg"
                                            className="w-full sm:w-auto"
                                        >
                                            Go to Dashboard
                                        </Button>
                                    </Link>

                                </div>

                            </div>
                        </div>

                        {/* Footer note */}
                        <p className="mt-6 text-center text-xs leading-5 text-[#7A8794]">
                            Assessment ID: {code}
                        </p>

                    </div>
                </Container>
            </section>
        </main>
    );
}