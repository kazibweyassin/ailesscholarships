import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Auth0Provider } from '@auth0/nextjs-auth0';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ailes scholarships",
  description: "Scholarships for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      {/* Wrap the app with Auth0Provider */}
      <Auth0Provider>
        <body className={clsx(dmSans.className, "antialiased bg-[#abb8c3]")}>
          {children}
        </body>
      </Auth0Provider>
    </html>
  );
}
