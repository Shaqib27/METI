"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "./Container";
import Button from "../ui/Button";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-[#DCE2E8] bg-white/95 backdrop-blur">
            <Container>
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                        onClick={() => setMobileOpen(false)}
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B1F33] text-sm font-bold text-white">
                            M
                        </div>

                        <div>
                            <div className="text-base font-bold tracking-tight text-[#17212B]">
                                METI
                            </div>

                            <div className="hidden text-[10px] font-medium uppercase tracking-wider text-[#7A8794] sm:block">
                                Modus Enterprise Talent Intelligence
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-7 md:flex">
                        <Link
                            href="/"
                            className="text-sm font-medium text-[#526170] transition hover:text-[#0B1F33]"
                        >
                            Home
                        </Link>

                        <Link
                            href="/#how-it-works"
                            className="text-sm font-medium text-[#526170] transition hover:text-[#0B1F33]"
                        >
                            How It Works
                        </Link>

                        <Link
                            href="/#assessment"
                            className="text-sm font-medium text-[#526170] transition hover:text-[#0B1F33]"
                        >
                            Assessment
                        </Link>

                        <Link
                            href="/#about"
                            className="text-sm font-medium text-[#526170] transition hover:text-[#0B1F33]"
                        >
                            About
                        </Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-3 md:flex">
                        <Link href="/auth/login">
                            <Button variant="ghost" size="sm">
                                Sign In
                            </Button>
                        </Link>

                        <Link href="/auth/register">
                            <Button size="sm">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="rounded-lg p-2 text-[#526170] hover:bg-[#F6F7F9] hover:text-[#17212B] md:hidden"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileOpen && (
                    <div className="border-t border-[#E9EDF1] py-4 md:hidden">
                        <nav className="flex flex-col gap-1">

                            <Link
                                href="/"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#526170] hover:bg-[#F6F7F9] hover:text-[#0B1F33]"
                            >
                                Home
                            </Link>

                            <Link
                                href="/#how-it-works"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#526170] hover:bg-[#F6F7F9] hover:text-[#0B1F33]"
                            >
                                How It Works
                            </Link>

                            <Link
                                href="/#assessment"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#526170] hover:bg-[#F6F7F9] hover:text-[#0B1F33]"
                            >
                                Assessment
                            </Link>

                            <Link
                                href="/#about"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#526170] hover:bg-[#F6F7F9] hover:text-[#0B1F33]"
                            >
                                About
                            </Link>

                            <div className="mt-3 flex gap-2 border-t border-[#E9EDF1] pt-4">
                                <Link
                                    href="/auth/login"
                                    className="flex-1"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                    >
                                        Sign In
                                    </Button>
                                </Link>

                                <Link
                                    href="/auth/register"
                                    className="flex-1"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <Button size="sm" className="w-full">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    );
}