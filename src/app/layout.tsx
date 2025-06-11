import './globals.css';
import Providers from './providers';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'iSearch', description: 'Enterprise Gen-AI Document Search' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
