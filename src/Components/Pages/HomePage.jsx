import React from 'react';

//Components
import HomeAboutSection from '../Sections/HomeAboutSection';
import HomeCallToActionSection from '../Sections/HomeCallToActionSection';
import Nav from '../Navigation/Nav';

const Home = () => {
  //Page Backgrounds
  const mobile = 'bg-[url(/assets/home/background-home-mobile.jpg)]';
  const tablet = 'md:bg-[url(/assets/home/background-home-tablet.jpg)]';
  const desktop = 'lg:bg-[url(/assets/home/background-home-desktop.jpg)]';

  return (
    <div
      className={`min-h-screen relative bg-cover overflow-x-hidden ${mobile} ${tablet} ${desktop}`}>
      <Nav currentPage='home' />
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-[165px]'>
        <HomeAboutSection />
        <HomeCallToActionSection />
      </div>
    </div>
  );
};

export default Home;
