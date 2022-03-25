import React from 'react';
import Head from 'next/head';
import CrewPage from '../src/Components/Pages/CrewPage';

const Crew = () => {
  return (
    <>
      <Head>
        <title>Space Tourism Agency | Crew</title>
        <meta
          name='description'
          content='This is the crew that will accompany you throughout your trip!'
        />
        <meta itemprop='name' content='Space Tourism Agency | Crew' />
        <meta
          itemprop='description'
          content='This is the crew that will accompany you throughout your trip!'
        />
        <meta itemprop='image' content='/assets/shared/crew-screenshot.jpg' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CrewPage />
    </>
  );
};

export default Crew;
