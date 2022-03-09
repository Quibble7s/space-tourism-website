import React from 'react';
import Image from 'next/image';

//Components
import NavLink from './NavLink';
import NavigationBar from './NavigationBar';

const TabletNavbar = ({}) => {
  return (
    <div className='w-full min-h-[96px] pl-[39px] flex-row justify-between items-center hidden md:visible md:flex lg:hidden'>
      <Image width={48} height={48} src='/assets/shared/logo.svg' />
      <NavigationBar hideNumbers={true} />
    </div>
  );
};

TabletNavbar.propTypes = {};

export default TabletNavbar;
