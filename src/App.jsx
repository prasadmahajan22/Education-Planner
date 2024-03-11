import {  useEffect, useState } from 'react'
import './App.css'
import Box from './components/subject_box';

function App() {
  
  const [subject , setSubject] = useState("");
  const [hour , setHour] = useState("");
  const [component , setComponent] = useState([]);
  
  
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"))
    if( data && data.length > 0){
      setComponent(data);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("data" , JSON.stringify(component) )
  } , [component])


  let onclick = () => {
    if(hour <= 0){
      alert("Hour must be greater than 0");
      setSubject("");
      setHour(""); 
    }else{
      setComponent([...component , [subject, hour]])
      setSubject("");
      setHour(""); 
    }
    
  }

  

  return (
    <div className="main-cont">
      <h1>Education Planner</h1>
      <div className="inputs_Button">

        <input type="text" placeholder='Enter Subject Name' className='subject' value={subject} onChange={ (e) => setSubject(e.target.value) }/>

        <input type="number" placeholder='Hours' className='hour' value={hour} onChange={ (e) => setHour(Number(e.target.value))}/>

        <button className='add' onClick={onclick}>Add</button>

      </div>

      <div className="results">
        {
          component.map((ele , index) => <Box  subject = {ele[0]} hour = {ele[1]} key = {index}/> )
        }

        
      </div>
    </div>
  )

}

export default App
