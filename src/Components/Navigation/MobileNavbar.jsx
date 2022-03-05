import React from 'react';
import PropTypes from 'prop-types';

//Components
import MobileNavbarStyles from '../../../styles/navbar.module.css';
//Styles
import NavLink from './NavLink';

const MobileNavbar = ({ isActive = false }) => {
  return (
    <div
      className={`absolute min-h-full min-w-[254px] bg-[#FFFFFF0A] z-[5] left-${
        isActive ? '[121px]' : 'full'
      } transition-all md:hidden ${MobileNavbarStyles.mobileNavBg}`}>
      <div className='mt-[118px] ml-8 flex flex-col gap-8'>
        <NavLink href='/' number='00' text='HOME' />
        <NavLink href='/' number='01' text='DESTINATION' />
        <NavLink href='/' number='02' text='CREW' />
        <NavLink href='/' number='03' text='TECHNOLOGY' />
      </div>
    </div>
  );
};

MobileNavbar.propTypes = {
  isActive: PropTypes.bool,
};

export default MobileNavbar;
