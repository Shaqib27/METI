"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function VideoCompletePage() {
    const params = useParams();

    const code = params.code as string;

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

                        <span className="rounded-full bg-[#EAF6F1] px-3 py-1 text-xs font-semibold text-[#167A5B]">
                            Evidence submitted
                        </span>

                    </div>
                </Container>
            </header>

            {/* Main */}
            <section className="py-14 sm:py-20 lg:py-24">
                <Container>

                    <div className="mx-auto max-w-4xl">

                        <div className="rounded-xl border border-[#DCE2E8] bg-white shadow-[0_8px_30px_rgba(11,31,51,0.05)]">

                            <div className="p-7 sm:p-10 lg:p-12">

                                {/* Success */}
                                <div className="text-center">

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
                                        Evidence stage complete
                                    </p>

                                    <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                        Your video response has been submitted.
                                    </h1>

                                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#526170]">
                                        Your assessment, case response, and video
                                        response now form a complete evidence
                                        set for this assessment journey.
                                    </p>

                                </div>

                                {/* Journey */}
                                <div className="mx-auto mt-10 max-w-3xl">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        Your METI journey
                                    </p>

                                    <div className="mt-5 grid gap-3 md:grid-cols-3">

                                        <div className="rounded-lg border border-[#DCE2E8] bg-[#F6F7F9] p-5">

                                            <div className="flex items-center gap-3">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F33] text-xs font-bold text-white">
                                                    ✓
                                                </span>

                                                <span className="text-sm font-semibold text-[#17212B]">
                                                    Assessment
                                                </span>
                                            </div>

                                            <p className="mt-3 text-xs leading-5 text-[#526170]">
                                                Capability assessment completed
                                                and submitted.
                                            </p>

                                        </div>

                                        <div className="rounded-lg border border-[#DCE2E8] bg-[#F6F7F9] p-5">

                                            <div className="flex items-center gap-3">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F33] text-xs font-bold text-white">
                                                    ✓
                                                </span>

                                                <span className="text-sm font-semibold text-[#17212B]">
                                                    Case
                                                </span>
                                            </div>

                                            <p className="mt-3 text-xs leading-5 text-[#526170]">
                                                Written business case response
                                                submitted.
                                            </p>

                                        </div>

                                        <div className="rounded-lg border border-[#DCE2E8] bg-[#F6F7F9] p-5">

                                            <div className="flex items-center gap-3">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F33] text-xs font-bold text-white">
                                                    ✓
                                                </span>

                                                <span className="text-sm font-semibold text-[#17212B]">
                                                    Video
                                                </span>
                                            </div>

                                            <p className="mt-3 text-xs leading-5 text-[#526170]">
                                                Video work sample successfully
                                                submitted.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* Review stage */}
                                <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-[#DCE2E8] bg-white">

                                    <div className="p-6 sm:p-7">

                                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                            Next stage
                                        </p>

                                        <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                            Evidence review and report development
                                        </h2>

                                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526170]">
                                            Your evidence set can now move through
                                            the review stage. Assessment findings,
                                            case evidence, and video evidence can
                                            be considered together before the
                                            development roadmap is finalised.
                                        </p>

                                        <div className="mt-6 grid gap-3 sm:grid-cols-3">

                                            <div className="rounded-lg bg-[#F6F7F9] p-4">

                                                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7A8794]">
                                                    01
                                                </p>

                                                <p className="mt-2 text-sm font-semibold text-[#17212B]">
                                                    Evidence review
                                                </p>

                                                <p className="mt-1 text-xs leading-5 text-[#526170]">
                                                    Review the evidence collected
                                                    across the journey.
                                                </p>

                                            </div>

                                            <div className="rounded-lg bg-[#F6F7F9] p-4">

                                                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7A8794]">
                                                    02
                                                </p>

                                                <p className="mt-2 text-sm font-semibold text-[#17212B]">
                                                    Report
                                                </p>

                                                <p className="mt-1 text-xs leading-5 text-[#526170]">
                                                    Consolidate capability findings
                                                    and interpretation.
                                                </p>

                                            </div>

                                            <div className="rounded-lg bg-[#F6F7F9] p-4">

                                                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7A8794]">
                                                    03
                                                </p>

                                                <p className="mt-2 text-sm font-semibold text-[#17212B]">
                                                    Development
                                                </p>

                                                <p className="mt-1 text-xs leading-5 text-[#526170]">
                                                    Translate findings into
                                                    development direction.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* Actions */}
                                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

                                    <Link href={`/candidate/assessments/${code}/report`}>
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            className="w-full sm:w-auto"
                                        >
                                            Review Assessment Report →
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

                        <p className="mt-6 text-center text-xs text-[#7A8794]">
                            Assessment ID: {code}
                        </p>

                    </div>

                </Container>
            </section>

        </main>
    );
}