import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Lizon IELTS Hub',
    template: '%s | Lizon IELTS Hub',
  },
  description: 'Master IELTS with Lizon Education. Your gateway to achieving your desired score.',
  keywords: ['IELTS', 'Lizon Education', 'IELTS training', 'English test', 'study abroad'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="yFGdP65i916oCwom1sHrhTkBfRrIvS040hjnfiFm_6Y" />
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground min-h-screen flex flex-col lg:px-20')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
