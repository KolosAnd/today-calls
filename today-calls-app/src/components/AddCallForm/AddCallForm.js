import React, { useState} from "react";
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";
import "./addCallForm.scss";
import {Storage} from "../../storage";
import {TimeFunc} from "../../timeFunc";

export const AddCallForm = ({create}) => {
    const [call,setCall] = useState({name: '',phone: '', time: ''})
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [time, setTime] = useState("");
    const {addItemToStorage} = Storage();


    function addCall(){
        let validationName = false;
        let validationPhone = false;
        let validationTime = false;
        if(name.length > 1 && name.length <= 30) {
            validationName = true;
        }
        if(phone.length === 14) {
            validationPhone = true;
        }
        if(time !== undefined || time ) {
            validationTime = true;
        }
        if(validationName && validationPhone && validationTime) {
            const timeInMilisec = TimeFunc(time, Date.now());
            let finish = false;
            if(Date.now() > timeInMilisec)  finish = true;
            const newCall = {
                id: Date.now(),
                ...call,
                finish: finish,
                milisec: timeInMilisec
            }
            create(newCall);
            addItemToStorage(name,phone, time, timeInMilisec, finish);
            setName("");
            setPhone("");
            setTime("");
            setCall({});
        }else {
            alert("Enter all form fields")
        }
    }
    const validRegex = /^[0-9\b]+$/;

    return (
        <div className="add-call">
            <Title text={"Add call"} />
            <form action="">
                <div className="add-call__inputs-wrap">
                    <input
                        type="text"
                        value={name}
                        onChange={e => {setName(e.target.value); setCall({...call, name: e.target.value}) }}
                        className="add-call__input"
                        placeholder="Name"
                        maxLength={30}
                    />
                    <input
                        type="text"
                        value={phone}
                        onChange={e => {
                            if (e.target.value === '' || validRegex.test(e.target.value)) {
                                setPhone(e.target.value);
                                setCall({...call, phone: e.target.value});
                            }
                        }}
                        className="add-call__input"
                        placeholder="- 00XXX XXX XXX"
                        maxLength={14}
                    />
                    <input type="time"
                           value={time}
                           onChange={e => {setTime(e.target.value);  setCall({...call, time: e.target.value}) }}
                           className="add-call__input"
                    />
                </div>
                <Button click={addCall} type={"button"} classes={"add-call__button"} text={"Add call"}/>
            </form>
        </div>
    )
}