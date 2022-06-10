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
        <>
            <div id='portfolio'>
                <h1 className='text-4xl text-success text-center uppercase'>Portfolio</h1>
                <div className='lg:mx-32 grid grid-cols-1 md:grid-cols-3 gap-5 mt-12'>
                    {
                        projects.map(project => <ProjectCart key={project._id} project={project} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Portfolio;