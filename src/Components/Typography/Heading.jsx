import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children, type = 1, className = '' }) => {
  switch (type) {
    case 1:
      return (
        <h1
          className={`font-bellefair text-[80px] md:text-[150px] text-white ${className}`}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={`font-bellefair text-[56px] md:text-[100px] text-white ${className}`}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={`font-bellefair text-[80px] md:text-[56px] text-white ${className}`}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          className={`font-bellefair text-[20px] md:text-[32px] md:tracking-[2px] text-white ${className}`}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          className={`font-barlow text-[16px] tracking-[2.7px] md:tracking-[3.38px] md:text-[20px] lg:text-[28px] text-light-purple ${className}`}>
          {children}
        </h5>
      );
    default:
      return (
        <h1
          className={`font-bellefair text-[80px] md:text-[150px] text-white ${className}`}>
          {children}
        </h1>
      );
  }
};

Heading.propTypes = {
  type: PropTypes.number,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Heading;
