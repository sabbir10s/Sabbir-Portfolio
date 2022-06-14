import React, { useEffect, useState } from 'react';
import ProjectCart from './ProjectCart';

const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/server/main/projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <section>
            <div id='portfolio' className='pt-16 lg:pt-24'>
                <h1 className='text-4xl md:text-5xl text-base-100 opacity-50 font-bold uppercase lg:text-center pl-3 md:pl-5'>Portfolio</h1>
                <div className='mx-3 md:mx-5 lg:mx-32 pt-12 lg:pt-16 pb-14 grid grid-cols-1 md:grid-cols-3 gap-16'>
                    {
                        projects.map(project => <ProjectCart key={project._id} project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;