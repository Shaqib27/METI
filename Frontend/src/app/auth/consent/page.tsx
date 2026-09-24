"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function ConsentPage() {
    const router = useRouter();

    const [privacyConsent, setPrivacyConsent] = useState(false);
    const [aiConsent, setAiConsent] = useState(false);
    const [communications, setCommunications] = useState(false);

    const canContinue = privacyConsent && aiConsent;

    function handleContinue() {
        if (!canContinue) return;

        router.push("/candidate/profile");
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

                        <div className="text-sm text-[#526170]">
                            Registration
                            <span className="mx-2 text-[#C5CED8]">
                                /
                            </span>
                            <span className="font-semibold text-[#0B1F33]">
                                Consent
                            </span>
                        </div>

                    </div>
                </Container>
            </header>

            {/* Main */}
            <section className="py-12 sm:py-16 lg:py-20">
                <Container>

                    <div className="mx-auto max-w-4xl">

                        {/* Page Introduction */}
                        <div className="max-w-2xl">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526F8F]">
                                Step 2 of your METI journey
                            </p>

                            <h1 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                Review your consent preferences.
                            </h1>

                            <p className="mt-5 text-base leading-7 text-[#526170] sm:text-lg">
                                Before continuing, review how your information
                                and assessment responses will be used as part
                                of your METI experience.
                            </p>

                        </div>

                        {/* Progress */}
                        <div className="mt-8">
                            <div className="flex items-center justify-between text-xs font-medium text-[#7A8794]">
                                <span>Registration</span>
                                <span>Consent</span>
                                <span>Profile</span>
                            </div>

                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E9EDF1]">
                                <div className="h-full w-2/3 rounded-full bg-[#0B1F33]" />
                            </div>
                        </div>

                        {/* Consent Card */}
                        <div className="mt-10 rounded-xl border border-[#DCE2E8] bg-white shadow-[0_8px_30px_rgba(11,31,51,0.05)]">

                            <div className="border-b border-[#E9EDF1] p-6 sm:p-8">

                                <p className="text-sm font-semibold text-[#0B1F33]">
                                    Required consent
                                </p>

                                <h2 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#17212B]">
                                    Information and assessment use
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-[#526170]">
                                    The following consent items are required
                                    before you continue to your candidate
                                    profile.
                                </p>

                            </div>

                            <div className="divide-y divide-[#E9EDF1]">

                                {/* Privacy Consent */}
                                <ConsentItem
                                    checked={privacyConsent}
                                    onChange={setPrivacyConsent}
                                    required
                                    title="Privacy and information use"
                                >
                                    I understand that the information I provide
                                    may be used to create and maintain my METI
                                    candidate profile and support the assessment,
                                    reporting, and development journey.
                                </ConsentItem>

                                {/* AI Consent */}
                                <ConsentItem
                                    checked={aiConsent}
                                    onChange={setAiConsent}
                                    required
                                    title="AI-assisted assessment and scoring"
                                >
                                    I understand that METI may use AI-assisted
                                    methods to analyze assessment responses and
                                    other permitted evidence as part of the
                                    assessment and reporting process.
                                </ConsentItem>

                                {/* Communications */}
                                <ConsentItem
                                    checked={communications}
                                    onChange={setCommunications}
                                    title="Communications preference"
                                >
                                    I would like to receive relevant METI
                                    communications about my assessment,
                                    development journey, and related
                                    opportunities.
                                </ConsentItem>

                            </div>

                            {/* Notice */}
                            <div className="m-6 rounded-lg border border-[#DCE2E8] bg-[#F6F7F9] p-4 sm:m-8">

                                <div className="flex gap-3">

                                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF2FB] text-xs font-bold text-[#2563A6]">
                                        i
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-[#17212B]">
                                            Your choices matter
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-[#526170]">
                                            Communications consent is optional.
                                            The required consent items must be
                                            accepted before continuing.
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* Actions */}
                            <div className="flex flex-col-reverse gap-3 border-t border-[#E9EDF1] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() =>
                                        router.push("/auth/register")
                                    }
                                >
                                    Back
                                </Button>

                                <Button
                                    type="button"
                                    variant="primary"
                                    size="lg"
                                    disabled={!canContinue}
                                    onClick={handleContinue}
                                >
                                    Continue to Profile
                                </Button>

                            </div>

                        </div>

                        {/* Footer note */}
                        <p className="mt-6 text-center text-xs leading-5 text-[#7A8794]">
                            Consent records are associated with your candidate
                            account and their applicable consent version.
                        </p>

                    </div>

                </Container>
            </section>
        </main>
    );
}

function ConsentItem({
    checked,
    onChange,
    required = false,
    title,
    children,
}: {
    checked: boolean;
    onChange: (value: boolean) => void;
    required?: boolean;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="p-6 sm:p-8">

            <label className="flex cursor-pointer gap-4">

                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 rounded border-[#C5CED8] accent-[#0B1F33]"
                />

                <div>

                    <div className="flex flex-wrap items-center gap-2">

                        <p className="text-sm font-semibold text-[#17212B]">
                            {title}
                        </p>

                        {required && (
                            <span className="rounded-full bg-[#FDECEC] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#B42318]">
                                Required
                            </span>
                        )}

                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#526170]">
                        {children}
                    </p>

                </div>

            </label>

        </div>
    );
}