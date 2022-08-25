import React from 'react';
import './CommonButton.css'

const CommonButton = ({ text, type, className }) => {
    return (
        <button type={type ? type : 'button'} className={`common_btn bg-transparent text-uppercase border-1 border text-white  ${className}`}>
            {text}
        </button>
    );
};

export default CommonButton;