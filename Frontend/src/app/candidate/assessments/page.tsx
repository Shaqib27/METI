"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type AssessmentCode = "consulting" | "personality" | "combined";

export default function AssessmentSelectionPage() {
    const router = useRouter();

    const [selected, setSelected] = useState<AssessmentCode | null>(null);

    function handleContinue() {
        if (!selected) return;

        router.push(`/candidate/assessments/${selected}`);
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
                            Assessment Selection
                        </span>

                    </div>
                </Container>
            </header>

            {/* Main */}
            <section className="py-12 sm:py-16 lg:py-20">
                <Container>

                    <div className="mx-auto max-w-6xl">

                        {/* Heading */}
                        <div className="max-w-3xl">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526F8F]">
                                Step 4 of your METI journey
                            </p>

                            <h1 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                Choose your assessment journey.
                            </h1>

                            <p className="mt-4 text-base leading-7 text-[#526170] sm:text-lg">
                                Select the assessment experience that best
                                matches what you want to understand and
                                develop.
                            </p>

                        </div>

                        {/* Progress */}
                        <div className="mt-8">

                            <div className="flex items-center justify-between text-xs font-medium text-[#7A8794]">

                                <span>Registration</span>

                                <span>Consent</span>

                                <span>Profile</span>

                                <span className="font-semibold text-[#0B1F33]">
                                    Assessment
                                </span>

                            </div>

                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E9EDF1]">
                                <div className="h-full w-full rounded-full bg-[#0B1F33]" />
                            </div>

                        </div>

                        {/* Assessment Options */}
                        <div className="mt-10 grid gap-6 lg:grid-cols-2">

                            <AssessmentCard
                                code="consulting"
                                selected={selected === "consulting"}
                                onSelect={setSelected}
                                eyebrow="Management Consulting"
                                title="Management Consulting Assessment"
                                description="Explore consulting capability, structured problem solving, enterprise thinking, and readiness for consulting-oriented pathways."
                                items={[
                                    "Consulting capability",
                                    "Enterprise and strategic thinking",
                                    "Business analysis",
                                    "Consulting readiness",
                                ]}
                            />

                            <AssessmentCard
                                code="personality"
                                selected={selected === "personality"}
                                onSelect={setSelected}
                                eyebrow="Talent & Values"
                                title="Professional Personality & Values Assessment"
                                description="Understand your professional behavioural preferences, Talent DNA, and values profile as part of your development journey."
                                items={[
                                    "Talent DNA",
                                    "Behavioural preferences",
                                    "Professional values",
                                    "Development insights",
                                ]}
                            />

                        </div>

                        {/* Combined */}
                        <div className="mt-6">

                            <AssessmentCard
                                code="combined"
                                selected={selected === "combined"}
                                onSelect={setSelected}
                                eyebrow="Combined Journey"
                                title="Consulting + Personality & Values"
                                description="Combine both assessment experiences to build a broader view across consulting capability, Talent DNA, behavioural preferences, and values."
                                items={[
                                    "Consulting capability",
                                    "Talent DNA",
                                    "Professional values",
                                    "Integrated development view",
                                ]}
                                featured
                            />

                        </div>

                        {/* Selection Summary */}
                        <div className="mt-8 rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                <div>

                                    <p className="text-sm font-semibold text-[#17212B]">
                                        Your selection
                                    </p>

                                    <p className="mt-1 text-sm text-[#526170]">
                                        {selected
                                            ? getSelectionName(selected)
                                            : "Select an assessment above to continue."}
                                    </p>

                                </div>

                                <Button
                                    type="button"
                                    variant="primary"
                                    size="lg"
                                    disabled={!selected}
                                    onClick={handleContinue}
                                    className="w-full sm:w-auto"
                                >
                                    Continue
                                </Button>

                            </div>

                        </div>

                        {/* Note */}
                        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-[#7A8794]">
                            Your selected assessment determines the assessment
                            modules and entitlement journey you will see next.
                        </p>

                    </div>

                </Container>
            </section>
        </main>
    );
}


/* ---------------------------------------------
   Assessment Card
---------------------------------------------- */

function AssessmentCard({
    code,
    selected,
    onSelect,
    eyebrow,
    title,
    description,
    items,
    featured = false,
}: {
    code: AssessmentCode;
    selected: boolean;
    onSelect: (code: AssessmentCode) => void;
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
    featured?: boolean;
}) {
    return (
        <button
            type="button"
            onClick={() => onSelect(code)}
            className={`group w-full text-left transition-all duration-150 ${selected
                    ? "border-[#0B1F33] shadow-[0_8px_30px_rgba(11,31,51,0.10)]"
                    : "border-[#DCE2E8] hover:border-[#9AA9B8] hover:shadow-[0_6px_24px_rgba(11,31,51,0.06)]"
                } rounded-xl border bg-white p-6 sm:p-8`}
        >

            {/* Top */}
            <div className="flex items-start justify-between gap-4">

                <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                        {eyebrow}
                    </p>

                    <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-[#17212B]">
                        {title}
                    </h2>

                </div>

                {/* Selection Indicator */}
                <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${selected
                            ? "border-[#0B1F33] bg-[#0B1F33]"
                            : "border-[#C5CED8] bg-white"
                        }`}
                >
                    {selected && (
                        <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    )}
                </div>

            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-[#526170]">
                {description}
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-[#E9EDF1]" />

            {/* Included */}
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                Includes
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">

                {items.map((item) => (
                    <div
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#526170]"
                    >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#526F8F]" />

                        <span>{item}</span>
                    </div>
                ))}

            </div>

            {featured && (
                <div className="mt-6 inline-flex rounded-full bg-[#EAF2FB] px-3 py-1 text-xs font-semibold text-[#2563A6]">
                    Broader assessment journey
                </div>
            )}

        </button>
    );
}


/* ---------------------------------------------
   Helpers
---------------------------------------------- */

function getSelectionName(code: AssessmentCode) {
    switch (code) {
        case "consulting":
            return "Management Consulting Assessment";

        case "personality":
            return "Professional Personality & Values Assessment";

        case "combined":
            return "Consulting + Personality & Values";

        default:
            return "";
    }
}