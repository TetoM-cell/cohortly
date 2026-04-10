"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Particles } from "./Particles";
import { TypewriterText } from "./TypewriterText";

export function Hero() {
    return (
        <section className="relative pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden bg-white">
            {/* Left-aligned Particles */}
            <div
                className="absolute inset-y-0 left-0 w-full md:w-[60%] pointer-events-none z-0"
                style={{
                    maskImage: 'linear-gradient(to right, black 20%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 100%)'
                }}
            >
                <Particles quantity={60} color="#3b82f6" />
            </div>

            {/* Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full opacity-60" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center flex flex-col items-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-gray-100 mb-8 md:mb-16"
                    >
                        <Zap className="w-3 h-3 text-black fill-black" />
                        <span className="text-[10px] font-semibold text-black uppercase tracking-wider">
                            Beta 1 is now live
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-normal text-gray-900 tracking-tight leading-[1.08] md:leading-[1.05] mb-10 md:mb-16 max-w-3xl min-h-[80px] md:min-h-[140px] flex items-center justify-center"
                    >
                        <TypewriterText
                            delay={300}
                            chunks={[
                                { text: "The Operating System for " },
                                { text: "Modern Accelerators" }
                            ]}
                        />
                    </motion.h1>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.8 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mb-8 md:mb-16 w-full sm:w-auto"
                    >
                        <button className="h-12 px-7 bg-black hover:bg-gray-900 text-white font-semibold text-sm rounded-full shadow-xl shadow-black/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group w-full sm:w-auto">
                            Start Free Trial
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
