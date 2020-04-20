import React, { useEffect } from 'react';
import './Projects.css';
import {FiSettings} from 'react-icons/fi';
const Projects = (props) => {
    const scrollToComponent = (id) => {

        let scrollDiv = document.getElementById(id).offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    }

    useEffect(()=>{
        window.scrollTo(0,0);
        if(props.play){
            setTimeout(()=>scrollToComponent('bottom'),2000);
           
        }
    },[])
    return (
        <div className="projects">
            <div className="title heading">Projects</div>
            <div className="projects-grid">
            {props.projects.map(project => {return(
                        <div className="project-tile" key={project._id} onClick={()=>{props.selected(project)}}>
                            <div className="project-icon"><FiSettings/></div>
                            <div className="project-title">{project.name}</div>
                            
                            </div>
                    )}) }
            </div>
            <div id="bottom"></div>
        </div>
    );
};

export default Projects;