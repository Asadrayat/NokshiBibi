import React from 'react';

const SecondaryButton = ({children}) => {
    return (
        <button className='btn btn-outline bg-gradient-to-r from-pink-500 to-pink-800 text-white '>{children}</button>
    );
};

export default SecondaryButton;