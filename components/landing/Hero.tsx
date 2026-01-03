import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-16 text-center overflow-hidden bg-background">
            <div className="container max-w-6xl mx-auto flex flex-col items-center gap-8">

                {/* Text Content */}
                <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                        Stop wasting weeks <br className="hidden md:block" />
                        reviewing applications manually
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Cohortly is the Smart reviewer dashboard that auto-scores every submission, lets you set your own thresholds, and turns chaotic piles of applications into fair, fast decisions.
                    </p>

                    <p className="text-base font-medium text-[#007AFF] dark:text-blue-400">
                        Ditch Google Forms + Airtable hell. Get a professional program up in minutes — not months.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-[#007AFF] hover:bg-blue-700 text-white shadow-lg shadow-[#007AFF]/20 transition-all hover:scale-105" asChild>
                            <Link href="#waitlist">
                                Join the Waitlist
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-[#007AFF]/20 text-[#007AFF] hover:bg-[#007AFF]/10 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950/30" asChild>
                            <Link href="#how-it-works">
                                <PlayCircle className="mr-2 h-5 w-5" />
                                See how it works
                            </Link>
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground pt-2">
                        Launching Q1 2026. Be first in line — no spam, just updates.
                    </p>
                </div>

                {/* Dashboard Mockup */}
                <div className="w-full mt-12 relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
                    <div className="relative mx-auto rounded-xl border bg-gray-50/50 p-2 shadow-2xl shadow-gray-200/50 dark:bg-gray-900/50 dark:shadow-gray-950/50 backdrop-blur-sm lg:max-w-5xl">
                        <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                            <Image
                                src="/dashboard.png"
                                alt="Cohortly Dashboard Interface"
                                width={1200}
                                height={675}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                        {/* Decorative background blur */}
                        <div className="absolute -top-12 -left-12 -z-10 h-[300px] w-[300px] rounded-full bg-[#007AFF]/20 blur-[100px]" />
                        <div className="absolute -bottom-12 -right-12 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[100px]" />
                    </div>
                </div>

            </div>
        </section>
    );
}
