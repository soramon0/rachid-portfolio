import type { PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cn } from '@/lib/utils';
import './globals.css';

const cooperStd = localFont({
  variable: '--font-display',
  display: 'swap',
  src: '../../public/fonts/CooperBlackStd.otf',
  preload: true,
});

const josefinSans = localFont({
  variable: '--font-body',
  display: 'swap',
  src: '../../public/fonts/JosefinSans-VariableFont_wght.ttf',
});

export const metadata: Metadata = {
  title: 'Rachid - Graphic Designer',
  description: 'Crafting dreams pixel by pixel',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#29255A',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={cn(cooperStd.variable, josefinSans.variable, 'min-h-full')}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
