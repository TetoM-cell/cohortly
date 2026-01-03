import Link from "next/link";
import { Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-gray-100 dark:border-gray-800">
            <div className="container px-4 mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

                <div className="space-y-2">
                    <span className="text-xl font-bold tracking-tight">Cohortly</span>
                    <p className="text-sm text-muted-foreground">
                        Fair, fast decisions for the programs that matter.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:hello@cohortly.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

            </div>
            <div className="container px-4 mx-auto max-w-6xl mt-8 pt-8 border-t border-gray-50 dark:border-gray-800 text-center">
                <p className="text-xs text-muted-foreground">
                    © 2026 Cohortly – Made for builders, by builders
                </p>
            </div>
        </footer>
    );
}
