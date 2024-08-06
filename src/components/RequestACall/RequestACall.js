import React from 'react';
import './RequestACall.css';
import DhoniHeart from '../../assets/images/DhoniHeart.png';


const RequestACall = () => {
    return (
        <div className='request-a-call'>
            <div className="request-call-img" >
                <img className="dhoni-heart-image" src={DhoniHeart} alt="Dhoni Image" />
            </div>
            <div className="request-call-form">
                <form>
                    <h3 className='form-head'> Our partners in health are at your service. </h3> <br />
                    <div className='inputs-txt'>
                        <input className='text-input' type="textbox" placeholder="Name" name="name" /> <br /> <br />
                        <input className='text-input' type="textbox" placeholder="Mobile Number" name="mobile" /> <br /> <br />
                        <input className='text-input' type="textbox" placeholder="Tests" name="tests" /> <br />
                    </div>
                    <p className='center-text'> How would you like us to connect with you ? </p>
                    <div className="radio-button-call-flex center-text">
                        <input type="radio" /> Home Visit
                        <input type="radio" /> Lab Test
                        <input type="radio" /> Request Callback
                    </div> <br />
                    <button className="request-button">
                        Request A Call
                    </button>


                </form>
            </div>
        </div>

    );
};

export default RequestACall;


