import Head from 'next/head';
import HomePage from '../src/Components/Pages/HomePage';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Space Tourism Agency | Home</title>
        <meta name='title' content='Space Tourism Agency | Home' />
        <meta name='description' content='So, you want to travel to space?' />
        <meta
          name='keywords'
          content='Space,Travel,Mars,Earth,Space Travel,Planet,Moon'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />
        <meta name='author' content='Cesar Gallardo' />
        <meta
          property='og:image'
          content='/assets/shared/home-screenshot.jpg'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage />
    </main>
  );
}
