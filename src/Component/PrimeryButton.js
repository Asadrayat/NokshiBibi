import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className='btn bg-gradient-to-r from-red-900 to-red-600 text-white'>{children}</button>
    );
};

export default PrimaryButton;