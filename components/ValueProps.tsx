"use client";

import Image from "next/image";
import { Users, Award, Clock, Eye } from "lucide-react";

const values = [
    {
        image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop",
        title: "Elite Protection",
        description:
            "Our team is trained to the highest international standards, including specialized training in Israel.",
    },
    {
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop",
        title: "Unwavering Security",
        description:
            "Comprehensive security solutions tailored to your unique needs with state-of-the-art protocols.",
    },
    {
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop",
        title: "24/7 Vigilance",
        description:
            "Round-the-clock protection and rapid response. We're always on guard so you can rest easy.",
    },
];

export default function ValueProps() {
    return (
        <section className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-space)] to-[var(--steel-navy)]" />

            <div className="relative z-10 container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--ice-white)] mb-4">
                        What We <span className="text-[var(--electric-cyan)]">Stand For</span>
                    </h2>
                    <p className="text-[var(--steel-gray)] max-w-2xl mx-auto">
                        Excellence, integrity, and unwavering commitment to your safety
                        define everything we do.
                    </p>
                </div>

                {/* Value Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((value, index) => (
                        <div
                            key={value.title}
                            className="glass-card rounded-xl overflow-hidden group hover:border-[rgba(0,212,255,0.4)] transition-all duration-300 hover:-translate-y-2"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-steel)] to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[var(--ice-white)] mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-[var(--steel-gray)] leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { value: "15+", label: "Years Experience", icon: Award },
                        { value: "500+", label: "Clients Protected", icon: Users },
                        { value: "24/7", label: "Support Available", icon: Clock },
                        { value: "100%", label: "Client Satisfaction", icon: Eye },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="flex justify-center mb-2">
                                <stat.icon className="w-5 h-5 text-[var(--electric-cyan)] opacity-50" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-[var(--electric-cyan)] mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[var(--steel-gray)]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
