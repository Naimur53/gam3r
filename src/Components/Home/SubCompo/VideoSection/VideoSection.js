import React, { useState, useRef } from 'react';
import './VideoSection.css'
const VideoSection = () => {
    const videoRef = useRef()
    const [play, setPlay] = useState(false)
    const handlePlay = () => {
    }
    const handlePlaying = () => {
        setPlay(true)
    }
    const handlePause = () => {
        setPlay(false)
    }
    return (
        <div id='video' style={{ paddingTop: "80px" }} className='container pb-5 overflow-hidden'>
            <div className="position-relative">

                <video onPlay={handlePlaying} onPause={handlePause} ref={videoRef} poster='/images/thumnail.png' className='w-100' height="734px" controls>
                    <source src="https://res.cloudinary.com/dvor8fuxv/video/upload/v1653135588/myfolder/mysubfolder/Neshar%20Bojha%20Lyrics%20Video%20_%20Popeye%20%28Bangladesh%29%20%28%20720%20X%201280%20%29.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="position-absolute d-flex
                justify-content-center align-items-center   position-absolute top-50 start-50 translate-middle" style={{
                        pointerEvents: 'none'
                    }} onClick={handlePlay}  >
                    {
                        !play && <img src="/images/play.png" className='img-fluid' alt="" />
                    }

                </div>
            </div>

        </div>
    );
};

export default VideoSection;