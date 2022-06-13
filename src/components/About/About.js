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
import './About.css'

const About = () => {


    return (
        <section id='about' className='pt-24'>
            <div>
                <h1 className='uppercase text-4xl md:text-5xl text-base-100 opacity-50 font-bold lg:text-center pl-3 pb-5 md:px-7 lg:pb-16'>About Me</h1>
            </div>
            <div className='rounded-lg mb-16 flex flex-col-reverse lg:flex-row items-center gap-5 lg:mx-32 p-2 md:p-7'>
                <div className='lg:shrink w-full lg:w-[45%]'>
                    <div className='grid grid-cols-3 gap-10 justify-items-center rounded-lg'>
                        <div>
                            <span className='bg-primary text-4xl text-warning'><SiHtml5 /></span>
                        </div>
                        <div>
                            <span className='bg-primary text-4xl text-warning'><SiCss3 /></span>
                        </div>
                        <div>
                            <span className='bg-primary text-4xl text-warning'><SiTailwindcss /></span>
                        </div>
                        <div>
                            <span className='bg-primary text-4xl text-warning'><SiBootstrap /></span>
                        </div>
                        <div>
                            <span className='bg-primary text-4xl text-warning'><SiJavascript /></span>
                        </div>
                        <div>
                            <span className='bg-primary text-4xl text-warning'><SiReact /></span>
                        </div>
                        <div>
                            <span className='bg-primary text-4xl text-warning'><SiFirebase /></span>
                        </div>
                        <div>
                            <span className='bg-primary text-4xl text-warning'><SiNodedotjs /></span>
                        </div>
                        <div>
                            <span className='bg-primary text-4xl text-warning'><SiMongodb /></span>
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
                    <h2 className='text-3xl md:text-4xl text-success mb-4'><code>Hi_</code></h2>
                    <p className='text-success text-justify'>I am Sabbir Ahmed. I have experience in Front-End Technology with React and also have primary knowledge in Backend Technology with Node.js. I completed some MERN stack project which is fully responsive and looking very fantastic. Always I want to try to learn new features related to Programming and Development. I want to work with a team or a company to build up my career as a Front End Developer.</p>
                    <div className='flex gap-7 mt-7'>

                        <a
                            className='btn_effect text-base-100 uppercase text-sm px-5 py-2 bg-info rounded-full border-2 border-secondary hover:border-primary md:w-32'
                            href='https://drive.google.com/uc?id=14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR&export=download'>
                            My Resume</a>

                        <a
                            className=' btn_effect text-primary uppercase text-sm px-5 py-2 rounded-full border-2 border-primary hover:border-secondary hover:bg-info hover:text-base-100 md:w-32'
                            href='#contact'>
                            Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;