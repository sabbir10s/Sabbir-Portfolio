import React from 'react';
import './Details.css'
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { HiUserGroup } from 'react-icons/hi';

const WorkView = ({ project, index }) => {
    const { _id, name, type, imgOne, description, liveSite, technology } = project;
    const navigate = useNavigate()
    const handleProjectDetails = id => {
        navigate(`/projectDetails/${id}`)
    }
    if (project.length === 0) {
        return <Loading />
    }
    return (
        <div className={
            index + 1 === 2
                ? "grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-14"
                : "grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-14"
        }>
            <a
                className={`relative ${index === 1 ? "xl:order-2" : "xl:order-1"
                    }`}
                href={liveSite} rel="noreferrer"
                target="_blank"
            >
                <img className=' hover:scale-105 duration-1000' src={imgOne} alt="" />
            </a>
            <div className={`flex flex-col xl:gap-14 ${index === 1 ? "order-1" : "order-2"
                }`}>
                <div className='order-2 xl:order-1 space-y-4'>
                    <div className='mb-2  mt-6 xl:mt-0 flex items-center justify-between'>
                        <span className='text-4xl text-primary font-bold mb-2'>{name} </span>
                        <div className='text-secondary flex items-center gap-2 text-sm'>
                            {type === 'team' && <><HiUserGroup /> <span>Team Project</span></>}
                        </div>
                    </div>
                    <p className='text-lg text-white'>{description}</p>
                    <button
                        onClick={() => handleProjectDetails(_id)}
                        className='btn_effect tracking-widest uppercase text-sm px-5 py-2 bg-info border-2 border-secondary hover:border-primary md:w-32 flex items-center justify-center text-secondary'>
                        Details</button>

                </div>
                <div className='order-1 xl:order-2 flex flex-wrap gap-3 text-white'>
                    {
                        technology.map((t, index) => <p key={index} className='bg-[#c49b6615] px-3 xl:px-5 text-xs py-1 rounded-lg'>{t}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkView; 