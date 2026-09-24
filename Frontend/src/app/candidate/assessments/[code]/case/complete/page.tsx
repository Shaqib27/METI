"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CaseCompletePage() {
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
                            Case submitted
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
                                        Case response submitted
                                    </p>

                                    <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                        Your case response has been recorded.
                                    </h1>

                                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#526170]">
                                        Your written response is now part of your
                                        assessment evidence. The next stage adds
                                        another layer of evidence to your METI
                                        profile.
                                    </p>

                                </div>

                                {/* Progress */}
                                <div className="mx-auto mt-10 max-w-2xl">

                                    <div className="flex items-center">

                                        <div className="flex items-center">

                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1F33] text-xs font-bold text-white">
                                                ✓
                                            </div>

                                            <span className="ml-3 text-sm font-semibold text-[#17212B]">
                                                Assessment
                                            </span>

                                        </div>

                                        <div className="mx-3 h-px flex-1 bg-[#0B1F33]" />

                                        <div className="flex items-center">

                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1F33] text-xs font-bold text-white">
                                                ✓
                                            </div>

                                            <span className="ml-3 text-sm font-semibold text-[#17212B]">
                                                Case
                                            </span>

                                        </div>

                                        <div className="mx-3 h-px flex-1 bg-[#DCE2E8]" />

                                        <div className="flex items-center">

                                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5CED8] bg-white text-xs font-bold text-[#7A8794]">
                                                3
                                            </div>

                                            <span className="ml-3 hidden text-sm font-medium text-[#7A8794] sm:inline">
                                                Evidence
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                {/* Next step */}
                                <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-[#DCE2E8] bg-[#F6F7F9] p-6 sm:p-7">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        Next stage
                                    </p>

                                    <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                        <div>

                                            <h2 className="text-lg font-bold text-[#17212B]">
                                                Complete your video response
                                            </h2>

                                            <p className="mt-2 text-sm leading-6 text-[#526170]">
                                                Record a structured response to a
                                                business prompt and add another
                                                evidence point to your profile.
                                            </p>

                                        </div>

                                        <div className="shrink-0 rounded-lg border border-[#DCE2E8] bg-white px-4 py-3">

                                            <p className="text-xs text-[#7A8794]">
                                                Estimated time
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#17212B]">
                                                5–10 minutes
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* What happens */}
                                <div className="mx-auto mt-8 max-w-2xl">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7A8794]">
                                        What to expect
                                    </p>

                                    <div className="mt-4 grid gap-3 sm:grid-cols-3">

                                        <div className="rounded-lg border border-[#E9EDF1] bg-white p-4">
                                            <p className="text-sm font-semibold text-[#17212B]">
                                                01
                                            </p>

                                            <p className="mt-2 text-sm font-medium text-[#17212B]">
                                                Review prompt
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-[#7A8794]">
                                                Understand the business scenario.
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-[#E9EDF1] bg-white p-4">
                                            <p className="text-sm font-semibold text-[#17212B]">
                                                02
                                            </p>

                                            <p className="mt-2 text-sm font-medium text-[#17212B]">
                                                Prepare
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-[#7A8794]">
                                                Organise your response before
                                                recording.
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-[#E9EDF1] bg-white p-4">
                                            <p className="text-sm font-semibold text-[#17212B]">
                                                03
                                            </p>

                                            <p className="mt-2 text-sm font-medium text-[#17212B]">
                                                Record
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-[#7A8794]">
                                                Submit your video response.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                {/* CTA */}
                                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

                                    <Link
                                        href={`/candidate/assessments/${code}/video`}
                                    >
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            className="w-full sm:w-auto"
                                        >
                                            Continue to Video Response →
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

                        <p className="mt-6 text-center text-xs text-[#7A8794]">
                            Assessment ID: {code}
                        </p>

                    </div>

                </Container>
            </section>

        </main>
    );
}