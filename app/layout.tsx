import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/** 
 * Configure Poppins:
 * - You can add any weights or subsets you need.
 * - The "variable" property allows you to reference this font in CSS with
 *   `font-family: var(--font-poppins)`.
 */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // Add more weights as needed
  variable: "--font-poppins",
});

// Next.js metadata
export const metadata: Metadata = {
  title: "House of Phulkari",
  description: "Experience vibrant Phulkari embroidery in all its glory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      {/* 
        Using className={poppins.variable} on <html> 
        or <body> ensures the font is scoped properly.
      */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}