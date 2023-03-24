import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Component/PrimeryButton';

const ServiceHomeCart = ({ srvc }) => {
    const { title, description, image_url, _id } = srvc;
    return (
        <div className="card w-full lg:w-96 bg-base-100 rounded-md border-x ">
            <figure><img className='h-56 w-3/4 lg:w-full rounded-md shadow-2xl bg-base-200' src={image_url} alt="img" /></figure>
            <div className="card-body glass  w-3/4 mx-auto lg:w-full">
                <h2 className="card-title text-red-500 text-xl font-bold">
                    {title}
                </h2>
                <p> {description?.length > 100 ?
                    `${description.substring(0, 100)}...` : description
                }</p>
                <div className="card-actions  ">
                    <Link to={`/services/${_id}`}><PrimaryButton > View Details</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceHomeCart;