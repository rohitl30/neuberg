import React from 'react';
import './FullBodyPackage.css';
import ladyDoctor from '../../assets/images/ladyDoctor.png';
import tick from '../../assets/images/tick.png';
import orangePlus from '../../assets/images/orangePlus.png';
import violetPlus from '../../assets/images/violetPlus.png';




const FullBodyPackage = () => {
  return (
    <div className='fullbodypackage'>
      <h1><span className='violet-text'> PULSE WELLNESS  </span><span className='orange-text'> HEALTH CHECK UP </span></h1>
      <div className='textboxes health-package-flex'>
        <div className='violet-textbox-price'>
          <div>
            ACTUAL <br /> PRICE
          </div>
          <div className='price-text line-through'>
            &#8377; 7240
          </div>
        </div>
        <div className='orange-textbox-price'>
          <div>
            OFFER <br /> PRICE
          </div>
          <div className='price-text'>
            &#8377; 2999
          </div>
        </div>
      </div>
      <button onClick="#" className="add-button">
        Book Now
      </button>
      <br /> <br />
      <div className='health-package-flex'>
      <img className='orange-plus-image' src={orangePlus} alt="doctor" />
          <img className='violet-plus-image' src={violetPlus} alt="doctor" />
      <div className='styled-block health-package-flex'>
        <div className='bullet-point'>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>CBC</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Glucose(Fasting)</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>glyco Hemoglobin (HbA1c)</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Urea</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /> <p className='button-text'>Uric Acid</p></div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /> <p className='button-text'>Blood Urea Nitrogen(BUN)</p></div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /> <p className='button-text'>Calcium</p></div>


        </div>
        <div className='bullet-point right-bullets'>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>25 OH Cholecalciferol (D2+D3)</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Potassium</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Chloride</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Sodium</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>TMT or ECHO</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Thyroid function Test</p> </div>


        </div>
      </div>
      <div className='lady-docto'>
            <img className='lady-doctor-image' src={ladyDoctor} alt="doctor Image" />

          </div>
        </div>

    </div>


  );
};

export default FullBodyPackage;
