import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import GoogleTagManager from "@/components/GoogleTagManager";
import { getGtmId } from "@/lib/gtm";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const gtmId = getGtmId();

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FoodConsultPro | Restaurant Operations & FSSAI Compliance Consulting",
  description:
    "Expert restaurant operations consulting. Food safety audits, SOP implementation, staff training, and FSSAI compliance support to keep your restaurant inspection-ready every day.",
  keywords: [
    "restaurant consulting",
    "FSSAI compliance",
    "food safety audit",
    "SOP implementation",
    "restaurant operations",
    "staff training",
    "India",
  ],
  openGraph: {
    title: "FoodConsultPro | Restaurant Operations Consulting",
    description:
      "Stay FSSAI compliant with expert restaurant operations consulting. Food safety audits, SOPs, staff training, and ongoing compliance support.",
    type: "website",
    url: siteUrl,
    siteName: "FoodConsultPro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans">
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
        {children}
      </body>
    </html>
  );
}
