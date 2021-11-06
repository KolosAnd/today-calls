import "./button.scss"
import React from "react";

export const Button = (props) => {
    const classes = `button ${props.classes}`
    return (
         <button onClick={props.click} type={props.type} className={classes}>{props.text}</button>
    )
}