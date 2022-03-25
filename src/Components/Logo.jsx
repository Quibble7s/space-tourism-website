import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Logo = ({ width = 0, height = 0, className = '' }) => {
  return (
    <div className={className}>
      <Image
        alt='logo'
        width={width}
        height={height}
        objectFit='contain'
        src='/assets/shared/logo.svg'
      />
    </div>
  );
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default Logo;
