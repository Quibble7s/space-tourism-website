import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ className = '' }) => {
  return (
    <p
      className={`text-white font-barlow md:text-[18px] md:leading-[132%] ${className}`}>
      {children}
    </p>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Text;
