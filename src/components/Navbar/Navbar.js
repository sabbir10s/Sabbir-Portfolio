import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/white-logo.png'
const Navbar = ({ children }) => {
    const location = useLocation()
    console.log(location.pathname.split('/')[1]);
    return (
        <nav className=''>
            <div class="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-neutral flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar  lg:container mx-auto">

                        <div className="flex-1 flex items-center lg:items-stretch lg:justify-start">

                            <div className="flex-shrink-0 flex items-center">

                                <Link to='/'>
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src={logo}
                                        alt="sabbir ahmed"
                                    />
                                </Link>
                            </div>

                            <div className="lg:hidden">
                                <div className="flex">
                                    <Link to='/'><img
                                        className="block lg:hidden h-8 w-auto"
                                        src={logo}
                                        alt="sabbir ahmed"
                                    /></Link>
                                </div>
                            </div>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                <div className='flex flex-col-reverse items-center md:flex-row gap-0 md:gap-2 md:items-center mt-6 md:mt-0 '>
                                    <ul class="menu-horizontal flex gap-10 text-white bg-neutral">
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
                            </ul>
                        </div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 bg-[#0a192fc0] text-white">

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
            </div>
        </nav>
    );
};

export default Navbar;