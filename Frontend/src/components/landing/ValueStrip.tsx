import Container from "@/components/layout/Container";

const values = [
    {
        number: "01",
        title: "Structured Assessment",
        description:
            "Evaluate capabilities through a consistent and structured assessment experience.",
    },
    {
        number: "02",
        title: "Evidence-Based Intelligence",
        description:
            "Turn assessment responses and evidence into meaningful capability insights.",
    },
    {
        number: "03",
        title: "Development Direction",
        description:
            "Translate identified development areas into focused next-step priorities.",
    },
];

export default function ValueStrip() {
    return (
        <section className="border-b border-[#DCE2E8] bg-[#F6F7F9]">
            <Container>
                <div className="grid divide-y divide-[#DCE2E8] md:grid-cols-3 md:divide-x md:divide-y-0">
                    {values.map((value) => (
                        <div
                            key={value.number}
                            className="px-0 py-8 md:px-8 md:py-10 first:md:pl-0 last:md:pr-0"
                        >
                            <span className="text-xs font-semibold tracking-[0.15em] text-[#7A8794]">
                                {value.number}
                            </span>

                            <h2 className="mt-3 text-lg font-semibold text-[#17212B]">
                                {value.title}
                            </h2>

                            <p className="mt-2 max-w-sm text-sm leading-6 text-[#526170]">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}