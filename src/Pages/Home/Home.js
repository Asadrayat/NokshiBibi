
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import PrimaryButton from '../../Component/PrimeryButton';
import About from '../About/About';
import Testimonial from '../Testimonial/Testimonial';
// import ServiceCart from '../Services/Service-cart/ServiceCart';
import ServiceHomeCart from './ServiceHomeCart/ServiceHomeCart';
import { FaQuoteLeft } from 'react-icons/fa';
import Contact from '../Contact/Contact';
import Carousel from './Carousel/Carousel';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = 'https://nokshi-server.vercel.app/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <div className="hero ">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Detailed and Elegant</h1>
                        <h1 className="text-2xl  lg:text-5xl sm:text-3xl font-bold text-red-500" >Embroidery works</h1>
                        <div className='my-5'>
                            <PrimaryButton>Enquire now</PrimaryButton>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-1/2 ">
                        <div className="card-body">
                            <Carousel></Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <h1 className="lg:text-6xl font-bold text-xl text-red-500 text-center mt-20">
                    <TypeAnimation
                        sequence={["The Services we Provide", 3000, '']}
                        speed={40}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </h1>
            </div>
            <div className='my-24'>
                <div className='grid lg:grid-cols-3 grid-cols-1'>
                    {
                        services.map(srvc => <ServiceHomeCart
                            key={srvc._id}
                            srvc={srvc}
                        ></ServiceHomeCart>).slice(Math.max(services.length - 3, 0))
                    }
                </div>
                <div className='flex justify-center my-16'>
                    <Link to='services'><PrimaryButton className='btn btn-warning'>See All Services</PrimaryButton></Link>
                </div>
                <div className='my-24'>
                    <About></About>
                </div>
                <div className='my-24'>
                    <p className='text-2xl  lg:text-5xl font-bold text-red-600 w-full text-center'><FaQuoteLeft></FaQuoteLeft></p>
                    <p className='text-red-500 text-2xl  lg:text-5xl text-center'>Testimonial</p>
                    <Testimonial></Testimonial>
                </div>
                <div className='my-24 w-3/4 mx-auto lg:w-full'>
                    <div className='text-center'>
                        <h1 className="text-2xl  lg:text-5xl my-10 text-red-500 font-bold">Contact Us</h1>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;