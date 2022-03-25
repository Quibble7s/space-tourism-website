import Head from 'next/head';
import React from 'react';

//Components
import DestinationsPage from '../src/Components/Pages/DestinationsPage';

const Destinations = () => {
  return (
    <>
      <Head>
        <title>Space Tourism Agency | Destinations</title>
        <meta name='title' content='Space Tourism Agency | Destinations' />
        <meta
          name='description'
          content='These are the destinations you can visit with us!'
        />
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
          content='/assets/shared/destinations-screenshot.jpg'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DestinationsPage />
    </>
  );
};

export default Destinations;
