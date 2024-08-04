import React from 'react';
import './HealthPackage.css';
import shield from '../../assets/images/shield.png';
import tick from '../../assets/images/tick.png';
import dhoniPoint from '../../assets/images/Dhoni-pointing-image-neuberg.png';

const HealthPackage = () => {
  return (
      <div className='HealthPackage'>
        <p className='plain-text'>
          Embark on a journey to holistic well-being with our Helath Checks. Comprehensive < br />
          and thorough, this checkup covers every aspect of your helath, providing invaluable <br />
          insights into your overall wellness.
        </p> 
      <div className='CaptianHealthPackage'>
        <h1><span className='violet-text'> CAPTAIN'S </span><span className='orange-text'> HEALTH PACKAGE </span></h1>
        <div className='textboxes flex'>
          <div className='violet-textbox'>
            <div>
            ACTUAL <br /> PRICE
            </div>
            <div className='price-text line-through'>
            &#8377; 5500
            </div>
          </div>
          <div className='orange-textbox'>
            <div>
              OFFER <br /> PRICE
            </div>
            <div className='price-text'>
            &#8377; 1500
            </div>
          </div>
        </div>
        <br /> <br />
      <div className='flex'>
        <img className='shield-image' src={shield} alt="shield" />
        <div className='orange-block flex'>
            <div className='bullet-point'>
              <div className='flex'><img className='tick-image' src={tick} /><p className='button-text'>CBC</p> </div>
              <div className='flex'><img className='tick-image' src={tick} /><p className='button-text'>Lipid Profile</p> </div>
              <div className='flex'><img className='tick-image' src={tick} /><p className='button-text'>Diabetes Profile (HbA1c, FBS)</p> </div>
              <div className='flex'><img className='tick-image' src={tick} /><p className='button-text'>TSH Function (Free T3,T4 & TSH )</p> </div>
              <div className='flex'><img className='tick-image' src={tick} /> <p className='button-text'>Kidney Function</p></div>

            </div>
            <div className='bullet-point right-bullets'>
              <div className='flex'><img className='tick-image' src={tick} /><p className='button-text'>Urine Function Test</p> </div>
              <div className='flex'><img className='tick-image' src={tick} /><p className='button-text'>Liver</p> </div>
              <div className='flex'><img className='tick-image' src={tick} /><p className='button-text'>Vitamin D</p> </div>
              <div className='flex'><img className='tick-image' src={tick} /><p className='button-text'>Calcium</p> </div>

            </div>
            
        </div>
        <div className='dhoni-point-image'>
        <img className='dhoni-point-image' src={dhoniPoint} alt="dhoni-image" />

        </div>
      </div>
      </div>
      </div>

  );
};

export default HealthPackage;
