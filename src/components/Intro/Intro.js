import React from 'react';
import './Intro.css';
import dhoniImage from '../../assets/images/Dhoni with ball-Neuberg.png';
import callImg from '../../assets/images/call.png';


const Intro = () => {
  return (
    <div className='intro'>
      <div className='left-flex'>
        <h1 className='heading'><span className='orange-title'>BOOK YOUR </span><span className='violet-title'> HEALTH CHECKS</span></h1>
        <h1 className='text-1'>Embark on a journey to holistic well-being with our Health Checks.<br />
           Comprehensive and thorough, our checkups cover every aspect of your health,<br />
            providing invaluable insights into your overall wellness. </h1>
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
