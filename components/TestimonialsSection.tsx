"use client";

import { useState } from "react";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
    const [isPausedRow1, setIsPausedRow1] = useState(false);
    const [isPausedRow2, setIsPausedRow2] = useState(false);

    // First row testimonials - Security focused
    const testimonialsRow1 = [
        {
            quote: "I.M.A.R Security has been protecting our corporate headquarters for over 3 years. Their professionalism and attention to detail is unmatched.",
            author: "Michael Chen",
            role: "CEO at TechStart Industries",
            avatar: "MC",
        },
        {
            quote: "The executive protection team made me feel completely safe during my international business trips. Highly professional and discrete.",
            author: "Sarah Johnson",
            role: "Founder at Digital Marketing Pro",
            avatar: "SJ",
        },
        {
            quote: "Their 24/7 monitoring and rapid response gave us complete peace of mind. The security assessment they provided was incredibly thorough.",
            author: "David Martinez",
            role: "Operations Manager at E-Commerce Plus",
            avatar: "DM",
        },
        {
            quote: "Outstanding service from start to finish. The team's Israeli training really shows in their precision and professionalism.",
            author: "Emily Watson",
            role: "Director at Consulting Group Inc",
            avatar: "EW",
        },
    ];

    // Second row testimonials
    const testimonialsRow2 = [
        {
            quote: "We hired I.M.A.R for our annual gala event. Their event security team handled everything flawlessly with zero incidents.",
            author: "James Wilson",
            role: "Event Director at Growth Labs",
            avatar: "JW",
        },
        {
            quote: "The mobile patrol services have significantly reduced incidents at our property. Their presence alone is a deterrent.",
            author: "Anika Patel",
            role: "Property Manager at Metro Properties",
            avatar: "AP",
        },
        {
            quote: "Best security company we've worked with. Their Homeland Security certification gives us confidence in their capabilities.",
            author: "Robert Kim",
            role: "COO at Orbit Technologies",
            avatar: "RK",
        },
        {
            quote: "Professional, reliable, and always on time. I.M.A.R Security has become an integral part of our business operations.",
            author: "Lisa Thompson",
            role: "CEO at ABC Corp",
            avatar: "LT",
        },
    ];

    const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonialsRow1[0] }) => (
        <div
            className="flex-shrink-0 w-[350px] p-6 rounded-xl mx-3 bg-white border border-[rgba(26,26,46,0.08)] shadow-sm"
        >
            <Quote
                className="w-8 h-8 mb-4 text-[var(--accent-yellow)]"
                fill="rgba(245,158,11,0.15)"
            />
            <p className="text-sm leading-relaxed mb-6 text-[var(--steel-gray)]">
                {testimonial.quote}
            </p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-[rgba(245,158,11,0.1)] text-[var(--accent-gold)]">
                    {testimonial.avatar}
                </div>
                <div>
                    <p className="font-semibold text-sm text-[var(--steel-navy)]">
                        {testimonial.author}
                    </p>
                    <p className="text-xs text-[var(--steel-gray)]">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    );

    // Duplicate items for seamless loop
    const row1Items = [...testimonialsRow1, ...testimonialsRow1];
    const row2Items = [...testimonialsRow2, ...testimonialsRow2];

    return (
        <section id="testimonials" className="section-padding overflow-hidden bg-white">
            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                @keyframes scroll-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                .marquee-left {
                    animation: scroll-left 35s linear infinite;
                }
                .marquee-right {
                    animation: scroll-right 35s linear infinite;
                }
            `}</style>

            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold uppercase tracking-wider mb-4 block text-[var(--accent-gold)]">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--steel-navy)] mb-4">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="text-[var(--steel-gray)] max-w-2xl mx-auto">
                        See what our clients have to say about their experience working with
                        I.M.A.R Security.
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="space-y-6">
                {/* Row 1 - Scrolls Left */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                    onMouseEnter={() => setIsPausedRow1(true)}
                    onMouseLeave={() => setIsPausedRow1(false)}
                >
                    <div
                        className="flex marquee-left"
                        style={{
                            animationPlayState: isPausedRow1 ? "paused" : "running",
                        }}
                    >
                        {row1Items.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Scrolls Right */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                    onMouseEnter={() => setIsPausedRow2(true)}
                    onMouseLeave={() => setIsPausedRow2(false)}
                >
                    <div
                        className="flex marquee-right"
                        style={{
                            animationPlayState: isPausedRow2 ? "paused" : "running",
                        }}
                    >
                        {row2Items.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
