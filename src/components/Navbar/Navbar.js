import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/white-logo.png'
const Navbar = ({ children }) => {
    const location = useLocation()
    console.log(location.pathname.split('/')[1]);
    return (
        <nav className=''>
            <div className="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-neutral flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar  lg:container mx-auto">

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
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                <div className='flex flex-col-reverse items-center md:flex-row gap-0 md:gap-2 md:items-center mt-6 md:mt-0 '>
                                    <ul className="menu-horizontal flex gap-10 text-white bg-neutral">
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
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-52 bg-[#0a192fc0] text-white">

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