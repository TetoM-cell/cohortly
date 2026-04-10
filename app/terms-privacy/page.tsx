"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";

const EFFECTIVE_DATE = "April 8, 2026";
const COMPANY = "Cohortly Inc.";
const CONTACT_EMAIL = "legal@cohortly.app";
const WEBSITE = "cohortly.app";

type Tab = "terms" | "privacy";

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-lg font-semibold text-gray-900 mt-10 mb-3 pb-2 border-b border-gray-100">
            {children}
        </h2>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">{children}</h3>;
}

function Para({ children }: { children: React.ReactNode }) {
    return <p className="text-sm text-gray-600 leading-relaxed mb-3">{children}</p>;
}

function Ul({ items }: { items: string[] }) {
    return (
        <ul className="list-disc list-inside space-y-1.5 mb-4 text-sm text-gray-600 leading-relaxed pl-1">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}

function TermsContent() {
    return (
        <div>
            <Para>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Cohortly platform,
                including our website at <strong>{WEBSITE}</strong>, all associated web applications, APIs,
                and any related services (collectively, the &quot;Service&quot;) provided by {COMPANY}
                (&quot;Cohortly&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </Para>
            <Para>
                By creating an account or using the Service in any way, you agree to be bound by these Terms.
                If you are using the Service on behalf of an organisation, you represent that you have the
                authority to bind that organisation to these Terms.
            </Para>

            <SectionHeading>1. Eligibility</SectionHeading>
            <Para>
                You must be at least 18 years of age to use Cohortly. By agreeing to these Terms, you represent
                and warrant that you meet this requirement. The Service is intended for use by organisations
                (accelerators, venture capital funds, grant programs, fellowship programs) and their authorised
                staff. Personal consumer use is not the intended purpose of the Service.
            </Para>

            <SectionHeading>2. Accounts &amp; Registration</SectionHeading>
            <Para>
                To access the core features of Cohortly you must register for an account. You agree to:
            </Para>
            <Ul items={[
                "Provide accurate, current, and complete registration information.",
                "Maintain the security of your account credentials and not share them with any third party.",
                "Promptly notify us at " + CONTACT_EMAIL + " if you suspect any unauthorised access to your account.",
                "Accept responsibility for all activity that occurs under your account.",
            ]} />
            <Para>
                We reserve the right to suspend or terminate accounts that violate these Terms, engage in
                fraudulent activity, or are left inactive for an extended period.
            </Para>

            <SectionHeading>3. Acceptable Use</SectionHeading>
            <Para>You agree not to use the Service to:</Para>
            <Ul items={[
                "Violate any applicable local, national, or international law or regulation.",
                "Collect application data for purposes other than the administration of a bona fide cohort, accelerator, grant, or fellowship program.",
                "Upload or transmit any malicious code, viruses, or other harmful software.",
                "Attempt to gain unauthorised access to any part of the Service or its underlying infrastructure.",
                "Engage in any data scraping, reverse engineering, or systematic extraction of platform content.",
                "Use the AI scoring features to make final accept/reject decisions without human oversight in contexts where automated decision-making is regulated.",
                "Misrepresent your identity or the nature of your program to applicants.",
                "Harass, intimidate, or discriminate against applicants or reviewers.",
            ]} />

            <SectionHeading>4. Subscription Plans &amp; Billing</SectionHeading>
            <Para>
                Cohortly offers both free and paid subscription tiers. Paid plans are billed through our
                payment processor, Lemon Squeezy. By subscribing to a paid plan, you authorise Lemon Squeezy
                to charge your designated payment method on a recurring basis at the rate applicable to your
                chosen plan.
            </Para>
            <SubHeading>4.1 Trials</SubHeading>
            <Para>
                We may offer free trials of paid features for a limited period. At the end of the trial period,
                your account will revert to the free tier unless you have provided valid payment details and
                selected a paid plan.
            </Para>
            <SubHeading>4.2 Upgrades &amp; Downgrades</SubHeading>
            <Para>
                You may upgrade or downgrade your plan at any time via <strong>Settings → Billing &amp; Plans</strong>.
                Upgrades take effect immediately. Downgrades take effect at the start of the next billing cycle.
                No partial refunds are issued for unused time on a downgraded plan.
            </Para>
            <SubHeading>4.3 Cancellation &amp; Refunds</SubHeading>
            <Para>
                You may cancel your subscription at any time through the Lemon Squeezy customer portal,
                accessible from <strong>Settings → Billing &amp; Plans → Manage Subscription</strong>. Cancellation
                stops future charges but does not entitle you to a refund for the current billing period. If you
                believe a charge was made in error, contact us at {CONTACT_EMAIL} within 14 days of the charge date.
            </Para>
            <SubHeading>4.4 Price Changes</SubHeading>
            <Para>
                We reserve the right to modify pricing at any time. We will give you at least 30 days&apos; notice
                of any price changes via email or in-app notification before they take effect. Continued use
                of the Service after a price change constitutes acceptance of the new pricing.
            </Para>

            <SectionHeading>5. Intellectual Property</SectionHeading>
            <Para>
                All software, design, text, graphics, and other content comprising the Cohortly platform are
                the exclusive property of {COMPANY} or its licensors, protected by copyright, trademark,
                and other intellectual property laws. These Terms do not grant you any right, title, or
                interest in the platform beyond the limited licence to use the Service as described herein.
            </Para>
            <Para>
                You retain full ownership of all content you create, upload, or configure within the Service,
                including program forms, rubrics, applicant data, and comments (&quot;Customer Data&quot;).
                By using the Service, you grant Cohortly a non-exclusive, royalty-free licence to host, store,
                and process your Customer Data solely for the purpose of providing and improving the Service.
            </Para>

            <SectionHeading>6. AI-Powered Scoring — Important Limitations</SectionHeading>
            <Para>
                Cohortly&apos;s AI scoring engine (powered by Google Gemini) is a decision-support tool and
                not a decision-making system. The scores and analyses it produces are probabilistic estimates
                based on the rubric criteria you define.
            </Para>
            <Ul items={[
                "You acknowledge that AI-generated scores may contain errors and should not be used as the sole basis for accepting or rejecting any application.",
                "Final acceptance decisions must always involve human review. The platform intentionally does not offer an auto-accept feature.",
                "You are responsible for ensuring your use of AI scoring complies with any applicable regulations governing automated decision-making in your jurisdiction (including, where applicable, the EU AI Act and GDPR Article 22).",
                "Cohortly is not liable for any decisions made by you or your organisation based on AI scoring outputs.",
            ]} />

            <SectionHeading>7. Data &amp; Privacy</SectionHeading>
            <Para>
                Your use of the Service is also governed by our <Link href="/terms-privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> (see the Privacy tab above) and our <Link href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</Link>. By using the Service, you consent to the collection and use of information as described in those documents.
            </Para>
            <Para>
                Where you collect personal data from applicants through public-facing application forms, you are
                acting as the data controller for that data. Cohortly acts as your data processor. You are
                responsible for ensuring you have a lawful basis for collecting and processing applicant data
                and that applicants are provided with adequate notice of how their data will be used.
            </Para>

            <SectionHeading>8. Availability &amp; Service Levels</SectionHeading>
            <Para>
                We strive to maintain high availability of the Service but do not guarantee uninterrupted,
                error-free access. We reserve the right to perform scheduled or emergency maintenance at
                any time and will endeavour to provide advance notice where possible. We are not liable
                for any loss arising from downtime, data unavailability, or service disruptions.
            </Para>

            <SectionHeading>9. Limitation of Liability</SectionHeading>
            <Para>
                To the fullest extent permitted by applicable law, Cohortly, its directors, employees, and
                suppliers shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages — including but not limited to loss of profits, data, goodwill, or business
                opportunity — arising out of or in connection with your use of the Service, even if we have
                been advised of the possibility of such damages.
            </Para>
            <Para>
                Our total aggregate liability to you for any claims arising out of or relating to the Service
                shall not exceed the greater of (a) the amounts you paid to Cohortly in the 12 months
                preceding the claim, or (b) USD $100.
            </Para>

            <SectionHeading>10. Indemnification</SectionHeading>
            <Para>
                You agree to indemnify and hold harmless {COMPANY} and its officers, directors, employees,
                and agents from any claims, losses, damages, liabilities, and expenses (including reasonable
                legal fees) arising out of or related to: (i) your use of the Service; (ii) your Customer Data;
                (iii) your violation of these Terms; or (iv) your violation of any third-party rights.
            </Para>

            <SectionHeading>11. Termination</SectionHeading>
            <Para>
                You may terminate your account at any time via <strong>Settings → Danger Zone → Delete Account</strong>.
                Cohortly may suspend or terminate your access immediately, without notice, if you breach these Terms
                or if we are required to do so by law. Upon termination, your right to use the Service ceases
                immediately and we may delete your account data in accordance with our data retention policy.
            </Para>

            <SectionHeading>12. Governing Law &amp; Dispute Resolution</SectionHeading>
            <Para>
                These Terms shall be governed by and construed in accordance with the laws of the State of
                Delaware, United States, without regard to its conflict of law provisions. Any disputes arising
                out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts
                located in Delaware. If you are a consumer in a jurisdiction where mandatory consumer protection
                laws apply, those laws shall take precedence over the provisions in this section to the extent
                required by law.
            </Para>

            <SectionHeading>13. Changes to These Terms</SectionHeading>
            <Para>
                We may update these Terms at any time. When we do, we will revise the &quot;Effective Date&quot;
                at the top of this page and, where changes are material, notify you by email or in-app notice.
                Your continued use of the Service after changes become effective constitutes acceptance of the
                revised Terms.
            </Para>

            <SectionHeading>14. Contact</SectionHeading>
            <Para>
                If you have any questions about these Terms, please contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>.
            </Para>
        </div>
    );
}

function PrivacyContent() {
    return (
        <div>
            <Para>
                This Privacy Policy explains how {COMPANY} (&quot;Cohortly&quot;, &quot;we&quot;, &quot;us&quot;,
                or &quot;our&quot;) collects, uses, stores, and shares your personal data when you use
                the Cohortly platform (&quot;Service&quot;). We are committed to protecting your privacy
                and handling your data in a transparent, responsible manner.
            </Para>
            <Para>
                If you are based in the European Economic Area (EEA), United Kingdom, or Switzerland,
                Cohortly Inc. is the data controller of your personal data.
            </Para>

            <SectionHeading>1. Information We Collect</SectionHeading>
            <SubHeading>1.1 Account &amp; Registration Data</SubHeading>
            <Para>When you create a Cohortly account, we collect:</Para>
            <Ul items={[
                "Name and email address (via direct sign-up or Google OAuth).",
                "Profile photo (if provided or fetched from Google).",
                "Organisation name and role (optional, provided by you in Settings).",
                "Password hash (for email/password accounts — we never store plaintext passwords).",
            ]} />

            <SubHeading>1.2 Program &amp; Usage Data</SubHeading>
            <Para>As you use the Service, we collect and store:</Para>
            <Ul items={[
                "Program configurations: names, descriptions, form structures, rubrics, deadlines, cover images, and logos.",
                "Reviewer assignments and role settings.",
                "Application review actions: status changes, score overrides, and comments you leave on applications.",
                "AI scoring requests you initiate and the resulting scores (stored in our database).",
                "Saved filter views and dashboard preferences.",
                "Inbox interactions: read/unread state, archived items, starred items (stored in browser localStorage keyed by user ID).",
            ]} />

            <SubHeading>1.3 Applicant Data (Collected on Your Behalf)</SubHeading>
            <Para>
                When applicants submit forms you have created, their responses are stored in our database
                under your account. This data may include, depending on the form questions you configure:
                names, email addresses, phone numbers, company details, financial data, file uploads,
                and any other information you choose to collect. You are the data controller of this
                applicant data; Cohortly processes it as your data processor.
            </Para>

            <SubHeading>1.4 Technical &amp; Usage Data</SubHeading>
            <Ul items={[
                "IP address and approximate geolocation (country/region level).",
                "Browser type and version, operating system, and device type.",
                "Pages visited, features used, and time spent in the application.",
                "Error logs and crash reports for debugging purposes.",
                "Real-time database subscription events (application submissions, comment updates).",
            ]} />

            <SubHeading>1.5 Payment Data</SubHeading>
            <Para>
                Cohortly does not directly collect or store payment card details. All payment processing
                is handled by <strong>Lemon Squeezy</strong>, our billing partner. We receive only
                non-sensitive billing information such as your subscription plan, billing status,
                and transaction IDs. Please review Lemon Squeezy&apos;s own privacy policy for details
                on how they handle your payment data.
            </Para>

            <SectionHeading>2. How We Use Your Information</SectionHeading>
            <Ul items={[
                "To provide, operate, and maintain the Cohortly platform.",
                "To authenticate you and manage your account.",
                "To process and store program data and applicant submissions.",
                "To operate the AI scoring engine: applicant answers and your rubric criteria are sent to Google Gemini APIs to produce scores and reasoning.",
                "To send transactional emails (account verification, password resets, reviewer invitations, billing receipts).",
                "To send product update and marketing emails (you may opt out at any time via the unsubscribe link or Settings → Notifications).",
                "To monitor and analyse platform usage in aggregate for product improvement.",
                "To detect, investigate, and prevent security incidents or fraudulent activity.",
                "To comply with legal obligations, including responding to lawful requests from public authorities.",
            ]} />

            <SectionHeading>3. AI Processing — Google Gemini</SectionHeading>
            <Para>
                Cohortly&apos;s AI scoring feature is powered by <strong>Google Gemini</strong>,
                operated by Google LLC. When you trigger the AI scorer, the following data is transmitted
                to Google&apos;s API:
            </Para>
            <Ul items={[
                "Your rubric criteria names, weights, and descriptions.",
                "Each applicant's form responses (text answers, not file uploads).",
            ]} />
            <Para>
                This data is transmitted over encrypted connections and is subject to Google&apos;s
                API data usage policies. We recommend you review Google&apos;s AI/ML API privacy terms.
                We do not send applicant names or personally identifiable contact details (email, phone)
                to the AI unless they appear in a text answer field you have included in the form.
                Before enabling AI scoring, please ensure your program&apos;s applicant-facing privacy notice
                informs applicants that their answers may be processed by AI tools.
            </Para>

            <SectionHeading>4. Data Storage &amp; Infrastructure</SectionHeading>
            <Para>
                Cohortly&apos;s backend infrastructure is built on <strong>Supabase</strong>, which uses
                AWS-hosted PostgreSQL databases. Your data is stored in encrypted databases with row-level
                security (RLS) policies ensuring that each user can only access data belonging to their
                own account and programs. Uploaded files (cover images, logos, applicant file submissions)
                are stored in Supabase Storage (S3-compatible object storage).
            </Para>

            <SectionHeading>5. Data Sharing &amp; Third Parties</SectionHeading>
            <Para>
                We do not sell your personal data. We share data only in the following circumstances:
            </Para>
            <Ul items={[
                "Service Providers: Supabase (database & storage), Google (AI & authentication), Lemon Squeezy (payments), and email delivery providers — all bound by contractual data processing agreements.",
                "Reviewers you invite: Program administrators and reviewers you explicitly add to a program can access that program's applicant data in accordance with the roles you assign.",
                "Legal requirements: If required by law, court order, or governmental authority, we may disclose data. We will notify you to the extent legally permitted.",
                "Business transfers: In the event of a merger, acquisition, or sale of all or substantially all of our assets, your data may be transferred to the successor entity, subject to the same privacy commitments.",
            ]} />

            <SectionHeading>6. Data Retention</SectionHeading>
            <Para>
                We retain your account and program data for as long as your account is active. If you
                delete a program (via Settings → Danger Zone), all associated applications, form data,
                rubrics, scores, and reviewer records are permanently deleted. If you delete your account,
                all associated data is permanently removed within 30 days, except where retention is
                required by law (e.g., billing records).
            </Para>

            <SectionHeading>7. Your Rights</SectionHeading>
            <Para>
                Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </Para>
            <Ul items={[
                "Right of Access: Request a copy of the personal data we hold about you.",
                "Right to Rectification: Request correction of inaccurate or incomplete data.",
                "Right to Erasure: Request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).",
                "Right to Restriction: Request that we restrict processing of your data in certain circumstances.",
                "Right to Data Portability: Request your data in a structured, machine-readable format.",
                "Right to Object: Object to processing based on legitimate interests or for direct marketing.",
                "Right to withdraw consent at any time (where processing is based on consent).",
            ]} />
            <Para>
                To exercise any of these rights, please contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>.
                {" "}We will respond within 30 days. EEA and UK residents may also lodge a complaint with
                their local supervisory authority.
            </Para>

            <SectionHeading>8. Cookies</SectionHeading>
            <Para>
                We use cookies and similar tracking technologies on our website and platform. For full details,
                please see our{" "}
                <Link href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</Link>.
            </Para>

            <SectionHeading>9. Children&apos;s Privacy</SectionHeading>
            <Para>
                The Service is not directed at individuals under the age of 18. We do not knowingly collect
                personal data from children. If you believe we have inadvertently collected data from a minor,
                please contact us immediately at {CONTACT_EMAIL} and we will delete it promptly.
            </Para>

            <SectionHeading>10. International Transfers</SectionHeading>
            <Para>
                Cohortly is based in the United States. If you access the Service from outside the US,
                your data may be transferred to and processed in the US or other countries where our
                service providers operate. For transfers from the EEA or UK, we rely on appropriate
                safeguards such as the EU Standard Contractual Clauses (SCCs) and the UK International
                Data Transfer Agreement (IDTA).
            </Para>

            <SectionHeading>11. Security</SectionHeading>
            <Para>
                We implement industry-standard security measures including TLS encryption in transit,
                AES-256 encryption at rest, row-level security on our database, and strict access controls
                for our engineering team. Despite these measures, no system is perfectly secure. We encourage
                you to use a strong, unique password and to enable two-factor authentication where available.
            </Para>

            <SectionHeading>12. Changes to This Policy</SectionHeading>
            <Para>
                We may update this Privacy Policy from time to time. When we do, we will update the
                &quot;Effective Date&quot; at the top of the page and notify you via email or in-app
                notice if the changes are material. Your continued use of the Service after the revised
                policy is posted constitutes your acceptance.
            </Para>

            <SectionHeading>13. Contact</SectionHeading>
            <Para>
                For any privacy-related questions, data subject requests, or concerns, please contact our
                privacy team at:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>.
            </Para>
        </div>
    );
}

export default function TermsPrivacyPage() {
    const [activeTab, setActiveTab] = useState<Tab>("terms");

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <div className="relative pt-24 md:pt-28 pb-10 flex flex-col items-center overflow-hidden">
                <div
                    className="absolute inset-y-0 right-0 w-full md:w-[60%] pointer-events-none z-0"
                    style={{
                        maskImage: "linear-gradient(to left, black 20%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to left, black 20%, transparent 100%)",
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
                        {activeTab === "terms" ? "Terms of Service" : "Privacy Policy"}
                    </h1>
                    <p className="mt-4 text-sm text-gray-500">
                        Effective Date: <strong>{EFFECTIVE_DATE}</strong>
                    </p>
                </div>
            </div>

            {/* Tab Switcher */}
            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <div className="flex gap-1 p-1 bg-gray-100 rounded-xl w-fit mx-auto mb-12">
                    {([["terms", "Terms of Service"], ["privacy", "Privacy Policy"]] as [Tab, string][]).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                                activeTab === key
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="pb-24">
                    {activeTab === "terms" ? <TermsContent /> : <PrivacyContent />}

                    {/* Bottom nav */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500">
                        <p>
                            Questions?{" "}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline font-medium">
                                {CONTACT_EMAIL}
                            </a>
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="/cookies" className="text-gray-500 hover:text-gray-800 font-medium transition-colors">
                                Cookie Policy
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/support" className="text-gray-500 hover:text-gray-800 font-medium transition-colors">
                                Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
