import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './../styles/globals.css';
import { BottomNav } from '../components/BottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Droply',
  description: 'Earn crypto by completing tasks!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-blue-100 pb-16`}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
