import React from 'react';
import './Footer.css';
import facebook from '../../assets/images/Facebook.png';
import Footerlogo from '../../assets/images/Footerlogo.png';
import instagram from '../../assets/images/Instagram.png';
import linkdin from '../../assets/images/LinkdIn.png';
import twitter from '../../assets/images/x.png';
import youtube from '../../assets/images/Youtube.png';
import Callfooter from '../../assets/images/callfooter.png';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='orange-block-footer'>
        <h3 className='text'> Why Choose Neuberg Diagnostic </h3>
        <div className='footer-count-flex'>
          <div>
            <span className='footer-count'> 250+ </span><br />
            <span className='footer-count-text'> Countries </span>
          </div>
          <div>
            <span className='footer-count'> 100 Million+ </span><br />
            <span className='footer-count-text'> Tests Every Year </span>
          </div>
          <div>
            <span className='footer-count'> 10000+ </span><br />
            <span className='footer-count-text'> Touchpoints </span>
          </div>
          <div>
            <span className='footer-count'> 200+ </span><br />
            <span className='footer-count-text'> Lab Networks </span>
          </div>
        </div>
      </div>
      <div className='grey-block-footer'>
        <div className='grey-footer-flex'>
          <div className='flex1'>
            <img className='neuberg-logo-footer' src={Footerlogo} alt="neuberg-logo" />
            <div className="social-handle-flex">
              <button> <img className='social-handle-button' src={facebook} alt="facebook" />  </button>
              <button> <img className='social-handle-button' src={twitter} alt="  twitter" />  </button>
              <button> <img className='social-handle-button' src={linkdin} alt="linkedin" />  </button>
              <button> <img className='social-handle-button' src={instagram} alt="instagram" />  </button>
              <button> <img className='social-handle-button' src={youtube} alt="youtube" />  </button>
            </div>
            <div className='orange-footer-call-button'>
              <div className='footer-flex-call-button'>
                <img src={Callfooter} className='footer-call-img' alt='call' />
                <div className='footer-call-text'>
                  <p> Call us at: </p>
                  <h1> 9700 36 9700 </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='flex2'>
            <p> Book Packages </p>
            <p> Book Tests </p>
            <p> Locate a Lab </p>
            <p> Pep Talks </p>
            <p> Conatact Us </p>
            <p> Carrers </p>


          </div>
          <div className='flex3'>
            <p> Events </p>
            <p> Technical Capabilities </p>
            <p> News Clippings </p>
            <p> In the Media </p>
            <p> Services </p>
            <p> Team </p>
            <p> Brands </p>
            <p> Network </p>

          </div>
          <div className='flex4'>
            <p> Cancellation Policy </p>
            <p> Privacy policy </p>
            <p> Terms & Conditions </p>
            <p> Disclaimers </p>
            <p> feedback </p>

          </div>
        </div>
        <div className='footer-end'>
          <p>&#169;2024 Neuberg Diagnostics. All Rights Reserved. </p>
        </div>
      </div>
    </div>

  );
};

export default Footer;
