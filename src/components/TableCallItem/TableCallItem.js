import React from "react";

export const TableCallItem = (props) => {
    let checkedProps = false;
    if(props.call.finish) checkedProps = true;


    function hiddenFunc () {
        if(props.call.hidden) {
            return 'hidden';
        } else {
            return '';
        }
    }
    const hidden = hiddenFunc()
    const classMain = `calls-list__item ${hidden}`

    return (
        <div className={classMain}>
            <div className="calls-list__col name-col">
                {props.call.name}
            </div>
            <div className="calls-list__col phone-col">
                {props.call.phone}
            </div>
            <div className="calls-list__col time-col" data-milisec={props.call.milisec}>
                {props.call.time}
            </div>
            <div className="calls-list__col time-delete">
                <span onClick={() => props.remove(props.call)}>delete</span>
            </div>
            <div className="calls-list__col time-finish">
                <input checked={checkedProps} type="checkbox" disabled />
            </div>
        </div>
    )
}