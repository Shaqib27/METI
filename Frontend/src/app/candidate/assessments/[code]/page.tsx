"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type AssessmentCode = "consulting" | "personality" | "combined";

const assessmentData = {
    consulting: {
        eyebrow: "Management Consulting",
        title: "Management Consulting Assessment",
        description:
            "A structured assessment focused on consulting capability, enterprise thinking, business analysis, problem solving, and consulting readiness.",
        duration: "Approximately 35–45 minutes",
        includes: [
            "Consulting capability assessment",
            "Enterprise and strategic thinking",
            "Business analysis",
            "Problem solving and structured reasoning",
            "Consulting readiness insights",
        ],
        outcome:
            "A concise view of your current capability profile and development priorities.",
    },

    personality: {
        eyebrow: "Talent & Values",
        title: "Professional Personality & Values Assessment",
        description:
            "An assessment experience focused on professional behavioural preferences, Talent DNA, and values as descriptive development information.",
        duration: "Approximately 25–35 minutes",
        includes: [
            "Enterprise Talent DNA",
            "Professional behavioural preferences",
            "Values profile",
            "Development-oriented insights",
            "Consistency indicators",
        ],
        outcome:
            "A descriptive view of your professional preferences, Talent DNA, and values profile.",
    },

    combined: {
        eyebrow: "Combined Journey",
        title: "Consulting + Personality & Values",
        description:
            "A broader assessment journey combining consulting capability with Talent DNA, behavioural preferences, and values.",
        duration: "Approximately 60–75 minutes",
        includes: [
            "Consulting capability assessment",
            "Enterprise Talent DNA",
            "Professional values",
            "Behavioural preferences",
            "Integrated development insights",
        ],
        outcome:
            "A broader profile connecting capability, professional preferences, values, and development themes.",
    },
};

export default function AssessmentDetailsPage() {
    const router = useRouter();
    const params = useParams();

    const code = params.code as AssessmentCode;

    const assessment =
        assessmentData[code] ?? assessmentData.consulting;

    function handleContinue() {
        router.push(`/candidate/assessments/${code}/payment`);
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

                        <span className="text-sm font-medium text-[#526170]">
                            Assessment Details
                        </span>

                    </div>
                </Container>
            </header>

            {/* Main */}
            <section className="py-12 sm:py-16 lg:py-20">
                <Container>

                    <div className="mx-auto max-w-5xl">

                        {/* Breadcrumb */}
                        <Link
                            href="/candidate/assessments"
                            className="text-sm font-medium text-[#526F8F] hover:text-[#0B1F33]"
                        >
                            ← Back to assessment selection
                        </Link>

                        {/* Header */}
                        <div className="mt-8 max-w-3xl">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526F8F]">
                                {assessment.eyebrow}
                            </p>

                            <h1 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                {assessment.title}
                            </h1>

                            <p className="mt-5 text-base leading-7 text-[#526170] sm:text-lg">
                                {assessment.description}
                            </p>

                        </div>

                        {/* Summary */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">

                            <InfoCard
                                label="Assessment format"
                                value="Structured digital assessment"
                            />

                            <InfoCard
                                label="Estimated time"
                                value={assessment.duration}
                            />

                        </div>

                        {/* Main Content */}
                        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">

                            {/* Includes */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    What is included
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                    Assessment coverage
                                </h2>

                                <div className="mt-6 space-y-4">

                                    {assessment.includes.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF6F1] text-xs font-bold text-[#167A5B]">
                                                ✓
                                            </div>

                                            <p className="text-sm leading-6 text-[#526170]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* Entitlement */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Assessment access
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                    Your assessment entitlement
                                </h2>

                                <div className="mt-6 rounded-lg bg-[#F6F7F9] p-5">

                                    <p className="text-sm font-semibold text-[#17212B]">
                                        {assessment.title}
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#526170]">
                                        Access to this assessment will be
                                        activated after the applicable
                                        entitlement and payment step.
                                    </p>

                                </div>

                                <div className="mt-6 border-t border-[#E9EDF1] pt-6">

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#526170]">
                                            Current status
                                        </span>

                                        <span className="rounded-full bg-[#FFF7E6] px-3 py-1 text-xs font-semibold text-[#B7791F]">
                                            Not activated
                                        </span>
                                    </div>

                                </div>

                                <Button
                                    type="button"
                                    variant="primary"
                                    size="lg"
                                    className="mt-6 w-full"
                                    onClick={handleContinue}
                                >
                                    Continue to Payment
                                </Button>

                            </div>

                        </div>

                        {/* Expected Outcome */}
                        <div className="mt-6 rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                What you will receive
                            </p>

                            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#526170]">
                                {assessment.outcome}
                            </p>

                        </div>

                        {/* Information Note */}
                        <div className="mt-6 rounded-lg border border-[#DCE2E8] bg-[#F2F0EB] p-5">

                            <p className="text-sm font-semibold text-[#17212B]">
                                Assessment information
                            </p>

                            <p className="mt-1 text-sm leading-6 text-[#526170]">
                                Assessment content, scoring rules, and access
                                conditions are managed as versioned platform
                                definitions. Your selected product determines
                                the modules available in your journey.
                            </p>

                        </div>

                    </div>

                </Container>
            </section>
        </main>
    );
}


/* ---------------------------------------------
   Information Card
---------------------------------------------- */

function InfoCard({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-lg border border-[#DCE2E8] bg-white p-5">

            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                {label}
            </p>

            <p className="mt-2 text-sm font-semibold text-[#17212B]">
                {value}
            </p>

        </div>
    );
}