import styles from "./Title.module.css"
import React from "react";

export const Title = (props) => {
    return (
        <div className={styles.title}>
            <h2 className={`${styles.title__name} ${props.classes}`}>{props.text}</h2>
        </div>
    )
}

