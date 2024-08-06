import React from 'react';
import './HowItWorks.css';
import ShareDetails from '../../assets/images/ShareDetails.png';
import ScheduleTest from '../../assets/images/Scheduletest.png';
import Samples from '../../assets/images/samples.png';
import Reports from '../../assets/images/reports.png';
import OurVisit from '../../assets/images/Ourvisit.png';


const HowItWorks = () => {
    return (
        <div className='how-it-works'>
            <div className="header-text-1">
                <h2> <span className="how-orange-header"> BOOK A LAB TEST </span>
                    <span className="how-violet-header"> FROM THE COMFORT OF YOUR HOME </span></h2>
            </div>
            <div className="sub-head-text">
                <h3> How It Works </h3>
            </div>
            <div className="working-img-flex">
                <div className="working-img-group">
                    <img className="working-img" src={ShareDetails} alt="Share Details" /> <br />
                    <p className="working-img-text"> Share your <br /> details with us </p>
                </div>
                <div className="working-img-group">
                    <img className="working-img" src={ScheduleTest} alt="Schedule Test" /> <br />
                    <p className="working-img-text"> Schedule the test <br /> at your home </p>
                </div>
                <div className="working-img-group">
                    <img className="working-img" src={OurVisit} alt="Representative visit" /> <br />
                    <p className="working-img-text"> Our representative <br /> would visit your home </p>
                </div>
                <div className="working-img-group">
                    <img className="working-img" src={Samples} alt="Process Samples" /> <br />
                    <p className="working-img-text"> We process your <br /> samples at our labs</p>
                </div>
                <div className="working-img-group">
                    <img className="working-img" src={Reports} alt="Online Reports" /> <br />
                    <p className="working-img-text"> Get your <br /> reports online </p>
                </div>

            </div>
        </div>

    );
};

export default HowItWorks;
