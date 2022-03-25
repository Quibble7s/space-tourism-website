import React from 'react';
import PropTypes from 'prop-types';
import TechnologySelectionButton from '../Buttons/TechnologySelectionButton';

const TechnologySelectionSection = ({
  selectedTech,
  onTechnologySelectionHandler,
}) => {
  return (
    <div className='flex flex-row justify-center items-center gap-[16px] mt-[34px] md:mt-[56px] lg:flex-col lg:justify-start lg:mt-[137px] lg:gap-[32px]'>
      {[0, 1, 2].map((index) => (
        <TechnologySelectionButton
          onTechnologySelectionHandler={onTechnologySelectionHandler}
          selectedTech={selectedTech}
          number={(index + 1).toString()}
          id={index}
        />
      ))}
    </div>
  );
};

TechnologySelectionSection.propTypes = {
  selectedTech: PropTypes.number,
  onTechnologySelectionHandler: PropTypes.func,
};

export default TechnologySelectionSection;
