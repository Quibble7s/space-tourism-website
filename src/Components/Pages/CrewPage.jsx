import Image from 'next/image';
import React, { useContext, useState } from 'react';

//Components
import Nav from '../Navigation/Nav';
import CrewSelectionSection from '../Sections/CrewSelectionSection';
import PageTitleSection from '../Sections/PageTitleSection';
import Text from '../Typography/Text';
import Heading from '../Typography/Heading';

//Data
import { DataContext } from '../../Contexts/DataContex';
import { crewImageSizes } from '../../Data/CrewImageSizes';

const CrewPage = () => {
  //Data
  const data = useContext(DataContext).crew;

  //Hooks
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onCrewSelectionClickHandler = (e) => {
    setSelectedIndex(parseInt(e.target.id));
  };

  //Crew Page Backgrounds
  const mobileBackground = 'bg-[url(/assets/crew/background-crew-mobile.jpg)]';
  const tabletBackground = 'bg-[url(/assets/crew/background-crew-tablet.jpg)]';
  const desktopBackground =
    'bg-[url(/assets/crew/background-crew-desktop.jpg)]';

  return (
    <section
      className={`w-full min-h-screen overflow-x-hidden ${mobileBackground} ${tabletBackground} ${desktopBackground} bg-cover`}>
      <Nav currentPage='crew' />
      <div className='mx-[24px] md:mx-[39px] lg:mx-[166.5px]'>
        <PageTitleSection number='02' title='MEET YOUR CREW' />
        <div className='flex flex-col-reverse mt-[32px] justify-center md:flex-col lg:grid lg:grid-cols-3 lg:min-h-full'>
          <div className='flex flex-col md:flex-col-reverse lg:justify-end lg:col-span-2'>
            <CrewSelectionSection
              selectedIndex={selectedIndex}
              onCrewSelectionClickHandler={onCrewSelectionClickHandler}
            />
            <article>
              <Heading
                type={4}
                className='text-center opacity-50 text-white mt-[32px] text-[16px] leading-[18.34px] md:text-[24px] md:leading-[27.5px] lg:leading-[36.67px] lg:mt-[154px] lg:text-left'>
                {data[selectedIndex].role.toUpperCase()}
              </Heading>
              <Heading
                type={3}
                className='text-center mt-[8px] text-[24px] leading-[27.5px] md:text-[40px] md:leading-[45.84px] lg:leading-[64.18px] lg:text-left'>
                {data[selectedIndex].name.toUpperCase()}
              </Heading>
              <Text className='text-center text-light-purple min-h-[100px] mt-[16px] md:max-w-[458px] md:mx-auto md:min-h-[112px] lg:text-left lg:mx-0 lg:max-w-[444px]'>
                {data[selectedIndex].bio}
              </Text>
            </article>
          </div>
          <div className='min-h-[224px] flex flex-col justify-end md:min-h-[533px] md:mt-[40px] lg:min-h-full lg:mt-0'>
            <div className=''>
              <div
                className={`${crewImageSizes.mobile[selectedIndex][0]} ${crewImageSizes.mobile[selectedIndex][1]} ${crewImageSizes.tablet[selectedIndex][0]} ${crewImageSizes.tablet[selectedIndex][1]} ${crewImageSizes.desktop[selectedIndex][0]} ${crewImageSizes.desktop[selectedIndex][1]} mx-auto flex flex-col justify-items-end transition-all lg:absolute lg:bottom-0 lg:left-[50%]`}>
                <Image
                  alt=''
                  width={568.07}
                  height={712}
                  objectFit='contain'
                  src={data[selectedIndex].images.webp.replace('.', '')}
                />
              </div>
            </div>
            <div className='w-full min-h-[1px] bg-[#383B4B] md:hidden' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewPage;
