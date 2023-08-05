import React, { useEffect, useState } from 'react';
import ProjectCart from './ProjectCart';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/server/main/projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <section>
            <div id='project' className='pt-16 lg:pt-24'>
                <h1 className='text-4xl md:text-5xl text-base-100 opacity-50 font-bold uppercase lg:text-center mx-2 md:mx-5 pb-16'>projects</h1>
                <div className='pb-14 grid grid-cols-1 md:grid-cols-3 gap-16'>
                    {
                        projects.map(project => <ProjectCart key={project._id} project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;