"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type DropdownKey = "use-cases" | "resources";

const navLinks: {
    name: string;
    href: string;
    hasDropdown?: boolean;
    dropdownKey?: DropdownKey;
}[] = [
        { name: "Features", href: "/#features" },
        { name: "Use Cases", href: "/use-cases", hasDropdown: true, dropdownKey: "use-cases" },
        { name: "Resources", href: "/resources", hasDropdown: true, dropdownKey: "resources" },
        { name: "Pricing", href: "/pricing" },
    ];

const dropdownUseCases = [
    { label: "Venture Funds", href: "/use-cases?useCase=venture-funds" },
    { label: "Accelerators", href: "/use-cases?useCase=accelerators" },
    { label: "Education", href: "/use-cases?useCase=education" },
];

const dropdownResources: { label: string; href: string; highlighted?: boolean }[] = [
    { label: "Docs", href: "/docs" },
    { label: "Releases", href: "/releases" },
    { label: "Support", href: "/support" },
    { label: "Terms & Privacy", href: "/terms-privacy" },
];

const dropdownCopy: Record<
    DropdownKey,
    { heading: React.ReactNode; description: string }
> = {
    "use-cases": {
        heading: (
            <>
                Built for modern teams in the <span className="text-blue-600">agent-first</span> era
            </>
        ),
        description: "Explore how Cohortly helps you build and manage high-performance teams.",
    },
    resources: {
        heading: (
            <>
                Guides, updates, and <span className="text-blue-600">support</span>
            </>
        ),
        description:
            "Release notes, help resources, and support policies for the platform.",
    },
};

