import React from 'react';
import './Intro.css';
import dhoniImage from '../../assets/images/Dhoni with ball-Neuberg.png';


const Intro = () => {
  return (
    <div className='intro'>
      <div className='left-flex'>
        <h1><span className='orange-title'>BOOK YOUR </span><span className='violet-title'> HEALTH CHECKS</span></h1>
        <button className='orange-button' > 9700 36 9700 </button >
        <button className='violet-button' > Get in Touch </button>
      </div>
      <div className='right-flex'>
        <img className="dhoni-intro-image" src={dhoniImage} alt="dhoni-image" />
      </div>
    </div>

  );
};

export default Intro;
