import React, {useCallback} from "react";
import {TimeFunc} from "./timeFunc";

export const Storage = () => {
    const addItemToStorage = useCallback((name,phone,time, now) => {
        const timeInMilisec = TimeFunc(time, now);
        let finish = false;
        if(Date.now() > timeInMilisec)  finish = true;
        let data = {'id': Date.now(), 'name': name, 'phone': phone, 'time': time, 'milisec': timeInMilisec, 'finish': finish }
        localStorage.setItem(`call ${Date.now()}`, JSON.stringify(data));
    },[]);
    const getItems = useCallback( () => {
        let calls = [];
        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
            }
            calls.push(localStorage.getItem(key));
        }
        // console.log(calls);
        return calls;
    }, [])

    return {addItemToStorage, getItems}
}