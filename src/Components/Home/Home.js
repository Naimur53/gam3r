import React from 'react';
import About from './SubCompo/About/About';
import Footer from './SubCompo/Footer/Footer';
import HomeBanner from './SubCompo/HomeBanner/HomeBanner';
import Newsletter from './SubCompo/Newsletter/Newsletter';
import ThankSection from './SubCompo/ThankSection/ThankSection';
import VideoSection from './SubCompo/VideoSection/VideoSection';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <About></About>
            <VideoSection></VideoSection>
            <ThankSection></ThankSection>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;