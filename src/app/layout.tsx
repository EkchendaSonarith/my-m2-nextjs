import type { Metadata } from "next";
import { Geist, Geist_Mono, Kantumruy_Pro } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const kantumruy = Kantumruy_Pro({ variable: "--font-kantumry-pro" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { template: "%s | M2", default: "M2" },
  keywords: [
    "Skirt For Women",
    "Trouser For Men",
    "Kid Clothes",
    "E-commerce",
    "products",
    "selling product",
  ],
  description:
    "M2 is the best platform for selling products in ecommerce modern website for Cambodian people.",
  openGraph: {
    title: "M2",
    description:
      "M2 is the best platform for selling products in ecommerce modern website for Cambodian people.",
    images: ["/M2_thumbnail.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kantumruy.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
