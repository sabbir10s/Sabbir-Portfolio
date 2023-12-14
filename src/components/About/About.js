import React from 'react';
import { SiHtml5, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { AiOutlineDownload } from 'react-icons/ai';
import './About.css'
const Skills = [
    {
        name: "HTML",
        icon: <SiHtml5 />
    },
    {
        name: "CSS",
        icon: <SiCss3 />
    },
    {
        name: "TailwindCSS",
        icon: <SiTailwindcss />
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap />
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />
    },
    {
        name: "React",
        icon: <SiReact />
    },
    {
        name: "Firebase",
        icon: <SiFirebase />
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs />
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />
    },
    {
        name: "MongoDB",
        icon: <SiMongodb />
    },

]
const About = () => {


    return (
        <section id='about' className='pt-24'>
            <div>
                <h1 className='uppercase text-4xl md:text-5xl text-base-100 opacity-50 font-bold lg:text-center pb-10 lg:pb-20'>About Me</h1>
            </div>
            <div className='rounded-lg mb-5 flex flex-col-reverse lg:flex-row items-center gap-12'>
                <div className='w-full'>
                    <div className='grid grid-cols-4 justify-items-center gap-6 md:gap-10'>
                        {
                            Skills.map(({ name, icon }, idx) => {
                                return <div key={idx}>
                                    <div className='logo-cart '>
                                        <div className='logo-cart-inner'>
                                            <div className='logo-front logoShadow rounded flex flex-col gap-3 justify-center items-center'>
                                                <span className='text-warning text-4xl'>{icon}</span>
                                                <span className='text-gray-400 text-xs'>{name}</span>
                                            </div>
                                            <div className='logo-back logoShadow text-warning  text-sm flex justify-center items-center'><span >{name} </span></div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

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
                    <p className='text-success text-justify'>I'm Sabir Ahmed, a skilled front-end developer with a 5-month internship experience. Proficient in JavaScript, React, Tailwind, and other essential front-end technologies. <br /><br /> I prioritize writing clean and efficient code for visually appealing and seamless websites across devices and browsers. I stay updated with the latest trends and best practices, always seeking to turn design concepts into interactive web experiences.
                        <br /> <br />
                        Now, I'm eager to contribute my skills and creativity to a dynamic and innovative team. I embrace new challenges and am committed to continuous growth as a front-end developer.Let's create exceptional web experiences together!
                    </p>
                    <div className='flex gap-7 mt-7'>

                        <a
                            className='btn_effect text-base-100 uppercase text-sm px-5 py-2 bg-info rounded-full border-2 border-secondary hover:border-primary md:w-32 flex items-center justify-center gap-2'
                            href='https://drive.google.com/uc?id=14Va6VzPJWcntwFqTHnYJYuhVhRHj5DSR&export=download'>
                            <AiOutlineDownload className='font-bold text-xl' /> <span>Resume</span></a>

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