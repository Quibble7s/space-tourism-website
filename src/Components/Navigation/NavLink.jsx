import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

//Styles
import Styles from './Styles/navbar.module.css';
//Components
import NavText from '../Typography/NavText';

const NavLink = ({
  numberClass = '',
  number = '',
  text = '',
  href = '',
  active = false,
}) => {
  return (
    <Link href={href}>
      <a
        className={`flex flex-row justify-between items-center md:w-auto md:flex-col ${Styles.nav}`}>
        <NavText className='md:mt-[36px]'>
          <span className={`text-white font-bold mr-[12px] ${numberClass}`}>
            {number}
          </span>
          {text}
        </NavText>
        <div
          className={`transition-all ${Styles.idle} ${
            active ? Styles.active : ''
          }`}
          id={number}
          name='nav'
        />
      </a>
    </Link>
  );
};

NavLink.propTypes = {
  numberClass: PropTypes.string,
  number: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.bool,
};

export default NavLink;
