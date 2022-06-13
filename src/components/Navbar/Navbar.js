import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/white-logo.png'


const Navbar = ({ children }) => {
    const { pathname } = useLocation()

    //scroll start 
    const [nav, setNev] = useState(false)

    const handleNavigation = (e) => {
        const window = e.currentTarget;

        if (y > window.scrollY) {
            setNev(true)
            console.log("scrolling up");

        } else if (y < window.scrollY) {
            setNev(false)
            console.log("scrolling down");
        }
        setY(window.scrollY);
    };
    const [y, setY] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
        console.log(window.addEventListener);
        return () => {
            // return a cleanup function to unregister our function since its gonna run multiple times
            window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
    }, [y]);

    // console.log(nav);



    return (
        <nav className=''>
            <div className="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full md:px-10 navbar sticky top-0 z-50 bg-[#0a4569]">

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
                                    <div className="menu-horizontal flex gap-10 text-white ">

                                        {
                                            pathname.includes('projectDetails') && <>
                                                <div className='hover:text-secondary'><Link to='/'>Home</Link></div>
                                            </>
                                        }

                                        {
                                            pathname.split('/')[1] !== 'projectDetails' &&
                                            <>
                                                <div className='hover:text-secondary'><a href="#about">About</a></div>
                                                <div className='hover:text-secondary'><a href="#portfolio">Portfolio</a></div>
                                                <div className='hover:text-secondary'><a href="#contact">Contact</a></div>
                                            </>
                                        }

                                        <div>
                                            <a className='border border-secondary hover:bg-neutral px-3 py-[6px] rounded' href='https://drive.google.com/uc?id=14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR&export=download'>Resume</a>
                                        </div>
                                    </div>
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
                    <div className="menu p-4 overflow-y-auto w-52 md:w-72 bg-[#1977b1] text-white">

                        {
                            pathname.includes('projectDetails') && <>
                                <div className='hover:text-secondary'><Link to='/'>Home</Link></div>

                            </>
                        }
                        {
                            pathname.split('/')[1] !== 'projectDetails' && <>
                                <div className='hover:text-secondary mt-7'><a href="#about">About</a></div>
                                <div className='hover:text-secondary mt-7'><a href="#portfolio">Portfolio</a></div>
                                <div className='hover:text-secondary mt-7'><a href="#contact">Contact</a></div>
                            </>
                        }

                        <div className='mt-7'>
                            <a className='text-secondary font-bold' href='https://drive.google.com/uc?id=14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR&export=download'>Resume</a>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;