import React, { useState } from "react";
import "./App.css"
import im from "./prof2.png";
import Pixel from "./componet";
import { MdEmail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainContent(){
    const [title,setTitle]=useState("");
    const [text,setText]=useState("")
const [opt,setOption]=useState("")
    return (
//         <div  className="main-info">
//             <div className="main-info1" >
// <img src={im} alt="Profile pic" className="main-img" />
// <h2>Paul Raufel</h2>
// <p><span>Front-End Developer</span></p>
// <p className="a">Paulraufel.website</p>
// <button className="home"><MdEmail size={30} style={{ fill: 'black' }} />Email</button>

//                 </div>
//                 <div className="axe">
//                     <h2>About</h2>
                    
//                     <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
//                 <h2>Interests</h2>
//                 <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
//                 </div>
//         </div>

    
<div className="Content1">
<form>
    <label>Blog Writer </label>
  <input type="text"
  required
  value={title}
  onChange= {(e) => setTitle(e.target.value)}>
  </input>  
  <label>Blog-Name:</label>
  <textarea required 
  value={text}
  onChange= {(e) => setText(e.target.value)}>

  </textarea>
  <label>
    type</label> 
    <select value={opt} onChange={(e)=>setOption(e.target.value)}>
        <option>Geetha</option>
        <option>Seetha</option>
    </select>

</form>
<p>{title}</p>
<p>{text}</p>
</div>)

}