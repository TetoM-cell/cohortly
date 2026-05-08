import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getcohortly.vercel.app"),
  title: {
    default: "Cohortly | The OS for Modern Accelerators",
    template: "%s | Cohortly",
  },
  description:
    "Cohortly helps accelerators review applications 42% faster with AI scoring and unified communication. Free trial available.",
  openGraph: {
    type: "website",
    siteName: "Cohortly",
    title: "Cohortly | The OS for Modern Accelerators",
    description:
      "Cohortly helps accelerators review applications 42% faster with AI scoring and unified communication.",
    url: "https://getcohortly.vercel.app",
    // TODO: Replace /og-image.png with your actual OG image in /public
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cohortly — The OS for Modern Accelerators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cohortly | The OS for Modern Accelerators",
    description:
      "Cohortly helps accelerators review applications 42% faster with AI scoring and unified communication.",
    // TODO: Replace /og-image.png with your actual OG image in /public
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} font-sans h-full antialiased light`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
