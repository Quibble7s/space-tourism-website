import React from 'react';
import PropTypes from 'prop-types';

const NavText = ({ className = '', text = '' }) => {
  return (
    <p
      className={`text-white font-barlow text-[16px]tracking-[2.7px] ${className}`}>
      {text}
    </p>
  );
};

NavText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default NavText;
