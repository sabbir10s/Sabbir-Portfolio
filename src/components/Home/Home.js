import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blogs from '../Blogs/Blogs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Works from '../Projects/Works';



const Home = () => {
    return (
        <>
            <div className='container mx-auto px-2 '>
                <Banner />
                <About />
                {/* <Projects /> */}
                <Works />
                <Contact />
                <Blogs />
            </div>
            <Footer />

        </>
    );
};

export default Home;