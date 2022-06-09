import React from 'react';

const ProjectCart = ({ project }) => {
    const { name, imgOne, description } = project
    return (
        <div className='bg-base rounded-lg'>
            <img className='rounded-t-lg' src={imgOne} alt="" />
            <div className='p-5'>
                <p className='text-xl text-primary font-bold mb-2'>{name}</p>
                <p className='text-sm text-gray'>{description.slice(0, 120)}...</p>
            </div>
        </div>
    );
};

export default ProjectCart;