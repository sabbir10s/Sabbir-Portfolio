import React from 'react';
// import TypeAnimation from 'react-type-animation';
import profile from '../../img/profile.png'
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdOutlineDownloadDone } from 'react-icons/md';
import TextTransition from 'react-text-transition';

const TEXTS = [
    "Web Designer",
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
        <section>
            <div className='mx-2 md:mx-5 lg:mx-32 h-[80vh] md:h-[90vh] flex flex-col justify-center'>

                <div className='grid grid-cols-3 lg:grid-cols-4 items-center'>
                    <div className=' hidden lg:display-block col-span-1 lg:flex justify-center'>
                        <img className='w-[220px] border-2 border-white p-2 rounded-full' src={profile} alt="" />
                    </div>

                    <div className=' col-span-2 flex flex-col gap-1.5'>
                        <h2 className='text-primary text-xl md:text-4xl'>I’AM</h2>
                        <h1 className='text-secondary font-bold text-3xl md:text-6xl'>SABBIR AHMED</h1>
                        <h2 className='text-primary text-xl md:text-3xl text-left uppercase'>
                            <TextTransition
                                text={TEXTS[index % TEXTS.length]}
                                direction="down"
                                inline
                                noOverflow
                                springConfig={{ stiffness: 50, damping: 20 }}
                            />
                        </h2>
                        <div className='text-primary flex items-center gap-3 mt-5'>
                            <span>CHECK MY RESUME</span>
                            <a
                                className='btn_effect text-info text-xl p-1 bg-primary rounded-full border hover:border-secondary'
                                href='mailto:sabbirahmed1023@gmail.com'>
                                <MdOutlineDownloadDone /></a>

                        </div>
                    </div>

                    <div className=' col-span-1 flex justify-end'>
                        <div className='flex flex-col items-center justify-center gap-5 text-base-100 text-sm md:text-normal'>
                            <span className='p-1 bg-primary/50'></span>
                            <span className=' w-[0.2px] bg-white/50 h-20'></span>
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

                            <span className=' w-[0.2px] bg-white/50 h-20'></span>
                            <span className='p-1 bg-primary/50'></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;