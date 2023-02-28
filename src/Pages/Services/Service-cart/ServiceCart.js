import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Component/PrimeryButton';

const ServiceCart = ({ service }) => {
    const { title, description, image_url, _id } = service;
    return (
        <div className="card w-96 bg-base-100 gap-10 my-8 shadow-xl">
            <figure><img className='h-56 w-full' src={image_url} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title text-red-500 taxt-xl font-bold">
                    {title}
                </h2>
                <p> {description.length > 100 ?
                    `${description.substring(0, 100)}...` : description
                }</p>
                <div className="card-actions  ">
                    <Link to={`/services/${_id}`}><PrimaryButton > View Details</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;