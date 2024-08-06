import React from 'react';
import './Intro.css';
import dhoniImage from '../../assets/images/Dhoni with ball-Neuberg.png';
import callImg from '../../assets/images/call.png';


const Intro = () => {
  return (
    <div className='intro'>
      <div className='left-flex'>
        <h1 className='heading'><span className='orange-title'>BOOK YOUR </span><span className='violet-title'> HEALTH CHECKS</span></h1>
        <div className='flex'><button className='orange-button' ><img className="callImg" src={callImg} alt="callImg" />&nbsp; 9700 36 9700 </button >
        <button className='violet-button' > Get in Touch </button>
        </div>
      </div>
      <div className='right-flex'>
        <img className="dhoni-intro-image" src={dhoniImage} alt="dhoni-image" />
      </div> 
    </div>

  );
};

export default Intro;
