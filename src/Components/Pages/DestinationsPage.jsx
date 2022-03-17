import React, { useState } from 'react';
import Image from 'next/image';

//Components
import Nav from '../Navigation/Nav';
import Heading from '../Typography/Heading';
import Text from '../Typography/Text';
import SubHeading from '../Typography/SubHeading';

//Data
import destinationData from '../../Data/data.json';
import DestinationButton from '../Buttons/DestinationButton';

const DestinationsPage = () => {
  //Destinations
  const destinations = ['moon', 'mars', 'europa', 'titan'];

  //Hooks
  const [selectedBody, setSelectedBody] = useState('moon');
  const data = destinationData.destinations.filter(
    (val) => val.name.toLowerCase() === selectedBody,
  );

  //Main Container Backgrounds
  const mobileContainer =
    ' bg-[url("/assets/destination/background-destination-mobile.jpg")]';
  const tabletContainer =
    ' md:bg-[url("/assets/destination/background-destination-tablet.jpg")]';
  const desktopContainer =
    ' md:bg-[url("/assets/destination/background-destination-desktop.jpg")]';

  const onDestinationClickHandler = (e) => {
    setSelectedBody(e.target.name);
  };

  //Helpers
  const fadeInOnLoad = (e) => {
    e.target.classList.remove('opacity-0');
  };

  return (
    <section
      className={`w-full min-h-screen bg-cover overflow-x-hidden ${mobileContainer} ${tabletContainer} ${desktopContainer}`}>
      <Nav currentPage='destination' />
      <div className='mx-[24px] md:ml-[39px] lg:ml-[166.5px] lg:grid lg:grid-cols-2'>
        <div>
          <Heading
            type={5}
            className='text-center text-[#FFF] leading-[19.2px] mt-[24px] md:text-left md:mt-[40px] md:tracking-[3.38px] md:leading-[24px] lg:mt-[76px]'>
            <span className='mr-[18px] text-white/25'>01</span> PICK YOUR
            DESTINATION
          </Heading>
          <div className='max-w-[170px] max-h-[170px] mx-auto mt-[32px] md:max-w-[300px] md:max-h-[300px] md:mt-[60px] lg:mt-[97px] lg:max-w-[445px] lg:max-h-[445px] lg:mx-0 lg:ml-[63.5px]'>
            <Image
              className='transition-opacity duration-200 opacity-0'
              onLoad={fadeInOnLoad}
              width={445}
              height={445}
              src={`/assets/destination/image-${selectedBody}.webp`}
            />
          </div>
        </div>
        <div className='mb-[58px] lg:m-0 lg:max-w-[445px]'>
          <div className='mt-[26px] flex flex-row justify-center items-center gap-[26.5px] md:mt-[53px] lg:mt-[174px] lg:justify-start'>
            {destinations.map((destination) => (
              <DestinationButton
                onClick={onDestinationClickHandler}
                selectedDestination={selectedBody}
                name={destination}>
                {destination.toUpperCase()}
              </DestinationButton>
            ))}
          </div>
          <Heading
            type={2}
            className='text-center leading-[64.18px] mt-[20px] md:mt-[32px] md:leading-[92px] lg:text-left lg:leading-[114.6px] lg:mt-[37px]'>
            {selectedBody?.toUpperCase()}
          </Heading>
          <Text className='text-center text-light-purple min-h-[125px] md:max-w-[573px] md:min-h-[84px] md:mx-auto md:mt-[8px] lg:mt-[14px] lg:min-h-[128px] lg:text-left'>
            {data[0]?.description}
          </Text>
          <span className='block w-full min-h-[1px] bg-[#383B4B] mt-[32px] md:mt-[49px] lg:mt-[54px]' />
          <div className='flex flex-col mt-[32px] md:flex-row md:justify-center md:items-center md:gap-[11px] md:mt-[28px] lg:justify-start'>
            <div className='md:min-w-[216px]'>
              <SubHeading
                type={2}
                className='text-light-purple leading-[16.8px] text-center tracking-[2.36px] lg:text-left'>
                AVG. DISTANCE
              </SubHeading>
              <SubHeading
                type={1}
                className='text-center leading-[32.09px] mt-[12px] lg:text-left'>
                {data[0]?.distance.toUpperCase()}
              </SubHeading>
            </div>
            <div className='md:min-w-[223px]'>
              <SubHeading
                type={2}
                className='text-light-purple leading-[16.8px] text-center tracking-[2.36px] mt-[32px] md:mt-0 lg:text-left'>
                EST. TRAVEL TIME
              </SubHeading>
              <SubHeading
                type={1}
                className='text-center leading-[32.09px] mt-[12px] lg:text-left'>
                {data[0]?.travel.toUpperCase()}
              </SubHeading>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
