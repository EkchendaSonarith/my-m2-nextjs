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
  metadataBase: new URL('https://my-m2-nextjs-rxg9.vercel.app'), // Replace with your actual domain
  title: 'My Next.js App',
  description: 'App description',
  openGraph: {
    title: 'My Next.js App',
    description: 'App description',
    images: ['/M2_thumbnail.jpg'], // Located in public/og-image.png
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
