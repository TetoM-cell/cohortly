"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, BarChart3 } from "lucide-react";

export function HeroAsset() {
    return (
        <section className="relative pt-20 pb-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex justify-center">
                    {/* Hero Asset Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1, duration: 0.8, type: "spring", damping: 20 }}
                        className="w-full max-w-5xl aspect-[16/9] relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent rounded-[32px] blur-3xl -z-10" />

                        {/* The "Glass Frame" Placeholder */}
                        <div className="w-full h-full bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-[32px] shadow-2xl overflow-hidden flex flex-col p-4 relative">
                            {/* Browser Header Mockup */}
                            <div className="h-10 shrink-0 border-b border-gray-100/50 mb-4 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-200" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-200" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-200" />
                                </div>
                                <div className="flex-1 max-w-[400px] h-5 bg-gray-50/50 rounded-md mx-auto" />
                            </div>

                            {/* Content Placeholder with Hero Asset */}
                            <div className="flex-1 w-full relative">
                                <Image
                                    src="/assets/hero.svg"
                                    alt="Cohortly Dashboard"
                                    fill
                                    className="object-cover object-top rounded-2xl"
                                    priority
                                />
                                {/* Decorative Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700" />
                            </div>
                        </div>

                        {/* Floating Micro-Assets */}
                        <div className="absolute -top-10 -right-10 hidden lg:flex flex-col gap-4">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100/50 flex items-center gap-3"
                            >
                                <div className="p-2 rounded-lg">
                                    <Shield className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-semibold text-gray-400">Security</p>
                                    <p className="text-sm font-semibold text-gray-900">SOC2 Compliant</p>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100/50 flex items-center gap-3 translate-x-4"
                            >
                                <div className="p-2 rounded-lg">
                                    <BarChart3 className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-semibold text-gray-400">Performance</p>
                                    <p className="text-sm font-semibold text-gray-900">+42% efficiency</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
