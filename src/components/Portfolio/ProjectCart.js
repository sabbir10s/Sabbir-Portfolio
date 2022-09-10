import React from 'react';
import './Details.css'
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { BsEyeFill } from 'react-icons/bs';

const ProjectCart = ({ project }) => {
    const { _id, name, imgOne, description, liveSite } = project;
    const navigate = useNavigate()
    const handleProjectDetails = id => {
        navigate(`/projectDetails/${id}`)
    }
    if (project.length === 0) {
        return <Loading />
    }
    return (
        <div className='projectCart border border-secondary rounded-lg'>
            <div className='bg-[#0a4569] rounded-t-lg'>
                <img className='cartImg rounded-t-lg' src={imgOne} alt="" />
            </div>
            <div className='p-5'>
                <p className='text-xl text-primary font-bold mb-2'>{name}</p>
                <p className='text-sm text-base-100'>{description.slice(0, 120)}...</p>
            </div>
            <div className='CartButtonHeader'>
                <div className='CartButton flex justify-center items-center gap-7'>
                    <a
                        target="_blank"
                        className=' hover:text-info text-primary text-3xl'
                        href={liveSite}>
                        <span><BsEyeFill /></span></a>
                    <button
                        onClick={() => handleProjectDetails(_id)}
                        className=' bg-neutral hover:bg-[#0a4569] px-4 py-1 rounded border border-secondary text-sm'>
                        Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCart; 