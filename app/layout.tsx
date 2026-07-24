import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Farming Tech & Business | Powered by AI",
  description: "Africa's largest Agriculture Knowledge Platform. Learn crops, animals, and agribusiness with AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
