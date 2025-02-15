import React from 'react';
import './HealthPackage.css';
import shield from '../../assets/images/shield.png';
import tick from '../../assets/images/tick.png';
import dhoniPoint from '../../assets/images/Dhoni-pointing-image-neuberg.png';

const HealthPackage = () => {
  return (
    <div className='HealthPackage'>
      <h3 className='header-text'>
      <span className="grey-header-text"> Curated </span> 
      <span className="violet-header-text"> Helath Packages </span>
      <span className="grey-header-text"> for your </span>
      <span className="orange-header-text"> Wellbeing </span>
      </h3>
      <div className='CaptianHealthPackage'>
        <h1><span className='violet-text'> CAPTAIN'S </span><span className='orange-text'> HEALTH PACKAGE </span></h1>
        <div className='textboxes health-package-flex'>
          <div className='violet-textbox-price'>
            <div>
              ACTUAL <br /> PRICE
            </div>
            <div className='price-text line-through'>
              &#8377; 5500
            </div>
          </div>
          <div className='orange-textbox-price'>
            <div>
              OFFER <br /> PRICE
            </div>
            <div className='price-text'>
              &#8377; 1599
            </div>
          </div>
        </div>
        <button onClick="#" className="add-button">
            Book Now          
          </button>
        <br /> <br />

        <div className='health-package-flex'>
          <img className='shield-image' src={shield} alt="shield" />
          <div className='orange-block health-package-flex'>
            <div className='bullet-point'>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Complete Blood Court (CBC)</p> </div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Glucose - Fasting</p> </div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>HbA1C - HPLC</p> </div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Liver Function Test</p> </div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /> <p className='button-text'>Free Thyroid Profile</p></div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /> <p className='button-text'>Lipid Profile</p></div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /> <p className='button-text'>Urea</p></div>



            </div>
            <div className='bullet-point right-bullets'>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Creatine</p> </div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Urine Acid</p> </div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Urine Routine</p> </div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Calcium</p> </div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Vitamin D Total</p> </div>
              <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Vitamin B-12 Total</p> </div>



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
