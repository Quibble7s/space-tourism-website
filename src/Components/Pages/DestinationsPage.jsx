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

  return (
    <section
      className={`w-full min-h-screen bg-cover overflow-x-hidden ${mobileContainer} ${tabletContainer} ${desktopContainer}`}>
      <Nav />
      <div className='mx-[24px] md:ml-[39px]'>
        <div>
          <Heading
            type={5}
            className='text-center text-[#FFF] leading-[19.2px] mt-[24px] md:text-left md:mt-[40px] md:tracking-[3.38px] md:leading-[24px]'>
            <span className='mr-[18px] text-white/25'>01</span> PICK YOUR
            DESTINATION
          </Heading>
          <div className='max-w-[170px] max-h-[170px] mx-auto mt-[32px] md:max-w-[300px] md:max-h-[300px] md:mt-[60px]'>
            <Image
              width={445}
              height={445}
              src={`/assets/destination/image-${selectedBody}.webp`}
            />
          </div>
        </div>
        <div className='mb-[58px]'>
          <div className='mt-[26px] flex flex-row justify-center items-center gap-[26.5px] md:mt-[53px]'>
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
            className='text-center leading-[64.18px] mt-[20px] md:mt-[32px] md:leading-[92px]'>
            {selectedBody?.toUpperCase()}
          </Heading>
          <Text className='text-center text-light-purple md:max-w-[573px] md:min-h-[84px] md:mx-auto md:mt-8px'>
            {data[0]?.description}
          </Text>
          <span className='block w-full min-h-[1px] bg-[#383B4B] mt-[32px] md:mt-[49px]' />
          <div className='flex flex-col mt-[32px] md:flex-row md:justify-center md:items-center md:gap-[11px] md:mt-[28px]'>
            <div className='md:min-w-[216px]'>
              <SubHeading
                type={2}
                className='text-light-purple leading-[16.8px] text-center tracking-[2.36px]'>
                AVG. DISTANCE
              </SubHeading>
              <SubHeading
                type={1}
                className='text-center leading-[32.09px] mt-[12px]'>
                {data[0]?.distance.toUpperCase()}
              </SubHeading>
            </div>
            <div className='md:min-w-[223px]'>
              <SubHeading
                type={2}
                className='text-light-purple leading-[16.8px] text-center tracking-[2.36px] mt-[32px] md:mt-0'>
                EST. TRAVEL TIME
              </SubHeading>
              <SubHeading
                type={1}
                className='text-center leading-[32.09px] mt-[12px]'>
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
