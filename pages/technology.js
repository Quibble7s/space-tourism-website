import React from 'react';
import Head from 'next/head';
import TechnologyPage from '../src/Components/Pages/TechnologyPage';

const Technology = () => {
  return (
    <>
      <Head>
        <title>Space Tourism Agency | Technology</title>
        <meta name='title' content='Space Tourism Agency | Technology' />
        <meta
          name='description'
          content='Check the thechnology that we use to make space travel posible!'
        />
        <meta
          name='keywords'
          content='Space,Travel,Mars,Earth,Space Travel,Planet,Moon'
        />
        <meta name='robots' content='index, follow' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />
        <meta name='author' content='Cesar Gallardo' />
        <meta
          property='og:image'
          content='/assets/shared/technology-screenshot.jpg'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TechnologyPage />
    </>
  );
};

export default Technology;
