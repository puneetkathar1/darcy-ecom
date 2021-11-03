import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { CartProvider } from '@/hooks/use-shopping-cart';
import { Header, Footer } from '@/components/index';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Darcy Muller
        </title>
        <meta
          name="description"
          content="E-commerce store built with Next.js and Stripe checkout by Darcy Muller"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
