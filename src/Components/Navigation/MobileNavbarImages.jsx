import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const NavbarImages = ({
  setNavbarActive = () => null,
  navbarActive = false,
}) => {
  return (
    <div className='px-[24px] pt-[24px] flex flex-row justify-between items-center md:hidden'>
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
        <div
          className={`md:hidden ${
            navbarActive ? 'w-[19.09px] h-[19.09px]' : ''
          }`}>
          <Image
            className='z-10'
            width={24}
            height={21}
            objectFit='cover'
            src={`/assets/shared/icon-${
              navbarActive ? 'close' : 'hamburger'
            }.svg`}
          />
        </div>
      </button>
    </div>
  );
};

NavbarImages.propTypes = {
  setNavbarActive: PropTypes.func,
  navbarActive: PropTypes.bool,
};

export default NavbarImages;
