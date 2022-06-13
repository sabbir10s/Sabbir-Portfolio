import React from 'react';
// import TypeAnimation from 'react-type-animation';
import profile from '../../img/profile.png'
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import './Banner.css'
import TextTransition from 'react-text-transition';

const TEXTS = [
    "Md. Sabbir Ahmed",
    "Frontend Developer",
];

const Banner = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <div className='bg-neutral cover pb-20'>
                <div className=' h-52 lg:h-62'>
                </div>
                <div className='flex justify-center mt-[-90px] '>
                    <div className=' flex justify-center'>
                        <img className='w-[150px] bg-success rounded-full' src={profile} alt="" />
                    </div>

                </div>
                <div className='flex justify-center ml-64 mt-[-85px] mb-14'>
                    <div className='flex'>
                        <a
                            className='btn_effect w-10 h-10 flex justify-center items-center  bg-primary rounded-full tooltip tooltip-info hover:tooltip-open tooltip-right' data-tip="email"
                            href='mailto:sabbirahmed1023@gmail.com'>
                            <p className=' text-secondary text-4xl mt-[-5px]'>+</p> </a>
                    </div>
                </div>
                <h1 className='text-primary text-center text-5xl welcome mb-3'>Welcome!</h1>
                <div className='mr-[190px] text-3xl md:text-4xl  md:mr-[220px]'>
                    <div className='grid grid-cols-2 gap-3 forMe'>
                        <h2 className='text-right text-primary'>I am</h2>
                        <h2 className='text-secondary text-left'>
                            <TextTransition
                                text={TEXTS[index % TEXTS.length]}
                                direction="down"
                                inline
                                noOverflow
                                springConfig={{ stiffness: 50, damping: 20 }}
                            />
                        </h2>
                    </div>


                </div>

                <div className='flex justify-center items-center gap-5 py-5 text-base-100 text-lg'>
                    <a
                        className='btn_effect hover:border-primary bg-info border border-secondary text-primary rounded-full p-2'
                        href="https://www.linkedin.com/in/sabbir10s/"
                        target="_blank">
                        <GrLinkedinOption /></a>
                    <a
                        className='btn_effect hover:border-primary bg-info border border-secondary text-primary rounded-full p-2'
                        href="https://github.com/sabbir10s"
                        target="_blank">
                        <AiOutlineGithub /></a>
                    <a
                        className='btn_effect hover:border-primary bg-info border border-secondary text-primary rounded-full p-2'
                        href="https://www.facebook.com/sabbir10s/"
                        target="_blank">
                        <FaFacebookF /></a>
                </div>
            </div>
        </>
    );
};

export default Banner;