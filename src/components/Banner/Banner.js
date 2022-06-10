import React from 'react';
import TypeAnimation from 'react-type-animation';
import profile from '../../img/profile.png'
import { AiOutlineDownload } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
const Banner = () => {
    return (
        <>
            <div className='bg-neutral h-screen'>
                <div className='bg-neutral count-particles h-52 lg:h-72'>
                    <span class="js-count-particles">--</span>
                </div>
                <div className='flex justify-center mt-[-90px] '>
                    <div className=' flex justify-center'>
                        <img className='w-[150px] bg-success rounded-full' src={profile} alt="" />
                    </div>

                </div>
                <div className='flex justify-center ml-64 mt-[-85px]'>
                    <div className='flex'>
                        <a className='resume-button bg-primary text-secondary  text-2xl flex justify-center items-center  h-12 w-12 rounded-full shadow-2xl' href='https://drive.google.com/uc?id=14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR&export=download'><AiOutlineDownload /> </a>
                        <span className='resume hidden py-3 rounded-r-full'>Resume</span>
                    </div>
                </div>
                <div className='text-center mt-14'>
                    <h1 className='text-xl text-secondary font-bold  mt-3'>
                        <div className='block h-7'>
                            {
                                <TypeAnimation
                                    cursor={true}
                                    sequence={['Front-End Developer', 3000, 'Web Designer', 3000]}
                                    repeat={Infinity}
                                    wrapper="div"
                                />
                            }
                        </div>
                    </h1>
                    <h1 className='text-5xl text-success mt-3'>Sabbir Ahmed</h1>

                </div>

                <div className='flex justify-center items-center gap-5 py-5 text-base text-lg'>
                    <a className='bg-info text-primary rounded-full p-2' href="https://www.linkedin.com/in/sabbir10s/" target="_blank"><GrLinkedinOption /></a>
                    <a className='bg-info text-primary rounded-full p-2' href="https://github.com/sabbir10s" target="_blank"><AiOutlineGithub /></a>
                    <a className='bg-info text-primary rounded-full p-2' href="https://www.facebook.com/sabbir10s/" target="_blank"><FaFacebookF /></a>


                </div>
            </div>
        </>
    );
};

export default Banner;