"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type RecordingState = "ready" | "recording" | "recorded";

export default function VideoResponsePage() {
    const params = useParams();
    const router = useRouter();

    const code = params.code as string;

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const recorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const [recordingState, setRecordingState] =
        useState<RecordingState>("ready");

    const [seconds, setSeconds] = useState(0);
    const [cameraReady, setCameraReady] = useState(false);
    const [cameraError, setCameraError] = useState("");
    const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

    async function enableCamera() {
        try {
            setCameraError("");

            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });

            streamRef.current = stream;

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }

            setCameraReady(true);
        } catch (error) {
            console.error("Camera error:", error);

            setCameraError(
                "Camera and microphone access was blocked. Please allow permission in your browser and try again."
            );
        }
    }

    useEffect(() => {
        enableCamera();

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }

            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => {
                    track.stop();
                });
            }
        };
    }, []);

    function startRecording() {
        if (!streamRef.current) {
            setCameraError(
                "Camera is not ready. Please enable your camera first."
            );
            return;
        }

        chunksRef.current = [];

        const recorder = new MediaRecorder(streamRef.current);

        recorderRef.current = recorder;

        recorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                chunksRef.current.push(event.data);
            }
        };

        recorder.onstop = () => {
            const blob = new Blob(chunksRef.current, {
                type: "video/webm",
            });

            setVideoBlob(blob);
            setRecordingState("recorded");
        };

        recorder.start();

        setRecordingState("recording");
        setSeconds(0);

        timerRef.current = setInterval(() => {
            setSeconds((previous) => {
                if (previous >= 119) {
                    stopRecording();
                    return 120;
                }

                return previous + 1;
            });
        }, 1000);
    }

    function stopRecording() {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        if (
            recorderRef.current &&
            recorderRef.current.state !== "inactive"
        ) {
            recorderRef.current.stop();
        }
    }

    function recordAgain() {
        setVideoBlob(null);
        setSeconds(0);
        setRecordingState("ready");
    }

    function submitRecording() {
        if (!videoBlob) return;

        /*
         * Later:
         * Upload videoBlob to backend/object storage.
         *
         * For now, continue through the frontend flow.
         */

        router.push(
            `/candidate/assessments/${code}/video/complete`
        );
    }

    function formatTime(totalSeconds: number) {
        const minutes = Math.floor(totalSeconds / 60)
            .toString()
            .padStart(2, "0");

        const secondsPart = (totalSeconds % 60)
            .toString()
            .padStart(2, "0");

        return `${minutes}:${secondsPart}`;
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
                                Video Response
                            </span>

                            <span className="rounded-full bg-[#EAF2FB] px-3 py-1 text-xs font-semibold text-[#2563A6]">
                                Evidence stage
                            </span>
                        </div>

                    </div>
                </Container>
            </header>

            {/* Heading */}
            <section className="border-b border-[#DCE2E8] bg-white">
                <Container>
                    <div className="py-8 sm:py-10">

                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#526F8F]">
                            Video work sample
                        </p>

                        <h1 className="mt-3 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                            Communicate your recommendation.
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526170]">
                            Use the prompt below to structure a concise
                            business response.
                        </p>

                    </div>
                </Container>
            </section>

            {/* Workspace */}
            <section className="py-8 sm:py-10">
                <Container>

                    <div className="grid gap-6 lg:grid-cols-[1fr_420px]">

                        {/* Prompt */}
                        <div className="space-y-5">

                            <div className="rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Your prompt
                                </p>

                                <h2 className="mt-3 text-2xl font-bold leading-9 tracking-[-0.02em] text-[#17212B]">
                                    Imagine you are presenting your case
                                    recommendation to the client's executive
                                    team. How would you explain your
                                    recommendation and the most important
                                    trade-offs?
                                </h2>

                                <div className="mt-7 border-t border-[#E9EDF1] pt-6">

                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                                        Suggested structure
                                    </p>

                                    <div className="mt-4 space-y-3">

                                        {[
                                            "State the key business issue.",
                                            "Explain the most important evidence.",
                                            "Present your recommendation.",
                                            "Address one important trade-off or risk.",
                                        ].map((item, index) => (
                                            <div
                                                key={item}
                                                className="flex gap-3"
                                            >
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F2F0EB] text-xs font-semibold text-[#0B1F33]">
                                                    {index + 1}
                                                </span>

                                                <p className="pt-0.5 text-sm leading-5 text-[#526170]">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Video */}
                        <aside className="lg:sticky lg:top-24 lg:self-start">

                            <div className="overflow-hidden rounded-xl border border-[#DCE2E8] bg-white">

                                {/* Real camera */}
                                <div className="relative aspect-video bg-[#071522]">

                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        muted
                                        playsInline
                                        className={`h-full w-full object-cover ${cameraReady
                                                ? "block"
                                                : "hidden"
                                            }`}
                                    />

                                    {!cameraReady && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B1F33]">

                                                <svg
                                                    viewBox="0 0 24 24"
                                                    className="h-7 w-7 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m15 10 4.5-2.5v9L15 14" />

                                                    <rect
                                                        x="3"
                                                        y="6"
                                                        width="12"
                                                        height="12"
                                                        rx="2"
                                                    />
                                                </svg>

                                            </div>

                                            <p className="mt-4 text-sm font-semibold text-white">
                                                Camera preview unavailable
                                            </p>

                                        </div>
                                    )}

                                    {recordingState === "recording" && (
                                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-2">

                                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#B42318]" />

                                            <span className="text-xs font-semibold text-white">
                                                REC {formatTime(seconds)}
                                            </span>

                                        </div>
                                    )}

                                </div>

                                {/* Controls */}
                                <div className="p-6">

                                    {cameraError && (
                                        <div className="mb-4 rounded-lg bg-[#FDECEC] p-4 text-sm leading-5 text-[#B42318]">
                                            {cameraError}
                                        </div>
                                    )}

                                    {!cameraReady && (
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className="mb-3 w-full"
                                            onClick={enableCamera}
                                        >
                                            Enable Camera & Microphone
                                        </Button>
                                    )}

                                    <div className="flex items-center justify-between">

                                        <div>
                                            <p className="text-xs text-[#7A8794]">
                                                Recording limit
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#17212B]">
                                                02:00
                                            </p>
                                        </div>

                                        <div className="text-right">

                                            <p className="text-xs text-[#7A8794]">
                                                Current
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#17212B]">
                                                {formatTime(seconds)}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="mt-5">

                                        {recordingState === "ready" && (
                                            <Button
                                                type="button"
                                                variant="primary"
                                                size="lg"
                                                className="w-full"
                                                disabled={!cameraReady}
                                                onClick={startRecording}
                                            >
                                                Start Recording
                                            </Button>
                                        )}

                                        {recordingState === "recording" && (
                                            <Button
                                                type="button"
                                                variant="danger"
                                                size="lg"
                                                className="w-full"
                                                onClick={stopRecording}
                                            >
                                                Stop Recording
                                            </Button>
                                        )}

                                        {recordingState === "recorded" && (
                                            <div className="space-y-3">

                                                <Button
                                                    type="button"
                                                    variant="primary"
                                                    size="lg"
                                                    className="w-full"
                                                    onClick={submitRecording}
                                                >
                                                    Submit Video Response →
                                                </Button>

                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                    className="w-full"
                                                    onClick={recordAgain}
                                                >
                                                    Record Again
                                                </Button>

                                            </div>
                                        )}

                                    </div>

                                    <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#7A8794]">

                                        <span className="flex items-center gap-1.5">
                                            <span
                                                className={`h-2 w-2 rounded-full ${cameraReady
                                                        ? "bg-[#167A5B]"
                                                        : "bg-[#B42318]"
                                                    }`}
                                            />
                                            Camera
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <span
                                                className={`h-2 w-2 rounded-full ${cameraReady
                                                        ? "bg-[#167A5B]"
                                                        : "bg-[#B42318]"
                                                    }`}
                                            />
                                            Microphone
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </aside>

                    </div>

                </Container>
            </section>

        </main>
    );
}