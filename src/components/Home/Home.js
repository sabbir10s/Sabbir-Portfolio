import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import './Home.css'


const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;