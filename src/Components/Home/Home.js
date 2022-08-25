import React from 'react';
import About from './SubCompo/About/About';
import HomeBanner from './SubCompo/HomeBanner/HomeBanner';
import VideoSection from './SubCompo/VideoSection/VideoSection';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <About></About>
            <VideoSection></VideoSection>
        </div>
    );
};

export default Home;