import React, { useEffect, useState } from 'react';
import ProjectCart from './ProjectCart';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [projectType, setProjectType] = useState('personal')
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/sabbir-portfolio/main/public/data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const myProject = projects.filter((project => project.type === 'personal'))
    const myContribution = projects.filter((project => project.type === 'team'))
    console.log(myProject);
    return (
        <section>
            <div id='project' className='pt-16 lg:pt-24'>
                <h1 className='text-4xl md:text-5xl text-base-100 opacity-50 font-bold uppercase lg:text-center mx-2 md:mx-5 '>My Recent Work</h1>

                <div className='flex items-center justify-center gap-4 pt-4 pb-12'>
                    <button className={`text-base font-semibold border-b pb-[1px] ${projectType === "personal" ? 'text-secondary border-b-secondary' : 'text-base-100 opacity-70 border-b-transparent'}`} onClick={() => setProjectType('personal')}>Personal Projects</button>
                    <span className='text-white'> /</span>
                    <button className={`text-base font-semibold border-b pb-[1px] ${projectType === "team" ? 'text-secondary border-b-secondary' : 'text-base-100 opacity-70 border-b-transparent'}`} onClick={() => setProjectType('team')}>My contribution</button>
                </div>
                <div className='pb-14 grid grid-cols-1 md:grid-cols-2 gap-16'>
                    {
                        projectType === 'personal' && myProject.map(project => <ProjectCart key={project._id} project={project} />)
                    }
                    {
                        projectType === 'team' && myContribution.map(project => <ProjectCart key={project._id} project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;