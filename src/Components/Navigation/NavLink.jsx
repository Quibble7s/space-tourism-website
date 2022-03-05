import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

//Styles
import Styles from '../../../styles/navbar.module.css';
//Components
import NavText from '../Typography/NavText';
//Handlers
import { onNavClickHandler } from '../Typography/Handlers/NavTextHandlers';

const NavLink = ({ number = '', text = '', href = '', target = '' }) => {
  return (
    <Link href={href}>
      <a
        onClick={() => onNavClickHandler(Styles.active, number)}
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
