import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import Data from './test.json';

function App() {
  const [play,setPlay]= useState(false);
  return (
    
     <Router>
       <Navigation start={()=> setPlay(true)} play={play}/>
        <Content play={play} data={Data} stop={()=> {console.log('worked');setPlay(false)}}/>
     </Router>

    
  );
}

export default App;
