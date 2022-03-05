import React from 'react';
import PropTypes from 'prop-types';

//Components
import MobileNavbar from './MobileNavbar';
import NavbarImages from './NavbarImages';

const Navbar = ({ setNavbarActive = () => null, navbarActive = false }) => {
  return (
    <>
      <MobileNavbar isActive={navbarActive} />
      <NavbarImages
        setNavbarActive={setNavbarActive}
        navbarActive={navbarActive}
      />
    </>
  );
};

Navbar.propTypes = {
  setNavbarActive: PropTypes.func,
  navbarActive: PropTypes.bool,
};

export default Navbar;
