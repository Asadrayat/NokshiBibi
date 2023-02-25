import React from 'react';
import about from '../../assest/about.jpg';
const About = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-1/2 ">
                    <div className="card-body ">
                        <img src={about} alt="" />
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className="text-5xl text-red-500 font-bold">About Us</h1>
                    <p className="py-6 text-lg opacity-70">Embroidery is easy, relaxing and one of the least expensive hobbies you can take up. We,NokshiBibi at Halishahar, Chittagong, offer a range of embroidery works that suit up your needs. We aim to create beautiful designs keeping your requirements in mind. We have a highly professional and trained workers, which always believes in putting customer satisfaction to the highest level.</p>
                </div>
            </div>
        </div>
    );
};

export default About;