import React from "react";

export const TableCallItem = (props) => {
    let checkedProps = false;
    if(props.finish) checkedProps = true;
    return (
        <div className="calls-list__item">
            <div className="calls-list__col name-col">
                {props.name}
            </div>
            <div className="calls-list__col phone-col">
                {props.phone}
            </div>
            <div className="calls-list__col time-col" data-milisec={props.milisec}>
                {props.time}
            </div>
            <div className="calls-list__col time-delete">
                <span>delete</span>
            </div>
            <div className="calls-list__col time-finish">
                <input checked={checkedProps} type="checkbox" disabled />
            </div>
        </div>
    )
}