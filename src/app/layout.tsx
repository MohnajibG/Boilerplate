import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Spinner } from "../components/ui/spinner";
import { cn } from "../lib/utils";
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mon Site Next",
  description: "Squelette Next.js + Tailwind avec Header et Footer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <body
        suppressHydrationWarning
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "flex flex-col min-h-screen h-full"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Spinner />
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
