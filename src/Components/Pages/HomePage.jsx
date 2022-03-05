import React, { useState } from 'react';

//Components
import Navbar from '../Navigation/Navbar';
import AboutSection from '../Sections/AboutSection';
import HomeCallToActionSection from '../Sections/HomeCallToActionSection';

const Home = () => {
  //States
  const [navbarActive, setNavbarActive] = useState(false);

  //Page Backgrounds
  const mobile = 'bg-[url(/assets/home/background-home-mobile.jpg)]';
  const tablet = 'md:bg-[url(/assets/home/background-home-tablet.jpg)]';
  const desktop = 'lg:bg-[url(/assets/home/background-home-desktop.jpg)]';

  return (
    <div
      className={`w-full min-h-screen relative bg-cover overflow-x-hidden ${mobile} ${tablet} ${desktop}`}>
      <Navbar navbarActive={navbarActive} setNavbarActive={setNavbarActive} />
      <AboutSection />
      <HomeCallToActionSection />
    </div>
  );
};

export default Home;
