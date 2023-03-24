import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { TypeAnimation } from 'react-type-animation';
const AddServices = () => {
    const { user } = useContext(AuthContext);
    const notify = () => toast("Services Successfully Added!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photoURL = form.photoURL.value;
        const fee = form.fee.value;
        const details = form.details.value;
        console.log(title, fee, photoURL);

        const services = {
            image_url: photoURL,
            price: fee,
            title: title,
            description: details

        }
        fetch('https://nokshi-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className='py-12'>
            <div>
                
            </div>
            <form className='bg-opacity-5 w-3/4 mx-auto lg:w-1/2 overflow-y-auto' onSubmit={handleAddService} >
                <h1 className="lg:text-6xl font-bold text-xl my-10 text-red-600 text-center mt-20">
                    <TypeAnimation
                        sequence={["Add your service", 3000, '']}
                        speed={40}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols mx-auto gap-4'  >
                    <input name="title" type="text" placeholder="Title" className="input input-ghost w-full py-4  input-bordered" />
                    <input name="photoURL" type="text" placeholder="photoURL" className="input input-ghost w-full  input-bordered" />
                    <input name="fee" type="number" placeholder="price" className="input py-4 input-ghost w-full  input-bordered" />
                </div>
                <textarea name="details" className="textarea textarea-bordered h-24 w-full mt-6" placeholder="Service Details" required></textarea>
                <input className='btn btn-outline bg-gradient-to-r from-red-900 to-red-600 text-white mt-4' type="submit" value="Add Your Service" onClick={notify} ></input>
                <ToastContainer position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
            </form>
        </div>
    );
};

export default AddServices;