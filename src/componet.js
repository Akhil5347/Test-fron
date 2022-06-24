import React from "react";
import ReactDom from "react-dom";
import log from "./prof2.png"
import "./App.css"

export default function Pixel(props){
    return(
        <div className="componet">
            <img className="pic" src={props.image} alt="Image"/>
            <p className="name">{props.name}</p>
            <p className="price">{props.price}<span >$</span></p>


        </div>
    )
}