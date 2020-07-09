import React, { createContext, useState, useEffect } from 'react'
import ProjectItem from '../component/ProjectItem'
import {Row } from 'antd';

export const ProjectContext = createContext();

function Project() {
    const [project, setProject] = useState([]);
    useEffect(() => {
        const fetchData =  async () => {
            const url = 'http://localhost:4000/projects';
            const data = await fetch(url);
            const item = await data.json();
            setProject(item);
          }
          fetchData();
      }, [])

    return (
        <div>
            <Row type='flex' justify='space-around'>
                {project.map((item, index) => (
                    <ProjectContext.Provider value={{ title: item.title, desc: item.desc, src: item.src }} key={index}>
                        <ProjectItem />
                    </ProjectContext.Provider>
                ))}
            </Row>
        </div>)
}

export default Project;