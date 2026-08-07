import type { Metadata } from "next";
import { Cairo, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Marafeq Al-Banaa | Integrated Construction & Facility Solutions",
  description:
    "Marafeq Al-Banaa company website for construction, mechanical and electrical contracting, plumbing systems, and integrated facility management services in KSA.",
  metadataBase: new URL("https://marafeqalbnaa.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
