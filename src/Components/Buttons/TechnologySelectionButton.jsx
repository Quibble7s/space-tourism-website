import React from 'react';
import PropTypes from 'prop-types';

//Styles
import Styles from './Styles/technology-selection-button.module.css';

const TechnologySelectionButton = ({
  selectedTech,
  number,
  id,
  onTechnologySelectionHandler,
}) => {
  return (
    <button
      onClick={onTechnologySelectionHandler}
      id={id}
      className={`min-w-[40px] min-h-[40px] font-bellefair text-[16px] rounded-[50%] transition-colors duration-200 ${
        Styles.idle
      } ${selectedTech === id ? Styles.active : ''}
      md:min-w-[58px] md:min-h-[58px] md:text-[24px] md:tracking-[1.5px] md:leading-[27.5px] 
      lg:min-w-[80px] lg:min-h-[80px] lg:text-[32px] lg:tracking-[2px] lg:leading-[36.67px]`}>
      {number}
    </button>
  );
};

TechnologySelectionButton.propTypes = {
  selectedTech: PropTypes.number,
  number: PropTypes.string,
  id: PropTypes.number,
  onTechnologySelectionHandler: PropTypes.func,
};

export default TechnologySelectionButton;
