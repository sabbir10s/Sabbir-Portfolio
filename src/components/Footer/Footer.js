import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-[#043452] text-primary py-8 '>
            <div className='max-w-[1200px] mx-auto px-2 md:px-5 lg:px-12'>
                <p className='text-center'>Copyright &copy; {year} | <a className='text-secondary font-bold' href="https://www.linkedin.com/in/sabbir10s/" target="_blank">Sabbir Ahmed </a></p>
            </div>
        </footer>
    );
};

export default Footer;