"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { useRouter } from "next/navigation";
import API_BASE_URL from "@/services/api";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);

            const email = String(formData.get("email") || "").trim();
            const password = String(formData.get("password") || "");

            if (!email || !password) {
                setError("Please enter your email and password.");
                return;
            }

            const response = await fetch(
                `${API_BASE_URL}/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    typeof data.detail === "string"
                        ? data.detail
                        : "Invalid email or password."
                );
            }

            // Save JWT token
            localStorage.setItem(
                "access_token",
                data.access_token
            );

            // Save token type if provided
            localStorage.setItem(
                "token_type",
                data.token_type || "bearer"
            );

            // Login successful
            router.push("/candidate/dashboard");

        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F6F7F9]">

            {/* Top Header */}
            <header className="border-b border-[#DCE2E8] bg-white">
                <Container>
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo */}
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

                        {/* Register Link */}
                        <p className="text-sm text-[#526170]">
                            Don't have an account?{" "}

                            <Link
                                href="/auth/register"
                                className="font-semibold text-[#0B1F33] hover:underline"
                            >
                                Create account
                            </Link>
                        </p>

                    </div>
                </Container>
            </header>

            {/* Login Area */}
            <section className="py-12 sm:py-16 lg:py-20">

                <Container>

                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

                        {/* Left Information Panel */}
                        <div className="pt-2 lg:sticky lg:top-8">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526F8F]">
                                Welcome back
                            </p>

                            <h1 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                Continue your METI journey.
                            </h1>

                            <p className="mt-5 max-w-md text-base leading-7 text-[#526170]">
                                Sign in to access your candidate profile,
                                assessment journey, reports, and development
                                insights.
                            </p>

                            {/* Journey */}
                            <div className="mt-8 space-y-5">

                                <JourneyStep
                                    number="01"
                                    title="Sign in securely"
                                    description="Access your secure METI account."
                                    active
                                />

                                <JourneyStep
                                    number="02"
                                    title="Complete your profile"
                                    description="Review your education, experience, and skills."
                                />

                                <JourneyStep
                                    number="03"
                                    title="Continue your assessment"
                                    description="Access the assessment associated with your selected journey."
                                />

                            </div>

                            {/* Information Box */}
                            <div className="mt-8 rounded-lg border border-[#DCE2E8] bg-white p-5">

                                <p className="text-sm font-semibold text-[#17212B]">
                                    Your information
                                </p>

                                <p className="mt-2 text-sm leading-6 text-[#526170]">
                                    Your account information is used to provide
                                    your personalized assessment and development
                                    experience.
                                </p>

                            </div>

                        </div>

                        {/* Login Card */}
                        <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 shadow-[0_8px_30px_rgba(11,31,51,0.06)] sm:p-8">

                            {/* Header */}
                            <div>

                                <p className="text-sm font-semibold text-[#0B1F33]">
                                    Account access
                                </p>

                                <h2 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-[#17212B]">
                                    Sign in to your account
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-[#526170]">
                                    Enter your credentials below to continue
                                    your METI journey.
                                </p>

                            </div>

                            {/* Error */}
                            {error && (
                                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                                    {error}
                                </div>
                            )}


                            {/* Login Form */}
                            <form
                                onSubmit={handleLogin}
                                className="mt-8 space-y-5"
                            >

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

                                {/* Password */}
                                <div>

                                    <div className="flex items-center justify-between">

                                        <label
                                            htmlFor="password"
                                            className="mb-2 block text-sm font-medium text-[#17212B]"
                                        >
                                            Password
                                        </label>

                                        <button
                                            type="button"
                                            className="text-xs font-semibold text-[#526170] hover:text-[#0B1F33]"
                                        >
                                            Forgot password?
                                        </button>

                                    </div>

                                    <div className="relative">

                                        <input
                                            id="password"
                                            name="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Enter your password"
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

                                </div>

                                {/* Remember Me */}
                                <div className="flex items-center gap-3">

                                    <input
                                        id="remember"
                                        name="remember"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-[#C5CED8] accent-[#0B1F33]"
                                    />

                                    <label
                                        htmlFor="remember"
                                        className="text-sm text-[#526170]"
                                    >
                                        Keep me signed in
                                    </label>

                                </div>

                                {/* Login Button */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={loading}
                                >
                                    {loading ? "Signing In..." : "Sign In"}
                                </Button>

                                {/* Register */}
                                <p className="text-center text-sm text-[#526170]">

                                    Don't have an account?{" "}

                                    <Link
                                        href="/auth/register"
                                        className="font-semibold text-[#0B1F33] hover:underline"
                                    >
                                        Create one
                                    </Link>

                                </p>

                            </form>

                        </div>

                    </div>

                </Container>

            </section>

        </main>
    );
}


/* Journey Step Component */

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