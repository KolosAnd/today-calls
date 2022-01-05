import React, {useEffect, useState} from "react";
import {Title} from "../Title/Title";
import MainClass from "./NextCall.module.css"
import {TimeFunc, timeToMs} from "../../utils/timeFunc";

const NextCall = ({calls}) => {
    const [callsSortArr, setCallsSortArr] = useState([]);
    const [nextCall, setNextCall] = useState({});

    useEffect(  () => {
        if(calls.length > 0){
            setCallsSortArr(calls.sort((a,b) =>  a.milisec > b.milisec ? 1 : -1 ));
        }
    },[calls]);

    useEffect(()=> {

        if(callsSortArr.length > 0) {

            for(let i=0; i<callsSortArr.length; i++){
                const timeInSeconds = timeToMs(callsSortArr[i].time);
                const timeInMilisec = TimeFunc(timeInSeconds, Date.now());

                if (Date.now() < timeInMilisec) {setNextCall(callsSortArr[i]); break;}
                else {setNextCall(null)}
            }
            const timerId = timeNextCall();
            return  (() =>{
                clearInterval(timerId);
            })
        }
    },[callsSortArr]);

    const timeNextCall = () => {

    return setInterval(() =>{
            for(let i=0; i<callsSortArr.length; i++){
                const timeInSeconds = timeToMs(callsSortArr[i].time);
                const timeInMilisec = TimeFunc(timeInSeconds, Date.now());
                if (Date.now() < timeInMilisec) {setNextCall(callsSortArr[i]); break;}
            }
        },60000);

    }

    return (
        <div className={MainClass.nextCall}>
            <div className={MainClass.nextCall__wrap}>
                <Title text={"Next call"} />
                {nextCall ?
                    <div className={MainClass.nextCall__inputWrap}>
                        <div className={MainClass.nextCall__input + ' ' + MainClass.nextCall__inputName}>{nextCall.name}</div>
                        <div className={MainClass.nextCall__input  + ' ' + MainClass.nextCall__inputPhone}>{nextCall.phone}</div>
                        <div className={MainClass.nextCall__input  + ' ' + MainClass.nextCall__inputTime}> {nextCall.time}</div>
                    </div>
                    :
                    <div className={MainClass.nextCall__inputWrap}>
                        <div className={MainClass.nextCall__input + ' ' + MainClass.nextCall__inputName}>No next call</div>
                    </div>

                }

            </div>
        </div>
    )
}
export default NextCall;