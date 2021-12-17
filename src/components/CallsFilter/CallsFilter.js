import React, {useContext} from "react";
import {ContractContext} from "../../context/context";
import {types} from "../../redux/types";

export const CallsFilter = () => {
    const {store} = useContext(ContractContext);

    const setAll = () => {
        store.dispatch({type: types.ALL});
    }

    const setNext = () => {
        store.dispatch({type: types.NEXT});
    }

    const setFinish = () => {
        store.dispatch({type: types.FINISH});
    }

    return (
        <div className="calls-list__buttons-wrap">
            <button onClick={setAll} type={"button"} className="button calls-list__button">All</button>
            <button onClick={setNext} type={"button"} className="button calls-list__button">Next</button>
            <button onClick={setFinish} type={"button"} className="button calls-list__button">Finished</button>
        </div>
    )
}