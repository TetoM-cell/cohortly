"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TypewriterText } from "./TypewriterText";
import { AnimatedText } from "./AnimatedText";
import { Particles } from "./Particles";
import Link from "next/link";

const faqData = [
    {
        question: "How do I create a new cohort?",
        answer: "You can create a new cohort directly from your dashboard. This provides a guided setup flow, allowing you to configure custom deadlines, form structures, and reviewer settings right away."
    },
    {
        question: "Can I customize the application review process?",
        answer: "Yes, you can define custom rubrics, weighted evaluation criteria, and multiple review stages to match your team's exact workflow."
    },
    {
        question: "How does the AI scoring work?",
        answer: "Our AI evaluation assistant automatically helps rank applicants against your defined rubric. You can set threshold rules to automatically shortlist top candidates, significantly reducing initial manual screening."
    },
    {
        question: "Is there a limit to how many team members can review applications?",
        answer: "You can invite multiple staff and reviewers with role-based permissions to ensure fair and consistent review outcomes across your entire organization."
    },
    {
        question: "How do I communicate with applicants?",
        answer: "Cohortly features a unified inbox and activity feed, allowing you to easily track all communication, send updates, and manage selection decisions in one place."
    }
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200/60 bg-white rounded-2xl overflow-hidden transition-all hover:border-gray-300/80">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
            >
                <span className="font-medium text-gray-900 text-sm md:text-base">{question}</span>
                <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform duration-300", isOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100/50 mt-2">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Support() {
    const [featureRequest, setFeatureRequest] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeatureRequest(e.target.value);
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [featureRequest]);

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
                            text="Explore our documentation, request missing features, or check out our frequently asked questions to get the support you need."
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
                {/* Feature request */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Request a Feature</h2>
                        <p className="text-sm text-gray-500 mt-1">Have an idea that could make Cohortly better? Let us know.</p>
                    </div>

                    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-gray-300 transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 overflow-hidden">
                        <textarea
                            ref={textareaRef}
                            value={featureRequest}
                            onChange={handleTextareaChange}
                            placeholder="I wish Cohortly could..."
                            rows={1}
                            className="w-full pl-5 pr-5 pt-5 pb-16 bg-transparent outline-none text-gray-800 text-sm placeholder:text-gray-400 resize-none min-h-[120px]"
                        />
                        <div className="absolute bottom-4 left-4">
                            <button
                                type="button"
                                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 hover:scale-[1.02] active:scale-95 transition-all shadow-md group"
                            >
                                <span className="text-[13px] font-bold">Send Feedback</span>
                                <Send className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Direct Contact</h2>
                        <p className="text-sm text-gray-500 mt-1">Need to speak with us directly? Reach out via email.</p>
                    </div>
                    <div className="border border-gray-200/60 bg-white rounded-2xl overflow-hidden transition-all hover:border-gray-300/80 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="font-medium text-gray-900">General Inquiries & Support</h3>
                            <p className="text-sm text-gray-500 mt-1">We aim to respond to all inquiries within 48 hours.</p>
                        </div>
                        <a href="mailto:support@cohortly.com" className="font-medium text-blue-600 hover:text-blue-700 transition-colors text-sm">
                            support@cohortly.com
                        </a>
                    </div>
                </div>
                {/* FAQs */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
                        <p className="text-sm text-gray-500 mt-1">Quick answers to common questions about Cohortly.</p>
                    </div>
                    <div className="space-y-3">
                        {faqData.map((faq, idx) => (
                            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}

