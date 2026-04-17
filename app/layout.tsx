import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Advocate Narender Malik",
  description: "Best Advocate in Ratia & Fatehabad - Criminal, Civil, Matrimonial & Revenue Lawyer",
  
  verification: {
    google: "hA6iMA7WerJS_ZCKh3lRhgX0nxHVAzp88qgIb-ShQZ8",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/scren.png",
      },
      {
        rel: "apple-touch-icon",
        url: "/scren.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <MantineProvider>

        {children}
         </MantineProvider>
        </body>
    </html>
  );
}