function closeDropdowns(setHoveredDropdown: (v: DropdownKey | null) => void) {
    setHoveredDropdown(null);
}

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredDropdown, setHoveredDropdown] = useState<DropdownKey | null>(null);
    const [isDesktopNav, setIsDesktopNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const checkDesktopNav = () => {
            setIsDesktopNav(window.innerWidth >= 768);
        };

        checkDesktopNav();
        window.addEventListener("resize", checkDesktopNav);
        return () => window.removeEventListener("resize", checkDesktopNav);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const closeOnDesktop = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", closeOnDesktop);
        return () => window.removeEventListener("resize", closeOnDesktop);
    }, []);

    useEffect(() => {
        if (!isDesktopNav) {
            setHoveredDropdown(null);
        }
    }, [isDesktopNav]);



    type DropdownItem = { label: string; href: string; highlighted?: boolean };

    const dropdownItems = (
        hoveredDropdown === "use-cases"
            ? dropdownUseCases
            : hoveredDropdown === "resources"
                ? dropdownResources
                : []
    ) as DropdownItem[];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "py-3 px-3 sm:px-4" : "py-3 sm:py-6 px-3 sm:px-4"
            )}
        >
            <motion.nav
                animate={{
                    height: isDesktopNav && hoveredDropdown ? "auto" : "54px",
                }}
                transition={{ type: "spring", damping: 25, stiffness: 160 }}
                onMouseLeave={() => {
                    if (isDesktopNav) {
                        setHoveredDropdown(null);
                    }
                }}

                className={cn(
                    "max-w-6xl mx-auto rounded-[32px] transition-all duration-300 overflow-hidden bg-white border border-transparent shadow-none",
                    (scrolled || hoveredDropdown) && "glass border-gray-100/50 shadow-[0_8px_40px_rgb(0,0,0,0.06)]"
                )}
            >
                {/* Main Nav Bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 h-[54px]">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                        onMouseEnter={() => isDesktopNav && setHoveredDropdown(null)}
                    >
                        <div className="w-7 h-7 relative flex items-center justify-center">
                            <Image
                                src="/logo.svg"
                                alt="Cohortly"
                                width={28}
                                height={28}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="font-bold text-base tracking-tight text-gray-900 leading-none">Cohortly</span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => {
                            const isActiveDropdown =
                                link.hasDropdown && link.dropdownKey && hoveredDropdown === link.dropdownKey;

                            if (link.hasDropdown && link.dropdownKey) {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            if (link.name === "Resources") e.preventDefault();
                                        }}
                                        onMouseEnter={() => {
                                            if (isDesktopNav) {
                                                setHoveredDropdown(link.dropdownKey!);
                                            }
                                        }}
                                        className={cn(
                                            "text-[13px] font-medium transition-colors flex items-center gap-1 group/link",
                                            isActiveDropdown ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDown
                                            className={cn(
                                                "w-3.5 h-3.5 transition-transform duration-300",
                                                isActiveDropdown && "rotate-180 text-blue-600"
                                            )}
                                        />
                                    </Link>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onMouseEnter={() => isDesktopNav && setHoveredDropdown(null)}
                                    className="text-[13px] font-medium transition-colors text-gray-500 hover:text-gray-900"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div
                        className="hidden md:flex items-center gap-2"
                        onMouseEnter={() => isDesktopNav && setHoveredDropdown(null)}
                    >
                        <Link
                            href="https://app-cohortly.vercel.app/login"
                            className="text-[13px] font-semibold text-gray-600 hover:text-gray-900 px-3 py-1.5 transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            href="https://app-cohortly.vercel.app/signup"
                            className="bg-black text-white text-[13px] font-bold px-4 py-2 rounded-full hover:bg-gray-900 transition-all shadow-lg shadow-blue-500/10 flex items-center gap-1.5 group active:scale-95"
                        >
                            Get Started
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-500 hover:text-gray-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Dropdown Content Area */}
                <AnimatePresence mode="wait">
                    {isDesktopNav && hoveredDropdown && (
                        <motion.div
                            key={hoveredDropdown}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="px-6 pb-12 pt-8 border-t border-gray-50 bg-gray-50/30 overflow-hidden"
                        >
                            <div className="max-w-4xl grid grid-cols-2 gap-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <h4 className="text-2xl font-normal text-gray-900 mb-4 max-w-sm leading-tight">
                                        {dropdownCopy[hoveredDropdown].heading}
                                    </h4>
                                    <p className="text-sm text-gray-500 mb-8 max-w-xs leading-relaxed">
                                        {dropdownCopy[hoveredDropdown].description}
                                    </p>
                                </motion.div>

                                <div className="space-y-0">
                                    {dropdownItems.map((item, idx) => (
                                        <motion.div
                                            key={`${hoveredDropdown}-${item.label}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2, delay: 0.1 + idx * 0.05 }}
                                            className="rounded-xl"
                                        >
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "group flex items-center gap-1.5 px-2 py-1.5 rounded-xl hover:bg-white border border-transparent hover:border-gray-100 transition-all",
                                                    item.highlighted && "hover:bg-blue-50/50"
                                                )}
                                                onClick={() => closeDropdowns(setHoveredDropdown)}
                                            >
                                                <p
                                                    className={cn(
                                                        "text-base font-normal transition-colors",
                                                        item.highlighted
                                                            ? "text-blue-600 group-hover:text-blue-700"
                                                            : "text-gray-700 group-hover:text-gray-900"
                                                    )}
                                                >
                                                    {item.label}
                                                </p>
                                                <ChevronRight
                                                    className={cn(
                                                        "w-4 h-4 transition-all duration-200",
                                                        item.highlighted
                                                            ? "text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1"
                                                            : "text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1"
                                                    )}
                                                />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 sm:top-24 left-3 right-3 sm:left-4 sm:right-4 bg-white rounded-3xl border border-gray-100 shadow-2xl p-5 sm:p-6 md:hidden z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/#features"
                                className="text-lg font-semibold text-gray-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/use-cases"
                                className="text-lg font-semibold text-gray-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Use Cases
                            </Link>
                            <div className="pt-1">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                    Resources
                                </p>
                                <div className="flex flex-col gap-3 pl-1 border-l-2 border-gray-100">
                                    {dropdownResources.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className={cn(
                                                "text-base font-medium",
                                                item.highlighted ? "text-blue-600" : "text-gray-800"
                                            )}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <Link
                                href="/pricing"
                                className="text-lg font-semibold text-gray-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <hr className="border-gray-100 my-2" />
                            <Link
                                href="https://app-cohortly.vercel.app/login"
                                className="text-lg font-semibold text-gray-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Log in
                            </Link>
                            <Link
                                href="https://app-cohortly.vercel.app/signup"
                                className="bg-black text-white text-center font-bold py-4 rounded-2xl shadow-lg shadow-black/20"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
