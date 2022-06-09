import React, { useEffect, useState } from 'react';
import ProjectCart from './ProjectCart';

const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <>
            <div>
                <h1 className='text-5xl text-center'><code>Portfolio_</code></h1>
                <div className='mx-32 grid grid-cols-3 gap-5 mt-12'>
                    {
                        projects.map(project => <ProjectCart key={project._id} project={project} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Portfolio;