import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSpreadsheet, Hourglass, UserX, Wallet } from "lucide-react";

const problems = [
    {
        title: "Endless spreadsheets",
        description: "Manual scoring, copy-pasting data, and Slack threads that never end.",
        icon: FileSpreadsheet,
    },
    {
        title: "Hours lost on noise",
        description: "Wasting time rejecting obvious no’s while missing hidden gems.",
        icon: Hourglass,
    },
    {
        title: "Unconscious bias",
        description: "Founders ghosted, inconsistent reviews, and teams burned out.",
        icon: UserX,
    },
    {
        title: "Overpriced legacy tools",
        description: "Enterprise software that takes weeks to configure and costs thousands.",
        icon: Wallet,
    },
];

export default function Problem() {
    return (
        <section id="problem" className="py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                        Reviewing hundreds of applications still feels like this…
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((problem, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-[#007AFF]/5 dark:from-gray-800 dark:to-gray-800/50">
                            <CardHeader className="space-y-4 pb-4">
                                <div className="flex items-center justify-center text-[#007AFF] dark:text-blue-400">
                                    <problem.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-xl font-bold">{problem.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {problem.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-base md:text-lg font-medium text-muted-foreground">
                        Most programs — even well-funded ones — still run on duct tape. <br />
                        <span className="text-[#007AFF] dark:text-blue-400 font-bold">You deserve better.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
