import React, { useContext, useState } from 'react';
import Image from 'next/image';

//Components
import Nav from '../Navigation/Nav';
import PageTitleSection from '../Sections/PageTitleSection';
import TechnologySelectionSection from '../Sections/TechnologySelectionSection';
import Heading from '../Typography/Heading';
import Text from '../Typography/Text';

//Context
import { DataContext } from '../../Contexts/DataContex';

const TechnologyPage = () => {
  //Hooks
  const [selectedTechnology, setSelectedTechnology] = useState(0);

  //Data
  const data = useContext(DataContext).technology;

  //Page Backgrounds
  const mobileBackground =
    'bg-[url(/assets/technology/background-technology-mobile.jpg)]';
  const tabletBackground =
    'bg-[url(/assets/technology/background-technology-tablet.jpg)]';
  const desktopBackground =
    'bg-[url(/assets/technology/background-technology-desktop.jpg)]';

  //Handlers
  const onTechnologySelectionHandler = (e) => {
    setSelectedTechnology(parseInt(e.target.id));
  };
  return (
    <section
      className={`w-full min-h-screen overflow-x-hidden bg-cover ${mobileBackground} ${tabletBackground} ${desktopBackground}`}>
      <Nav currentPage='technology' />
      <div className='md:ml-[39px] lg:ml-[166.5px]'>
        <PageTitleSection number='03' title='SPACE LAUNCH 101' />
      </div>
      <div className='flex flex-col-reverse lg:grid lg:grid-cols-3'>
        <div className='flex flex-col mx-[24px] md:mx-0 lg:flex-row lg:pl-[165px] lg:col-span-2'>
          <TechnologySelectionSection
            selectedTech={selectedTechnology}
            onTechnologySelectionHandler={onTechnologySelectionHandler}
          />
          <article className='w-full lg:ml-[80px]'>
            <h1
              className='text-[14px] tracking-[2.36px] font-barlow text-center text-light-purple mt-[26px]
            md:text-[16px] md:tracking-[2.7px]
            lg:text-left lg:mt-[137px]'>
              THE TERMINOLOGY…
            </h1>
            <Heading
              type={3}
              className='text-center text-[24px] mt-[8px] md:text-[40px] md:mt-[16px] lg:text-left lg:mt-[11px]'>
              {data[selectedTechnology].name.toUpperCase()}
            </Heading>
            <Text className='text-light-purple text-center mt-[16px] min-h-[175px] md:mx-auto md:max-w-[458px] md:min-h-[175px] lg:text-left lg:mx-0 lg:max-w-[444px] lg:min-h-[192px]'>
              {data[selectedTechnology].description}
            </Text>
          </article>
        </div>
        <div className='mt-[32px] min-w-full md:mt-[60px] lg:hidden'>
          <div className='flex flex-row justify-center'>
            <Image
              src={data[selectedTechnology].images.landscape.replace('.', '')}
              width={768}
              height={309}
              objectFit='cover'
            />
          </div>
        </div>
        <div className='hidden mt-[36px] text-right lg:inline-block lg:min-w-[515px]'>
          <Image
            src={data[selectedTechnology].images.portrait.replace('.', '')}
            width={515}
            height={527}
            objectFit='contain'
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyPage;
