import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

const priorities = [
    {
        number: "01",
        title: "Executive Communication",
        description:
            "Build greater clarity and confidence when communicating ideas, recommendations, and decisions.",
        status: "Priority",
    },
    {
        number: "02",
        title: "Strategic Thinking",
        description:
            "Strengthen the ability to connect decisions with broader business context and long-term outcomes.",
        status: "Develop",
    },
    {
        number: "03",
        title: "Problem Solving",
        description:
            "Continue developing structured approaches to complex problems and ambiguous situations.",
        status: "Develop",
    },
];

export default function DevelopmentSection() {
    return (
        <section className="border-b border-[#DCE2E8] bg-[#F6F7F9] py-24 lg:py-28">
            <Container>
                <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

                    {/* Left content */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4F6F8F]">
                            Development roadmap
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                            Turn insight into a focused development direction.
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-[#526170] sm:text-lg">
                            Assessment findings can be translated into development
                            priorities, giving users a clearer view of where to focus
                            and what to work on next.
                        </p>

                        <div className="mt-8">
                            <Link href="/auth/register">
                                <Button size="lg">
                                    Begin Your Assessment
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-8 border-l-2 border-[#163A5F] pl-5">
                            <p className="text-sm font-medium leading-6 text-[#17212B]">
                                Assessment is the starting point—not the endpoint.
                            </p>

                            <p className="mt-1 text-sm leading-6 text-[#526170]">
                                The objective is to connect understanding with practical
                                development direction.
                            </p>
                        </div>
                    </div>

                    {/* Right roadmap panel */}
                    <div className="rounded-2xl border border-[#DCE2E8] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,51,0.05)] sm:p-8">

                        {/* Header */}
                        <div className="flex items-start justify-between border-b border-[#E9EDF1] pb-6">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#7A8794]">
                                    Development plan
                                </p>

                                <h3 className="mt-2 text-xl font-semibold text-[#17212B]">
                                    Current priorities
                                </h3>
                            </div>

                            <span className="rounded-full bg-[#EAF2FB] px-2.5 py-1 text-xs font-medium text-[#2563A6]">
                                3 focus areas
                            </span>
                        </div>

                        {/* Priorities */}
                        <div className="divide-y divide-[#E9EDF1]">
                            {priorities.map((priority) => (
                                <div
                                    key={priority.number}
                                    className="flex gap-5 py-6 first:pt-7 last:pb-2"
                                >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F2F0EB] text-xs font-bold text-[#163A5F]">
                                        {priority.number}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                            <h4 className="text-sm font-semibold text-[#17212B]">
                                                {priority.title}
                                            </h4>

                                            <span
                                                className={
                                                    priority.status === "Priority"
                                                        ? "w-fit rounded-full bg-[#FFF7E6] px-2.5 py-1 text-[11px] font-medium text-[#B7791F]"
                                                        : "w-fit rounded-full bg-[#EAF6F1] px-2.5 py-1 text-[11px] font-medium text-[#167A5B]"
                                                }
                                            >
                                                {priority.status}
                                            </span>
                                        </div>

                                        <p className="mt-2 text-sm leading-6 text-[#526170]">
                                            {priority.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Progress */}
                        <div className="mt-6 border-t border-[#E9EDF1] pt-6">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-xs font-medium text-[#526170]">
                                    Development journey
                                </span>

                                <span className="text-xs font-semibold text-[#17212B]">
                                    Starting point
                                </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-[#E9EDF1]">
                                <div
                                    className="h-full rounded-full bg-[#0B1F33]"
                                    style={{ width: "28%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}