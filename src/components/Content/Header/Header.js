 import React from 'react';
import './Header.css';
import {useHistory} from 'react-router-dom';
const Header = () => {
    let history = useHistory();
    return (
        <div className="header text animate-gradient" >
            <div onClick={()=>history.push('/')}>Home</div>
            <div onClick={()=>history.push('/about')}>About</div>
            <div onClick={()=>history.push('/skills')}>Skills</div>
            <div onClick={()=>history.push('/projects')}>Projects</div>
            <div onClick={()=>history.push('/contact')}>Contact</div>
        </div>
    );
};

export default Header;