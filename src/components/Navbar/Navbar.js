import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/white-logo.png'
const Navbar = () => {
    const location = useLocation()
    console.log(location.pathname.split('/')[1]);
    return (
        <div class="bg-neutral">
            <div className=' navbar'>
                <div class="navbar-start lg:ml-10">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="text-white menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>

                        </ul>
                    </div>
                    <Link to='/' class="text-2xl font-bold text-white">
                        <img className='w-5' src={logo} alt="" />
                    </Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu-horizontal flex gap-9 text-white">
                        <li className='hover:text-secondary'><Link to='/'>Home</Link></li>
                        {
                            location.pathname.split('/')[1] !== 'projectDetails' && <>
                                <li className='hover:text-secondary'><a href="#about">About</a></li>
                                <li className='hover:text-secondary'><a href="#portfolio">Portfolio</a></li>
                                <li className='hover:text-secondary'><a href="#contact">Contact</a></li>
                            </>
                        }
                    </ul>
                </div>
                <div class="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar;