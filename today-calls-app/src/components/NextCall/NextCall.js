import React from "react";
import {Title} from "../Title/Title";
import MainClass from "./NextCall.module.css"

const NextCall = (props) => {
    return (
        <div className={MainClass.nextCall}>
            <div className={MainClass.nextCall__wrap}>
                <Title text={"Next call"} />
                <div className={MainClass.nextCall__inputWrap}>
                    <div className={MainClass.nextCall__input + ' ' + MainClass.nextCall__inputName}>User 1</div>
                    <div className={MainClass.nextCall__input  + ' ' + MainClass.nextCall__inputPhone}>032984234234</div>
                    <div className={MainClass.nextCall__input  + ' ' + MainClass.nextCall__inputTime}> 4:20</div>
                </div>
            </div>
        </div>
    )
}
export default NextCall;