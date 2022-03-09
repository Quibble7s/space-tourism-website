import React from 'react';
import PropTypes from 'prop-types';

//Components
import NavLink from './NavLink';

const NavigationBar = ({ hideNumbers = false }) => {
  return (
    <div className='min-w-[450px] min-h-[96px] bg-[#9797970A] px-[48px] backdrop-blur-[81.5485px] flex flex-row lg:p-0 lg:pl-[123px] lg:min-w-[830px] lg:gap-[48px]'>
      <NavLink hidden={hideNumbers} number='00' text='HOME' />
      <NavLink hidden={hideNumbers} number='01' text='DESTINATION' />
      <NavLink hidden={hideNumbers} number='02' text='CREW' />
      <NavLink hidden={hideNumbers} number='03' text='TECHNOLOY' />
    </div>
  );
};

NavigationBar.propTypes = {};

export default NavigationBar;
