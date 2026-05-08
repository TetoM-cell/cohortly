"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqData = [
    {
        question: "How is my application data protected?",
        answer: "Cohortly is built on Supabase with AWS-hosted PostgreSQL databases. All data is encrypted at rest with AES-256 and in transit with TLS. Row-level security (RLS) policies ensure every user can only access data belonging to their own organization. File uploads are stored in S3-compatible object storage with the same isolation guarantees. You can read the full details in our Privacy Policy.",
    },
    {
        question: "How much effort does it take to migrate from our current workflow?",
        answer: "Cohortly is designed to replace spreadsheet and email-based workflows with minimal friction. You can create a new program directly from the dashboard using the drag-and-drop Form Builder — most teams have their first application form live within minutes. There is no complex data migration required; simply set up your programs, invite your reviewers, and start accepting applications.",
    },
    {
        question: "How do I get my team onboarded?",
        answer: "You can invite staff and reviewers with role-based permissions directly from the dashboard. Each team member gets access scoped to their role — reviewers see only the programs and applicants assigned to them, while admins have full control over settings, scoring rubrics, and workflows. There are no per-seat limits during the current early access period.",
    },
    {
        question: "What does Cohortly cost?",
        answer: "During the current early access period, the full platform is completely free — including unlimited programs, unlimited applications, AI-powered reviews, the Form Builder, status automations, and team collaboration. There are no feature gates or tiered plans. We reserve the right to introduce paid plans in the future, but early access users will always be given advance notice before any pricing changes take effect.",
    },
    {
        question: "What happens to my data if I cancel?",
        answer: "You own your data. If you choose to delete your account, all programs, applications, rubrics, scores, and reviewer records are permanently deleted from our systems. We do not retain your data after account deletion.",
    },
    {
        question: "Which AI provider powers the scoring?",
        answer: "AI-powered reviews use Google's AI models. Application data sent for scoring is transmitted over encrypted connections and is subject to Google's data processing agreements. AI usage is monitored to prevent abuse and ensure consistent quality across reviews.",
    },
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
                <ChevronDown className={cn("w-4 h-4 shrink-0 text-gray-400 transition-transform duration-300", isOpen && "rotate-180")} />
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

interface FAQProps {
    /** Optional heading override. Defaults to "Frequently Asked Questions". */
    heading?: string;
    /** Optional subheading override. */
    subheading?: string;
    /** When true, renders as a full-width section with its own padding (for standalone page placement). */
    standalone?: boolean;
}

export function FAQ({
    heading = "Frequently Asked Questions",
    subheading = "Quick answers to common questions about security, pricing, and getting started.",
    standalone = false,
}: FAQProps) {
    const content = (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{heading}</h2>
                {subheading && (
                    <p className="text-sm text-gray-500 mt-1">{subheading}</p>
                )}
            </div>
            <div className="space-y-3">
                {faqData.map((faq, idx) => (
                    <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );

    if (standalone) {
        return (
            <section id="faq" className="bg-white pt-20 pb-20 md:pt-28 md:pb-28">
                <div className="max-w-4xl w-full md:w-[60vw] mx-auto px-4">
                    {content}
                </div>
            </section>
        );
    }

    return content;
}
