//Components
import Heading from '../Typography/Heading';

const HomeCallToActionSection = () => {
  return (
    <div className='mx-[24px] mt-[81px] md:mt-[156px] lg:m-0 lg:flex lg:flex-col lg:justify-end lg:items-end'>
      <div className='mx-auto w-full max-w-[150px] min-h-[150px] md:max-w-[242px] md:min-h-[242px] lg:max-w-[274px] lg:min-h-[274px] bg-white rounded-[50%] relative lg:mx-0'>
        <Heading
          type={4}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-blue md:leading-[36.67px]'>
          EXPLORE
        </Heading>
      </div>
    </div>
  );
};

export default HomeCallToActionSection;
