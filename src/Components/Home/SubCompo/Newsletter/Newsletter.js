import React from 'react';
import CommonButton from '../../../Share/CommonButton/CommonButton';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div id='news'>
            <div className='container d-block mt-5 mb-5 py-5'>
                <h2 style={{ fontSize: '60px', fonWeight: 700 }} className='text-uppercase responsive-text text-center'>
                    JOIN OUR NEWSLETTER,
                    <br />
                    STAY UP-TO-DATE
                </h2>
                <div style={{ marginTop: '50px' }} className='d-flex justify-content-center align-items-center'>
                    <form className='news_form d-flex justify-content-center align-items-center flex-column'>
                        <input type="text" placeholder='Enter your Name' className='filed font_titillium' style={{ marginBottom: '17px' }} />
                        <input type="email" className='filed font_titillium' placeholder='Enter your Email Address' />

                        <CommonButton type='submit' className='mt-4 ' text='Join our Newsletter'></CommonButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;