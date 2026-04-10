"use client";

import React, { useMemo, useState } from "react";
import { GraduationCap, Rocket, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TypewriterText } from "./TypewriterText";
import { AnimatedText } from "./AnimatedText";
import { Particles } from "./Particles";

type UseCaseKey = "venture-funds" | "accelerators" | "education";

const useCases: {
    key: UseCaseKey;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    pillars: { title: string; description: string }[];
}[] = [
    {
        key: "venture-funds",
        label: "Venture Funds",
        icon: Landmark,
        title: "Venture Funds",
        description:
            "Cohortly gives venture teams a unified operating layer for sourcing, evaluating, and tracking startups across every intake cycle, with AI-assisted scoring and reviewer alignment built in.",
        pillars: [
            {
                title: "Pipeline Visibility",
                description:
                    "Track total applications, score trends, pending reviews, and active programs from one command surface.",
            },
            {
                title: "Consistent Evaluation",
                description:
                    "Score companies using weighted rubric criteria so partner teams evaluate opportunities with shared standards.",
            },
            {
                title: "Team Collaboration",
                description:
                    "Reviewer roles, comments, and status workflows keep investment discussions structured and auditable.",
            },
        ],
    },
    {
        key: "accelerators",
        label: "Accelerators",
        icon: Rocket,
        title: "Accelerators",
        description:
            "Built for modern accelerator operators, Cohortly streamlines applications, cohort review, and selection decisions so your team spends less time on admin and more time supporting founders.",
        pillars: [
            {
                title: "Program Builder",
                description:
                    "Launch branded application programs fast with a guided setup flow, custom deadlines, and form structure.",
            },
            {
                title: "Application Review",
                description:
                    "Use the dashboard to filter, sort, comment, and progress applicants through clear review stages.",
            },
            {
                title: "AI Scoring",
                description:
                    "Automatically rank applicants against your rubric, then shortlist top candidates with threshold rules.",
            },
        ],
    },
    {
        key: "education",
        label: "Education",
        icon: GraduationCap,
        title: "Education",
        description:
            "For universities, fellowships, and educational programs, Cohortly helps teams run structured admissions and cohort selection with transparent criteria, cleaner communication, and less manual work.",
        pillars: [
            {
                title: "Structured Admissions",
                description:
                    "Build sectioned forms with flexible question types and conditional logic for diverse applicant profiles.",
            },
            {
                title: "Reviewer Alignment",
                description:
                    "Invite staff and reviewers with role-based permissions to ensure fair and consistent review outcomes.",
            },
            {
                title: "Operational Clarity",
                description:
                    "Use unified inbox activity and analytics to keep selection cycles organized from intake to decisions.",
            },
        ],
    },
];

interface UseCasesProps {
    initialUseCase?: UseCaseKey;
}

export function UseCases({ initialUseCase = "venture-funds" }: UseCasesProps) {
    const [activeUseCase, setActiveUseCase] = useState<UseCaseKey>(initialUseCase);

    const current = useMemo(
        () => useCases.find((item) => item.key === activeUseCase) ?? useCases[0],
        [activeUseCase]
    );

    return (
        <section className="bg-white">
            <div className="relative min-h-screen pt-24 md:pt-28 pb-10 md:pb-12 flex items-center overflow-hidden">
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

                <div className="max-w-5xl mx-auto px-4 w-full relative z-10">
                    <div className="text-center w-full md:w-[60vw] lg:w-[56vw] max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tight text-gray-900 font-normal leading-[1.05] min-h-[44px] md:min-h-[72px] flex items-center justify-center">
                            <TypewriterText
                                key={activeUseCase}
                                chunks={[{ text: current.title }]}
                                speed={52}
                                delay={0}
                            />
                        </h1>
                        <AnimatedText
                            key={`desc-${activeUseCase}`}
                            text={current.description}
                            delay={0.12}
                            className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600"
                        />
                    </div>

                    <div className="mt-10 md:mt-12 flex justify-center">
                        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {useCases.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeUseCase === item.key;

                                return (
                                    <button
                                        key={item.key}
                                        type="button"
                                        onClick={() => setActiveUseCase(item.key)}
                                        className={cn(
                                            "h-12 rounded-full border transition-all px-4 flex items-center justify-center gap-2 text-sm backdrop-blur-xl",
                                            isActive
                                                ? "glass border-gray-200/70 text-gray-900 shadow-[0_8px_24px_rgb(0,0,0,0.08)]"
                                                : "bg-white/65 border-gray-200/70 text-gray-500 hover:text-gray-700 hover:bg-white/80"
                                        )}
                                    >
                                        <Icon className={cn("w-4 h-4", isActive ? "text-gray-700" : "text-gray-400")} />
                                        <span className={cn("font-medium", isActive ? "text-gray-900" : "text-gray-500")}>
                                            {item.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <p className="mt-3 text-center text-[11px] md:text-xs text-gray-400 font-medium">
                        Use cases are not limited to the categories shown here.
                    </p>
                </div>
            </div>

            <div className="pb-16 md:pb-24">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                        {current.pillars.map((pillar, idx) => (
                            <motion.div
                                key={`${activeUseCase}-${pillar.title}`}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.12 + idx * 0.08, ease: "easeOut" }}
                                className="rounded-2xl border border-gray-200/70 bg-white px-4 py-4 md:px-5 md:py-5"
                            >
                                <h3 className="text-sm md:text-base font-semibold text-gray-900">{pillar.title}</h3>
                                <p className="mt-2 text-xs md:text-sm leading-relaxed text-gray-600">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
