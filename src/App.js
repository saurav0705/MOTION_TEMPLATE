import React, { useState,useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import LoadingData from './components/LoadingData/LoadingData';
import {URL} from './service';
// import Data from './test.json';

function App() {
  const [data,setData] = useState('');
  const [loading,setLoading] = useState(0);
  useEffect(()=>{
    setInterval(()=> setLoading(loading => {if(loading=== 100){return 100;}else{ return loading+1}}),100);
    fetch(URL)
    .then(resp => resp.json())
    .then(resp => {setData(resp)}).catch(err => setData({"error":err}))

    
  },[])
  const [play,setPlay]= useState(false);
  return (<>
    {data.length!==0 ? 
     <Router>
       <Navigation start={()=> setPlay(true)} play={play}/>
        <Content play={play} data={data} stop={()=> {console.log('worked');setPlay(false)}}/>
     </Router>:
      <LoadingData loading={loading}/>}</>

    
  );
}

export default App;
