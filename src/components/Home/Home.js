import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blogs from '../Blogs/Blogs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';



const Home = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto px-2 md:px-5 lg:px-12'>
                <Banner />
                <About />
                <Projects />
                <Contact />
                <Blogs />
            </div>
            <Footer />

        </>
    );
};

export default Home;