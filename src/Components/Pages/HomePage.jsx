import React, { useState } from 'react';
import Image from 'next/image';

//Components
import Heading from '../Typography/Heading';
import Text from '../Typography/Text';
import MobileNavbar from '../Navigation/MobileNavbar';

const Home = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  return (
    <div
      className='w-full min-h-screen relative 
    bg-no-repeat bg-[url(/assets/home/background-home-mobile.jpg)] 
    md:bg-[url(/assets/home/background-home-tablet.jpg)] 
    lg:bg-[url(/assets/home/background-home-desktop.jpg)]
    bg-cover overflow-x-hidden'>
      <MobileNavbar isActive={navbarActive} />
      <div className='px-[24px] pt-[24px] flex flex-row justify-between items-center'>
        <Image
          className='z-10'
          width={40}
          height={40}
          src='/assets/shared/logo.svg'
        />
        <button
          onClick={() => {
            setNavbarActive(!navbarActive);
          }}>
          <Image
            className='z-10'
            width={24}
            height={21}
            src={`/assets/shared/icon-${
              navbarActive ? 'close' : 'hamburger'
            }.svg`}
          />
        </button>
      </div>
      <section className='mx-[24px] mt-[48px]'>
        <Heading type={5} className='uppercase text-center'>
          So, you want to travel to
        </Heading>
        <Heading className='mt-4 text-center'>SPACE</Heading>
        <Text className='mt-4 text-center text-lightPurple'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text>
      </section>
      <div className='mx-[24px] mt-[81px]'>
        <div className='mx-auto w-full max-w-[150px] min-h-[150px] bg-white rounded-[50%] relative'>
          <Heading
            type={4}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-blue'>
            EXPLORE
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default Home;
