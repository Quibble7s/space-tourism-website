import React from 'react';
import PropTypes from 'prop-types';

const SubHeading = ({ text = '', type = 1, className = '' }) => {
  switch (type) {
    case 1:
      return (
        <p className={`font-bellefair text-white md:text-[28px] ${className}`}>
          {text}
        </p>
      );
    case 2:
      return (
        <p
          className={`font-barlow text-white md:text-[14px] md:tracking-[2.35px] ${className}`}>
          {text}
        </p>
      );
    default:
      return (
        <p className={`font-bellefair text-white md:text-[28px] ${className}`}>
          {text}
        </p>
      );
  }
};

SubHeading.propTypes = {
  text: PropTypes.string,
  type: PropTypes.number,
  className: PropTypes.string,
};

export default SubHeading;
