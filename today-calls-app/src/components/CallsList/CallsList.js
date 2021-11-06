import "./callsList.scss"
import React, {useState} from "react";
import {Button} from "../Button/Button";
import {Storage} from "../../storage";
import {TableCallItem} from "../TableCallItem/TableCallItem";

export const CallsList = (props) => {
    const [calls, setCalls] = useState('');
    const {getItems} = Storage();
    let callsString = getItems();
    let callsObjects = [];
    callsString.forEach( oneCall => {
        callsObjects.push(JSON.parse(oneCall));
    });
    setCalls(callsObjects);

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

    }


    //по возростанию
    const sortTimeAscending = (array) => {

    }
    //по убиванию
    const sortTimeDescending = (array) => {

    }

    return (
        <div className="calls-list">
            <div className="calls-list__table">
                <div className="calls-list__headers">
                    <div className="calls-list__col name-col">
                        <span>Name</span>
                        <div className="calls-list__sort-block">
                            <div className="calls-list__sort-block-up"></div>
                            <div className="calls-list__sort-block-down"></div>
                        </div>
                    </div>
                    <div className="calls-list__col phone-col">Phone number</div>
                    <div className="calls-list__col time-col">
                        <span>Time</span>
                        <div className="calls-list__sort-block">
                            <div className="calls-list__sort-block-up"></div>
                            <div className="calls-list__sort-block-down"></div>
                        </div>
                    </div>
                    <div className="calls-list__col time-delete"></div>
                    <div className="calls-list__col time-finish"></div>
                </div>
                <div className="calls-list__cols-wrap">
                    {
                        calls.length
                        ?
                        calls.map ( (call) =>
                        <TableCallItem
                            key={call.id} name={call.name}
                            phone={call.phone} time={call.time}
                            milisec={call.milisec} finish={call.finish}
                        />)
                        :
                        <h1>no calls today</h1>
                    }
                </div>

            </div>
            <div className="calls-list__buttons-wrap">
                <Button onClick={sortAll} type={"button"} classes={"calls-list__button"} text={"All"} />
                <Button onClick={sortNext} type={"button"} classes={"calls-list__button"} text={"Next"} />
                <Button onClick={sortFinish} type={"button"} classes={"calls-list__button"} text={"Finished"}/>
            </div>
        </div>
    )
}