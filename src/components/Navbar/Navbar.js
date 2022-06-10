import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../Hooks/CoustomLink';

const Navbar = () => {
    return (
        <div class=" bg-black ">
            <div className=' navbar'>
                <div class="navbar-start lg:ml-10">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="bg-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><CustomLink to='home'>Home</CustomLink></li>
                            <li><CustomLink to='reviews'>Reviews</CustomLink></li>
                            <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
                            <li><CustomLink to='/about'>About</CustomLink></li>
                        </ul>
                    </div>
                    <Link to='/' class="text-2xl font-bold text-white"><p>TimeO</p></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu-horizontal flex gap-9">
                        <li><CustomLink to='home'>Home</CustomLink></li>
                        <li><CustomLink to='reviews'>Reviews</CustomLink></li>
                        <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
                        <li><CustomLink to='/about'>About</CustomLink></li>
                    </ul>
                </div>
                <div class="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar;