import React from "react";
import {TimeFunc} from "../../timeFunc";

export const TableCallItem = (remove, call) => {
    const timeInMilisec = TimeFunc(call.time, Date.now());
    let finish = false;
    if (Date.now() > timeInMilisec) finish = true;

    function hiddenFunc () {
        if(call.hidden) {
            return 'hidden';
        } else {
            return '';
        }
    }
    const hidden = hiddenFunc();
    const classMain = `calls-list__item ${hidden}`;


    return (
        <div className={classMain}>
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
                <span onClick={() => remove(call)}>delete</span>
            </div>
            <div className="calls-list__col time-finish">
                <input checked={finish} type="checkbox" disabled />
            </div>
        </div>
    )
}