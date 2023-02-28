import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimationText = ({ children }) => {
    return (
        <div>
            <h1 className="lg:text-6xl font-bold text-xl text-red-500 text-center mt-20">
                <TypeAnimation
                    sequence={[`${children}`, 3000, '']}
                    speed={40}
                    wrapper="h2"
                    repeat={Infinity}
                />
            </h1>
        </div>
    );
};

export default AnimationText;