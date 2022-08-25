import React from 'react';
import './CommonButton.css'

const CommonButton = ({ text }) => {
    return (
        <button className='common_btn bg-transparent text-uppercase border-1 border text-white   '>
            {text}
        </button>
    );
};

export default CommonButton;