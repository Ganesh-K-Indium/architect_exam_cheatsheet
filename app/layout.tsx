import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cracktheclaude.vercel.app";
const TITLE = "CrackTheClaude — Claude Certified Architect Exam Cheat Sheet";
const DESCRIPTION =
  "Free cheat sheet for the Claude Certified Architect (Foundations) exam. All 5 domains, 6 exam scenarios, prompt caching, Agent SDK, models reference, anti-patterns, and a quick-ref guide to pass with confidence.";
const KEYWORDS = [
  "Claude Certified Architect",
  "Claude exam cheat sheet",
  "Anthropic certification",
  "Claude Agent SDK",
  "agentic architecture",
  "prompt engineering",
  "MCP integration",
  "Claude Code configuration",
  "context management",
  "Claude exam prep 2026",
  "CCA foundations",
  "dynamic adaptive decomposition",
  "hub and spoke architecture",
  "prompt caching",
  "multi-agent orchestration",
].join(", ");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | CrackTheClaude",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "CrackTheClaude" }],
  creator: "CrackTheClaude",
  publisher: "CrackTheClaude",

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "CrackTheClaude",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CrackTheClaude — Claude Certified Architect Exam Cheat Sheet",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@CrackTheClaude",
  },

  // App metadata
  applicationName: "CrackTheClaude",
  category: "education",
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CrackTheClaude",
  url: SITE_URL,
  description: DESCRIPTION,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  about: {
    "@type": "Thing",
    name: "Claude Certified Architect Exam",
    description:
      "Anthropic's official technical certification for Claude AI architecture and development",
  },
  keywords: KEYWORDS,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
