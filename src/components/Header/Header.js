import React from 'react';
import neubergLogo from '../../assets/images/Neuberg_Pulse-01.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div >
      <img className='left-header' src={neubergLogo} alt="Neuberg Pulse Logo" />
      </div>
    </header>
  );
};

export default Header;
