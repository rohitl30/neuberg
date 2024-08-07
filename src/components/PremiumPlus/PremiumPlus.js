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
      <button onClick="#" className="add-button move">
        Book Now
      </button>
      <br /> <br />
      <div className='health-package-flex'>
        <img className='light-violet-plus' src={lightVioletPlus} alt="plus" />
        <div className='orange-curved-block health-package-flex' >
          <div className='bullet-point'>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Complete Blood Count(CBC)</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Blood Group & RH Typing</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Anti HCV</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>c-Ractive Protien Quantitative</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>HbsAg (Hepatitis B Surface Antigen)</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Prostate specific Antigen / Pop smear  </p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Iron Level</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Total Iron Binding Capacity (TIBC)</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Vitamin B12</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Vitamin D Total</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Glucose - Fasting</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>HbA1c - HPLC</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Lipid Profile</p> </div>



          </div>
          <div className='bullet-point right-bullets'>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>ECG</p></div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Echocardiography/TMT</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Free Thyroid Profile</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Urea</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Creatine</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Uric Acid</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Calcium</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Electrolyte</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>PFT</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>X-Ray Chest PA View</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>Urine routine</p> </div>
          <div className='health-package-flex'><img className='tick-image' src={tick} /><p className='button-text'>USG of Whole Abdomen</p> </div>

          


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
