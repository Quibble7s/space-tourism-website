import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Bellefair&display=swap'
          rel='stylesheet'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap'
          rel='stylesheet'></link>
      </Head>
      <body className='bg-darkBlue overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
