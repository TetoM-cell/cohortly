import { Button } from "@/components/ui/button";
import { ArrowLeftRight, CheckCircle2, LayoutTemplate, Sparkles } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Build once, reuse forever",
        description: "Choose a template or drag-and-drop questions in minutes. No more reinventing the wheel every cohort.",
        icon: LayoutTemplate,
    },
    {
        number: "02",
        title: "Let AI do the first pass",
        description: "Define your rubric and let AI generate instant scores + explanations for every submission.",
        icon: Sparkles,
    },
    {
        number: "03",
        title: "Draw your own lines",
        description: "Set custom thresholds to auto-shortlist the best and flag the risk. You stay in control.",
        icon: ArrowLeftRight,
    },
    {
        number: "04",
        title: "Review like Notion",
        description: "Filter, sort, comment, and bulk-action in real-time. Decide like pros, not spreadsheet clerks.",
        icon: CheckCircle2,
    },
];

export default function Solution() {
    return (
        <section id="how-it-works" className="py-24 bg-background">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        Make smarter decisions 5× faster — without the bloat
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#007AFF]/10 via-[#007AFF]/20 to-[#007AFF]/10 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                            <div className="h-24 w-24 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <step.icon className="h-12 w-12 text-[#007AFF] relative z-10" />
                            </div>
                            <div className="space-y-3 px-2">
                                <span className="text-sm font-bold text-[#007AFF] tracking-wider uppercase">Step {step.number}</span>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <Button size="lg" className="h-12 px-8 rounded-full bg-[#007AFF] hover:bg-[#0062CC] text-white shadow-lg" asChild>
                        <Link href="#waitlist">
                            Join the Waitlist
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
