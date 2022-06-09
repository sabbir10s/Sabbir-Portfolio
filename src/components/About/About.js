import React from 'react';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';


const About = () => {


    return (
        <>
            <div className='mt-28 uppercase mx-32'>
                {/* <small>Who am i</small>
                <h1 className='text-primary text-4xl   mb-7'>About Me</h1> */}
            </div>
            <div className='bg-base rounded-lg mb-16 flex items-center gap-5 mx-32 p-7'>
                <div className='shrink w-[45%]'>
                    <div className='grid grid-cols-3 gap-10 justify-items-center rounded-lg'>
                        <div>
                            <span className='text-4xl text-primary'><SiHtml5 /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-primary'><SiCss3 /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-primary'><SiTailwindcss /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-primary'><SiBootstrap /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-primary'><SiJavascript /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-primary'><SiReact /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-primary'><SiFirebase /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-primary'><SiNodedotjs /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-primary'><SiMongodb /></span>
                        </div>

                    </div>
                </div>
                <div className='flex-none w-[10%]'>
                    <div className='flex flex-col gap-5 justify-center items-center'>
                        <div className='h-36 bg-base-200 w-0.5'></div>
                        <p className='text-center uppercase text-primary text-xl'>Skills</p>
                        <div className='h-36 bg-base-200 w-0.5'></div>
                    </div>
                </div>
                <div className='shrink w-[45%]'>
                    <h2 className='text-4xl text-gray mb-7'><code>Hi_</code></h2>
                    <p className='text-gray text-justify'>I have experience in Front-End Technology with React and also have primary knowledge in Backend Technology with Node.js. I completed some MERN stack project which is fully responsive and looking very fantastic. Always I want to try to learn new features related to Programming and Development. I want to work with a team or a company to build up my career as a Front End Developer.</p>
                    <div className='flex gap-7 mt-7'>
                        <a href='https://drive.google.com/uc?id=14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR&export=download' className='text-base uppercase text-sm px-5 py-2 bg-gray rounded-full border-2 border-secondary hover:bg-secondary'>Download CV</a>
                        <a href='#contact' className='text-primary uppercase text-sm px-5 py-2 bg-base rounded-full border-2 border-gray hover:bg-gray hover:text-base-100'>Contact Me</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;