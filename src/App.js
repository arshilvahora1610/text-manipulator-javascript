
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Text from './components/Text';


function App() {
  const [mode,setMode]=useState('light')
  const [alert,setalert]=useState(null)
  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setalert(null)
      },1500)
  }
  const toogleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")



    }
  }
  return (
    <>
      <Navbar title="NoteApp" about="About us" mode={mode} toggleMode={toogleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Text heading="Enter text to analize" textHeading="Your text here" mode={mode}/>
      </div>
     
     
   
    </>
  );
}

export default App;
