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
                <h1 className='uppercase text-4xl md:text-5xl text-base-100 opacity-50 font-bold lg:text-center pb-10 lg:pb-20'>About Me</h1>
            </div>
            <div className='rounded-lg mb-5 flex flex-col-reverse lg:flex-row items-center gap-12'>
                <div className='w-full'>
                    <div className='grid grid-cols-3 justify-items-center gap-10'>
                        <div className='logo-cart '>
                            <div className='logo-cart-inner'>
                                <div className='logo-front logoShadow rounded flex justify-center items-center'>
                                    <span className='text-warning text-4xl'><SiHtml5 /></span>
                                </div>
                                <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >HTML5 </span></div>
                            </div>
                        </div>
                        <div className='logo-cart '>
                            <div className='logo-cart-inner'>
                                <div className='logo-front logoShadow rounded flex justify-center items-center'>
                                    <span className='text-warning text-4xl'><SiCss3 /></span>
                                </div>
                                <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >CSS3 </span></div>
                            </div>
                        </div>
                        <div className='logo-cart '>
                            <div className='logo-cart-inner'>
                                <div className='logo-front logoShadow rounded flex justify-center items-center'>
                                    <span className='text-warning text-4xl'><SiTailwindcss /></span>
                                </div>
                                <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >TailwindCSS </span></div>
                            </div>
                        </div>
                        <div className='logo-cart '>
                            <div className='logo-cart-inner'>
                                <div className='logo-front logoShadow rounded flex justify-center items-center'>
                                    <span className='text-warning text-4xl'><SiBootstrap /></span>
                                </div>
                                <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >Bootstrap</span></div>
                            </div>
                        </div>
                        <div className='logo-cart'>
                            <div className='logo-cart-inner'>
                                <div className='logo-front logoShadow rounded flex justify-center items-center'>
                                    <span className='text-warning text-4xl'><SiJavascript /></span>
                                </div>
                                <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >JavaScript</span></div>
                            </div>
                        </div>

                        <div className='logo-cart'>
                            <div className='logo-cart-inner'>
                                <div className='logo-front logoShadow rounded flex justify-center items-center'>
                                    <span className='text-warning text-4xl'><SiReact /></span>
                                </div>
                                <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >React</span></div>
                            </div>
                        </div>
                        <div className='logo-cart'>
                            <div className='logo-cart-inner'>
                                <div className='logo-front logoShadow rounded flex justify-center items-center'>
                                    <span className='text-warning text-4xl'><SiFirebase /></span>
                                </div>
                                <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >Firebase</span></div>
                            </div>
                        </div>
                        <div className='logo-cart '>
                            <div className='logo-cart-inner'>
                                <div className='logo-front logoShadow rounded flex justify-center items-center'>
                                    <span className='text-warning text-4xl'><SiNodedotjs /></span>
                                </div>
                                <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >Node.js</span></div>
                            </div>
                        </div>
                        <div className='logo-cart '>
                            <div className='logo-cart-inner'>
                                <div className='logo-front logoShadow rounded flex justify-center items-center'>
                                    <span className='text-warning text-4xl'><SiMongodb /></span>
                                </div>
                                <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >MongoDB</span></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full lg:w-10 mx-auto'>
                    <div className='flex lg:flex-col flex-row gap-5 justify-center items-center'>
                        <div className='lg:h-36 bg-success lg:w-0.5 h-0.5 w-32 my-10 lg:my-0'></div>
                        <p className='text-center uppercase text-success text-xl'>Skills</p>
                        <div className='lg:h-36 bg-success lg:w-0.5 h-0.5 w-32 my-10 lg:my-0'></div>
                    </div>
                </div>
                <div className='w-full'>
                    <h2 className='text-3xl md:text-4xl text-success mb-4'><code>Hi_</code></h2>
                    <p className='text-success text-justify'>I am Sabbir Ahmed. As a curious learner, I love to explore new features related to Programming and Development. Last 1 year I completed more than 4 MERN stack projects which are fully dynamic & responsive. Recently I worked with a team to build up an online event scheduling website. Where I learned how to contribute to a team project. Now I want to work with a team or a company to build up my career as a Web Developer.</p>
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