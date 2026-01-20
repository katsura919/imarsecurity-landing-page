"use client";

import { Phone, Mail, Shield } from "lucide-react";

export default function CTASection() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background - Warm Orange Tint */}
            <div className="absolute inset-0 bg-[#FFEDD5]" />
            <div className="absolute inset-0 grid-pattern opacity-15" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--accent-yellow)] rounded-full blur-[120px] opacity-10" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[var(--accent-amber)] rounded-full blur-[100px] opacity-8" />

            <div className="relative z-10 container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] mb-6">
                        <Shield className="w-8 h-8 text-[var(--accent-yellow)]" />
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--steel-navy)] mb-4">
                        Ready to Secure Your
                        <span className="block gradient-text"> Peace of Mind?</span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-lg text-[var(--steel-gray)] mb-8 max-w-xl mx-auto">
                        Contact us today for a free security consultation. Our experts are
                        ready to design a protection plan tailored to your needs.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:+1234567890"
                            className="btn-primary flex items-center gap-2 text-base px-8 py-4"
                        >
                            <Phone className="w-5 h-5" />
                            Call: (555) 123-4567
                        </a>
                        <a
                            href="mailto:contact@imarsecurity.com"
                            className="btn-secondary flex items-center gap-2 text-base px-8 py-4"
                        >
                            <Mail className="w-5 h-5" />
                            Email Us
                        </a>
                    </div>

                    {/* Trust Line */}
                    <p className="mt-8 text-sm text-[var(--steel-gray)]">
                        Free consultation • No obligation • Response within 24 hours
                    </p>
                </div>
            </div>
        </section>
    );
}
