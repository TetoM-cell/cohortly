"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TypewriterText } from "./TypewriterText";
import { AnimatedText } from "./AnimatedText";
import { Particles } from "./Particles";
import Link from "next/link";
import { FAQ } from "./FAQ";

export function Support() {

    return (
        <section className="bg-white min-h-screen">
            {/* Header with particles */}
            <div className="relative pt-24 md:pt-28 pb-10 md:pb-12 flex flex-col items-center overflow-hidden">
                <div
                    className="absolute inset-y-0 left-0 w-full md:w-[60%] pointer-events-none z-0"
                    style={{
                        maskImage: "linear-gradient(to right, black 20%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, black 20%, transparent 100%)",
                    }}
                >
                    <Particles quantity={60} color="#3b82f6" />
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full opacity-60" />
                </div>

                <div className="max-w-5xl mx-auto px-4 w-full relative z-10 flex flex-col items-center">
                    <div className="text-center w-full md:w-[60vw] lg:w-[56vw] max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tight text-gray-900 font-normal leading-[1.05] min-h-[44px] md:min-h-[72px] flex items-center justify-center">
                            <TypewriterText
                                chunks={[{ text: "How can we help?" }]}
                                speed={52}
                                delay={0}
                            />
                        </h1>
                        <AnimatedText
                            text="Explore our documentation or check out our frequently asked questions to get the support you need."
                            delay={0.12}
                            className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600"
                        />
                    </div>

                    <div className="mt-10 md:mt-12 flex justify-center">
                        <Link
                            href="/docs"
                            className="h-12 rounded-full border border-gray-200/70 bg-white/65 hover:bg-white/80 transition-all px-6 flex items-center justify-center gap-2 text-sm backdrop-blur-xl hover:text-gray-900 text-gray-600 shadow-sm"
                        >
                            <span className="font-medium">Documentation</span>
                        </Link>
                        <Link
                            href="/releases"
                            className="h-12 rounded-full border border-gray-200/70 bg-white/65 hover:bg-white/80 transition-all px-6 flex items-center justify-center gap-2 text-sm backdrop-blur-xl hover:text-gray-900 text-gray-600 shadow-sm"
                        >
                            <span className="font-medium">Releases</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main support layout - 50-60% width */}
            <div className="max-w-4xl w-full md:w-[60vw] mx-auto px-4 relative z-10 pt-8 pb-32 space-y-20">


                {/* Contact Section */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Direct Contact</h2>
                        <p className="text-sm text-gray-500 mt-1">Need to speak with us directly? Reach out via email.</p>
                    </div>
                    <div className="border border-gray-200/60 bg-white rounded-2xl overflow-hidden transition-all hover:border-gray-300/80 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="font-medium text-gray-900">General Inquiries &amp; Support</h3>
                            <p className="text-sm text-gray-500 mt-1">We aim to respond to all inquiries within 48 hours.</p>
                        </div>
                        <a href="mailto:cohortlyapp@gmail.com" className="font-medium text-blue-600 hover:text-blue-700 transition-colors text-sm">
                            cohortlyapp@gmail.com
                        </a>
                    </div>
                </div>
                {/* FAQs */}
                <FAQ />

            </div>
        </section>
    );
}

