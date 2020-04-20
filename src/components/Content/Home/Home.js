import React, { useEffect } from 'react';
import './Home.css';
const Home = (props) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <div className="home">
            <div className="image-container">
                <img className="image" src={props.image} alt="display_image"/>
            </div>
            <div className="name">{props.name}</div>
            <div className="tagline">{props.tagline}</div>
        </div>
    );
};

export default Home;