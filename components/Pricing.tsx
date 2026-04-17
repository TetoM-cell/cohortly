"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "yearly";

const freeFeatures = [
    "1 active program",
    "50 applications per month",
    "25 AI scoring requests per month",
    "Basic question types only",
];

const proFeatures = [
    "Unlimited programs",
    "Unlimited applications (no hard cap)",
    "Unlimited AI scoring (fair usage / soft daily limits)",
    "All question types + advanced features",
    "File upload, video, conditional logic, and Slack",
    "Advanced rubric + threshold automations",
    "Reviewer collaboration and role controls",
    "Priority support",
];

export function Pricing() {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

    const priceLabel = useMemo(() => {
        if (billingCycle === "yearly") {
            return {
                free: "$0/year",
                pro: "$899/year",
                proMeta: "Equivalent to $74.92/month",
                save: "Save 24%",
            };
        }

        return {
            free: "$0/month",
            pro: "$99/month",
            proMeta: "Billed monthly",
            save: "",
        };
    }, [billingCycle]);

    return (
        <section className="pt-28 md:pt-32 pb-16 md:pb-24 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center w-full md:w-[60vw] lg:w-[56vw] max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tight text-gray-900 font-normal leading-[1.05]">
                        Pricing during Beta
                    </h1>
                    <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                        Cohortly is currently in early beta. During this phase, all "Pro" features are completely free to use for our early adopters.
                    </p>
                </div>

                <div className="mt-12 max-w-2xl mx-auto">
                    <div className="rounded-2xl border-2 border-gray-900 bg-white p-8 md:p-10 flex flex-col items-center text-center shadow-xl shadow-gray-100">
                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">Early Access Beta</span>
                        </div>
                        
                        <p className="text-sm font-semibold text-gray-900">Complete Platform</p>
                        <p className="mt-4 text-5xl md:text-6xl tracking-tighter text-gray-900 font-black">$0<span className="text-lg font-normal text-gray-400">/mo</span></p>
                        <p className="mt-4 text-sm text-gray-500 max-w-md">
                            Get full access to all industrial-grade features. No credit card required, 
                            no hidden fees. Just build and manage your cohorts.
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-left w-full">
                            {[
                                "Unlimited programs",
                                "Unlimited applications",
                                "Full Form Builder",
                                "Advanced Scoring Rubrics",
                                "Team Collaboration",
                                "AI-Powered Reviews*",
                                "Status Automations",
                                "Priority Internal Support",
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="https://app-cohortly.vercel.app/signup"
                            className="mt-12 inline-flex w-full justify-center rounded-xl bg-black px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95"
                        >
                            Get Started Now
                        </Link>
                        
                        <p className="mt-6 text-[11px] text-gray-400 max-w-xs leading-normal">
                           *AI-powered reviews are subject to fair-usage soft limits to prevent technical abuse.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
