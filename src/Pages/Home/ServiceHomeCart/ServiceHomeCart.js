import React from 'react';
import { Link } from 'react-router-dom';
import SecondaryButton from '../../../Component/SecondaryButton';

const ServiceHomeCart = ({ srvc }) => {
    const { title, description, image_url, _id } = srvc;
    return (
        <div className="card w-96 bg-base-100 rounded-md border-x ">
            <figure><img className='h-56 w-full rounded-md shadow-2xl bg-base-200' src={image_url} alt="img" /></figure>
            <div className="card-body glass">
                <h2 className="card-title text-red-500 taxt-xl font-bold">
                    {title}
                </h2>
                <p> {description.length > 100 ?
                    `${description.substring(0, 100)}...` : description
                }</p>
                <div className="card-actions  ">
                    <Link to={`/services/${_id}`}><SecondaryButton > View Details</SecondaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceHomeCart;