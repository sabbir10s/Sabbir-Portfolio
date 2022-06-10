import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams()

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/server/main/projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    if (projects.length === 0) {
        return <p>Loading</p>
    }

    const project = projects.find(p => p._id === projectId)

    const { imgOne, name, clientRepo, serverRepo, liveSite, technology, description } = project;
    return (
        <div className='bg-[#0a192f] min-h-[90vh]'>
            <div className='grid lg:grid-cols-3 justify-items-center items-center'>
                <div className=' col-span-1'>
                    <div>
                        <img className='w-80 mb-10' src={imgOne} alt="projectPicture" />
                    </div>
                    <div className=''>
                        <a
                            target="_blank"
                            className='mx-1 hover:bg-[#c49b66] hover:text-black bg-primary px-2 lg:w-32 text-center text-[#0a192f] py-1 rounded-lg border-2 border-secondary'
                            href={clientRepo}>
                            Client Repo</a>

                        {
                            serverRepo.length > 5 && <a
                                target="_blank"
                                className='mx-1 hover:bg-[#c49b66] hover:text-black bg-primary px-2 w-32 text-center text-[#0a192f] py-1 rounded-lg border-2 border-secondary'
                                href={serverRepo}>
                                Server Repo</a>
                        }

                        <a
                            target="_blank"
                            className='mx-1 hover:bg-[#c49b66] hover:text-black font-bold bg-primary px-2 w-32 text-center text-[#0a192f] border-2 border-secondary py-1 rounded-lg'
                            href={liveSite}>
                            Live Site</a>
                    </div>
                </div>

                <div className=' lg:col-span-2'>
                    <div className='flex flex-wrap mb-5 lg:justify-start gap-5 uppercase mt-5'>
                        <p className='text-left text-4xl text-primary pt-10'>{name}</p>

                    </div>
                    <p className='text-base-100'>{description}</p>
                    <div className='mt-5 pb-16'>
                        <p className='text-white my-5'>Technology Used: </p>
                        <div className='flex flex-wrap gap-3 text-white'>
                            {
                                technology.map(t => <p className='bg-[#c49b6615] px-5 text-sm py-1 rounded-lg'>{t}</p>)
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;