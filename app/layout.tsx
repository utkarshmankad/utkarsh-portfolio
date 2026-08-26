import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { AnalyticsEvents } from "./components/analytics-events";
import { siteConfig, siteUrl } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.linkedin }],
  creator: siteConfig.name,
  category: "technology",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg", apple: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  openGraph: { title: siteConfig.title, description: siteConfig.description, url: siteUrl, siteName: `${siteConfig.name} Portfolio`, images: [{ url: "/og-techno.jpg", width: 1200, height: 630, alt: "Utkarsh Mankad — Engineering Leader" }], type: "website" },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description, images: ["/og-techno.jpg"] },
};

export const viewport: Viewport = { colorScheme: "dark light", themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#090d11" }, { media: "(prefers-color-scheme: light)", color: "#f4f7f5" }] };

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light'}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body>{children}<AnalyticsEvents /><Analytics /><SpeedInsights /></body></html>;
}
