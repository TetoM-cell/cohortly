"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Particles } from "./Particles";
import { TypewriterText } from "./TypewriterText";

const footerLinks = {
    Product: [
        { name: "Features", href: "/#features" },
        { name: "Documentation", href: "/docs" },
        { name: "Support", href: "/support" },
        { name: "Pricing", href: "/pricing" },
        { name: "Releases", href: "/releases" },
    ],
    Legal: [
        { name: "Privacy", href: "/terms-privacy" },
        { name: "Terms", href: "/terms-privacy" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gray-50/50 border-t border-gray-100 pt-0 pb-10 md:pb-12">
            {/* Right-aligned Particles */}
            <div
                className="absolute inset-y-0 right-0 w-full md:w-[60%] pointer-events-none z-0"
                style={{
                    maskImage: 'linear-gradient(to left, black 20%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 100%)'
                }}
            >
                <Particles quantity={60} color="#3b82f6" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* CTA Section */}
                <div className="flex flex-col items-center text-center py-10 md:py-12 mb-10 md:mb-12">
                    <div className="max-w-3xl mb-6 md:mb-8">
                        <p className="text-black font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                            Ready to accelerate?
                        </p>
                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-normal text-gray-900 tracking-tight leading-[1.15] md:leading-[1.1] min-h-[72px] md:min-h-[110px]">
                            <TypewriterText
                                delay={200}
                                chunks={[
                                    { text: "Join the world's most innovative accelerators and streamline your workflow today." }
                                ]}
                            />
                        </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link
                            href="https://app-cohortly.vercel.app/signup"
                            className="bg-black text-white font-bold px-7 py-3 rounded-full shadow-xl shadow-blue-500/10 hover:bg-gray-900 transition-all hover:scale-105 flex items-center gap-2 group text-sm"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Info & Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 md:gap-12 mb-14 md:mb-20">
                    <div className="col-span-full md:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 mb-6 group">
                            <div className="w-8 h-8 relative flex items-center justify-center">
                                <Image
                                    src="/logo.svg"
                                    alt="Cohortly"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-gray-900">Cohortly</span>
                        </Link>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[280px]">
                            The unified platform for managing accelerators, venture funds, and application cohorts.
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                            <Link href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 40 40"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z" />
                                    <path d="M21.1904 10.8889H14V29.1111H18.2381V21.8254H21.1904C24.2026 21.8254 26.6432 19.3848 26.6432 16.3726C26.6432 13.3603 24.2026 10.8889 21.1904 10.8889ZM21.1904 18.0441H18.2381V14.6702H21.1904C22.1306 14.6702 22.8911 15.4307 22.8911 16.3709C22.8911 17.3111 22.1306 18.0441 21.1904 18.0441Z" className="fill-white" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="col-span-1">
                            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                                {category}
                            </h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 md:pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center md:items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-xs font-medium text-gray-400">
                        © {new Date().getFullYear()} Cohortly Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            System Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
