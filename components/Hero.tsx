"use client";

import { Shield, ChevronDown, Phone, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-space)] via-[var(--steel-navy)] to-[var(--deep-space)]" />
            <div className="absolute inset-0 grid-pattern opacity-50" />

            {/* Glowing Orb */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--electric-cyan)] rounded-full blur-[150px] opacity-10" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--safety-green)] rounded-full blur-[100px] opacity-5" />

            {/* Content */}
            <div className="relative z-10 container-custom text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] mb-8 animate-fade-in-up">
                    <Shield className="w-4 h-4 text-[var(--electric-cyan)]" />
                    <span className="text-sm text-[var(--steel-gray)]">
                        Certified Protection Services
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--ice-white)] mb-6 animate-fade-in-up animate-delay-100">
                    Your Safety Is Our
                    <span className="block text-[var(--electric-cyan)]">
                        Top Priority
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-[var(--steel-gray)] max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
                    Professional security services with highly trained personnel.
                    Protecting what matters most with cutting-edge vigilance and
                    uncompromising dedication.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
                    <a
                        href="tel:+1234567890"
                        className="btn-primary flex items-center gap-2 text-base px-8 py-4"
                    >
                        <Phone className="w-5 h-5" />
                        Call Meir Amram
                    </a>
                    <a
                        href="#contact"
                        className="btn-secondary flex items-center gap-2 text-base px-8 py-4"
                    >
                        <Mail className="w-5 h-5" />
                        Request a Quote
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 animate-fade-in-up animate-delay-400">
                    <div className="flex items-center gap-2 text-[var(--steel-gray)]">
                        <Shield className="w-5 h-5 text-[var(--electric-cyan)]" />
                        <span className="text-sm">Israeli Trained</span>
                    </div>
                    <div className="h-4 w-px bg-[rgba(0,212,255,0.3)]" />
                    <div className="flex items-center gap-2 text-[var(--steel-gray)]">
                        <Shield className="w-5 h-5 text-[var(--safety-green)]" />
                        <span className="text-sm">Certified Homeland Security</span>
                    </div>
                    <div className="h-4 w-px bg-[rgba(0,212,255,0.3)]" />
                    <div className="flex items-center gap-2 text-[var(--steel-gray)]">
                        <Shield className="w-5 h-5 text-[var(--electric-cyan)]" />
                        <span className="text-sm">24/7 Protection</span>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
                    <ChevronDown className="w-8 h-8 text-[var(--electric-cyan)] opacity-50" />
                </div>
            </div>
        </section>
    );
}
