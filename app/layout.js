import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ['400', '600', '700', '800'], // include 800
  subsets: ["latin"],
});


export const metadata = {
  title: "Calmerry – Online Mental Health & Therapy Platform",
  description:
    "Calmerry offers accessible, professional online therapy to help you prioritize your mental health and well-being.",
  metadataBase: new URL("https://trackz-teal.vercel.app"), // adjust if custom domain is added

  openGraph: {
    title: "Calmerry – Online Mental Health & Therapy Platform",
    description:
      "Accessible, affordable online therapy to help you take care of your mental well-being.",
    url: "https://trackz-teal.vercel.app",
    siteName: "Calmerry",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Calmerry – Online Mental Health & Therapy Platform",
    description:
      "Start your mental health journey with Calmerry's trusted, online therapy services.",
  },

  themeColor: "#f8f8f6",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
