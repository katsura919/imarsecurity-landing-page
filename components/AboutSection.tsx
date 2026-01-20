"use client";

import { Shield, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="relative z-10 container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image / Visual */}
                    <div className="relative">
                        <div className="aspect-[4/3] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-[rgba(26,26,46,0.1)] shadow-lg">
                            <Image
                                src="/team.jpg"
                                alt="I.M.A.R Security Team"
                                width={600}
                                height={450}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 rounded-xl p-4 border border-[rgba(245,158,11,0.2)] shadow-lg" style={{ background: '#FFFFFF' }}>
                            <div className="flex items-center gap-3">
                                <Award className="w-8 h-8 text-[var(--accent-yellow)]" />
                                <div>
                                    <div className="text-2xl font-bold text-[var(--steel-navy)]">15+</div>
                                    <div className="text-xs text-[var(--steel-gray)]">Years of Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--steel-navy)] mb-6">
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
                                    <CheckCircle className="w-5 h-5 text-[var(--accent-yellow)] flex-shrink-0" />
                                    <span className="text-[var(--steel-navy)]">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
