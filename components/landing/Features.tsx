import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BrainCircuit,
    SlidersHorizontal,
    Table2,
    Copy,
    GitBranch,
    Users,
    BellRing,
    Rocket
} from "lucide-react";

const features = [
    {
        title: "AI Auto-Scoring",
        description: "Rubric-based scores in seconds. It understands startup traction, grant impact, and academic potential.",
        icon: BrainCircuit,
    },
    {
        title: "Smart Thresholds",
        description: "You decide the cutoffs. Auto-move obvious yes/no’s, override anytime.",
        icon: SlidersHorizontal,
    },
    {
        title: "Notion-style Dashboard",
        description: "Dynamic columns match your rubric. Filter, sort, and take bulk actions instantly.",
        icon: Table2,
    },
    {
        title: "One-Click Templates",
        description: "YC, Techstars, NSF, fellowships, climate funds — start configured in one click.",
        icon: Copy,
    },
    {
        title: "Conditional Logic",
        description: "Ask the right questions only when needed. Cleaner forms, better data.",
        icon: GitBranch,
    },
    {
        title: "Real-time Collaboration",
        description: "Multiple reviewers, comments, @mentions, and anonymous mode.",
        icon: Users,
    },
    {
        title: "Notifications That Matter",
        description: "Slack/email alerts for new submissions, auto-shortlists, and important flags.",
        icon: BellRing,
    },
    {
        title: "Launch in Minutes",
        description: "Public link, embed option, QR code — no dev team required.",
        icon: Rocket,
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-800">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        Everything a real program needs — <br className="hidden md:block" />
                        <span className="text-gray-400">nothing you don’t</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-[#007AFF]/5 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-100 dark:border-gray-700/50 hover:border-[#007AFF]/20 transition-all">
                            <div className="shrink-0 flex items-center justify-center text-[#007AFF] dark:text-blue-400">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-base text-muted-foreground">
                        No enterprise complexity. No $5k+/year price tag. <br className="hidden sm:block" />
                        Just <span className="text-foreground font-semibold">fast, fair, focused selection.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
