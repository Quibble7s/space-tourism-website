import React from 'react';
import Image from 'next/image';

//Components
import NavigationBar from './NavigationBar';

const DesktopNavbar = () => {
  return (
    <div className='hidden w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:mt-[40px] lg:pl-[55px]'>
      <div className='min-w-[48px]'>
        <Image
          width={48}
          height={48}
          src='/assets/shared/logo.svg'
          objectFit='contain'
        />
      </div>
      <div className='w-full flex flex-row relative'>
        <span className='min-w-[473px] min-h-[1px] mx-auto bg-white/25 absolute left-[calc(100%-calc(473px-27px))] z-10'></span>
      </div>
      <NavigationBar />
    </div>
  );
};

export default DesktopNavbar;
