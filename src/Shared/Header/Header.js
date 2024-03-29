import React, { useContext } from 'react';
import logo from '../../assest/logo/logo.jpg';
// import svg from '../../assest/logo/login.webp';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch();
    }
    const menuItem =
        <>
            <img className='w-20 h-12 mx-9 mt-3' src={logo} alt="Avatar Tailwind CSS Component" srcset="" />
            < li > <Link to='/'>Home</Link></li>
            < li > <Link to='/about'>About us</Link></li>
            < li > <Link to='/contact'>Contact Us</Link></li>
            < li > <Link to='/blog'>Blog</Link></li>
            {
                user?.email ?
                    <>
                        <li><Link to='/addservices'><button >Add Services</button></Link></li>
                        <li><Link to='/myreviews'><button >My Review</button></Link></li>
                        <li>
                            <button onClick={handleLogout} className='btn rounded-xl btn-outline mt-3 btn-warning'>Sign Out</button>
                        </li>
                    </>
                    :
                    <li><Link to='/login'><button >Login</button></Link></li>
            }

        </>




    return (
        <div className="navbar bg-base-100 mb-12 h-24 font-semibold	">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Header;