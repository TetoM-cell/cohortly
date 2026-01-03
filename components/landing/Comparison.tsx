import { Check, X, Minus } from "lucide-react";

export default function Comparison() {
    return (
        <section id="comparison" className="py-24 bg-background">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        Why teams are switching from what they use today
                    </h2>
                    <p className="text-base text-muted-foreground">
                        Built for the 95% of programs that aren’t YC or billion-dollar foundations.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse min-w-[800px]">
                        <thead>
                            <tr>
                                <th className="p-4 text-left w-1/4">Feature</th>
                                <th className="p-4 text-center text-muted-foreground w-1/4">Spreadsheets + Airtable</th>
                                <th className="p-4 text-center text-muted-foreground w-1/4">Enterprise (Submittable, etc)</th>
                                <th className="p-4 text-center text-[#007AFF] bg-gradient-to-b from-[#007AFF]/10 to-[#007AFF]/5 dark:from-[#007AFF]/20 dark:to-[#007AFF]/10 rounded-t-xl w-1/4 border-t border-x border-[#007AFF]/20 dark:border-[#007AFF]/30 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#007AFF] to-transparent opacity-20" />
                                    <span className="font-bold text-lg relative z-10">Cohortly</span>
                                    <span className="block text-xs font-normal text-[#007AFF]/70 mt-1 uppercase tracking-wider relative z-10">Coming Soon</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            <tr>
                                <td className="p-4 font-medium">Price</td>
                                <td className="p-4 text-center text-muted-foreground">Free – $25/mo</td>
                                <td className="p-4 text-center text-muted-foreground">$500 – $10k+/year</td>
                                <td className="p-4 text-center font-bold text-[#0062CC] dark:text-blue-400 bg-[#007AFF]/5 dark:bg-[#007AFF]/10 border-x border-[#007AFF]/20 dark:border-[#007AFF]/30">
                                    $99 – $299/mo
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">AI Auto-Scoring</td>
                                <td className="p-4 text-center text-muted-foreground">
                                    <X className="w-5 h-5 mx-auto text-gray-300" />
                                </td>
                                <td className="p-4 text-center text-muted-foreground">Limited / Expensive Add-on</td>
                                <td className="p-4 text-center font-bold text-[#0062CC] dark:text-blue-400 bg-[#007AFF]/5 dark:bg-[#007AFF]/10 border-x border-[#007AFF]/20 dark:border-[#007AFF]/30">
                                    Built-in & Rubric-Smart
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">Custom Thresholds</td>
                                <td className="p-4 text-center text-muted-foreground">Manual everything</td>
                                <td className="p-4 text-center text-muted-foreground">Rigid workflows</td>
                                <td className="p-4 text-center font-bold text-[#0062CC] dark:text-blue-400 bg-[#007AFF]/5 dark:bg-[#007AFF]/10 border-x border-[#007AFF]/20 dark:border-[#007AFF]/30">
                                    Full control, auto-actions
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">Setup Time</td>
                                <td className="p-4 text-center text-muted-foreground">Days of chaos</td>
                                <td className="p-4 text-center text-muted-foreground">Weeks + training</td>
                                <td className="p-4 text-center font-bold text-[#0062CC] dark:text-blue-400 bg-[#007AFF]/5 dark:bg-[#007AFF]/10 border-x border-[#007AFF]/20 dark:border-[#007AFF]/30">
                                    Minutes
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">Dashboard Freedom</td>
                                <td className="p-4 text-center text-muted-foreground">Manual columns</td>
                                <td className="p-4 text-center text-muted-foreground">Preset or complex config</td>
                                <td className="p-4 text-center font-bold text-[#0062CC] dark:text-blue-400 bg-[#007AFF]/5 dark:bg-[#007AFF]/10 border-x border-[#007AFF]/20 dark:border-[#007AFF]/30 rounded-b-xl border-b">
                                    Dynamic rubric columns
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
