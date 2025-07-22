
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header'; // Corrected relative path
import Footer from './components/Footer'; // Corrected relative path

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wakana WhiteOWL - Ancient Wisdom for Modern Healing',
  description: 'Descended from a long line of indigenous medicine people and Appalachian folk healers, Wakana WhiteOWL is a multidisciplinary shaman and ayahuasquera.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white font-sans text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}