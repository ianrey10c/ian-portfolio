import type { Metadata } from "next";
import { DM_Mono, Fraunces, Hanken_Grotesk } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { MotionProvider } from "@/components/motion/motion-provider";
import { Navbar } from "@/components/site/navbar";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Ian Rey Cordova · Virtual Assistant & Web Specialist",
    template: "%s · Ian Rey Cordova",
  },
  description:
    "Ian Rey Cordova is a virtual assistant and web-focused digital specialist building WordPress sites, GoHighLevel funnels, email automations, and AI-powered content.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${fraunces.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
