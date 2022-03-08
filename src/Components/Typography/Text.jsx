import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className = '' }) => {
  return (
    <p
      className={`text-white font-barlow text-[15px] leading-[25px] md:leading-[28px] md:text-[16px] lg:text-[18px] ${className}`}>
      {children}
    </p>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Text;
