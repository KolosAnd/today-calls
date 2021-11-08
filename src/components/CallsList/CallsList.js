import "./callsList.scss"
import React, {useState} from "react";
import {TableCallItem} from "../TableCallItem/TableCallItem";
import {CallsFilter} from "../CallsFilter/CallsFilter";

export const CallsList = ({calls, remove ,sortTimeAsc, sortTimeDesc}) => {
    const [selectedSort, setSelectedSort] = useState('all');


    const sortAll = () => {
        if(selectedSort === 'next' || selectedSort === 'finish'){
            setSelectedSort('all');
        }
    }
    const sortNext = () => {
        setSelectedSort('next');
    }
    const sortFinish = () => {
        setSelectedSort('finish');
    }

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
                        calls.length
                        ?
                        calls.map ( (call) =>
                        <TableCallItem
                            remove={remove}
                            call={call}
                            key={call.milisec}
                        />)
                        :
                        <div className="calls-list__item">
                            <h1 className="calls-list__no-calls">no calls today</h1>
                        </div>

                    }
                </div>

            </div>
            <CallsFilter/>
        </div>
    )
}