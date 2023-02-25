import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="item1" className="carousel-item w-full">
                    <p className='text-center w-full my-5 opacity-70 text-lg'>You can be assured of their best embroidery service <br />Their only motive is to achieve custmer satisfaction <br />Sadia Tahsin</p>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <p className='text-center w-full my-5 opacity-70 text-lg'>They have wide range of embroidery design to choose from <br />very professional and prompt service <br />Arjun Nahar</p>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <p className='text-center w-full my-5 opacity-70 text-lg'>TNokshibibi embroidery is a traditional Bangladeshi art form that involves intricate stitching and pattern-making using colorful threads<br />It has a rich cultural heritage and is prized for its unique beauty and craftsmanship.<br />Sabila Noor</p>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <p className='text-center w-full my-5 opacity-70 text-lg'>They are very professional at their work<br />The services are top notch<br />Noor Jahan</p>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn  btn-outline btn-xs">1</a>
                <a href="#item2" className="btn  btn-outline btn-xs">2</a>
                <a href="#item3" className="btn  btn-outline btn-xs">3</a>
                <a href="#item4" className="btn  btn-outline btn-xs">4</a>
            </div>
        </div>
    );
};

export default Testimonial;