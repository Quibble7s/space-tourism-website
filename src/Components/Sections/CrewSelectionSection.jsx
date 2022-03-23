import PropTypes from 'prop-types';

//Components
import CrewSelectionButton from '../Buttons/CrewSelectionButton';

const CrewSelectionSection = ({
  selectedIndex,
  onCrewSelectionClickHandler,
}) => {
  return (
    <div className='flex flex-row gap-[16px] justify-center items-center mt-[32px] md:mt-[40px] lg:justify-start lg:mt-[120px]'>
      {[0, 1, 2, 3].map((index) => (
        <CrewSelectionButton
          key={index + '-crew'}
          onClick={onCrewSelectionClickHandler}
          id={index}
          selectedCrewButton={selectedIndex}
        />
      ))}
    </div>
  );
};

CrewSelectionSection.propTypes = {
  selectedIndex: PropTypes.number,
  onCrewSelectionClickHandler: PropTypes.func,
};

export default CrewSelectionSection;
