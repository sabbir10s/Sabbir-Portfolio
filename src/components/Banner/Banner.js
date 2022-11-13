import React from 'react';
import { useState } from 'react';
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdOutlineDone } from 'react-icons/md';
import TextTransition from 'react-text-transition';

const TEXTS = [
    "Web Developer",
    "Expert in MERN Stack",
];

const Banner = () => {

    const [index, setIndex] = React.useState(0);

    const [copied, setCopied] = useState(false)

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const handleCopyToClipboard = (eventURL) => {
        navigator.clipboard.writeText(eventURL);
        setCopied(true)
    };

    return (
        <section>
            <div className='py-24'>

                <div className='grid grid-cols-3 lg:grid-cols-4 items-center'>
                    <div className=' hidden lg:display-block col-span-1 lg:flex justify-center'>
                        <img className='w-[220px] border-2 border-white p-2 rounded-full' src='https://i.ibb.co/x8V1vkm/profile.jpg' alt="" />
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
                        <button
                            onClick={() => handleCopyToClipboard('sabbirahmed1023@gmail.com')}
                            className='btn_effect mt-4 py-1.5 rounded w-32 text-center border border-secondary text-primary hover:bg-info/70 hover:border-primary'>
                            {
                                copied === false ? <p className='flex justify-center items-center gap-1'><AiOutlineMail className='text-xl' /> <span> Mail Me</span></p>
                                    :
                                    <p className='flex justify-center items-center'><span>Email Copied</span> <MdOutlineDone className='text-green-400 text-xl font-bold' /></p>
                            }
                        </button>
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
                                href="https://twitter.com/sabbir10s"
                                target="_blank">
                                <AiOutlineTwitter /></a>

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