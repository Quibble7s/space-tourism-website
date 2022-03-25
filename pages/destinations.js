import Head from 'next/head';
import React from 'react';

//Components
import DestinationsPage from '../src/Components/Pages/DestinationsPage';

const Destinations = () => {
  return (
    <>
      <Head>
        <title>Space Tourism Agency | Destinations</title>
        <meta
          name='description'
          content='These are the destinations you can visit with us!'
        />
        <meta itemProp='name' content='Space Tourism Agency | Destinations' />
        <meta
          itemProp='description'
          content='These are the destinations you can visit with us!'
        />
        <meta
          itemProp='image'
          content='/assets/shared/destinations-screenshot.jpg'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DestinationsPage />
    </>
  );
};

export default Destinations;
