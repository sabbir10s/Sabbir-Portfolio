import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Blogs from '../Blogs/Blogs';



const Home = () => {
    return (
        <>
            <div className='bg-neutral'>
                <Banner />
                <About />
                <Portfolio />
                <Contact />
                <Blogs />
                <Footer />
            </div>

        </>
    );
};

export default Home;