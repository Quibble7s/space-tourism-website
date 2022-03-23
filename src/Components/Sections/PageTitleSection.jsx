import React from 'react';
import PropTypes from 'prop-types';

//Components
import Heading from '../Typography/Heading';

const PageTitleSection = ({ number = '', title = '' }) => {
  return (
    <Heading
      type={5}
      className='text-center text-[#FFF] leading-[19.2px] mt-[24px] md:text-left md:mt-[40px] md:tracking-[3.38px] md:leading-[24px] lg:mt-[76px]'>
      <span className='mr-[18px] text-white/25'>{number}</span>
      {title}
    </Heading>
  );
};

PageTitleSection.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
};

export default PageTitleSection;
