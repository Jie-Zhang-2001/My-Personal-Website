import React from 'react'
// import { ProjectContext } from '../Pages/Project'

function ProjectItem(props) {
    // let { title, desc, src } = useContext(ProjectContext);
    let { title, desc, src, link } = props;
    return (
        <a href={link}>
        <div className='projectItem'>
            <img src={src}></img>
            <h1>{title}</h1>
            <p>{desc}</p>
            </div>
         </a>
    )
}

export default ProjectItem;