"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Inbox, Layout, BarChart, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TypewriterText } from "./TypewriterText";
import { AnimatedText } from "./AnimatedText";

const features = [
    {
        title: "AI-Powered Scoring",
        description: "Automatically rank and score thousands of applications based on your unique rubric. Save weeks of manual review time.",
        icon: Brain,
        iconClassName: "text-blue-600",
        accentColor: "bg-blue-600",
    },
    {
        title: "Unified Inbox",
        description: "Every communication, synchronized and organized. Respond to applicants without leaving the platform.",
        icon: Inbox,
        iconClassName: "text-indigo-600",
        accentColor: "bg-indigo-600",
    },
    {
        title: "Program Builder",
        description: "Drag-and-drop form creation for any program type. Build complex workflows in minutes.",
        icon: Layout,
        iconClassName: "text-violet-600",
        accentColor: "bg-violet-600",
    },
    {
        title: "Real-time Analytics",
        description: "Track your cohort's performance with beautiful, automated dashboards and custom reports.",
        icon: BarChart,
        iconClassName: "text-emerald-600",
        accentColor: "bg-emerald-600",
    },
    {
        title: "SOC2 Security",
        description: "Enterprise-grade data protection for your most sensitive application data.",
        icon: CheckCircle2,
        iconClassName: "text-amber-500",
        accentColor: "bg-amber-500",
    },
];

export function Features() {
    return (
        <section id="features" className="pt-20 md:pt-32 pb-20 md:pb-32 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">

                {/* Header Phase */}
                <div className="text-left mb-14 md:mb-24 max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-normal text-gray-900 tracking-tight leading-[1.15] md:leading-[1.1] min-h-[72px] md:min-h-[140px]">
                        <TypewriterText
                            chunks={[
                                { text: "Powerful features designed to automate the heavy lifting of application management and cohort tracking." }
                            ]}
                        />
                    </h2>
                </div>

                {/* Vertical 2-Column List Layout */}
                <div className="flex flex-col gap-16 md:gap-32">
                    {features.map((feature, idx) => {
                        return (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">

                                {/* 1. Left Side: Text Column */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px 0px" }}
                                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                                    className="flex flex-col"
                                >
                                    {/* Text Content */}
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 tracking-tight mb-4 min-h-[34px] md:min-h-[48px]">
                                        <TypewriterText chunks={[{ text: feature.title }]} />
                                    </h3>
                                    <AnimatedText
                                        text={feature.description}
                                        delay={0.4} // Allow the title typing to get a head start
                                        className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed mb-4 md:mb-8 max-w-md"
                                    />
                                </motion.div>

                                {/* 2. Right Side: Visual Content Column */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px 0px" }}
                                    transition={{ duration: 0.9, delay: 0.2, type: "spring", damping: 30 }}
                                    className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden bg-gray-50/50 flex flex-col p-4 md:p-6 items-center justify-center group border border-gray-100"
                                >
                                    {/* Ambient Glow */}
                                    <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[100px] rounded-full opacity-10 transition-opacity duration-700 group-hover:opacity-20", feature.accentColor)} />

                                    {/* Aesthetically pleasing placeholder wrapper */}
                                    <div className="relative w-[80%] aspect-square max-w-[320px] rounded-[32px] bg-white border border-gray-200 shadow-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out group-hover:shadow-2xl group-hover:shadow-gray-200/50 overflow-hidden">
                                        {/* Minimalist Graphic inside placeholder */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/50" />
                                        <feature.icon className={cn("relative w-24 h-24 opacity-20", feature.iconClassName)} />

                                        {/* Decorative abstract UI */}
                                        <div className="absolute inset-x-8 bottom-0 h-24 flex gap-4 items-end justify-center">
                                            <div className="w-full bg-gray-100 border border-t border-gray-200 rounded-t-xl h-1/3" />
                                            <div className={cn("w-full border-t border-white rounded-t-xl h-4/5 opacity-20", feature.accentColor)} />
                                            <div className="w-full bg-gray-100 border border-t border-gray-200 rounded-t-xl h-2/3" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
