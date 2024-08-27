import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

// Stopped at 2024.08.28, 01:04: https://vercel.com/guides/nextjs-prisma-postgres#step-8.-add-new-post-functionality

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
