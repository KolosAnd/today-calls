import React, {useEffect, useState} from "react";
import {getTimeCall, translateTimeStringToMiliseconds} from "../../utils/timeFunc";

export const TableCallItem = ({remove, call, hidden}) => {

    const [isFinished, setIsFinished] = useState(false);
    const [classMain, setClassMain] = useState('calls-list__item');

    useEffect(() => {
        if(call?.time) {
            const timeInSeconds = translateTimeStringToMiliseconds(call.time);
            const timeInMilisec = getTimeCall(timeInSeconds, Date.now());
            if (Date.now() > timeInMilisec) setIsFinished(true);
        }
    }, [call]);

    useEffect(()=> {
        if (hidden == 'next') {
            if(isFinished) setClassMain(' hidden'); else setClassMain('');
        }
        if (hidden == 'finished') {
            if(isFinished) setClassMain(''); else setClassMain(' hidden');
        }
        if (hidden == 'all') setClassMain('');

    }, [hidden]);


    return (
        <>
            { call &&
                <div className={`calls-list__item ${classMain}`}>
                    <div className="calls-list__col name-col">
                        {call.name}
                    </div>
                    <div className="calls-list__col phone-col">
                        {call.phone}
                    </div>
                    <div className="calls-list__col time-col" data-milisec={call.milisec}>
                        {call.time}
                    </div>
                    <div className="calls-list__col time-delete">
                        <span onClick={() => remove(call.id)}>delete</span>
                    </div>
                    <div className="calls-list__col time-finish">
                        <input checked={isFinished} type="checkbox" disabled />
                    </div>
                </div>
            }
        </>
    )
}