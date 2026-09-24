import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ValueStrip from "@/components/landing/ValueStrip";
import WhatMETIDoes from "@/components/landing/WhatMETIDoes";
import HowItWorks from "@/components/landing/HowItWorks";
import IntelligenceSection from "@/components/landing/IntelligenceSection";
import DevelopmentSection from "@/components/landing/DevelopmentSection";
import FinalCTA from "@/components/landing/FinalCTA";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F6F7F9]">
            <Navbar />

            <main>
                <HeroSection />
                <ValueStrip />
                <WhatMETIDoes />
                <HowItWorks />
                <IntelligenceSection />
                <DevelopmentSection />
                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}