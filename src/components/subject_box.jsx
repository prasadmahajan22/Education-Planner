import { useState } from 'react';
import './subject_box.css'
let Box = (props) => {
    let obj = props;
    const[num , setNum] = useState(obj.hour);
    const [color , setColor] = useState("")

    if(num < 0){
        setNum(0);
    }

    let bgcolor = {
        boxShadow : (color) ? "1px 0px 5px 5px rgba(35, 243, 3, 0.49)" : "1px 0px 5px 5px rgba(243, 55, 3, 0.49)"
    }

    let colors = {
        color : (color) ? "rgb(53, 239, 53)" : "red"
    }
    
    return (
        <div className="box" style={bgcolor}>
           
            <h2 style={colors}>{obj.subject}</h2>
            
            <div className="incr_decre">
                <span style={colors}>{num} Hours</span>
                <button className = "increment" onClick={() => {setNum(num+1); setColor(true)}}>Incre(+)</button>
                <button className = "decrement" onClick={() => {setNum(num-1); setColor(false)}}>Decre(-)</button>
            </div>
        </div>
    )
}

export default Box;