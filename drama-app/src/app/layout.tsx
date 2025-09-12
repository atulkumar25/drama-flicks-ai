import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DramaFlicks - Your Ultimate Drama Streaming Destination",
  description: "Discover and watch the best Asian dramas from Korea, Japan, China, Thailand and more. Stream your favorite K-dramas, J-dramas, and C-dramas all in one place.",
  keywords: "drama, k-drama, j-drama, c-drama, thai drama, asian drama, streaming, watch online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
