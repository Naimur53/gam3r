import React from 'react';
import CommonButton from '../../../Share/CommonButton/CommonButton';
import './About.css'

const About = () => {
    return (
        <div id='about' className='container pb-5' style={{ marginTop: '85px' }}>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src="/images/about.png" className='img-fluid' alt="about" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className='mt-5 mt-md-0 about_text_wrap'>
                        <h1 className='text-uppercase'>About GAM3R
                            <br />
                            SUMMIT 2022
                        </h1>
                        <p className='font_titillium'>
                            Talks covering industry-leading research and hands-on developer workshops will alternate with sessions that attempt to break down silos and foster connection and collaboration for attendees.
                        </p>
                        <p>
                            This event is invite-only. Please submit your interest now to secure your spot and join the best and brightest  developers from across Web3 gaming - together in one location sharing experiences, discussing innovations and learning as a community.</p>
                    </div>
                    <CommonButton text={'Apply to Join'}></CommonButton>
                </div>



            </div>

        </div >
    );
};

export default About;