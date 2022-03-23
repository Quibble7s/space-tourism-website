import React from 'react';
import PropTypes from 'prop-types';

//Styles
import Styles from './Styles/crew-selection-button.module.css';

const CrewSelectionButton = ({ selectedCrewButton, onClick, id }) => {
  return (
    <button
      className={`w-[10px] h-[10px] rounded-[50%] transition-all ${
        Styles.idle
      } ${selectedCrewButton === id ? Styles.active : ''}`}
      onClick={onClick}
      id={id}
    />
  );
};

CrewSelectionButton.propTypes = {
  selectedCrewButton: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

export default CrewSelectionButton;
