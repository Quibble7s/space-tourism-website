import React from 'react';
import PropTypes from 'prop-types';

const SubHeading = ({ type = 1, className = '' }) => {
  switch (type) {
    case 1:
      return (
        <p className={`font-bellefair text-white md:text-[28px] ${className}`}>
          {children}
        </p>
      );
    case 2:
      return (
        <p
          className={`font-barlow text-white md:text-[14px] md:tracking-[2.35px] ${className}`}>
          {children}
        </p>
      );
    default:
      return (
        <p className={`font-bellefair text-white md:text-[28px] ${className}`}>
          {children}
        </p>
      );
  }
};

SubHeading.propTypes = {
  children: PropTypes.string,
  type: PropTypes.number,
  className: PropTypes.string,
};

export default SubHeading;
