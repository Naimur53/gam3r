import React, { useState, useRef } from 'react';
const VideoSection = () => {
    const videoRef = useRef()
    const [play, setPlay] = useState(false)
    const handlePlay = () => {
        console.log({ ...videoRef.current });
        videoRef.current.play()
    }
    return (
        <div className='container py-5'>
            <div className="position-relative">

                <video ref={videoRef} poster='/images/thumnail.png' className='w-100' height="734px" controls>
                    <source src="https://res.cloudinary.com/dvor8fuxv/video/upload/v1653135588/myfolder/mysubfolder/Neshar%20Bojha%20Lyrics%20Video%20_%20Popeye%20%28Bangladesh%29%20%28%20720%20X%201280%20%29.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="position-absolute top-50 start-50 translate-middle" onClick={handlePlay}  >
                    <img src="/images/play.png" className='img-fluid' alt="" />

                </div>
            </div>



        </div>
    );
};

export default VideoSection;