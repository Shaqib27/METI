import Link from "next/link";
import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-[#DCE2E8] bg-[#0B1F33] text-white">
            <Container>
                <div className="grid gap-10 py-12 md:grid-cols-4">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-[#0B1F33]">
                                M
                            </div>

                            <div className="text-lg font-bold">
                                METI
                            </div>
                        </div>

                        <p className="max-w-md text-sm leading-6 text-[#B8C4CF]">
                            Modus Enterprise Talent Intelligence provides
                            structured assessment, capability intelligence,
                            and development insights.
                        </p>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">
                            Platform
                        </h3>

                        <div className="space-y-3 text-sm text-[#B8C4CF]">
                            <Link
                                href="/#assessment"
                                className="block hover:text-white"
                            >
                                Assessment
                            </Link>

                            <Link
                                href="/#how-it-works"
                                className="block hover:text-white"
                            >
                                How It Works
                            </Link>

                            <Link
                                href="/auth/register"
                                className="block hover:text-white"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">
                            Company
                        </h3>

                        <div className="space-y-3 text-sm text-[#B8C4CF]">
                            <Link
                                href="/#about"
                                className="block hover:text-white"
                            >
                                About
                            </Link>

                            <Link
                                href="/"
                                className="block hover:text-white"
                            >
                                Contact
                            </Link>

                            <Link
                                href="/"
                                className="block hover:text-white"
                            >
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6 text-sm text-[#8FA0AF]">
                    © {new Date().getFullYear()} METI. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}