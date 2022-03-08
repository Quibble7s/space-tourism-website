import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

//Styles
import Styles from '../../../styles/navbar.module.css';
//Components
import NavText from '../Typography/NavText';
//Handlers
import { onNavClickHandler } from './Handlers/NavLinkHandlers';

const NavLink = ({ hidden = false, number = '', text = '', href = '' }) => {
  return (
    <Link href={href}>
      <a
        onClick={() => onNavClickHandler(Styles.active, number)}
        className={`flex flex-row justify-between items-center md:w-auto md:flex-col ${Styles.nav}`}>
        <NavText className='md:mt-[39px]'>
          <span
            className={`text-white font-bold mr-[11px] ${
              hidden ? 'hidden' : ''
            }`}>
            {number}
          </span>
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
  hidden: PropTypes.bool,
  number: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};

export default NavLink;
