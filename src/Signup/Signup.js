import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import svg from '../assest/logo/signup.webp';
import { AuthContext } from '../Context/Authprovider/Authprovider';
const Signup = () => {
    const { createUser, updateUserProfile, providerLogin, setLoading, } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [signUpError, setSignUPError] = useState('')
    const from = location.state?.from?.pathname || '/';

    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value;
        const password = event.target.password.value;
        // upload image 
        const image = event.target.image.files[0]

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSignUPError('');
                updateUserProfile(name)
                    .then(() => {
                        saveUser(name, email);

                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
        const saveUser = (name, email) => {
            const user = { name, email };
            fetch('https://nokshi-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    navigate('/');
                    toast('User Created Successfully.')
                })
        }
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                setLoading(false)
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero py-12 my-12">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left mx-auto w-3/4">
                    <img src={svg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-2xl  lg:text-5xl font-bold">Signup now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required placeholder="Enter your name" id='name' name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" required placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" required placeholder="password" name="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name="Confirm password" required placeholder="Confirm password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload photo</span>
                            </label>
                            <input type="file" name="image" required className="input input-bordered" accept='image/*' />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />

                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                        <div className="w-10">
                            <img
                                className=" px-2 image-fluid btn-image"
                                src="https://img.icons8.com/color/344/google-logo.png"
                                alt=""
                            />
                        </div>

                        <p className="fw-bold">Google SignIn</p>
                    </button>
                    <div>
                        {signUpError && <p className='text-red-600 py-5 text-center'>{signUpError}</p>}

                        <p className='text-center'>Already have an account? <Link to='/login' className='text-xl  text-orange-600 font-bold'> Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;