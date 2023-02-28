import React from 'react';
import img1 from '../../../assest/embro2.png';
import img2 from '../../../assest/embro3.jpg';
import img3 from '../../../assest/embro4.jpg';
import img4 from '../../../assest//embro5.png';
const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} alt='avatar' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="text-5xl text-red-600">❮</a>
                    <a href="#slide2" className="text-5xl text-red-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt='avatar' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-5xl text-red-600">❮</a>
                    <a href="#slide3" className="text-5xl text-red-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt='avatar' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-5xl text-red-600">❮</a>
                    <a href="#slide4" className="text-5xl text-red-600">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} alt='avatar' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="text-5xl text-red-600">❮</a>
                    <a href="#slide1" className="text-5xl text-red-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;