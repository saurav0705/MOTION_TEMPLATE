import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import "./Navigation.css";
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaPlayCircle} from 'react-icons/fa';
import {freeze} from '../../effects/effects.js';
const Navigation = ({start,play}) => {
    const [show,setShow] = useState('');
    const [played,setPlayed]= useState(false);
    const [hide,setHide] = useState(false);
    let history = useHistory();
    useEffect(()=>{
        if(history.location.pathname === '/'){
            if(!played){
            setShow(true);}
        }else{
            setShow(false);
        }

    },[history.location])

    const showComponent = (path,time) => {
        setTimeout(() => history.push('/'+path),time);
    }
    const startPlay = () => {
        setPlayed(true);
        setHide(true)
        let components = [
            '',
            'about',
            'skills',
            'projects',
            'contact',
            'thank-you'
        ]

        components.forEach( (comp,index) => {
            showComponent(comp , (index)*5000);
        })

        
    }
    return (<>
    
        {!play ?<div className="navigator">
            <span className="navigator" onClick={()=> {history.push('/header')}}><GiHamburgerMenu/></span>
        </div>:null}
        {show  ?
        <div className={!played ? "play":"play fade-out"}>
            <div className="play" onClick={()=> {startPlay();start();freeze()}}><FaPlayCircle/></div>
        </div>:null}
        </>
    );
};

export default Navigation;