import React,{useEffect} from 'react';
import './About.css';
import {getFormatedDate} from '../../../effects/effects';
import {FaGraduationCap} from 'react-icons/fa';
import {GiDiploma} from 'react-icons/gi';
const About = (props) => {
    const scrollToComponent = (id) => {

        let scrollDiv = document.getElementById(id).offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    }

    useEffect(()=>{
        window.scrollTo(0,0);
        if(props.play){
            setTimeout(()=>scrollToComponent('education'),1000);
            setTimeout(()=>scrollToComponent('achievements'),3000);
        }
    },[])
    return (
        <div className="about">
            <div className="title">About</div>
            <div className="description">{props.description}</div>
            <div className="about-content">
                <div className="about-tile" id="education">
                    <div className="sub-heading">Education</div>
                    <div className="about-grid">
                    {props.education.map(edu => {return(
                    <div className="about-grid-card">
                    <div className="about-grid-card-icon">
                        <FaGraduationCap/>
                    </div>
                    <div className="education-info">
                    <div>{edu.name}</div>
                    <div>{edu.designation}</div>
                    <div>{getFormatedDate(edu.start)}  {edu.ongoing ? " - Present":""}</div>
                    <div>{getFormatedDate(edu.end)}</div>
                    </div>
                </div>
                )})}
                    </div>
                </div>
                <div className="about-tile" id="achievements">
                    <div className="sub-heading">Achievements</div>
                    <div className="about-grid">
                    {props.achievements.map(ach => {return(
                    <div className="about-grid-card">
                    <div className="about-grid-card-icon">
                        <GiDiploma/>
                    </div>
                    <div className="education-info">
                    <div>{ach.title}</div>
                    {ach.url.length !==0 ?
                    <div className="url" onClick={()=>window.open(ach.url)}>Visit</div>:null}
                    </div>
                </div>
                )})}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;