import React, { useState } from 'react';
import './App.css';
import Navbar from './Componenets/Navbar';
import TextForm from './Componenets/TextForm';
import Alert from './Componenets/Alert';


function Container() {
 
const [mode, setMode] = useState('dark');
const [alert, setAlert] = useState(null);

const showAlert = (message,type)=>{

  setAlert({
    msg: message,
    type:type

  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}

const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "Success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='black';
    showAlert("Dark mode has been enabled", "Success");

  }
}
  return (
   <>
   
        <Navbar  title="TCS" mode={mode} aboutText="About" toggleMode = {toggleMode}/>
       
        <Alert alert={alert}/>
        <div className="container my-4">
        
            <TextForm showAlert={showAlert} heading="Enter the text to analize..." mode={mode}  color = {'pink'}/>    
          
        </div> 
          
   </>
  );
}

export default Container;
