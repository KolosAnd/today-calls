import {useCallback} from "react";

export const Storage = () => {
    const addItemToStorage = useCallback((calls) => {
        localStorage.setItem('list', JSON.stringify(calls));
    },[]);

    const getItemsFromStorage = useCallback( () => {
        let calls = [];
        let callsObjects = [];
        calls.push(localStorage.getItem('list'));
        calls.forEach( oneCall => {
            callsObjects.push(JSON.parse(oneCall));
        });

        return callsObjects;
    }, []);

    const deleteItemsFromStorage = useCallback( (key) => {
        localStorage.removeItem(key);
    }, []);

    return {addItemToStorage, getItemsFromStorage, deleteItemsFromStorage}
}