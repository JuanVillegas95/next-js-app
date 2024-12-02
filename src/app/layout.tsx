import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" suppressHydrationWarning>
    <body suppressHydrationWarning>
      <Providers>
        {children}
      </Providers>
    </body>
  </html >
}
