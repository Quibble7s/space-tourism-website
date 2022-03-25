import React from 'react';
import Head from 'next/head';
import CrewPage from '../src/Components/Pages/CrewPage';

const Crew = () => {
  return (
    <>
      <Head>
        <title>Space Tourism Agency | Crew</title>
        <meta name='title' content='Space Tourism Agency | Crew' />
        <meta
          name='description'
          content='This is the crew that will accompany you throughout your trip!'
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
          content='/assets/shared/crew-screenshot.jpg'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CrewPage />
    </>
  );
};

export default Crew;
