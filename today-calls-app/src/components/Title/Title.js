import "./title.scss"
import React from "react";

export const Title = (props) => {
    return (
        <div className="title">
            <h2 className="title__name">{props.text}</h2>
        </div>
    )
}

