"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CandidateProfilePage() {
    const router = useRouter();

    const [experienceLevel, setExperienceLevel] = useState("");
    const [industry, setIndustry] = useState("");
    const [market, setMarket] = useState("");
    const [resumeName, setResumeName] = useState("");

    function handleResumeChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (file) {
            setResumeName(file.name);
        }
    }

    function handleContinue(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        router.push("/candidate/assessments");
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
                            <span className="font-semibold text-[#0B1F33]">
                                Candidate Profile
                            </span>
                        </div>

                    </div>
                </Container>
            </header>

            {/* Main */}
            <section className="py-10 sm:py-14 lg:py-16">
                <Container>

                    <div className="mx-auto max-w-5xl">

                        {/* Page Header */}
                        <div className="max-w-3xl">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526F8F]">
                                Step 3 of your METI journey
                            </p>

                            <h1 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                Build your candidate profile.
                            </h1>

                            <p className="mt-4 text-base leading-7 text-[#526170] sm:text-lg">
                                Tell us about your education, experience,
                                professional interests, and supporting
                                evidence.
                            </p>

                        </div>

                        {/* Progress */}
                        <div className="mt-8">

                            <div className="flex items-center justify-between text-xs font-medium text-[#7A8794]">
                                <span>Registration</span>
                                <span>Consent</span>
                                <span className="text-[#0B1F33]">
                                    Profile
                                </span>
                                <span>Assessment</span>
                            </div>

                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E9EDF1]">
                                <div className="h-full w-3/4 rounded-full bg-[#0B1F33]" />
                            </div>

                        </div>

                        {/* Profile Form */}
                        <form
                            onSubmit={handleContinue}
                            className="mt-10 space-y-6"
                        >

                            {/* Education */}
                            <section className="rounded-xl border border-[#DCE2E8] bg-white">

                                <div className="border-b border-[#E9EDF1] p-6 sm:p-8">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        01
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                        Education
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-[#526170]">
                                        Add your highest or most relevant
                                        educational qualification.
                                    </p>

                                </div>

                                <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">

                                    <Field
                                        label="Highest qualification"
                                        htmlFor="qualification"
                                    >
                                        <input
                                            id="qualification"
                                            name="qualification"
                                            type="text"
                                            placeholder="e.g. MBA, B.Tech, M.Sc."
                                            className="meti-input h-11 px-3 text-sm"
                                            required
                                        />
                                    </Field>

                                    <Field
                                        label="Institution"
                                        htmlFor="institution"
                                    >
                                        <input
                                            id="institution"
                                            name="institution"
                                            type="text"
                                            placeholder="University or institution"
                                            className="meti-input h-11 px-3 text-sm"
                                            required
                                        />
                                    </Field>

                                    <Field
                                        label="Field of study"
                                        htmlFor="fieldOfStudy"
                                    >
                                        <input
                                            id="fieldOfStudy"
                                            name="fieldOfStudy"
                                            type="text"
                                            placeholder="e.g. Business, Engineering, Economics"
                                            className="meti-input h-11 px-3 text-sm"
                                        />
                                    </Field>

                                    <Field
                                        label="Graduation year"
                                        htmlFor="graduationYear"
                                    >
                                        <select
                                            id="graduationYear"
                                            name="graduationYear"
                                            defaultValue=""
                                            className="meti-input h-11 px-3 text-sm"
                                        >
                                            <option value="" disabled>
                                                Select year
                                            </option>

                                            {Array.from(
                                                { length: 30 },
                                                (_, index) =>
                                                    2026 - index
                                            ).map((year) => (
                                                <option
                                                    key={year}
                                                    value={year}
                                                >
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    </Field>

                                </div>

                            </section>

                            {/* Experience */}
                            <section className="rounded-xl border border-[#DCE2E8] bg-white">

                                <div className="border-b border-[#E9EDF1] p-6 sm:p-8">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        02
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                        Professional experience
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-[#526170]">
                                        Provide a concise overview of your
                                        professional background.
                                    </p>

                                </div>

                                <div className="space-y-5 p-6 sm:p-8">

                                    <Field
                                        label="Experience level"
                                        htmlFor="experienceLevel"
                                    >
                                        <select
                                            id="experienceLevel"
                                            name="experienceLevel"
                                            value={experienceLevel}
                                            onChange={(e) =>
                                                setExperienceLevel(
                                                    e.target.value
                                                )
                                            }
                                            className="meti-input h-11 px-3 text-sm"
                                            required
                                        >
                                            <option value="" disabled>
                                                Select experience level
                                            </option>
                                            <option value="student">
                                                Student / Recent graduate
                                            </option>
                                            <option value="early-career">
                                                0–2 years
                                            </option>
                                            <option value="mid-career">
                                                3–7 years
                                            </option>
                                            <option value="experienced">
                                                8+ years
                                            </option>
                                        </select>
                                    </Field>

                                    <Field
                                        label="Current / most recent role"
                                        htmlFor="currentRole"
                                    >
                                        <input
                                            id="currentRole"
                                            name="currentRole"
                                            type="text"
                                            placeholder="e.g. Business Analyst"
                                            className="meti-input h-11 px-3 text-sm"
                                        />
                                    </Field>

                                    <Field
                                        label="Company / organisation"
                                        htmlFor="company"
                                    >
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            placeholder="Current or most recent organisation"
                                            className="meti-input h-11 px-3 text-sm"
                                        />
                                    </Field>

                                    <Field
                                        label="Experience summary"
                                        htmlFor="experienceSummary"
                                    >
                                        <textarea
                                            id="experienceSummary"
                                            name="experienceSummary"
                                            rows={5}
                                            placeholder="Briefly describe your professional experience, responsibilities, and key areas of work."
                                            className="meti-input resize-none p-3 text-sm"
                                        />
                                    </Field>

                                </div>

                            </section>

                            {/* Industry & Market */}
                            <section className="rounded-xl border border-[#DCE2E8] bg-white">

                                <div className="border-b border-[#E9EDF1] p-6 sm:p-8">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        03
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                        Industry and market exposure
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-[#526170]">
                                        Help us understand the industries and
                                        markets you have worked in or studied.
                                    </p>

                                </div>

                                <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">

                                    <Field
                                        label="Primary industry"
                                        htmlFor="industry"
                                    >
                                        <select
                                            id="industry"
                                            name="industry"
                                            value={industry}
                                            onChange={(e) =>
                                                setIndustry(e.target.value)
                                            }
                                            className="meti-input h-11 px-3 text-sm"
                                        >
                                            <option value="">
                                                Select industry
                                            </option>
                                            <option value="consulting">
                                                Consulting
                                            </option>
                                            <option value="technology">
                                                Technology
                                            </option>
                                            <option value="financial-services">
                                                Financial Services
                                            </option>
                                            <option value="healthcare">
                                                Healthcare
                                            </option>
                                            <option value="energy">
                                                Energy
                                            </option>
                                            <option value="manufacturing">
                                                Manufacturing
                                            </option>
                                            <option value="retail">
                                                Retail
                                            </option>
                                            <option value="telecom">
                                                Telecom
                                            </option>
                                            <option value="public-sector">
                                                Public Sector
                                            </option>
                                            <option value="other">
                                                Other
                                            </option>
                                        </select>
                                    </Field>

                                    <Field
                                        label="Primary market / geography"
                                        htmlFor="market"
                                    >
                                        <select
                                            id="market"
                                            name="market"
                                            value={market}
                                            onChange={(e) =>
                                                setMarket(e.target.value)
                                            }
                                            className="meti-input h-11 px-3 text-sm"
                                        >
                                            <option value="">
                                                Select market
                                            </option>
                                            <option value="india">
                                                India
                                            </option>
                                            <option value="north-america">
                                                North America
                                            </option>
                                            <option value="europe">
                                                Europe
                                            </option>
                                            <option value="middle-east">
                                                Middle East
                                            </option>
                                            <option value="asia-pacific">
                                                Asia Pacific
                                            </option>
                                            <option value="global">
                                                Global
                                            </option>
                                        </select>
                                    </Field>

                                    <div className="sm:col-span-2">

                                        <Field
                                            label="International exposure"
                                            htmlFor="internationalExposure"
                                        >
                                            <textarea
                                                id="internationalExposure"
                                                name="internationalExposure"
                                                rows={4}
                                                placeholder="Describe any international work, projects, clients, markets, or academic exposure."
                                                className="meti-input resize-none p-3 text-sm"
                                            />
                                        </Field>

                                    </div>

                                </div>

                            </section>

                            {/* Evidence */}
                            <section className="rounded-xl border border-[#DCE2E8] bg-white">

                                <div className="border-b border-[#E9EDF1] p-6 sm:p-8">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        04
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                        Supporting evidence
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-[#526170]">
                                        Add your CV and professional links so
                                        your profile can be understood in
                                        context.
                                    </p>

                                </div>

                                <div className="space-y-6 p-6 sm:p-8">

                                    {/* Resume */}
                                    <div>

                                        <label
                                            htmlFor="resume"
                                            className="mb-2 block text-sm font-medium text-[#17212B]"
                                        >
                                            CV / Resume
                                        </label>

                                        <label
                                            htmlFor="resume"
                                            className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#C5CED8] bg-[#F6F7F9] px-6 py-8 text-center transition-colors hover:border-[#526F8F] hover:bg-[#F2F0EB]"
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[#526F8F]">
                                                ↑
                                            </div>

                                            <p className="mt-3 text-sm font-semibold text-[#17212B]">
                                                {resumeName
                                                    ? resumeName
                                                    : "Upload your CV / Resume"}
                                            </p>

                                            <p className="mt-1 text-xs text-[#7A8794]">
                                                PDF, DOC, or DOCX
                                            </p>

                                            <input
                                                id="resume"
                                                name="resume"
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleResumeChange}
                                                className="sr-only"
                                            />
                                        </label>

                                    </div>

                                    {/* LinkedIn */}
                                    <Field
                                        label="LinkedIn profile"
                                        htmlFor="linkedin"
                                    >
                                        <input
                                            id="linkedin"
                                            name="linkedin"
                                            type="url"
                                            placeholder="https://linkedin.com/in/your-profile"
                                            className="meti-input h-11 px-3 text-sm"
                                        />
                                    </Field>

                                    {/* Portfolio */}
                                    <Field
                                        label="Portfolio / professional website"
                                        htmlFor="portfolio"
                                    >
                                        <input
                                            id="portfolio"
                                            name="portfolio"
                                            type="url"
                                            placeholder="https://yourwebsite.com"
                                            className="meti-input h-11 px-3 text-sm"
                                        />
                                    </Field>

                                </div>

                            </section>

                            {/* Actions */}
                            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">

                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() =>
                                        router.push("/auth/consent")
                                    }
                                >
                                    Back to Consent
                                </Button>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                >
                                    Continue to Assessment
                                </Button>

                            </div>

                        </form>

                        {/* Note */}
                        <p className="mt-6 text-center text-xs leading-5 text-[#7A8794]">
                            You can update your profile information later from
                            your candidate dashboard.
                        </p>

                    </div>

                </Container>
            </section>
        </main>
    );
}

/* ---------------------------------------------
   Reusable Field Component
---------------------------------------------- */

function Field({
    label,
    htmlFor,
    children,
}: {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label
                htmlFor={htmlFor}
                className="mb-2 block text-sm font-medium text-[#17212B]"
            >
                {label}
            </label>

            {children}
        </div>
    );
}