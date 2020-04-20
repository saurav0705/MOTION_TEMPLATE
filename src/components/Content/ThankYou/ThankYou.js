import React,{useEffect} from 'react';
import {FaThumbsUp} from 'react-icons/fa';
import './ThankYou.css';
import {useHistory} from 'react-router-dom';
const ThankYou = props => {
    let history = useHistory();
    useEffect(()=>{
        props.stop();
        setTimeout(()=>history.push('/'),2000);
    },[])

    return (
        <div className="thank-you">
            <div className="title">Thank You<FaThumbsUp/></div>
        </div>
    );
};



export default ThankYou;