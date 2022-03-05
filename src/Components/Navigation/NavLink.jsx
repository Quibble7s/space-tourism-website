import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

//Styles
import Styles from '../../../styles/navbar.module.css';
//Components
import NavText from '../Typography/NavText';

const NavLink = ({ number = '', text = '', href = '', target = '' }) => {
  const onNavClickHandler = () => {
    const navs = document.getElementsByName('nav');
    for (let i = 0; i < navs.length; i++) {
      const nav = navs[i];
      if (!nav.classList.contains(Styles.active) && nav.id == number) {
        nav.classList.add(Styles.active);
      } else {
        nav.classList.remove(Styles.active);
      }
    }
  };
  return (
    <Link href={href}>
      <a
        onClick={onNavClickHandler}
        className={`flex flex-row justify-between items-center ${Styles.nav}`}>
        <NavText>
          <span className='text-white font-bold mr-[11px]'>{number}</span>
          {text}
        </NavText>
        <div
          className={`transition-all ${Styles.idle}`}
          id={number}
          name='nav'
        />
      </a>
    </Link>
  );
};

NavLink.propTypes = {
  number: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default NavLink;
