import React, { useEffect } from 'react';
import './Skills.css';
import {FaSuitcase} from 'react-icons/fa';
import {getFormatedDate} from '../../../effects/effects';
const Skills = (props) => {
    const scrollToComponent = (id) => {

        let scrollDiv = document.getElementById(id).offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    }

    useEffect(()=>{
        window.scrollTo(0,0);
        if(props.play){
            setTimeout(()=>scrollToComponent('exp'),2000);
            setTimeout(()=>scrollToComponent('skills'),3000);
            setTimeout(()=>scrollToComponent('hobbies'),4000);
            
        }
    },[])
    
    return (
        <div className="skills">
            <div className="title heading">Skills</div>
            <div className="skills-content">
            <div className="experiances">
                    <div className="sub-heading " id="exp">Experiance</div>
                    <div className="skills-container">
                        {props.experiance.map(exp => {return(
                            <div className="about-grid-card">
                            <div className="about-grid-card-icon">
                            <FaSuitcase/>
                            </div>
                            <div className="experiance-info">
                            <div className="experiance-organization">{exp.name}</div>
                            <div className="experiance-title">{exp.designation}</div>
                            <div className="experiance-start">{getFormatedDate(exp.start)} {exp.ongoing ?" - Present":null}</div>
                            <div className="experiance-end">{getFormatedDate(exp.end)}</div>
                            </div>
                        </div>
                        )})}
                
                    </div>

                </div>
                <div className="skills-text">
                    <div className="sub-heading " id="skills">skills</div>
                    <div className="skills-container">
                        {props.skills.map(skill => {return(
                            <div className="skill-tile">{skill}</div>
                        )})}
                    </div>
                </div>

                <div className="skills-text">
                    <div className="sub-heading " id="hobbies">hobbies</div>
                    <div className="skills-container">
                        {props.hobbies.map(hobby => {return(
                                <div className="skill-tile">{hobby}</div>
                            )})}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;