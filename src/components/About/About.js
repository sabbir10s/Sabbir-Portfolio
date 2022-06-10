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
        <div div className='bg-neutral h-screen flex flex-col justify-center'>
            <div className='uppercase text-center'>
                <small className='text-success'>Who am i</small>
                <h1 className='text-success text-4xl  mb-7'>About Me</h1>
            </div>
            <div className=' rounded-lg mb-16 flex flex-col-reverse lg:flex-row items-center gap-5 lg:mx-32 p-7'>
                <div className='lg:shrink w-full lg:w-[45%]'>
                    <div className='grid grid-cols-3 gap-10 justify-items-center rounded-lg'>
                        <div>
                            <span className='text-4xl text-warning'><SiHtml5 /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-warning'><SiCss3 /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-warning'><SiTailwindcss /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-warning'><SiBootstrap /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-warning'><SiJavascript /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-warning'><SiReact /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-warning'><SiFirebase /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-warning'><SiNodedotjs /></span>
                        </div>
                        <div>
                            <span className='text-4xl text-warning'><SiMongodb /></span>
                        </div>

                    </div>
                </div>
                <div className='flex-none lg:w-[10%]'>
                    <div className='flex lg:flex-col flex-row gap-5 justify-center items-center'>
                        <div className='lg:h-36 bg-success lg:w-0.5 h-0.5 w-32 my-10 lg:my-0'></div>
                        <p className='text-center uppercase text-success text-xl'>Skills</p>
                        <div className='lg:h-36 bg-success lg:w-0.5 h-0.5 w-32 my-10 lg:my-0'></div>
                    </div>
                </div>
                <div className='lg:shrink w-full lg:w-[45%]'>
                    <h2 className='text-4xl text-success mb-7'><code>Hi_</code></h2>
                    <p className='text-success text-justify'>I have experience in Front-End Technology with React and also have primary knowledge in Backend Technology with Node.js. I completed some MERN stack project which is fully responsive and looking very fantastic. Always I want to try to learn new features related to Programming and Development. I want to work with a team or a company to build up my career as a Front End Developer.</p>
                    <div className='flex gap-7 mt-7'>

                        <a href='https://drive.google.com/uc?id=14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR&export=download' className='text-base-100 uppercase text-sm px-5 py-2 bg-info rounded-full border-2 border-secondary hover:bg-secondary'>Download CV</a>

                        <a href='#contact' className='text-primary uppercase text-sm px-5 py-2 bg-base rounded-full border-2 border-info hover:bg-info hover:text-base-100'>Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;