"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import API_BASE_URL from "@/services/api";
import { uploadResume } from "@/services/resume";

const journey = [
    {
        number: "01",
        title: "Profile",
        description: "Your professional and background information.",
        status: "Complete",
    },
    {
        number: "02",
        title: "Assessment",
        description: "Capability assessment and initial findings.",
        status: "Complete",
    },
    {
        number: "03",
        title: "Case",
        description: "Practical business problem-solving evidence.",
        status: "Complete",
    },
    {
        number: "04",
        title: "Video",
        description: "Communication and recommendation work sample.",
        status: "Complete",
    },
    {
        number: "05",
        title: "Review",
        description: "Consolidated evidence review and interpretation.",
        status: "Next",
    },
];

const capabilities = [
    {
        name: "Enterprise Thinking",
        score: 84,
    },
    {
        name: "Structured Problem Solving",
        score: 82,
    },
    {
        name: "Business Analysis",
        score: 76,
    },
    {
        name: "Strategic Thinking",
        score: 71,
    },
    {
        name: "Consulting Readiness",
        score: 68,
    },
];

export default function CandidateDashboardPage() {
    const [user, setUser] = useState<{
        name: string;
        email: string;
    } | null>(null);

    const [loadingUser, setLoadingUser] = useState(true);

    const [selectedFile, setSelectedFile] =
        useState<File | null>(null);

    const [uploadingResume, setUploadingResume] =
        useState(false);

    const [uploadMessage, setUploadMessage] =
        useState("");

    const [resumeId, setResumeId] =
        useState<number | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("access_token");

                if (!token) {
                    console.error("No access token found");
                    return;
                }

                const response = await fetch(
                    `${API_BASE_URL}/users/me`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch user profile"
                    );
                }

                const data = await response.json();

                setUser({
                    name: data.name,
                    email: data.email,
                });
            } catch (error) {
                console.error(
                    "Failed to fetch user:",
                    error
                );
            } finally {
                setLoadingUser(false);
            }
        };

        fetchUser();
    }, []);

    const handleResumeUpload = async () => {
        if (!selectedFile) {
            setUploadMessage("Please select a resume first.");
            return;
        }

        const allowedTypes = [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(selectedFile.type)) {
            setUploadMessage(
                "Only PDF and DOCX files are allowed."
            );
            return;
        }

        setUploadingResume(true);
        setUploadMessage("");

        try {
            const data = await uploadResume(selectedFile);

            setResumeId(data.resume_id);

            setUploadMessage(
                "Resume uploaded successfully."
            );

            setSelectedFile(null);
        } catch (error) {
            console.error("Resume upload failed:", error);

            setUploadMessage(
                error instanceof Error
                    ? error.message
                    : "Failed to upload resume."
            );
        } finally {
            setUploadingResume(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F6F7F9]">

            {/* Header */}
            <header className="sticky top-0 z-30 border-b border-[#DCE2E8] bg-white/95 backdrop-blur">
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

                        <div className="flex items-center gap-3">

                            <span className="hidden text-sm text-[#526170] sm:block">
                                {loadingUser
                                    ? "Loading..."
                                    : user?.name || "Candidate"}
                            </span>

                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F0EB] text-xs font-bold text-[#0B1F33]">
                                {loadingUser
                                    ? "..."
                                    : user?.name
                                        ? user.name
                                            .split(" ")
                                            .filter(Boolean)
                                            .map((word) => word[0])
                                            .join("")
                                            .slice(0, 2)
                                            .toUpperCase()
                                        : "U"}
                            </div>

                        </div>

                    </div>
                </Container>
            </header>

            {/* Welcome */}
            <section className="border-b border-[#DCE2E8] bg-white">
                <Container>

                    <div className="py-8 sm:py-10">

                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#526F8F]">
                            Candidate dashboard
                        </p>

                        <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                            <div>

                                <h1 className="text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                    Welcome back.
                                </h1>

                                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526170]">
                                    Your METI assessment journey is complete
                                    through the evidence stage. Review your
                                    findings and continue into development.
                                </p>

                            </div>

                            <Link href="/candidate/assessments/consulting/report">
                                <Button
                                    variant="primary"
                                    size="lg"
                                >
                                    View Assessment Report →
                                </Button>
                            </Link>

                        </div>

                    </div>

                </Container>
            </section>

            {/* Main */}
            <section className="py-8 sm:py-10">
                <Container>

                    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">

                        {/* Left */}
                        <div className="space-y-6">

                            {/* Journey */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white">

                                <div className="border-b border-[#E9EDF1] p-6">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        Assessment journey
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                        Your progress
                                    </h2>

                                </div>

                                <div className="divide-y divide-[#E9EDF1]">

                                    {journey.map((item) => (
                                        <div
                                            key={item.number}
                                            className="flex items-center gap-4 p-5 sm:p-6"
                                        >

                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1F33] text-xs font-bold text-white">
                                                ✓
                                            </div>

                                            <div className="min-w-0 flex-1">

                                                <div className="flex flex-wrap items-center gap-2">

                                                    <h3 className="text-sm font-semibold text-[#17212B]">
                                                        {item.title}
                                                    </h3>

                                                    <span
                                                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${item.status === "Complete"
                                                            ? "bg-[#EAF6F1] text-[#167A5B]"
                                                            : "bg-[#EAF2FB] text-[#2563A6]"
                                                            }`}
                                                    >
                                                        {item.status}
                                                    </span>

                                                </div>

                                                <p className="mt-1 text-xs leading-5 text-[#7A8794]">
                                                    {item.description}
                                                </p>

                                            </div>

                                            <span className="hidden text-xs font-semibold text-[#7A8794] sm:block">
                                                {item.number}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* Capability profile */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white">

                                <div className="border-b border-[#E9EDF1] p-6">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        Capability profile
                                    </p>

                                    <div className="mt-2 flex items-end justify-between gap-4">

                                        <div>
                                            <h2 className="text-xl font-bold text-[#17212B]">
                                                Current assessment signals
                                            </h2>

                                            <p className="mt-1 text-xs text-[#7A8794]">
                                                Based on your completed assessment.
                                            </p>
                                        </div>

                                        <span className="text-2xl font-bold text-[#0B1F33]">
                                            76
                                            <span className="text-xs font-normal text-[#7A8794]">
                                                {" "}/ 100
                                            </span>
                                        </span>

                                    </div>

                                </div>

                                <div className="space-y-5 p-6">

                                    {capabilities.map((item) => (
                                        <div key={item.name}>

                                            <div className="flex items-center justify-between">

                                                <span className="text-sm font-medium text-[#17212B]">
                                                    {item.name}
                                                </span>

                                                <span className="text-sm font-semibold text-[#0B1F33]">
                                                    {item.score}
                                                </span>

                                            </div>

                                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#E9EDF1]">

                                                <div
                                                    className="h-full rounded-full bg-[#0B1F33]"
                                                    style={{
                                                        width: `${item.score}%`,
                                                    }}
                                                />

                                            </div>

                                        </div>
                                    ))}

                                </div>

                                <div className="border-t border-[#E9EDF1] p-6">

                                    <Link href="/candidate/assessments/consulting/report">

                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            Open Full Report
                                        </Button>

                                    </Link>

                                </div>

                            </div>

                        </div>

                        {/* Right */}
                        <aside className="space-y-6">

                            {/* Resume Upload */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Resume
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                    Upload your resume
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-[#526170]">
                                    Upload your latest resume so METI can personalize your
                                    assessment.
                                </p>

                                <label className="mt-5 block cursor-pointer rounded-lg border border-dashed border-[#C8D0D8] p-4 text-center hover:bg-[#F6F7F9]">

                                    <input
                                        type="file"
                                        accept=".pdf,.docx"
                                        className="hidden"
                                        onChange={(event) => {
                                            const file =
                                                event.target.files?.[0] || null;

                                            setSelectedFile(file);
                                            setUploadMessage("");
                                            setResumeId(null);
                                        }}
                                    />

                                    <p className="text-sm font-medium text-[#17212B]">
                                        {selectedFile
                                            ? selectedFile.name
                                            : "Choose PDF or DOCX"}
                                    </p>

                                    <p className="mt-1 text-xs text-[#7A8794]">
                                        Click to select your resume
                                    </p>

                                </label>

                                {selectedFile && (
                                    <Button
                                        variant="primary"
                                        className="mt-4 w-full"
                                        onClick={handleResumeUpload}
                                        disabled={uploadingResume}
                                    >
                                        {uploadingResume
                                            ? "Uploading..."
                                            : "Upload Resume"}
                                    </Button>
                                )}

                                {uploadMessage && (
                                    <p
                                        className={`mt-3 text-xs ${resumeId
                                            ? "text-[#167A5B]"
                                            : "text-[#B42318]"
                                            }`}
                                    >
                                        {uploadMessage}
                                    </p>
                                )}

                            </div>


                            {/* Next action */}

                            {/* Next action */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Recommended next step
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-[#17212B]">
                                    Build your development roadmap.
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-[#526170]">
                                    Turn your assessment findings into a
                                    structured set of development priorities
                                    and actions.
                                </p>

                                <Link
                                    href="/candidate/roadmap"
                                    className="mt-5 block"
                                >
                                    <Button
                                        variant="primary"
                                        className="w-full"
                                    >
                                        View Development Roadmap →
                                    </Button>
                                </Link>

                            </div>

                            {/* Evidence */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Evidence collected
                                </p>

                                <div className="mt-5 space-y-4">

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#526170]">
                                            Assessment
                                        </span>

                                        <span className="text-xs font-semibold text-[#167A5B]">
                                            Complete
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#526170]">
                                            Business case
                                        </span>

                                        <span className="text-xs font-semibold text-[#167A5B]">
                                            Complete
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#526170]">
                                            Video response
                                        </span>

                                        <span className="text-xs font-semibold text-[#167A5B]">
                                            Complete
                                        </span>
                                    </div>

                                </div>

                            </div>

                            {/* Account */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Profile
                                </p>

                                <h2 className="mt-2 text-lg font-bold text-[#17212B]">
                                    Professional profile
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-[#526170]">
                                    Keep your education, experience, resume,
                                    and professional information up to date.
                                </p>

                                <Link
                                    href="/candidate/profile"
                                    className="mt-4 block"
                                >
                                    <Button
                                        variant="secondary"
                                        className="w-full"
                                    >
                                        Review Profile
                                    </Button>
                                </Link>

                            </div>

                        </aside>

                    </div>

                </Container>
            </section>

            {/* Bottom */}
            <section className="border-t border-[#DCE2E8] bg-white py-8">
                <Container>

                    <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

                        <div>
                            <p className="text-sm font-semibold text-[#17212B]">
                                METI Assessment
                            </p>

                            <p className="mt-1 text-xs text-[#7A8794]">
                                Your evidence-based capability journey.
                            </p>
                        </div>

                        <div className="flex justify-center gap-5 text-xs text-[#526170] sm:justify-end">
                            <Link
                                href="/candidate/report"
                                className="hover:text-[#0B1F33]"
                            >
                                Reports
                            </Link>

                            <Link
                                href="/candidate/roadmap"
                                className="hover:text-[#0B1F33]"
                            >
                                Roadmap
                            </Link>

                            <Link
                                href="/"
                                className="hover:text-[#0B1F33]"
                            >
                                Home
                            </Link>
                        </div>

                    </div>

                </Container>
            </section>

        </main>
    );
}