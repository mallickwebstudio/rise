import "./globals.css";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// ✅ Import fonts
const vogue = localFont({
  src: "./fonts/vogue.ttf", // relative to this file
  variable: "--font-vogue",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// ✅ Page metadata
export const metadata = {
  title: "Rise Studios",
  description: "Professional branding and media agency",
};

// ✅ Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${vogue.variable} ${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <div className="flex-1">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
