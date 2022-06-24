import React ,{useState} from "react";
import MainContent from "../Maincontent";
export default function About(){
    const [count,setCount]=useState(9);
    
    return(
        <div>
            <h2>We are the new Generation .</h2>
<button onClick={()=>setCount(count-1)}>-</button>
<span>{count}</span>
<button onClick={()=>setCount(count+1)}>+</button>
<MainContent />
        </div>
    )
}