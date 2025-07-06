import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const raleway = localFont({
  src: [
    { path: "/fonts/Raleway-Light.ttf", weight: "200", style: "normal" },
    { path: "/fonts/Raleway-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/Raleway-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/Raleway-SemiBold.ttf", weight: "600", style: "normal" },
  ]
})

export const metadata: Metadata = {
  title: "Clean Pigg AI Lab",
  description: "AI Auditing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${raleway.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {/* <Navbar /> */}
          <main>{children}</main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
