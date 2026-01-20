"use client";

import { Shield, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-[#FAFAFA] border-t border-[rgba(26,26,46,0.08)]">
            {/* Main Footer */}
            <div className="section-padding pb-8">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <Image
                                    src="/logo.png"
                                    alt="I.M.A.R Security Patrol"
                                    width={120}
                                    height={35}
                                    className="h-9 w-auto"
                                />
                            </Link>
                            <p className="text-[var(--steel-gray)] text-sm mb-4 leading-relaxed">
                                Professional security services with highly trained personnel.
                                Protecting what matters most.
                            </p>
                            <div className="flex items-center gap-2 text-[var(--safety-green)] text-sm">
                                <div className="w-2 h-2 rounded-full bg-[var(--safety-green)] animate-pulse" />
                                Available 24/7
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-[var(--steel-navy)] font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {[
                                    { href: "#home", label: "Home" },
                                    { href: "#about", label: "About Us" },
                                    { href: "#services", label: "Services" },
                                    { href: "#contact", label: "Contact" },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-[var(--steel-gray)] hover:text-[var(--accent-yellow)] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-[var(--steel-navy)] font-semibold mb-4">Services</h4>
                            <ul className="space-y-2">
                                {[
                                    "Executive Protection",
                                    "Facility Security",
                                    "Mobile Patrol",
                                    "Event Security",
                                    "Risk Assessment",
                                ].map((service) => (
                                    <li key={service}>
                                        <span className="text-[var(--steel-gray)] text-sm">
                                            {service}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-[var(--steel-navy)] font-semibold mb-4">Contact Us</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[var(--accent-yellow)] flex-shrink-0 mt-0.5" />
                                    <span className="text-[var(--steel-gray)] text-sm">
                                        Tampa, FL<br />United States
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-[var(--accent-yellow)] flex-shrink-0" />
                                    <a
                                        href="tel:+1234567890"
                                        className="text-[var(--steel-gray)] hover:text-[var(--accent-yellow)] transition-colors text-sm"
                                    >
                                        (555) 123-4567
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-[var(--accent-yellow)] flex-shrink-0" />
                                    <a
                                        href="mailto:contact@imarsecurity.com"
                                        className="text-[var(--steel-gray)] hover:text-[var(--accent-yellow)] transition-colors text-sm"
                                    >
                                        contact@imarsecurity.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-[var(--accent-yellow)] flex-shrink-0" />
                                    <span className="text-[var(--steel-gray)] text-sm">
                                        24/7 Emergency Response
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[rgba(26,26,46,0.08)] py-6 bg-white">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[var(--steel-gray)] text-sm">
                        © {new Date().getFullYear()} I.M.A.R Security. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="text-[var(--steel-gray)] hover:text-[var(--accent-yellow)] transition-colors text-sm"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-[var(--steel-gray)] hover:text-[var(--accent-yellow)] transition-colors text-sm"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
