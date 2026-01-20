"use client";

import { Shield, Building, Car, Users, Camera, UserCheck } from "lucide-react";

const services = [
    {
        icon: Shield,
        title: "Executive Protection",
        description:
            "Personal security for executives, VIPs, and high-profile individuals with discrete, professional detail.",
    },
    {
        icon: Building,
        title: "Facility Security",
        description:
            "Comprehensive protection for commercial properties, offices, and industrial facilities.",
    },
    {
        icon: Car,
        title: "Mobile Patrol",
        description:
            "Regular patrol services with marked vehicles ensuring visible security presence.",
    },
    {
        icon: Users,
        title: "Event Security",
        description:
            "Professional security teams for events of all sizes, from corporate gatherings to large public events.",
    },
    {
        icon: Camera,
        title: "Surveillance Systems",
        description:
            "State-of-the-art surveillance installation and monitoring services for complete coverage.",
    },
    {
        icon: UserCheck,
        title: "Risk Assessment",
        description:
            "Thorough security audits and risk analysis to identify vulnerabilities and solutions.",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--steel-navy)] to-[var(--deep-space)]" />

            <div className="relative z-10 container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--ice-white)] mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-[var(--steel-gray)] max-w-2xl mx-auto">
                        Comprehensive security solutions tailored to meet your specific needs
                        and ensure complete peace of mind.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="glass-card rounded-xl p-6 group cursor-pointer transition-all duration-300 hover:border-[rgba(0,212,255,0.4)] hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-lg bg-[rgba(0,212,255,0.1)] flex items-center justify-center mb-4 group-hover:bg-[rgba(0,212,255,0.2)] transition-colors duration-300">
                                <service.icon className="w-6 h-6 text-[var(--electric-cyan)]" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-[var(--ice-white)] mb-2 group-hover:text-[var(--electric-cyan)] transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-[var(--steel-gray)] text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
