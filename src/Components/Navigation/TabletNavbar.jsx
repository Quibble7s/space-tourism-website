import React from 'react';
import Image from 'next/image';

//Components
import NavLink from './NavLink';

const TabletNavbar = ({}) => {
  return (
    <div className='w-full min-h-[96px] pl-[39px] flex-row justify-between items-center hidden md:visible md:flex lg:hidden'>
      <Image width={48} height={48} src='/assets/shared/logo.svg' />
      <div className='min-w-[450px] min-h-[96px] bg-[#9797970A] px-[48px] flex flex-row justify-between'>
        <NavLink hidden number='00' text='HOME' />
        <NavLink hidden number='01' text='DESTINATION' />
        <NavLink hidden number='02' text='CREW' />
        <NavLink hidden number='03' text='TECHNOLOY' />
      </div>
    </div>
  );
};

TabletNavbar.propTypes = {};

export default TabletNavbar;
