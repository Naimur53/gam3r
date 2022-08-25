import React from 'react';

const ThankSection = () => {
    return (
        <div className='container mt-5 py-5'>
            <h2 style={{ fontSize: '60px', fonWeight: 700 }} className='text-uppercase responsive-text text-center'>thank you to our
                <br />
                supporters</h2>

            <div style={{ marginTop: '100px', marginBottom: '200px' }} className='d-flex justify-content-center align-items-center '>
                <img src="/images/red_logo_gamer.png" className='img-fluid' alt="log main footer" />
            </div>
        </div>
    );
};

export default ThankSection;