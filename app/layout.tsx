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
  title: {
    default: "مرافق التشغيل | حلول تشغيلية وإنشائية متكاملة",
    template: "%s | مرافق التشغيل",
  },
  description:
    "مرافق التشغيل - شركة سعودية متخصصة في الإنشاءات والمقاولات الكهروميكانيكية، أنظمة السباكة، وإدارة المرافق المتكاملة.",
  metadataBase: new URL("https://marafeqalbnaa.com"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "مرافق التشغيل | حلول تشغيلية وإنشائية متكاملة",
    description:
      "خدمات احترافية في الإنشاءات والأنظمة الميكانيكية والكهربائية والسباكة وإدارة المرافق لضمان كفاءة طويلة الأمد.",
    url: "https://marafeqalbnaa.com",
    siteName: "مرافق التشغيل - Marafeq Facility Operations",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/assets/logo_light_bg.jpg",
        width: 800,
        height: 600,
        alt: "شعار مرافق التشغيل Marafeq Facility Operations Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مرافق التشغيل | حلول تشغيلية وإنشائية متكاملة",
    description:
      "خدمات احترافية في الإنشاءات والأنظمة الميكانيكية والكهربائية والسباكة وإدارة المرافق.",
    images: ["/assets/logo_light_bg.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${poppins.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
