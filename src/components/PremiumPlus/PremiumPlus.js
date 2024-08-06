import React from 'react';
import './PremiumPlus.css';
import tick from '../../assets/images/tick.png';
import lightVioletPlus from '../../assets/images/lightVioletPlus.png';
import maleDoctor from '../../assets/images/MaleDoctor.png';




const PremiumPlus = () => {
  return (
    <div className='premium-plus'>
      <h1><span className='premium-violet-text'> PULSE PREMIUM CARE  </span>
        <span className='premium-orange-text'> HEALTH CHECK UP </span></h1>
      <div className='premium-textboxes health-package-flex'>
        <div className='violet-textbox-price'>
          <div>
            ACTUAL <br /> PRICE
          </div>
          <div className='price-text line-through'>
            &#8377; 13,155
          </div>
        </div>
        <div className='orange-textbox-price'>
          <div>
            OFFER <br /> PRICE
          </div>
          <div className='price-text'>
            &#8377; 5999
          </div>
        </div>
      </div>
      <button onClick="#" className="add-button">
        Book Now
      </button>
      <br /> <br />
      <div className='health-package-flex'>
        <img className='light-violet-plus' src={lightVioletPlus} alt="plus" />
        <div className='orange-curved-block health-package-flex' >
          <div className='bullet-point'>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>CBC</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Lipid Profile</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Urea</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Creatinine</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Uric Acid</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Blood Urea Nitrogen (BUN)</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Calcium</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>25 OH Cholecalciferol (D2 + D3)</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Vitamin B12 Level</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Iron Level</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Prostate Specific Antigen Level</p> </div>

          </div>
          <div className='bullet-point right-bullets'>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Potassium</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Blood Group & RH</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>ECG</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Body Mass Index</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>C-Reactive Protein</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>HCV Antibody Total</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Magnessium Level</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Phosphorous Inorganic</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Sodium</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>TMT or ECHO</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Thyroid Function Test</p> </div>

          </div>
        </div>
        <div className='male-docto'>
            <img className='male-doctor-image' src={maleDoctor} alt="doctor Image" />

          </div>
      
      </div>

    </div>


  );
};

export default PremiumPlus;
