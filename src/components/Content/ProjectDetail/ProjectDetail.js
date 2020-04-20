import React, { useEffect } from 'react';
import './ProjectDetail.css';
import {IoIosTime} from 'react-icons/io';
import {getFormatedDate} from '../../../effects/effects';
// var obj = {
//     "_id": "5e91d370f63d1189f4d1dfe8",
//     "name": "testig 2 sjdbsjbd iabdoqbdbqwd oibqeofib",
//     "description": "lkdnclksdnlkvsnvnlskfnv",
//     "start": "2020-04-13T18:30:00.000Z",
//     "end": "2020-04-16T18:30:00.000Z",
//     "ongoing": false,
//     "url": "adcnv;sf;nv",
//     "createdAt": "2020-04-11T14:25:52.361Z",
//     "updatedAt": "2020-04-11T14:25:52.361Z",
//     "__v": 0
//   };
const ProjectDetail = ({project}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <div className="project-detail">
        <div className="project-name">{project.name}</div>
        <div className="description center">
            <div className="sub-heading font-avg">description</div>
            <div className="description-content">{project.description}</div>
        </div>
        <div className="description center">
        <div className="sub-heading font-avg">started</div>
        <div className="time"><IoIosTime/> {getFormatedDate(project.start)}{project.ongoing ? " - Present":null}</div>
        </div>
        {project.end !== null && project.end.length !== 0  ?
        <div className="description center">
        <div className="sub-heading font-avg">end</div>
        <div className="time"><IoIosTime/> {getFormatedDate(project.end)}</div>
        </div>
        :null}
        {project.url.length !==0 ?<div className="url" onClick={()=>window.open(project.url)}>go to project</div>:null}
        </div>
        
    );
};

export default ProjectDetail;