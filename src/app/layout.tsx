import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";
import { HeaderFallback } from "@/components/HeaderFallback";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All Drives",
  description: "Navigate the world, one drive at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className={`${inter.className} flex flex-col h-screen`}>
          <Suspense fallback={<HeaderFallback />}>
            <Header />
          </Suspense>
          <main className="flex-grow">{children}</main>
          <Footer />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
