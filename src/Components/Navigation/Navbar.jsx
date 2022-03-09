import React from 'react';
import PropTypes from 'prop-types';

//Components
import MobileNavbar from './MobileNavbar';
import NavbarImages from './MobileNavbarImages';
import TabletNavbar from './TabletNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar = ({ setNavbarActive = () => null, navbarActive = false }) => {
  return (
    <>
      {/*MOBILE*/}
      <MobileNavbar isActive={navbarActive} />
      <NavbarImages
        setNavbarActive={setNavbarActive}
        navbarActive={navbarActive}
      />
      {/*TABLET*/}
      <TabletNavbar />
      {/*DESKTOP*/}
      <DesktopNavbar />
    </>
  );
};

Navbar.propTypes = {
  setNavbarActive: PropTypes.func,
  navbarActive: PropTypes.bool,
};

export default Navbar;
