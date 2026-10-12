import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monorepo Web',
  description: 'Frontend Next.js du monorepo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
