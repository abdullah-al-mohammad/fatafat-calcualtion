import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);

            })
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/calculate'>Details</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                        {
                            user ? <div className='flex justify-between'>
                                <p className='text-red-500 font-serif capitalize mr-5'>{user.displayName}</p>
                                <img className='rounded-full w-6' src={user.photoURL || profile} alt="profile" />
                            </div> :
                                <img className='w-6' src={profile} alt="profile" />
                        }
                        {
                            <div>
                                {
                                    user ? <Link to="/login"><button onClick={handleLogOut} className='btn btn-warning'>Logout</button></Link>
                                        : <Link to="/login"><button className='btn btn-warning'>Login</button></Link>
                                }
                            </div>
                        }
                    </ul>
                </div>
                <a className="text-xl">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end hidden sm:flex justify-evenly ">
                {
                    user ? <div className='flex justify-between'>
                        <p className='text-red-500 font-serif capitalize mr-5'>{user.displayName}</p>
                        <img className='rounded-full w-6' src={user.photoURL || profile} alt="profile" />
                    </div> :
                        <img className='w-6' src={profile} alt="profile" />
                }
                <div>
                    {
                        user ? <Link to="/login"><button onClick={handleLogOut} className='btn btn-warning'>Logout</button></Link>
                            : <Link to="/login"><button className='btn btn-warning'>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;