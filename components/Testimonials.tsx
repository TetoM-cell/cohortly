"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        quote:
            "Cohortly replaced three different tools we were duct-taping together. Our review cycle went from two weeks to three days.",
        name: "Maggy M.",
        role: "Program Director",
        org: "Launchpad Accelerator",
    },
    {
        quote:
            "The AI scoring saved us from reading 1,200 applications manually. We could focus on the top 50 that actually mattered.",
        name: "Sebastien K.",
        role: "Managing Partner",
        org: "Vantage Ventures",
    },
    {
        quote:
            "Setting up our first cohort took less than an hour. The form builder and automated workflows made onboarding our team effortless.",
        name: "Amara O.",
        role: "Operations Lead",
        org: "Catalyst Fund",
    },
];

const DISPLAY_DURATION = 6000; // 6 seconds per testimonial

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    // Track whether the last navigation was forward or backward for animation direction
    const [direction, setDirection] = useState(1);

    const goTo = useCallback(
        (nextIndex: number) => {
            setDirection(nextIndex > activeIndex ? 1 : -1);
            setActiveIndex(nextIndex);
        },
        [activeIndex]
    );

    const goNext = useCallback(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const goPrev = useCallback(() => {
        setDirection(-1);
        setActiveIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    }, []);

    // Auto-advance every 3 seconds
    useEffect(() => {
        const timer = setInterval(goNext, DISPLAY_DURATION);
        return () => clearInterval(timer);
    }, [goNext]);

    const current = testimonials[activeIndex];

    return (
        <section className="bg-white pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">
                    {/* ─── Left Column: Title & Navigation ─── */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-gray-900 leading-[1.1]">
                                From our{" "}
                                <span className="font-bold">community.</span>
                            </h2>
                            <p className="mt-5 text-sm sm:text-base text-gray-500 leading-relaxed max-w-sm">
                                Here&apos;s what early beta users had to say
                                about building with Cohortly.
                            </p>
                        </div>

                        {/* Navigation arrows + dots */}
                        <div className="flex items-center gap-3 mt-10">
                            <button
                                type="button"
                                onClick={goPrev}
                                aria-label="Previous testimonial"
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                onClick={goNext}
                                aria-label="Next testimonial"
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            {/* Progress dots */}
                            <div className="flex items-center gap-2 ml-3">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => goTo(idx)}
                                        aria-label={`Go to testimonial ${idx + 1}`}
                                        className={`rounded-full transition-all duration-300 ${idx === activeIndex
                                            ? "w-6 h-2 bg-gray-900"
                                            : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ─── Right Column: Testimonial Card ─── */}
                    <div className="relative min-h-[280px] sm:min-h-[260px] flex flex-col justify-center">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="flex flex-col"
                            >
                                {/* Quote mark */}
                                <span
                                    className="text-blue-600 text-5xl md:text-6xl font-serif leading-none select-none mb-4"
                                    aria-hidden="true"
                                >
                                    &ldquo;
                                </span>

                                {/* Quote text */}
                                <blockquote className="text-xl sm:text-2xl md:text-[1.75rem] font-normal text-gray-900 tracking-tight leading-[1.35]">
                                    {current.quote}&rdquo;
                                </blockquote>

                                {/* Attribution */}
                                <div className="mt-8 flex items-center gap-4">
                                    {/* Avatar placeholder */}
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-sm font-bold text-gray-600 shrink-0">
                                        {current.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {current.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {current.role}, {current.org}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
