import React from 'react';
import PrimaryButton from '../../Component/PrimeryButton';

const Contact = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col gap-10 card-body lg:flex-row">
                <div className="cards flex-shrink-0 w-1/2 ">
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
                <div className='text-center'>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;