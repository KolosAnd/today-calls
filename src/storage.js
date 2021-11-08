import React, {useCallback} from "react";

export const Storage = () => {
    const addItemToStorage = useCallback((name,phone,time, timeInMilisec,finish) => {
        let data = {'id': Date.now(), 'name': name, 'phone': phone, 'time': time, 'milisec': timeInMilisec, 'finish': finish }
        localStorage.setItem(`${timeInMilisec}`, JSON.stringify(data));
    },[]);

    const getItemsFromStorage = useCallback( () => {
        let calls = [];
        let callsObjects = [];
        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            calls.push(localStorage.getItem(key));
            calls.forEach( oneCall => {
                callsObjects.push(JSON.parse(oneCall));
            });
        }
        return callsObjects;
    }, []);

    const deleteItemsFromStorage = useCallback( (key) => {
        localStorage.removeItem(key);
    }, []);

    return {addItemToStorage, getItemsFromStorage, deleteItemsFromStorage}
}