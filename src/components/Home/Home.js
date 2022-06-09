import React from 'react';
import profile from '../../img/profile.png'
import { AiOutlineDownload } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <>
            <div className='bg-base-100 pb-10'>
                <div className='bg-primary h-72'></div>
                <div className='flex justify-center mt-[-90px] '>
                    <div className=' flex justify-center'>
                        <img className='w-[150px] bg-base-200 rounded-full' src={profile} alt="" />
                    </div>

                </div>
                <div className='flex justify-center ml-64 mt-[-85px]'>
                    <a href='https://drive.google.com/uc?id=14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR&export=download' className='bg-base text-primary  text-2xl flex justify-center items-center  h-12 w-12 rounded-full shadow-2xl'><AiOutlineDownload /></a>
                </div>
                <div className='text-center mt-14'>
                    <h1 className='text-xl text-secondary  mt-3'>React Developer</h1>
                    <h1 className='text-5xl text-primary mt-3'>Sabbir Ahmed</h1>

                </div>

                <div className='flex justify-center items-center gap-5 py-5 text-base text-lg'>
                    <a className='bg-secondary rounded-full p-2' href="https://www.linkedin.com/in/sabbir10s/" target="_blank"><GrLinkedinOption /></a>
                    <a className='bg-secondary rounded-full p-2' href="https://github.com/sabbir10s" target="_blank"><AiOutlineGithub /></a>
                    <a className='bg-secondary rounded-full p-2' href="https://www.facebook.com/sabbir10s/" target="_blank"><FaFacebookF /></a>
                </div>
                <About />
                <Portfolio />
                <Contact />
            </div>
        </>
    );
};

export default Home;