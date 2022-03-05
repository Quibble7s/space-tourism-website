import React from 'react';
import PropTypes from 'prop-types';

const NavText = ({ children, className = '' }) => {
  return (
    <p
      className={`text-white font-barlow text-[16px] tracking-[2.7px] ${className}`}>
      {children}
    </p>
  );
};

NavText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default NavText;
