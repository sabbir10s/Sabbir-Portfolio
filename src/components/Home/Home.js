import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Blogs from '../Blogs/Blogs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto px-2 md:px-5 lg:px-12'>
                <Banner />
                <About />
                <Portfolio />
                <Contact />
                <Blogs />
            </div>
            <Footer />

        </>
    );
};

export default Home;