import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { content } from '@/data/content';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'; // TODO: Set deployed URL on Vercel.
const pageTitle = `${content.brand} | Senior Front-End Developer`;
const description = 'Ali Ayoub is a Senior Front-End Developer in Karachi, Pakistan specializing in Next.js, React, WordPress, WooCommerce, Shopify Liquid, custom integrations and responsive e-commerce development.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description,
  keywords: ['Ali Ayoub', 'Senior Front-End Developer', 'Next.js', 'React', 'Shopify Liquid', 'WordPress', 'WooCommerce', 'Karachi'],
  openGraph: { title: pageTitle, description, type: 'website', images: ['/opengraph-image'] },
  twitter: { card: 'summary_large_image', title: pageTitle, description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0C0B10' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
