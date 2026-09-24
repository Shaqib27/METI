"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type AssessmentCode = "consulting" | "personality" | "combined";

const products = {
    consulting: {
        eyebrow: "Management Consulting",
        name: "Management Consulting Assessment",
        description:
            "Consulting capability, enterprise thinking, business analysis, problem solving, and readiness insights.",
        price: "USD 25",
        included: [
            "Management Consulting Assessment",
            "Assessment scoring and evidence analysis",
            "Summary of Findings",
            "High-level development themes",
        ],
    },

    personality: {
        eyebrow: "Talent & Values",
        name: "Professional Personality & Values Assessment",
        description:
            "Enterprise Talent DNA, professional behavioural preferences, and a Schwartz-informed values profile.",
        price: "USD 25",
        included: [
            "Enterprise Talent DNA",
            "Professional Personality & Values Assessment",
            "Values profile",
            "Summary of Findings",
        ],
    },

    combined: {
        eyebrow: "Combined Journey",
        name: "Consulting + Personality & Values",
        description:
            "A combined assessment journey covering consulting capability, Talent DNA, behavioural preferences, and values.",
        price: "Configurable",
        included: [
            "Management Consulting Assessment",
            "Professional Personality & Values Assessment",
            "Shared profile information used once",
            "Combined Summary of Findings",
        ],
    },
};

export default function PaymentPage() {
    const router = useRouter();
    const params = useParams();

    const code = params.code as AssessmentCode;

    const product = products[code] ?? products.consulting;

    function handlePayment() {
        // Temporary frontend-only flow.
        // Real payment integration will be connected later.
        router.push(`/candidate/assessments/${code}/success`);
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
                            Secure Checkout
                        </span>

                    </div>
                </Container>
            </header>

            {/* Main */}
            <section className="py-12 sm:py-16 lg:py-20">
                <Container>

                    <div className="mx-auto max-w-5xl">

                        {/* Back */}
                        <Link
                            href={`/candidate/assessments/${code}`}
                            className="text-sm font-medium text-[#526F8F] hover:text-[#0B1F33]"
                        >
                            ← Back to assessment details
                        </Link>

                        {/* Heading */}
                        <div className="mt-8 max-w-3xl">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526F8F]">
                                Assessment entitlement
                            </p>

                            <h1 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                                Activate your assessment.
                            </h1>

                            <p className="mt-4 text-base leading-7 text-[#526170] sm:text-lg">
                                Review your selected assessment and continue
                                through checkout to activate access.
                            </p>

                        </div>

                        {/* Checkout */}
                        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

                            {/* Product */}
                            <div className="rounded-xl border border-[#DCE2E8] bg-white">

                                <div className="border-b border-[#E9EDF1] p-6 sm:p-8">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                        {product.eyebrow}
                                    </p>

                                    <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#17212B]">
                                        {product.name}
                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-[#526170]">
                                        {product.description}
                                    </p>

                                </div>

                                <div className="p-6 sm:p-8">

                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7A8794]">
                                        Included with your purchase
                                    </p>

                                    <div className="mt-5 space-y-4">

                                        {product.included.map((item) => (
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

                                    <div className="mt-8 rounded-lg border border-[#DCE2E8] bg-[#F6F7F9] p-5">

                                        <p className="text-sm font-semibold text-[#17212B]">
                                            What happens after payment?
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-[#526170]">
                                            Your assessment entitlement will
                                            be activated and you can proceed
                                            to the assessment journey.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Order Summary */}
                            <div className="h-fit rounded-xl border border-[#DCE2E8] bg-white p-6 shadow-[0_8px_30px_rgba(11,31,51,0.05)] sm:p-8">

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526F8F]">
                                    Order summary
                                </p>

                                <h2 className="mt-3 text-xl font-bold text-[#17212B]">
                                    Assessment access
                                </h2>

                                <div className="mt-6 border-y border-[#E9EDF1] py-5">

                                    <div className="flex items-start justify-between gap-4">

                                        <span className="text-sm leading-6 text-[#526170]">
                                            {product.name}
                                        </span>

                                        <span className="shrink-0 text-sm font-semibold text-[#17212B]">
                                            {product.price}
                                        </span>

                                    </div>

                                    <div className="mt-4 flex items-center justify-between">

                                        <span className="text-sm text-[#526170]">
                                            Assessment entitlement
                                        </span>

                                        <span className="text-sm font-medium text-[#167A5B]">
                                            Included
                                        </span>

                                    </div>

                                </div>

                                <div className="flex items-center justify-between py-5">

                                    <span className="text-base font-semibold text-[#17212B]">
                                        Total
                                    </span>

                                    <span className="text-xl font-bold text-[#0B1F33]">
                                        {product.price}
                                    </span>

                                </div>

                                <Button
                                    type="button"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    onClick={handlePayment}
                                >
                                    Continue to Secure Payment
                                </Button>

                                <p className="mt-4 text-center text-xs leading-5 text-[#7A8794]">
                                    Payment processing will be connected to
                                    the METI payment service before production.
                                </p>

                                <div className="mt-6 border-t border-[#E9EDF1] pt-5">

                                    <div className="flex items-center gap-2 text-xs text-[#526170]">
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF6F1] text-[#167A5B]">
                                            ✓
                                        </span>

                                        Secure checkout
                                    </div>

                                    <div className="mt-3 flex items-center gap-2 text-xs text-[#526170]">
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF2FB] text-[#2563A6]">
                                            i
                                        </span>

                                        Entitlement activates after verified
                                        payment.
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Premium Information */}
                        <div className="mt-6 rounded-xl border border-[#DCE2E8] bg-white p-6 sm:p-8">

                            <p className="text-sm font-semibold text-[#17212B]">
                                Looking for deeper intelligence?
                            </p>

                            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#526170]">
                                After completing a paid assessment, METI can
                                offer a separate Detailed Intelligence Report
                                and Personal Development Roadmap entitlement.
                                The default premium price is USD 250 and is
                                configurable by tenant, country, and campaign.
                            </p>

                        </div>

                    </div>

                </Container>
            </section>
        </main>
    );
}