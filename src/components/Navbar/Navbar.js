import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const { pathname } = useLocation()

    //scroll start 
    const [nav, setNev] = useState(false)

    const handleNavigation = (e) => {
        const window = e.currentTarget;

        if (y > window.scrollY) {
            setNev(true)
            // console.log("scrolling up");

        } else if (y < window.scrollY) {
            setNev(false)
            // console.log("scrolling down");
        }
        setY(window.scrollY);
    };
    const [y, setY] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
        // console.log(window.addEventListener);
        return () => {
            // return a cleanup function to unregister our function since its gonna run multiple times
            window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
    }, [y]);

    //bg-[#0a4569]



    return (
        <div className={nav === true ? " sticky top-0 z-50 bg-neutral shadow-xl" : ' bg-neutral shadow-xl'}>
            <div className='py-6 container mx-auto px-2  bg-[#0a192f]'>
                <div className='flex justify-between'>

                    <div className="lg:hidden">
                        <div className="flex">
                            <Link to='/'><img
                                className="block lg:hidden h-8 w-auto"
                                src='https://i.ibb.co/Sy0c7hN/white-logo.png'
                                alt="sabbir ahmed"
                            /></Link>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="dropdown-content menu shadow bg-[#1977b1] rounded-box w-52">
                            <div className="menu p-4 overflow-y-auto w-52 md:w-72  text-white">

                                {
                                    pathname.includes('projectDetails') && <>
                                        <div className='hover:text-secondary'><Link to='/'>Home</Link></div>

                                    </>
                                }
                                {
                                    pathname.split('/')[1] !== 'projectDetails' && <>
                                        <div className='hover:text-secondary mt-7'><a href="#home">Home</a></div>
                                        <div className='hover:text-secondary mt-7'><a href="#about">About</a></div>
                                        <div className='hover:text-secondary mt-7'><a href="#project">Projects</a></div>
                                        <div className='hover:text-secondary mt-7'><a href="#contact">Contact</a></div>
                                    </>
                                }

                                <div className='my-7'>
                                    <a
                                        className='border border-secondary hover:bg-[#0a4569] px-3 py-[6px] rounded'
                                        href='https://drive.google.com/file/d/14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR/view?usp=sharing' target='_blank'>Resume</a>
                                </div>

                            </div>
                        </ul>

                    </div>
                </div>
                <div>
                    <div className="hidden lg:flex items-center justify-between">
                        <div>
                            <Link to='/'>
                                <img
                                    className="hidden lg:block h-8 w-auto"
                                    src="https://i.ibb.co/Sy0c7hN/white-logo.png"
                                    alt="sabbir ahmed"
                                />
                            </Link>
                        </div>
                        <div className="text-white flex gap-10">

                            {
                                pathname.includes('projectDetails') && <>
                                    <div className='hover:text-secondary'><Link to='/'>Home</Link></div>

                                </>
                            }

                            {
                                pathname.split('/')[1] !== 'projectDetails' &&
                                <>
                                    <div className='hover:text-secondary'><a href="#home">Home</a></div>
                                    <div className='hover:text-secondary'><a href="#about">About</a></div>
                                    <div className='hover:text-secondary'><a href="#project">Projects</a></div>
                                    <div className='hover:text-secondary'><a href="#contact">Contact</a></div>
                                </>
                            }

                            <div>
                                <a
                                    className='border border-secondary hover:bg-[#0a4569] px-3 py-[6px] rounded'
                                    href='https://drive.google.com/file/d/14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR/view?usp=sharing' target='_blank'>Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;