import {Button} from "../Button/Button";
import React from "react";

export const CallsFilter = () => {
    return (
        <div className="calls-list__buttons-wrap">
            <Button type={"button"} classes={"calls-list__button"} text={"All"} />
            <Button type={"button"} classes={"calls-list__button"} text={"Next"} />
            <Button type={"button"} classes={"calls-list__button"} text={"Finished"}/>
        </div>
    )
}