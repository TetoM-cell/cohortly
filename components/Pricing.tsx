"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

type BillingPlan = "monthly" | "yearly";

const includedFeatures = [
    "Unlimited programs",
    "Unlimited applications",
    "Full Form Builder",
    "Advanced Scoring Rubrics",
    "Team Collaboration",
    "AI-Powered Reviews*",
    "Status Automations",
    "Priority Internal Support",
];

const planHighlights = [
    {
        title: "14-day free trial",
        body: "Enough time to launch a real program, test review flows, and invite your team.",
    },
    {
        title: "One subscription",
        body: "No confusion around limits, add-ons, or locked features while you are scaling usage.",
    },
    {
        title: "Built for operations teams",
        body: "Best fit for accelerators, venture funds, grants, and other cohort-based programs.",
    },
];

const pricingByPlan: Record<
    BillingPlan,
    { amount: string; suffix: string; detail: string; badge?: string }
> = {
    monthly: {
        amount: "$99",
        suffix: "/month",
        detail: "Monthly subscription after your 14-day free trial.",
    },
    yearly: {
        amount: "$75",
        suffix: "/month",
        detail: "Billed monthly on a 12-month commitment after your 14-day free trial.",
        badge: "Save 24%",
    },
};

export function Pricing() {
    const [billingPlan, setBillingPlan] = useState<BillingPlan>("monthly");
    const pricing = pricingByPlan[billingPlan];

    return (
        <section className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-32 md:pb-24">
            <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-4">
                <div className="mx-auto w-full max-w-4xl text-center">
                    <h1 className="text-3xl font-normal leading-[1.05] tracking-tight text-gray-900 sm:text-4xl md:text-6xl">
                        One plan. Full platform. 14 days free.
                    </h1>
                    <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                        Start a 14-day trial of Cohortly, then continue on a monthly or annual commitment that
                        includes the full platform: forms, scoring, automation, collaboration, and AI-assisted
                        review workflows.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-[2rem] border border-gray-900 bg-black p-8 shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:p-10">
                        <div className="flex justify-center md:justify-start">
                            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
                                {(["monthly", "yearly"] as BillingPlan[]).map((plan) => {
                                    const isActive = billingPlan === plan;

                                    return (
                                        <button
                                            key={plan}
                                            type="button"
                                            onClick={() => setBillingPlan(plan)}
                                            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] transition-colors ${isActive
                                                    ? "bg-white text-black"
                                                    : "text-white/65 hover:text-white"
                                                }`}
                                        >
                                            {plan}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-sm font-semibold text-white">Cohortly Platform</p>
                                <div className="mt-3 flex flex-wrap items-center gap-3">
                                    <p className="text-5xl font-black tracking-tighter text-white md:text-6xl">
                                        {pricing.amount}
                                        <span className="ml-2 text-lg font-normal text-white/60">{pricing.suffix}</span>
                                    </p>
                                    {pricing.badge ? (
                                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                                            {pricing.badge}
                                        </span>
                                    ) : null}
                                </div>
                                <p className="mt-3 text-sm text-white/70">{pricing.detail}</p>
                            </div>

                            <div className="rounded-2xl bg-white/5 px-4 py-3 text-left md:max-w-[15rem]">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                                    What you get
                                </p>
                                <p className="mt-2 text-sm font-medium text-white/80">
                                    Unlimited usage across forms, reviews, workflows, and team collaboration.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid w-full grid-cols-1 gap-x-12 gap-y-4 text-left sm:grid-cols-2">
                            {includedFeatures.map((feature) => (
                                <div key={feature} className="flex items-center gap-3 text-sm font-medium text-white/85">
                                    <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <Link
                                href="https://app-cohortly.vercel.app/signup"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition-all hover:scale-[1.02] hover:bg-gray-100 active:scale-95"
                            >
                                Start 14-Day Trial
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <p className="mt-6 max-w-lg text-[11px] leading-normal text-white/45">
                            Billing is handled through Lemon Squeezy. AI-powered reviews remain subject to fair-usage
                            soft limits to prevent technical abuse.
                        </p>
                    </div>

                    <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8 md:p-10">
                        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-gray-500">
                            Why this structure
                        </p>
                        <h2 className="mt-4 text-2xl font-normal tracking-tight text-gray-900">
                            No feature gating. No plan comparison table.
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-gray-600">
                            Every paying customer gets the same product surface area. The trial is there to let teams
                            validate fit with live workflows before the subscription starts.
                        </p>

                        <div className="mt-8 space-y-4">
                            {planHighlights.map((item) => (
                                <div key={item.title} className="rounded-2xl border border-white bg-white p-5">
                                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
