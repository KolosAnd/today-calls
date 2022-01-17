import React, {useEffect, useState} from "react";
import {Title} from "../Title/Title";
import styles from "./NextCall.module.css"
import {getTimeCall, translateTimeStringToMiliseconds} from "../../utils/timeFunc";
import {sortTimeAscending} from "../../utils/sortingFunc";

const NextCall = ({calls}) => {
    const [callsSortArr, setCallsSortArr] = useState([]);
    const [nextCall, setNextCall] = useState({});

    useEffect(  () => {
        if(calls.length > 0){
            setCallsSortArr(calls.sort((a,b) =>  sortTimeAscending(a,b)));
        }
    },[calls]);

    useEffect(()=> {

        if(callsSortArr.length > 0) {

            for(let i=0; i<callsSortArr.length; i++){
                const timeInSeconds = translateTimeStringToMiliseconds(callsSortArr[i].time);
                const timeInMilisec = getTimeCall(timeInSeconds, Date.now());

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
                const timeInSeconds = translateTimeStringToMiliseconds(callsSortArr[i].time);
                const timeInMilisec = getTimeCall(timeInSeconds, Date.now());
                if (Date.now() < timeInMilisec) {setNextCall(callsSortArr[i]); break;}
            }
        },60000);

    }

    return (
        <div className={styles.nextCall}>
            <div className={styles.nextCall__wrap}>
                <Title text={"Next call"} />
                {nextCall ?
                    <div className={styles.nextCall__inputWrap}>
                        <div className={styles.nextCall__input + ' ' + styles.nextCall__inputName}>{nextCall.name}</div>
                        <div className={styles.nextCall__input  + ' ' + styles.nextCall__inputPhone}>{nextCall.phone}</div>
                        <div className={styles.nextCall__input  + ' ' + styles.nextCall__inputTime}> {nextCall.time}</div>
                    </div>
                    :
                    <div className={styles.nextCall__inputWrap}>
                        <div className={styles.nextCall__input + ' ' + styles.nextCall__inputName}>No next call</div>
                    </div>

                }

            </div>
        </div>
    )
}
export default NextCall;