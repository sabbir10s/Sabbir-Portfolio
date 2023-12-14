import React, { useEffect, useState } from 'react';
import WorkView from './WorkView';

const Works = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/sabbir-portfolio/main/public/data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <section>
            <div id='project' className='pt-16 lg:pt-24'>
                <h1 className='text-4xl md:text-5xl text-base-100 opacity-50 font-bold uppercase lg:text-center mx-2 md:mx-5 '>My Recent Work</h1>

                <div className='py-20 space-y-32'>
                    {
                        projects.map((project, index) => <WorkView index={index} key={project._id} project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Works;