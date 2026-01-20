"use client";

import { Shield, Award, CheckCircle } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--steel-navy)]" />
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="relative z-10 container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image / Visual */}
                    <div className="relative">
                        <div className="aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-[rgba(0,212,255,0.2)] glow-cyan-sm">
                            {/* Placeholder with shield pattern */}
                            <div className="w-full h-full bg-gradient-to-br from-[var(--dark-steel)] to-[var(--steel-navy)] flex items-center justify-center">
                                <Shield className="w-32 h-32 text-[var(--electric-cyan)] opacity-20" />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 rounded-xl p-4 border border-[rgba(0,212,255,0.3)]" style={{ background: '#0D1B2A' }}>
                            <div className="flex items-center gap-3">
                                <Award className="w-8 h-8 text-[var(--safety-green)]" />
                                <div>
                                    <div className="text-2xl font-bold text-[var(--ice-white)]">15+</div>
                                    <div className="text-xs text-[var(--steel-gray)]">Years of Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--ice-white)] mb-6">
                            About <span className="gradient-text">I.M.A.R Security</span>
                        </h2>

                        <p className="text-[var(--steel-gray)] text-lg mb-6 leading-relaxed">
                            Founded with a mission to provide unparalleled protection services,
                            I.M.A.R Security brings together elite professionals trained to the
                            highest international standards.
                        </p>

                        <p className="text-[var(--steel-gray)] mb-8 leading-relaxed">
                            Our team includes personnel with specialized training directly from
                            Israel, known worldwide for its advanced security methodologies. We
                            are proud members of the American Board for Certification in Homeland
                            Security.
                        </p>

                        {/* Features List */}
                        <div className="space-y-4">
                            {[
                                "Elite team with Israeli-standard training",
                                "Homeland Security certified personnel",
                                "Comprehensive risk assessment protocols",
                                "Rapid response capabilities 24/7",
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[var(--safety-green)] flex-shrink-0" />
                                    <span className="text-[var(--ice-white)]">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
