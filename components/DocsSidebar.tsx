"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Heading {
    level: number;
    text: string;
    id: string;
}

interface DocsSidebarProps {
    headings: Heading[];
}

export function DocsSidebar({ headings }: DocsSidebarProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-80px 0% -80% 0%" }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed bottom-6 right-6 z-50 bg-white text-gray-900 p-3.5 rounded-full border border-gray-200 shadow-sm active:scale-95 transition-transform"
            >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden fixed inset-0 bg-black/10 z-40"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Container */}
            <aside
                className={cn(
                    "fixed lg:sticky top-0 lg:top-24 left-0 h-full lg:h-[calc(100vh-6rem)] w-72 bg-white lg:bg-transparent border-r lg:border-none border-gray-200 z-40 transition-transform duration-300 lg:translate-x-0 overflow-y-auto px-6 py-12 lg:py-0 scrolling-touch",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col gap-8">
                    <div>
                        <h5 className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.14em] mb-5 px-3">
                            Documentation
                        </h5>
                        <nav className="flex flex-col gap-1">
                            {headings.map((heading) => {
                                // Only show Level 1 and Level 2 in main nav, Level 3 as nested items
                                if (heading.level > 3) return null;

                                return (
                                    <Link
                                        key={heading.id}
                                        href={`#${heading.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "group flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                                            heading.level === 1 ? "font-semibold text-gray-900 mt-4 first:mt-0" : "font-normal",
                                            heading.level === 2 ? "pl-6" : "",
                                            heading.level === 3 ? "pl-10 text-[13px]" : "",
                                            activeId === heading.id 
                                                ? "bg-gray-100 text-gray-900" 
                                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                        )}
                                    >
                                        {heading.level === 1 && <ChevronDown className={cn("w-3.5 h-3.5 text-gray-500 transition-transform", activeId === heading.id ? "rotate-0" : "-rotate-90")} />}
                                        <span className="truncate">{heading.text}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    );
}
