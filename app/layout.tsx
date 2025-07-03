// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from './components/ClientLayoutWrapper';

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    template: '%s | Commit.Ke',
    default: 'Commit.Ke - The Source for Kenyan Developers',
  },
  description: 'The premier news and blog platform for developers in Kenya, built with Next.js.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}