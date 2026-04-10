"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";

const EFFECTIVE_DATE = "April 8, 2026";
const CONTACT_EMAIL = "legal@cohortly.app";

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-lg font-semibold text-gray-900 mt-10 mb-3 pb-2 border-b border-gray-100">
            {children}
        </h2>
    );
}

function Para({ children }: { children: React.ReactNode }) {
    return <p className="text-sm text-gray-600 leading-relaxed mb-3">{children}</p>;
}

type CookieRow = {
    name: string;
    provider: string;
    purpose: string;
    duration: string;
    type: "Essential" | "Functional" | "Analytics" | "Third-Party";
};

const cookies: CookieRow[] = [
    {
        name: "sb-access-token",
        provider: "Supabase / Cohortly",
        purpose: "Stores your authenticated session token so you stay logged in across page loads.",
        duration: "Session / 1 hour",
        type: "Essential",
    },
    {
        name: "sb-refresh-token",
        provider: "Supabase / Cohortly",
        purpose: "Long-lived token used to silently refresh your session without requiring re-authentication.",
        duration: "60 days",
        type: "Essential",
    },
    {
        name: "__Host-next-auth.csrf-token",
        provider: "Cohortly",
        purpose: "Cross-Site Request Forgery (CSRF) protection token issued by Next.js for secure form submissions.",
        duration: "Session",
        type: "Essential",
    },
    {
        name: "next-auth.callback-url",
        provider: "Cohortly",
        purpose: "Stores the URL to redirect you to after completing OAuth authentication (e.g., Google sign-in).",
        duration: "Session",
        type: "Essential",
    },
    {
        name: "cohortly_theme",
        provider: "Cohortly",
        purpose: "Remembers your preferred appearance setting (Light or Dark mode) between sessions.",
        duration: "1 year",
        type: "Functional",
    },
    {
        name: "cohortly_inbox_[userId]",
        provider: "Cohortly (localStorage)",
        purpose: "Persists your inbox state — which items are read, archived, starred, or deleted — locally in your browser.",
        duration: "Persistent (localStorage)",
        type: "Functional",
    },
    {
        name: "cohortly_saved_views",
        provider: "Cohortly (localStorage)",
        purpose: "Stores your saved dashboard filter views (e.g., 'Top 20 Candidates') for one-click recall.",
        duration: "Persistent (localStorage)",
        type: "Functional",
    },
    {
        name: "cohortly_apply_draft_[slug]",
        provider: "Cohortly (localStorage)",
        purpose: "Saves an applicant's in-progress form responses so they can return and complete their application later.",
        duration: "Persistent (localStorage) — cleared on submission",
        type: "Functional",
    },
    {
        name: "_ga",
        provider: "Google Analytics",
        purpose: "Distinguishes unique users for aggregate usage analytics. Used to understand which features are most used and how users navigate the platform.",
        duration: "2 years",
        type: "Analytics",
    },
    {
        name: "_ga_[ID]",
        provider: "Google Analytics",
        purpose: "Maintains session state for Google Analytics 4 (GA4) measurement.",
        duration: "2 years",
        type: "Analytics",
    },
    {
        name: "__lemon_squeezy_session",
        provider: "Lemon Squeezy",
        purpose: "Maintains your session on the Lemon Squeezy checkout and customer billing portal.",
        duration: "Session",
        type: "Third-Party",
    },
];

