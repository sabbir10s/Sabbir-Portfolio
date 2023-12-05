import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-[#043452] text-primary py-8 '>
            <div className='container mx-auto px-2 '>
                <p className='text-center'>Copyright &copy; {year} | <a className='text-secondary font-bold' href="https://www.linkedin.com/in/sabbir10s/" target="_blank">Sabbir Ahmed </a></p>
            </div>
        </footer>
    );
};

export default Footer;