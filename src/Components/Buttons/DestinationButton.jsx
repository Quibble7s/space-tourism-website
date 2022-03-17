import React from 'react';
import PropTypes from 'prop-types';

//Components
import NavText from '../Typography/NavText';

//Styles
import Styles from './Styles/destination-button.module.css';

const DestinationButton = ({
  onClick = () => null,
  selectedDestination = '',
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${Styles.button}`}
      {...rest}>
      <NavText className='tracking-[2.36px] leading-[16.8px] pointer-events-none md:text-[16px]'>
        {children}
      </NavText>
      <div
        className={`w-full min-h-[3px] mt-[8px] transition-colors pointer-events-none ${
          selectedDestination === rest.name ? Styles.active : ''
        } ${Styles.indicator}`}
      />
    </button>
  );
};

DestinationButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  selectedDestination: PropTypes.string,
};

export default DestinationButton;
