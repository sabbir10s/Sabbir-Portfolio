import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';
import Loading from '../../Shared/Loading';

const ProjectDetails = () => {
    const { projectId } = useParams()

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/server/main/projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    if (projects.length === 0) {
        return <Loading />
    }

    const project = projects.find(p => p._id === projectId)

    const { imgOne, name, clientRepo, serverRepo, liveSite, technology, description } = project;
    return (
        <div className='bg-[#0a192f] min-h-[90vh] flex justify-center'>
            <div className='grid lg:grid-cols-2 gap-5 justify-items-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img className='w-[500px] mb-10' src={imgOne} alt="projectPicture" />
                    </div>
                    <div className='flex'>
                        <a
                            target="_blank"
                            className='flex justify-center items-center gap-2 mx-1 hover:bg-[#c49b66] hover:text-info bg-info px-2 w-20 text-center text-primary py-1 rounded-lg border border-secondary'
                            href={clientRepo}>
                            <span><FaGithub /></span>Client</a>

                        {
                            serverRepo.length > 5 && <a
                                target="_blank"
                                className='flex justify-center items-center gap-2 mx-1 hover:bg-[#c49b66] hover:text-info bg-info px-2 w-20 text-center text-primary py-1 rounded-lg border border-secondary'
                                href={serverRepo}>
                                <span><FiGithub /></span>Server</a>
                        }

                        <a
                            target="_blank"
                            className='flex justify-center items-center gap-2 mx-1 hover:bg-[#c49b66] hover:text-info bg-info px-2 w-20 text-center text-primary py-1 rounded-lg border border-secondary'
                            href={liveSite}>
                            <span><BsEyeFill /></span>Live</a>
                    </div>
                </div>

                <div className='mx-2'>
                    <div className='flex flex-wrap mb-5 lg:justify-start gap-5 uppercase'>
                        <p className='text-left text-4xl text-primary pt-10'>{name}</p>

                    </div>
                    <p className='text-base-100'>{description}</p>
                    <div className='mt-5 pb-16'>
                        <p className='text-secondary font-bold my-5'>Technology Used </p>
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