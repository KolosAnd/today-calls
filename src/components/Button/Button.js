import mainClass from "./Button.module.css"
import React from "react";

export const Button = (props) => {
    return (
         <button onClick={props.click} type={props.type} className={`${mainClass.button} ${props.classes}`}>{props.text}</button>
    )
}