import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';
import Loading from '../../Shared/Loading';
import { HiUserGroup } from 'react-icons/hi';

const ProjectDetails = () => {
    const { projectId } = useParams()

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/server/main/projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    if (!projects.length) {
        return <Loading />
    }

    const project = projects.find(p => p._id === projectId)

    const { imgOne, name, type, clientRepo, serverRepo, liveSite, technology, description } = project;
    return (
        <div className='bg-[#0a192f] min-h-screen'>
            <div className='container mx-auto pt-4 px-2'>
                <div className='grid gap-5 justify-items-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <img className='w-[800px] mb-10' src={imgOne} alt="projectPicture" />
                        </div>
                        <div className='flex'>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                className='flex justify-center items-center gap-2 mx-1 hover:bg-[#c49b66] hover:text-info bg-info px-6 py-2 text-center text-primary rounded-lg border border-secondary'
                                href={clientRepo}>
                                <span><FaGithub /></span>Client Repo</a>

                            {
                                serverRepo && <a
                                    rel="noreferrer"
                                    target="_blank"
                                    className='flex justify-center items-center gap-2 mx-1 hover:bg-[#c49b66] hover:text-info bg-info px-6 py-2 text-center text-primary rounded-lg border border-secondary'
                                    href={serverRepo}>
                                    <span><FiGithub /></span>Server Repo</a>
                            }

                            {
                                liveSite && <a
                                    rel="noreferrer"
                                    target="_blank"
                                    className='flex justify-center items-center gap-2 mx-1 hover:bg-[#c49b66] hover:text-info bg-info px-6 py-2 text-center text-primary rounded-lg border border-secondary'
                                    href={liveSite}>
                                    <span><BsEyeFill /></span>Live</a>
                            }
                        </div>
                    </div>

                    <div className='mx-2'>
                        <div className='flex items-center mb-5 gap-5'>
                            <p className='text-left text-2xl md:text-3xl lg:ext-4xl text-primary'>{name}</p>
                            <div className='text-secondary flex items-center gap-1 text-lg'>
                                {type === 'team' && <>(<HiUserGroup /> <span>Team Project</span>)</>}
                            </div>
                        </div>
                        <p className='text-base-100'>{description}</p>
                        <div className='mt-5 pb-16'>
                            <p className='text-secondary font-bold my-5'>Technology Used </p>
                            <div className='flex flex-wrap gap-3 text-white'>
                                {
                                    technology.map((t, index) => <p key={index} className='bg-[#c49b6615] px-5 text-sm py-1 rounded-lg'>{t}</p>)
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ProjectDetails;