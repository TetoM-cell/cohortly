"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Problem", href: "#problem" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#comparison" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || isMobileMenuOpen
                    ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container px-4 mx-auto max-w-6xl flex items-center justify-between">
                {/* Logo Placeholder */}
                <Link href="/" className="flex items-center gap-2 font-medium text-xl z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image src="/logo.svg" alt="Cohortly Logo" width={32} height={32} className="h-8 w-8" />
                    <span>Cohortly</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <Button asChild className="rounded-full bg-[#007AFF] hover:bg-[#0062CC] h-9 px-4 text-xs sm:text-sm sm:h-10 sm:px-6">
                        <Link href="#waitlist">
                            Join Waitlist
                        </Link>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full h-[calc(100vh-100%)] flex flex-col md:hidden">
                        <nav className="flex flex-col space-y-2 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-xl p-4 animate-in slide-in-from-top-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-2 px-4 py-4 text-base font-medium text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors border-b border-gray-50 dark:border-gray-800/50 last:border-0"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <ChevronRight className="h-4 w-4 text-[#007AFF]" />
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex-1 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setIsMobileMenuOpen(false)} />
                    </div>
                )}
            </div>
        </header>
    );
}
