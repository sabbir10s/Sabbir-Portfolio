import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiBootstrap, SiCss3, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';

const Blogs = () => {

    const settings = {
        speed: 500,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section>
            <h1 className='text-5xl text-base-100 opacity-50 font-bold uppercase text-center mt-14'>Blogs</h1>
            <div className='h-52 flex justify-center items-center'>
                <h1 className='text-center text-white/25 text-4xl'>Coming Soon...</h1>

                {/* <div>
                    <div className='block mx-32'>
                        <Slider {...settings}>
                            <div className='p-5 mx-16'>
                                <span className='bg-primary text-5xl text-warning'><SiHtml5 /></span>
                            </div>
                            <div className='p-5 mx-16'>
                                <span className='bg-primary text-5xl text-warning'><SiCss3 /></span>
                            </div>
                            <div className='p-5 mx-16'>
                                <span className='bg-primary text-5xl text-warning'><SiTailwindcss /></span>
                            </div>
                            <div className='p-5 mx-16'>
                                <span className='bg-primary text-5xl text-warning'><SiBootstrap /></span>
                            </div>
                            <div className='p-5 mx-16'>
                                <span className='bg-primary text-5xl text-warning'><SiJavascript /></span>
                            </div>
                            <div className='p-5 mx-16'>
                                <span className='bg-primary text-5xl text-warning'><SiReact /></span>
                            </div>
                            <div className='p-5 mx-16'>
                                <span className='bg-primary text-5xl text-warning'><SiFirebase /></span>
                            </div>
                            <div className='p-5 mx-16'>
                                <span className='bg-primary text-5xl text-warning'><SiNodedotjs /></span>
                            </div>
                            <div className='p-5 mx-16'>
                                <span className='bg-primary text-5xl text-warning'><SiMongodb /></span>
                            </div>
                        </Slider>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Blogs;