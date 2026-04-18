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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Advocate Narender Malik",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ratia",
                "addressRegion": "Haryana",
                "addressCountry": "India"
              },
              "areaServed": ["Ratia", "Fatehabad"],
              "telephone": "+91 98966 68880"
            }),
          }}
        />
         <MantineProvider>

        {children}
         </MantineProvider>
        </body>
    </html>
  );
}
