import React from 'react';
import Head from 'next/head';
import TechnologyPage from '../src/Components/Pages/TechnologyPage';

const Technology = () => {
  return (
    <>
      <Head>
        <title>Space Tourism Agency | Technology</title>
        <meta
          name='description'
          content='Check the thechnology that we use to make space travel posible!'
        />
        <meta itemProp='name' content='Space Tourism Agency | Technology' />
        <meta
          itemProp='description'
          content='Check the thechnology that we use to make space travel posible!'
        />
        <meta
          itemProp='image'
          content='/assets/shared/technology-screenshot.jpg'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TechnologyPage />
    </>
  );
};

export default Technology;
