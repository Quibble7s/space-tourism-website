import Head from 'next/head';
import HomePage from '../src/Components/Pages/HomePage';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Space Tourism Agency | Home</title>
        <meta name='description' content='So, you want to travel to space?' />
        <meta itemprop='name' content='Space Tourism Agency | Home' />
        <meta
          itemprop='description'
          content='So, you want to travel to space?'
        />
        <meta itemprop='image' content='/assets/shared/home-screenshot.jpg' />
      </Head>
      <HomePage />
    </main>
  );
}
