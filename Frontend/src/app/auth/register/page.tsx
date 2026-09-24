"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="min-h-screen bg-[#F6F7F9]">
            {/* Top Header */}
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

                        <p className="text-sm text-[#526170]">
                            Already have an account?{" "}
                            <Link
                                href="/auth/login"
                                className="font-semibold text-[#0B1F33] hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </Container>
            </header>

            {/* Registration Area */}
            <section className="py-12 sm:py-16 lg:py-20">
                <Container>
                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

                        {/* Left Information Panel */}
                        <div className="pt-2 lg:sticky lg:top-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526F8F]">
                                Begin your METI journey
                            </p>

                            <h1 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                Create your METI account.
                            </h1>

                            <p className="mt-5 max-w-md text-base leading-7 text-[#526170]">
                                Register to begin your structured assessment
                                journey and build your candidate profile.
                            </p>

                            {/* Journey */}
                            <div className="mt-8 space-y-5">
                                <JourneyStep
                                    number="01"
                                    title="Create your account"
                                    description="Set up your secure METI identity."
                                    active
                                />

                                <JourneyStep
                                    number="02"
                                    title="Complete your profile"
                                    description="Tell us about your education and experience."
                                />

                                <JourneyStep
                                    number="03"
                                    title="Begin your assessment"
                                    description="Complete the assessment associated with your selected journey."
                                />
                            </div>

                            <div className="mt-8 rounded-lg border border-[#DCE2E8] bg-white p-5">
                                <p className="text-sm font-semibold text-[#17212B]">
                                    Your information
                                </p>

                                <p className="mt-2 text-sm leading-6 text-[#526170]">
                                    Your profile and assessment information are
                                    used to support your assessment, reporting,
                                    and development journey.
                                </p>
                            </div>
                        </div>

                        {/* Registration Card */}
                        <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 shadow-[0_8px_30px_rgba(11,31,51,0.06)] sm:p-8">

                            <div>
                                <p className="text-sm font-semibold text-[#0B1F33]">
                                    Account registration
                                </p>

                                <h2 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-[#17212B]">
                                    Create your account
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-[#526170]">
                                    Use your details below to create your METI
                                    candidate account.
                                </p>
                            </div>

                            {/* Form */}
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="mt-8 space-y-5"
                            >

                                {/* Full Name */}
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="mb-2 block text-sm font-medium text-[#17212B]"
                                    >
                                        Full name
                                    </label>

                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="meti-input h-11 px-3 text-sm"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-[#17212B]"
                                    >
                                        Email address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="meti-input h-11 px-3 text-sm"
                                    />
                                </div>

                                {/* Mobile + Country */}
                                <div className="grid gap-5 sm:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="mobile"
                                            className="mb-2 block text-sm font-medium text-[#17212B]"
                                        >
                                            Mobile number
                                        </label>

                                        <input
                                            id="mobile"
                                            name="mobile"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            className="meti-input h-11 px-3 text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="country"
                                            className="mb-2 block text-sm font-medium text-[#17212B]"
                                        >
                                            Country
                                        </label>

                                        <select
                                            id="country"
                                            name="country"
                                            defaultValue=""
                                            className="meti-input h-11 px-3 text-sm"
                                        >
                                            <option value="" disabled>
                                                Select country
                                            </option>
                                            <option value="IN">
                                                India
                                            </option>
                                            <option value="US">
                                                United States
                                            </option>
                                            <option value="GB">
                                                United Kingdom
                                            </option>
                                            <option value="AE">
                                                United Arab Emirates
                                            </option>
                                            <option value="SG">
                                                Singapore
                                            </option>
                                            <option value="CA">
                                                Canada
                                            </option>
                                            <option value="AU">
                                                Australia
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-sm font-medium text-[#17212B]"
                                    >
                                        Password
                                    </label>

                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Create a secure password"
                                            className="meti-input h-11 px-3 pr-20 text-sm"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    !showPassword
                                                )
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#526170] hover:text-[#0B1F33]"
                                        >
                                            {showPassword
                                                ? "Hide"
                                                : "Show"}
                                        </button>
                                    </div>

                                    <p className="mt-2 text-xs text-[#7A8794]">
                                        Use at least 8 characters.
                                    </p>
                                </div>

                                {/* Consent */}
                                <div className="rounded-lg border border-[#E9EDF1] bg-[#F6F7F9] p-4">
                                    <label className="flex cursor-pointer gap-3">
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            className="mt-1 h-4 w-4 rounded border-[#C5CED8] accent-[#0B1F33]"
                                        />

                                        <span className="text-sm leading-6 text-[#526170]">
                                            I agree to the METI terms and
                                            privacy notice and understand that
                                            my information will be used to
                                            provide the assessment and
                                            development experience.
                                        </span>
                                    </label>
                                </div>

                                {/* Continue */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                >
                                    Create Account
                                </Button>

                                <p className="text-center text-xs leading-5 text-[#7A8794]">
                                    You will review additional consent and
                                    assessment information before beginning
                                    the assessment.
                                </p>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}

function JourneyStep({
    number,
    title,
    description,
    active = false,
}: {
    number: string;
    title: string;
    description: string;
    active?: boolean;
}) {
    return (
        <div className="flex gap-4">
            <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${active
                    ? "bg-[#0B1F33] text-white"
                    : "bg-[#E9EDF1] text-[#526170]"
                    }`}
            >
                {number}
            </div>

            <div>
                <p className="text-sm font-semibold text-[#17212B]">
                    {title}
                </p>

                <p className="mt-1 text-sm leading-5 text-[#7A8794]">
                    {description}
                </p>
            </div>
        </div>
    );
}