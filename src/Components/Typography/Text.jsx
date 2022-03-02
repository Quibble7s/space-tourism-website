import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ className = '', text = '' }) => {
  return (
    <p
      className={`text-white font-barlow md:text-[18px] md:leading-[132%] ${className}`}>
      {text}
    </p>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Text;
