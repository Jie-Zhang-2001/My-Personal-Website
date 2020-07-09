import React,{useContext} from 'react'
import { ProjectContext } from '../Pages/Project'

function ProjectItem() {
    let { title, desc, src } = useContext(ProjectContext);
    return (
        <div className='projectItem'>
            <img src={src}></img>
            <h1>{title}</h1>
            <p>{desc}</p>
            <h1 className='learnMore'>Learn More</h1>
        </div>
    )
}

export default ProjectItem;