const typeColors: Record<CookieRow["type"], string> = {
    Essential: "bg-blue-50 text-blue-700 border-blue-100",
    Functional: "bg-purple-50 text-purple-700 border-purple-100",
    Analytics: "bg-amber-50 text-amber-700 border-amber-100",
    "Third-Party": "bg-gray-100 text-gray-600 border-gray-200",
};

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <div className="relative pt-24 md:pt-28 pb-10 flex flex-col items-center overflow-hidden">
                <div
                    className="absolute inset-y-0 left-0 w-full md:w-[60%] pointer-events-none z-0"
                    style={{
                        maskImage: "linear-gradient(to right, black 20%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, black 20%, transparent 100%)",
                    }}
                >
                    <Particles quantity={50} color="#3b82f6" />
                </div>
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/40 blur-[120px] rounded-full opacity-60 pointer-events-none z-0" />

                <div className="max-w-3xl mx-auto px-4 w-full relative z-10 text-center">
                    <p className="text-black font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                        Legal
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-gray-900 leading-[1.1]">
                        Cookie Policy
                    </h1>
                    <p className="mt-4 text-sm text-gray-500">
                        Effective Date: <strong>{EFFECTIVE_DATE}</strong>
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 relative z-10 pb-24">

                <Para>
                    This Cookie Policy explains how Cohortly Inc. (&quot;Cohortly&quot;, &quot;we&quot;,
                    &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies when you
                    visit our marketing website at <strong>cohortly.app</strong> and when you use the
                    Cohortly web application. This policy should be read alongside our{" "}
                    <Link href="/terms-privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                </Para>

                <SectionHeading>1. What Are Cookies?</SectionHeading>
                <Para>
                    Cookies are small text files placed on your device (computer, tablet, or mobile) by a website
                    when you visit it. They are widely used to make websites work efficiently, remember your
                    preferences, and provide information to site owners. Cookies set by the website operator
                    are called &quot;first-party cookies&quot;; cookies set by other parties are called
                    &quot;third-party cookies&quot;.
                </Para>
                <Para>
                    In addition to cookies, we use <strong>localStorage</strong> — a browser-based storage
                    mechanism — to persist certain application state. Unlike cookies, localStorage data is never
                    sent to our servers automatically; it lives only in your browser. The data stored in
                    localStorage is listed in the cookie table below where relevant.
                </Para>

                <SectionHeading>2. Why We Use Cookies</SectionHeading>
                <Para>We use cookies and localStorage for the following purposes:</Para>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-6">
                    {[
                        {
                            type: "Essential",
                            color: "blue",
                            desc: "Required for the platform to function. These include authentication tokens that keep you logged in and security tokens that protect against CSRF attacks. These cannot be disabled.",
                        },
                        {
                            type: "Functional",
                            color: "purple",
                            desc: "Enable enhanced features and personalisation — such as remembering your dark/light mode preference, your inbox state, and saved dashboard views. Disabling these may affect your experience.",
                        },
                        {
                            type: "Analytics",
                            color: "amber",
                            desc: "Help us understand how users interact with Cohortly in aggregate so we can improve the product. We use Google Analytics (GA4) with IP anonymisation enabled.",
                        },
                        {
                            type: "Third-Party",
                            color: "gray",
                            desc: "Set by our billing partner (Lemon Squeezy) when you visit the checkout or customer portal. These are governed by Lemon Squeezy's own cookie policy.",
                        },
                    ].map(({ type, color, desc }) => (
                        <div
                            key={type}
                            className={`rounded-2xl border p-4 ${
                                color === "blue"
                                    ? "bg-blue-50/60 border-blue-100"
                                    : color === "purple"
                                    ? "bg-purple-50/60 border-purple-100"
                                    : color === "amber"
                                    ? "bg-amber-50/60 border-amber-100"
                                    : "bg-gray-50 border-gray-200"
                            }`}
                        >
                            <span
                                className={`text-[10px] font-black uppercase tracking-widest mb-2 block ${
                                    color === "blue"
                                        ? "text-blue-600"
                                        : color === "purple"
                                        ? "text-purple-600"
                                        : color === "amber"
                                        ? "text-amber-600"
                                        : "text-gray-500"
                                }`}
                            >
                                {type}
                            </span>
                            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                <SectionHeading>3. Cookies We Use</SectionHeading>
                <Para>
                    The table below lists the specific cookies and localStorage keys used by Cohortly and
                    its third-party services.
                </Para>

                <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="text-left px-4 py-3 text-xs font-black text-gray-500 uppercase tracking-widest">Name</th>
                                <th className="text-left px-4 py-3 text-xs font-black text-gray-500 uppercase tracking-widest">Provider</th>
                                <th className="text-left px-4 py-3 text-xs font-black text-gray-500 uppercase tracking-widest hidden md:table-cell">Purpose</th>
                                <th className="text-left px-4 py-3 text-xs font-black text-gray-500 uppercase tracking-widest hidden sm:table-cell">Duration</th>
                                <th className="text-left px-4 py-3 text-xs font-black text-gray-500 uppercase tracking-widest">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cookies.map((c, i) => (
                                <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                                    <td className="px-4 py-3 font-mono text-xs text-gray-800 align-top break-all max-w-[140px]">{c.name}</td>
                                    <td className="px-4 py-3 text-xs text-gray-600 align-top whitespace-nowrap">{c.provider}</td>
                                    <td className="px-4 py-3 text-xs text-gray-500 align-top leading-relaxed hidden md:table-cell">{c.purpose}</td>
                                    <td className="px-4 py-3 text-xs text-gray-500 align-top whitespace-nowrap hidden sm:table-cell">{c.duration}</td>
                                    <td className="px-4 py-3 align-top">
                                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider border rounded-full px-2 py-0.5 ${typeColors[c.type]}`}>
                                            {c.type}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <SectionHeading>4. Your Choices &amp; How to Manage Cookies</SectionHeading>
                <Para>
                    <strong>Essential cookies</strong> cannot be disabled as they are strictly necessary for
                    the Cohortly platform to function. Without them, you will not be able to log in or use
                    the application.
                </Para>
                <Para>
                    For all other cookie categories, you have the following options:
                </Para>
                <div className="space-y-4 mb-4">
                    {[
                        {
                            title: "Browser Settings",
                            body: 'Most browsers allow you to view, manage, and delete cookies through their settings. Look for a "Privacy & Security" or "Cookies and Site Data" section in your browser preferences. Note that deleting cookies will log you out of Cohortly.',
                        },
                        {
                            title: "Google Analytics Opt-Out",
                            body: "You can prevent Google Analytics from collecting your data by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.",
                        },
                        {
                            title: "LocalStorage",
                            body: 'You can clear localStorage data via your browser\'s developer tools (Application → Local Storage → cohortly.app → Clear All). This will reset your inbox state, saved views, and theme preference.',
                        },
                        {
                            title: "Do Not Track",
                            body: 'If your browser sends a "Do Not Track" (DNT) signal, we will endeavour to honour it by disabling non-essential analytics tracking for your session.',
                        },
                    ].map(({ title, body }) => (
                        <div key={title} className="flex gap-3 p-4 rounded-2xl border border-gray-200 bg-white">
                            <div className="w-1 rounded-full bg-blue-500 flex-shrink-0 self-stretch" />
                            <div>
                                <p className="text-sm font-semibold text-gray-900 mb-1">{title}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <SectionHeading>5. Cookie Updates</SectionHeading>
                <Para>
                    As Cohortly evolves, we may introduce new features that set additional cookies or
                    localStorage entries. We will update this Cookie Policy accordingly and revise the
                    effective date at the top of the page. For changes that materially expand our use of
                    tracking technologies, we will notify you via in-app notice or email.
                </Para>

                <SectionHeading>6. Contact</SectionHeading>
                <Para>
                    If you have any questions about this Cookie Policy or how we handle your data, please
                    contact us at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">
                        {CONTACT_EMAIL}
                    </a>.
                </Para>

                {/* Bottom nav */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500">
                    <p>
                        Questions?{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline font-medium">
                            {CONTACT_EMAIL}
                        </a>
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/terms-privacy" className="text-gray-500 hover:text-gray-800 font-medium transition-colors">
                            Terms &amp; Privacy
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/support" className="text-gray-500 hover:text-gray-800 font-medium transition-colors">
                            Support
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
