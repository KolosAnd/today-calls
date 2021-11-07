import mainClass from "./Title.module.css"
import React from "react";

export const Title = (props) => {
    return (
        <div className={mainClass.title}>
            <h2 className={`${mainClass.title__name} ${props.classes}`}>{props.text}</h2>
        </div>
    )
}

