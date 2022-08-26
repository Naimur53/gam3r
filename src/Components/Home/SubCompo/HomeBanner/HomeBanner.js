import React from 'react';
import { Link } from 'react-router-dom';
import CommonButton from '../../../Share/CommonButton/CommonButton';
import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div className='home_banner d-flex justify-content-center align-items-center' style={{ background: 'url("/images/main_banner.png")' }}>
            <div className='banner_text_wrap position-relative text-center mt-5 pt-5'>
                <h1 className='text-white  '>
                    BUILD BETTER,
                    <br />
                    PLAY BETTER. </h1>
                <div className='d-flex  justify-content-center align-items-center text-white secondText'>
                    <img src="/images/calender.png" className='  logo_calender me-3' alt="logo of calender" />
                    <h2 className='banner_date '>NOVEMBER 2ND 2022, UC BERKELEY</h2>
                </div>
                <p className='banner_para font_titillium'>
                    A community-led forum tackling the most pressing issues in Web3
                    <br />
                    gaming
                    We aim to shed light on groundbreaking ideas and best practices
                    <br />
                    to propel the future of sustainable game economies.


                </p>
                <div style={{ marginTop: '40px' }} className='d-flex justify-content-center align-items-center'>
                    <div style={{ marginRight: '30px' }}>
                        <a href='#about'>
                            <CommonButton text='learn more'></CommonButton>
                        </a>
                    </div>
                    <a href="#video">

                        <CommonButton text='Watch the video'></CommonButton>
                    </a>
                </div>
            </div>
        </div >
    );
};

export default HomeBanner;