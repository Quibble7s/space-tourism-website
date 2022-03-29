import React from 'react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import Image from 'next/image';

//Components
import Logo from '../Logo';
import NavLink from './NavLink';
//Styles
import Styles from './Styles/nav.module.css';
//Hooks
import { useOnMobileNavbar } from '../../Hooks/Nav/useOnMobileNavbar';

const Nav = ({ currentPage = '' }) => {
  //Hooks
  const [mobileNavbarActive, onBurguerClickHandler] = useOnMobileNavbar();

  //Helper functions
  const getActiveStyle = () => {
    return mobileNavbarActive ? 'left-[calc(100%-254px)]' : 'left-full';
  };

  //Main Container device CSS classes
  const mobileContainer =
    'relative px-6 pt-6 flex flex-row justify-between items-center';
  const tabletContainer =
    'md:p-0 md:w-full md:min-h-[96px] md:pl-[39px] md:gap-[37px] md:flex-row md:items-center';
  const desktopContainer =
    'lg:flex lg:flex-row lg:justify-between lg:items-center lg:mt-[40px] lg:pl-[55px]';

  //Navlinks Container device css classes
  const mobileNav = `min-w-[254px] min-h-screen z-[5] ${
    Styles.nav
  } absolute top-0 ${getActiveStyle()} transition-all pt-[118px] pl-[32px] flex flex-col gap-[32px]`;
  const tabletNav =
    'md:relative md:left-0 md:min-w-[450px] md:min-h-[96px] md:pt-0 md:pl-[48px] md:flex md:flex-row md:gap-[37px]';
  const desktopNav = 'lg:p-0 lg:pl-[123px] lg:min-w-[830px] lg:gap-[48px]';

  return (
    <div
      className={`${mobileContainer} ${tabletContainer} ${desktopContainer}`}>
      {/*MOBILE LOGO*/}
      <Logo height={40} width={40} className='min-w-[40px] md:hidden' />

      {/*TABLET AND DESKTOP LOGO*/}
      <Logo height={48} width={48} className='hidden min-w-[48px] md:block' />
      <div
        onClick={onBurguerClickHandler}
        className='min-w-[24px] min-h-[21px] z-10 md:hidden'>
        <Image
          alt='menu'
          width={mobileNavbarActive ? 19.09 : 24}
          height={mobileNavbarActive ? 19.09 : 21}
          objectFit='contain'
          src={`/assets/shared/icon-${
            mobileNavbarActive ? 'close' : 'hamburger'
          }.svg`}
        />
      </div>
      <div className='hidden w-full flex-row relative lg:flex'>
        <span className='min-w-[473px] min-h-[1px] mx-auto bg-white/25 absolute left-[calc(100%-calc(473px-64px))] z-10'></span>
      </div>
      <nav className={`${mobileNav} ${tabletNav} ${desktopNav}`}>
        <NavLink
          numberClass='md:hidden lg:inline-block'
          number='00'
          text='HOME'
          href='/'
          active={currentPage === 'home'}
        />
        <NavLink
          numberClass='md:hidden lg:inline-block'
          number='01'
          text='DESTINATION'
          href='/destinations'
          active={currentPage === 'destination'}
        />
        <NavLink
          numberClass='md:hidden lg:inline-block'
          number='02'
          text='CREW'
          href='/crew'
          active={currentPage === 'crew'}
        />
        <NavLink
          numberClass='md:hidden lg:inline-block'
          number='03'
          text='TECHNOLOGY'
          href='/technology'
          active={currentPage === 'technology'}
        />
      </nav>
    </div>
  );
};

Nav.propTypes = {
  currentPage: PropTypes.string,
};

export default memo(Nav);
