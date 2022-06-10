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
    console.log(projectId);
    const project = projects.find(p => p._id === projectId)
    console.log(project);

    return (
        <div>
            <p>Hello {projectId}</p>
            <p>{project?.name}</p>
        </div>
    );
};

export default ProjectDetails;