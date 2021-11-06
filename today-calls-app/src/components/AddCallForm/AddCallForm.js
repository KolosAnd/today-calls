import React, { useState} from "react";
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";
import "./addCallForm.scss";
import {Storage} from "../../storage";

export const AddCallForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [time, setTime] = useState("");
    const {addItemToStorage} = Storage();


    function addCall(){
        let validationName = true;
        let validationPhone = true;
        let validationTime = false;
        // if(name.length > 1 && name.length <= 30) {
        //     validationName = true;
        // }
        // if(phone.length === 15) {
        //     validationPhone = true;
        // }
        if(time !== undefined || time ) {
            validationTime = true;
        }
        if(validationName && validationPhone && validationTime) {
            addItemToStorage(name,phone, time, Date.now());
            setName("");
            setPhone("");
            setTime("");
        }
    }


    return (
        <div className="add-call">
            <Title text={"Add call"} />
            <form action="">
                <div className="add-call__inputs-wrap">
                    <input
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        className="add-call__input"
                        placeholder="Name"
                        maxLength={30}
                    />
                    <input
                        type="text"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                        className="add-call__input"
                        placeholder="- 00XXX XXX XXX"
                        maxLength={15}
                    />
                    <input type="time"
                       value={time}
                       onChange={event => setTime(event.target.value)}
                       className="add-call__input"
                    />
                </div>
                <Button click={addCall} type={"button"} classes={"add-call__button"} text={"Add call"}/>
            </form>
        </div>
    )
}