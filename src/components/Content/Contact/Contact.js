import React, { useEffect } from 'react';
import {FaGithubSquare,FaPhone,FaFacebookSquare,FaLinkedin,FaSnapchatSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import "./Contact.css";
const Contact = (props) => {
    const scrollToComponent = (id) => {

        let scrollDiv = document.getElementById(id).offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    }

    useEffect(()=>{
        window.scrollTo(0,0);
        if(props.play){
            setTimeout(()=>scrollToComponent('number'),2000);
            setTimeout(()=>scrollToComponent('social'),4000);
        }
    },[])
    const icon = (key) => {
        switch(key.toUpperCase()){
            case 'EMAIL' : return <MdEmail/>
            case 'FACEBOOK': return <FaFacebookSquare/>
            case 'TWITTER' : return <FaTwitterSquare/>
            case 'LINKEDIN' : return <FaLinkedin/>
            case 'SNAPCHAT' : return <FaSnapchatSquare/>
            case 'INSTAGRAM' : return <FaInstagram/>
            case 'GITHUB' : return <FaGithubSquare/>
            default : return 'none'; 
        }

    }
    return (
        <div className="contact" >
            <div className="title">Contact</div>
            <div className="two">
            <div className="contact-numbers">
                <div className="sub-heading " id="number">Number</div>
                    {props.contacts.map(contact => {return(
                        <div className="contact-tile" onClick={()=>window.parent.location.href = "tel:"+contact}> <FaPhone/> {contact} </div>
                    )})}
                    
                </div>
                <div className="social-container">
                    <div className="sub-heading " id="social">SOcial</div>
                {
                            Object.keys(props.social).filter(social => props.social[social].length !== 0).map(social => {
                            return (<div key={social} className={"contact-tile "+social} onClick={()=>window.open(social === 'email' ? "mailto:"+props.social[social]:props.social[social])}>{icon(social.toUpperCase())} {social.toUpperCase()}</div>)
                            })
                        }
                </div>
                </div>
        </div>
    );
};

export default Contact;