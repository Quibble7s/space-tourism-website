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
    <div
      className={`w-full min-h-screen bg-cover overflow-x-hidden ${mobileContainer} ${tabletContainer} ${desktopContainer}`}>
      <Nav />
      <div className='mx-[24px]'>
        <div>
          <Heading
            type={5}
            className='text-center text-[#FFF] leading-[19.2px] mt-[24px]'>
            <span className='mr-[18px] text-white/25'>01</span> PICK YOUR
            DESTINATION
          </Heading>
          <div className='max-w-[170px] max-h-[170px] mx-auto mt-[32px]'>
            <Image
              width={445}
              height={445}
              src={`/assets/destination/image-${selectedBody}.webp`}
            />
          </div>
        </div>
        <div className='mb-[58px]'>
          <div className='mt-[26px] flex flex-row justify-center items-center gap-[26.5px]'>
            <DestinationButton
              onClick={onDestinationClickHandler}
              selectedDestination={selectedBody}
              name='moon'>
              MOON
            </DestinationButton>
            <DestinationButton
              onClick={onDestinationClickHandler}
              selectedDestination={selectedBody}
              name='mars'>
              MARS
            </DestinationButton>
            <DestinationButton
              onClick={onDestinationClickHandler}
              selectedDestination={selectedBody}
              name='europa'>
              EUROPA
            </DestinationButton>
            <DestinationButton
              onClick={onDestinationClickHandler}
              selectedDestination={selectedBody}
              name='titan'>
              TITAN
            </DestinationButton>
          </div>
          <Heading type={2} className='text-center leading-[64.18px] mt-[20px]'>
            {selectedBody?.toUpperCase()}
          </Heading>
          <Text className='text-center text-light-purple'>
            {data[0]?.description}
          </Text>
          <span className='block w-full min-h-[1px] bg-[#383B4B] mt-[32px]' />
          <div>
            <SubHeading
              type={2}
              className='text-light-purple leading-[16.8px] text-center mt-[32px] tracking-[2.36px]'>
              AVG. DISTANCE
            </SubHeading>
            <SubHeading
              type={1}
              className='text-center leading-[32.09px] mt-[12px]'>
              {data[0]?.distance.toUpperCase()}
            </SubHeading>
          </div>
          <div>
            <SubHeading
              type={2}
              className='text-light-purple leading-[16.8px] text-center mt-[32px] tracking-[2.36px]'>
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
  );
};

export default DestinationsPage;
