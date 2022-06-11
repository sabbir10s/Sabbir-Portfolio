import React from 'react';
import './Details.css'
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const ProjectCart = ({ project }) => {
    const { _id, name, imgOne, description } = project;
    const navigate = useNavigate()
    const handleProjectDetails = id => {
        navigate(`/projectDetails/${id}`)
    }
    if (project.length === 0) {
        return <Loading />
    }
    return (
        <div className='bg-info rounded-lg shadow-2xl project'>
            <img className='rounded-t-lg w-full' src={imgOne} alt="" />
            <div className='p-5'>
                <p className='text-xl text-primary font-bold mb-2'>{name}</p>
                <p className='text-sm text-base-100'>{description.slice(0, 120)}...</p>
            </div>
            <div className='details hidden'>
                <button onClick={() => handleProjectDetails(_id)} className='bg-primary text-base px-7 py-2 rounded-full '>Details</button>
            </div>
        </div>
    );
};

export default ProjectCart;