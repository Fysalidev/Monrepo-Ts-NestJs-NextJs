import { fetchHello } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const hello = await fetchHello();
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Monorepo Next.js + NestJS</h1>
      {hello ? (
        <p>
          Message de l&apos;API : <strong>{hello.message}</strong>
        </p>
      ) : (
        <p>API indisponible sur {process.env.API_BASE_URL ?? 'http://localhost:3001'}</p>
      )}
    </main>
  );
}
