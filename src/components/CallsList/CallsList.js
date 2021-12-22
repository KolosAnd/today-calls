import "./callsList.scss"
import React from "react";
import {TableCallItem} from "../TableCallItem/TableCallItem";
import {CallsFilter} from "../CallsFilter/CallsFilter";

export const CallsList = ({calls, remove ,sortTimeAsc, sortTimeDesc}) => {

    return (
        <div className="calls-list">
            <div className="calls-list__table">
                <div className="calls-list__headers">
                    <div className="calls-list__col name-col">
                        <span>Name</span>
                        <div className="calls-list__sort-block">
                            <div className="calls-list__sort-block-up"/>
                            <div className="calls-list__sort-block-down"/>
                        </div>
                    </div>
                    <div className="calls-list__col phone-col">Phone number</div>
                    <div className="calls-list__col time-col">
                        <span>Time</span>
                        <div className="calls-list__sort-block">
                            <div className="calls-list__sort-block-up" onClick={sortTimeAsc}/>
                            <div className="calls-list__sort-block-down" onClick={sortTimeDesc}/>
                        </div>
                    </div>
                    <div className="calls-list__col time-delete"/>
                    <div className="calls-list__col time-finish"/>
                </div>
                <div className="calls-list__cols-wrap">
                    {
                        calls && calls[0] && calls.length
                        ? calls.map ( (call) =>
                        <TableCallItem
                            remove={remove}
                            call={call}
                            key={call.id}
                        />)
                        : <div className="calls-list__item">
                            <h1 className="calls-list__no-calls">no calls today</h1>
                        </div>
                    }
                </div>

            </div>
            <CallsFilter/>
        </div>
    )
}