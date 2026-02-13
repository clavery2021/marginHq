import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MarginHQ — Decision Intelligence for Modern Trade',
  description:
    'MarginHQ is the decision layer for modern trade — helping operators, commerce teams, and high-throughput buyers identify underpriced supply, model margin, and execute confidently across fragmented marketplaces.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}