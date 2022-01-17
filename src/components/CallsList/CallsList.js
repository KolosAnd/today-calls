import "./callsList.scss"
import React, { useState} from "react";
import {TableCallItem} from "../TableCallItem/TableCallItem";
import {sortNameAscending, sortNameDescending, sortTimeAscending, sortTimeDescending} from "../../utils/sortingFunc";

export const CallsList = ({calls, remove}) => {

    const [sortType, setSortType ]= useState('');
    const [sortButtonType, setSortButtonType ]= useState('all');



    const sortFunc =(a,b) => {
        if(sortType === 'ascTime') {
            return  sortTimeAscending(a,b);
        } else if(sortType === 'descTime') {
            return  sortTimeDescending(a,b);
        } else if (sortType === 'ascName') {
            return  sortNameAscending(a,b);
        }else if (sortType === 'descName') {
            return  sortNameDescending(a,b);
        }
    }

    return (
        <div className="calls-list">
            <div className="calls-list__table">
                <div className="calls-list__headers">
                    <div className="calls-list__col name-col">
                        <span>Name</span>
                        <div className="calls-list__sort-block">
                            <div className="calls-list__sort-block-up" onClick={() => setSortType('ascName')}/>
                            <div className="calls-list__sort-block-down" onClick={() =>  setSortType('descName')}/>
                        </div>
                    </div>
                    <div className="calls-list__col phone-col">Phone number</div>
                    <div className="calls-list__col time-col">
                        <span>Time</span>
                        <div className="calls-list__sort-block">
                            <div className="calls-list__sort-block-up" onClick={() => setSortType('ascTime')}/>
                            <div className="calls-list__sort-block-down" onClick={() =>  setSortType('descTime')}/>
                        </div>
                    </div>
                    <div className="calls-list__col time-delete"/>
                    <div className="calls-list__col time-finish"/>
                </div>
                <div className="calls-list__cols-wrap">
                    {
                        calls.length
                            ? calls.sort(sortFunc).map ( (callItem) =>
                                <TableCallItem
                                    hidden={sortButtonType}
                                    remove={remove}
                                    call={callItem}
                                    key={callItem.id}
                                />)
                            : <div className="calls-list__item">
                                <h1 className="calls-list__no-calls">no calls today</h1>
                            </div>
                    }
                </div>
            </div>
            <div className="calls-list__buttons-wrap">
                <button onClick={() =>setSortButtonType('all') } type={"button"} className="button calls-list__button">All</button>
                <button onClick={() =>setSortButtonType('next')} type={"button"} className="button calls-list__button">Next</button>
                <button onClick={() =>setSortButtonType('finished')} type={"button"} className="button calls-list__button">Finished</button>
            </div>
        </div>
    )
}