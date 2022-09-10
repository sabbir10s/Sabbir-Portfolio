import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Blogs from '../Blogs/Blogs';
import Banner from '../Banner/Banner';



const Home = () => {
    return (
        <>
            <div className='bg-neutral px-2 md:px-5 lg:px-32'>
                <Banner />
                <About />
                <Portfolio />
                <Contact />
                <Blogs />
            </div>

        </>
    );
};

export default Home;