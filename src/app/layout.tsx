import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { FloatingToolbar } from "~/components/floating-toolbar";
import { GlobalHeader } from "~/components/global-header";
import { env } from "~/env";
import { cn } from "~/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const siteUrl = new URL(`https://${env.NEXT_PUBLIC_SITE_DOMAIN}`);

export const metadata: Metadata = {
  title: {
    default: "戴氏教育高考中心总部官方网站 | 戴氏教育",
    template: "%s｜戴氏教育",
  },
  description: "戴氏教育高考全日制与升学服务官网",
  metadataBase: siteUrl,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={cn(geist.variable, "font-sans", inter.variable)} lang="zh-CN">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <div className="flex min-h-screen flex-col">
          <GlobalHeader />
          <main className="flex-1">{children}</main>
          <FloatingToolbar />
        </div>
      </body>
    </html>
  );
}
