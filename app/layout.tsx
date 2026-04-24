import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { AnimatedBackdrop } from "@/components/animated-backdrop";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Al Hanafiyyah | Hanafi Athari Institute",
  description:
    "A routed Hanafi Athari institute site with books, scholars, and a Qirtaas-inspired admin editor workspace.",
  icons: {
    icon: "/hanafii.png",
    apple: "/hanafii.png",
  },
};

const themeScript = `
  (function () {
    try {
      var stored = window.localStorage.getItem("theme");
      var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var theme = stored || (systemDark ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "light";
      document.documentElement.style.colorScheme = "light";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <div className="relative min-h-screen overflow-x-clip">
          <AnimatedBackdrop />
          <SiteHeader />
          <main className="relative z-10 pt-28">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
