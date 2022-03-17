import Router from 'next/router';

//Components
import Heading from '../Typography/Heading';

//Styles
import Styles from './Styles/home-call-to-action.module.css';

const HomeCallToActionSection = () => {
  return (
    <div
      className={`mx-[24px] mt-[81px] md:mt-[156px] lg:m-0 lg:flex lg:flex-col lg:justify-end lg:items-end`}>
      <div
        onClick={() => {
          Router.push('/destination');
        }}
        className={`${Styles.action} z-[2] relative cursor-pointer mx-auto w-full max-w-[150px] min-h-[150px] md:max-w-[242px] md:min-h-[242px] lg:max-w-[274px] lg:min-h-[274px] bg-white rounded-[50%] lg:mx-0`}>
        <Heading
          type={4}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-blue md:leading-[36.67px]'>
          EXPLORE
        </Heading>
        <div
          className={`${Styles.hover} hidden z-[1] bg-white/10 rounded-[50%] absolute -top-1/2 -left-1/2 lg:min-w-[450px] lg:min-h-[450px] lg:block`}></div>
      </div>
    </div>
  );
};

export default HomeCallToActionSection;
