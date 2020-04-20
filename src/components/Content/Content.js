import React, { useState } from 'react';
import {Route,useHistory,Switch} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Content.css';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import About from './About/About';
import ProjectDetail from './ProjectDetail/ProjectDetail';
import ThankYou from './ThankYou/ThankYou';
const Content = (props) => {
    const [project,setProject] = useState('');
    let history = useHistory();
    return (
        <>
        <TransitionGroup>
        <CSSTransition key={history.location.key} classNames="alert" timeout={300}>
        <Switch  location={history.location}>
            <Route exact path="/" render={() => <Home image={props.data.displayImage} name={props.data.name} tagline={props.data.tagline} />}/>
            <Route exact path="/header" component={Header}/>
            <Route exact path="/about" render={() => <About play={props.play} description={props.data.description} education={props.data.education} achievements={props.data.achievements}/>}/>
            <Route exact path="/skills" render={() => <Skills  play={props.play} experiance={props.data.experiance} skills={props.data.skills} hobbies={props.data.hobbies}/>}/>
            <Route exact path="/contact" render={() => <Contact play={props.play} contacts={props.data.contact} social={{...props.data.social,...{"email":props.data.email}}} />}/>
            <Route exact path="/projects" render={() =>  <Projects play={props.play} projects={props.data.projects} selected={(value) => {setProject(() => {return {...value}});console.log(project);history.push('/projects-detail')}}/>}/>
            <Route exact path="/thank-you" render={()=> <ThankYou stop={() => {console.log('reached');props.stop()}}/>}/>
            <Route exact path="/projects-detail" render={()=> <ProjectDetail project={project}/>}/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        </>
    );
};

export default Content;