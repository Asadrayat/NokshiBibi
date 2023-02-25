import React from 'react';
import PrimaryButton from '../../Component/PrimeryButton';

const Contact = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/bvVD65r/banner.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div >
                    <form className='flex flex-col '>
                        <div className="form-control my-4">
                            <label className="input-group">
                                <input type="text" placeholder="info@site.com" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <label className="input-group">
                                <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <label className="input-group">

                                <input type="text" placeholder="message" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <PrimaryButton><button type='submit'>Submit</button></PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );
};

export default Contact;