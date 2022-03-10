import { useState } from 'react';

export const useOnMobileNavbar = () => {
  const [mobileNavbarActive, setMobileNavbarActive] = useState(false);
  const onBurguerClickHandler = () => {
    setMobileNavbarActive(!mobileNavbarActive);
  };

  return [mobileNavbarActive, onBurguerClickHandler];
};
