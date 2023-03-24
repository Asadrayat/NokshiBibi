import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import Review from '../../Layout/Review/Review';
import Reviewdetail from '../Reviewdetail/Reviewdetail';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { title, description, image_url, price } = useLoaderData();

  return (
    <div>
      <div>

        <h1 className="lg:text-6xl font-bold text-xl text-red-500 text-center mt-20">
          <TypeAnimation
            sequence={[`${title}`, 3000, '']}
            speed={40}
            wrapper="h2"
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="hero lg:p-16 w-full">
        <div className="hero-content flex-col gap-10 lg:flex-col">
          <img src={image_url} alt='img' className=" rounded-lg w-full lg:max-w-2xl shadow-2xl" />
          <div>
            <p className="py-6 opacity-70 ">{description}</p>
            <p className="opacity-70 text-xl ">Price: {price}BDT</p>
          </div>
        </div>
      </div>
      <div className=' p-6 my-12'>
        {/* <p className='lg:text-2xl  lg:text-5xl text-2xl text-center font-bold'>Review of {title}</p> */}
        <h1 className="lg:text-6xl font-bold text-xl text-red-500 text-center mt-20">
          <TypeAnimation
            sequence={[`Review of ${title}`, 3000, '']}
            speed={40}
            wrapper="h2"
            repeat={Infinity}
          />
        </h1>

        <div className='flex justify-center gap-10 my-12'>
          {user ? <Review></Review> : <div>  <Link to='/login'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-warning ">Add Your Review for {title}</button></Link>  </div>}

        </div>
        <div>
          <Reviewdetail></Reviewdetail>
        </div>

      </div>
    </div>


  );
};

export default Checkout;