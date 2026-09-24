"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type Question = {
    id: number;
    section: string;
    prompt: string;
    type: "single" | "scale";
    options: string[];
};

const questions: Question[] = [
    {
        id: 1,
        section: "Structured Problem Solving",
        prompt:
            "A client is experiencing declining profitability despite stable revenue. What would you examine first?",
        type: "single",
        options: [
            "Break down revenue and cost drivers to identify the source of the change.",
            "Recommend reducing headcount immediately.",
            "Compare the client with its closest competitor.",
            "Ask the client to increase prices.",
        ],
    },
    {
        id: 2,
        section: "Enterprise Thinking",
        prompt:
            "When analysing a business problem, how important is it to understand how different parts of the organisation affect one another?",
        type: "scale",
        options: [
            "Not important",
            "Slightly important",
            "Moderately important",
            "Very important",
            "Extremely important",
        ],
    },
    {
        id: 3,
        section: "Business Analysis",
        prompt:
            "Which approach would provide the strongest basis for making a recommendation to a client?",
        type: "single",
        options: [
            "Use relevant evidence, assumptions, alternatives, and trade-offs.",
            "Choose the option that appears most popular.",
            "Use only the information that supports the preferred option.",
            "Make the recommendation before analysing the available evidence.",
        ],
    },
    {
        id: 4,
        section: "Strategic Thinking",
        prompt:
            "A company wants to enter a new market. Which set of questions would be most useful initially?",
        type: "single",
        options: [
            "Market attractiveness, customer needs, competitive position, economics, and capabilities.",
            "Only the size of the market.",
            "Only the company's current revenue.",
            "Only the activities of the largest competitor.",
        ],
    },
    {
        id: 5,
        section: "Consulting Readiness",
        prompt:
            "How comfortable are you with presenting a recommendation when the available information is incomplete?",
        type: "scale",
        options: [
            "Not comfortable",
            "Slightly comfortable",
            "Moderately comfortable",
            "Very comfortable",
            "Extremely comfortable",
        ],
    },
];

export default function AssessmentRunnerPage() {
    const router = useRouter();
    const params = useParams();

    const code = params.code as string;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});

    const question = questions[currentQuestion];

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    const selectedAnswer = answers[question.id];

    function handleAnswer(value: string) {
        setAnswers((previous) => ({
            ...previous,
            [question.id]: value,
        }));
    }

    function handleNext() {
        if (!selectedAnswer) return;

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((previous) => previous + 1);
            return;
        }

        router.push(
            `/candidate/assessments/${code}/complete`
        );
    }

    function handlePrevious() {
        if (currentQuestion > 0) {
            setCurrentQuestion((previous) => previous - 1);
        }
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
                                Management Consulting Assessment
                            </span>

                            <span className="rounded-full bg-[#EAF2FB] px-3 py-1 text-xs font-semibold text-[#2563A6]">
                                In progress
                            </span>

                        </div>

                    </div>
                </Container>
            </header>

            {/* Progress */}
            <div className="border-b border-[#DCE2E8] bg-white">
                <Container>

                    <div className="py-4">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7A8794]">
                                    Assessment
                                </p>

                                <p className="mt-1 text-sm font-semibold text-[#17212B]">
                                    {question.section}
                                </p>
                            </div>

                            <p className="text-sm font-medium text-[#526170]">
                                {currentQuestion + 1} of{" "}
                                {questions.length}
                            </p>

                        </div>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E9EDF1]">

                            <div
                                className="h-full rounded-full bg-[#0B1F33] transition-all duration-300"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                        </div>

                    </div>

                </Container>
            </div>

            {/* Main */}
            <section className="py-10 sm:py-14">
                <Container>

                    <div className="mx-auto max-w-4xl">

                        {/* Question Card */}
                        <div className="rounded-xl border border-[#DCE2E8] bg-white shadow-[0_8px_30px_rgba(11,31,51,0.05)]">

                            <div className="p-6 sm:p-8 lg:p-10">

                                {/* Question Number */}
                                <div className="flex items-center gap-3">

                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F33] text-xs font-bold text-white">
                                        {question.id}
                                    </span>

                                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        {question.section}
                                    </span>

                                </div>

                                {/* Prompt */}
                                <h1 className="mt-6 max-w-3xl text-2xl font-bold leading-9 tracking-[-0.02em] text-[#17212B] sm:text-3xl">
                                    {question.prompt}
                                </h1>

                                {/* Options */}
                                <div className="mt-8 space-y-3">

                                    {question.options.map(
                                        (option, index) => {
                                            const selected =
                                                selectedAnswer ===
                                                option;

                                            return (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() =>
                                                        handleAnswer(
                                                            option
                                                        )
                                                    }
                                                    className={`flex w-full items-start gap-4 rounded-lg border p-4 text-left transition-all duration-150 ${selected
                                                            ? "border-[#0B1F33] bg-[#F2F0EB] shadow-sm"
                                                            : "border-[#DCE2E8] bg-white hover:border-[#9AA9B8] hover:bg-[#F6F7F9]"
                                                        }`}
                                                >

                                                    <span
                                                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${selected
                                                                ? "border-[#0B1F33] bg-[#0B1F33] text-white"
                                                                : "border-[#C5CED8] text-[#526170]"
                                                            }`}
                                                    >
                                                        {String.fromCharCode(
                                                            65 + index
                                                        )}
                                                    </span>

                                                    <span className="pt-1 text-sm leading-6 text-[#526170]">
                                                        {option}
                                                    </span>

                                                </button>
                                            );
                                        }
                                    )}

                                </div>

                                {/* Autosave indicator */}
                                <div className="mt-8 flex items-center gap-2 text-xs text-[#7A8794]">

                                    <span className="h-2 w-2 rounded-full bg-[#167A5B]" />

                                    Response saved locally

                                </div>

                            </div>

                            {/* Footer */}
                            <div className="flex flex-col-reverse gap-3 border-t border-[#E9EDF1] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

                                <Button
                                    type="button"
                                    variant="ghost"
                                    disabled={currentQuestion === 0}
                                    onClick={handlePrevious}
                                >
                                    ← Previous
                                </Button>

                                <Button
                                    type="button"
                                    variant="primary"
                                    size="lg"
                                    disabled={!selectedAnswer}
                                    onClick={handleNext}
                                >
                                    {currentQuestion ===
                                        questions.length - 1
                                        ? "Submit Assessment"
                                        : "Save & Continue →"}
                                </Button>

                            </div>

                        </div>

                        {/* Footer Information */}
                        <div className="mt-6 flex flex-col gap-2 text-center text-xs text-[#7A8794] sm:flex-row sm:items-center sm:justify-between">

                            <span>
                                Your responses are saved as you progress.
                            </span>

                            <span>
                                Question {currentQuestion + 1} /{" "}
                                {questions.length}
                            </span>

                        </div>

                    </div>

                </Container>
            </section>

        </main>
    );
}