import React, { useState} from "react";
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";
import "./addCallForm.scss";
import {Storage} from "../../storage";
import {TimeFunc} from "../../timeFunc";
import classNames from "classnames";

export const AddCallForm = ({create}) => {
    const [call,setCall] = useState({name: '',phone: '', time: ''})

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [time, setTime] = useState("");

    const [validationName,setValidationName] = useState(false);
    const [validationPhone,setValidationPhone] = useState(false);
    const [validationTime,setValidationTime] = useState(false);

    const [showErrorName,setShowErrorName] = useState(false);
    const [showErrorPhone,setShowErrorPhone] = useState(false);
    const [showErrorTime,setShowErrorTime] = useState(false);

    const {addItemToStorage} = Storage();

    function validation () {
        if(name.length > 1 && name.length <= 30) {
            setValidationName(true);
            setShowErrorName(false);
        }else {
            setShowErrorName(true);
            setValidationName(false);
        }
        if(phone.length === 14) {
            setShowErrorPhone(false);
            setValidationPhone (true);
        }else {
            setShowErrorPhone(true);
            setValidationPhone(false);
        }
        console.log(time);
        if(time !== undefined && time !== '') {
            setShowErrorTime(false);
            setValidationTime (true);
        }else {
            setShowErrorTime(true);
            setValidationTime(false);
        }

        console.log(validationTime);

        if(validationName && validationPhone && validationTime) {
            return true
        }
        return false
    }

    function addCall(){
        let valid = validation();
        if(valid) {
            const timeInMilisec = TimeFunc(time, Date.now());
            let finish = false;
            if (Date.now() > timeInMilisec) finish = true;
            const newCall = {
                id: Date.now(),
                ...call,
                finish: finish,
                milisec: timeInMilisec
            }
            create(newCall);
            addItemToStorage(name, phone, time, timeInMilisec, finish);
            setName("");
            setPhone("");
            setTime("");
            setValidationName(false);
            setValidationPhone(false);
            setValidationTime(false);
            setCall({});
        }
    }

    const pattern = /^[0-9\b]+$/;

    return (
        <div className="add-call">
            <Title text={"Add call"} />
            <form action="">
                <div className="add-call__inputs-wrap">
                    <div className="add-call__input-block name">
                        <input
                            required
                            type="text"
                            value={name}
                            onFocus={ event => (showErrorName ? setShowErrorName(false) : event)}
                            onChange={e => {setName(e.target.value); setCall({...call, name: e.target.value}) }}
                            className={classNames('add-call__input',{'error': showErrorName}) }
                            placeholder="Name"
                            maxLength={30}
                        />
                        {showErrorName ?  <span className="add-call__error-message">Name length from 2 to 30</span> : <></> }
                    </div>
                    <div className="add-call__input-block phone">
                        <input
                            required
                            type="text"
                            value={phone}
                            onFocus={ event => (showErrorPhone ? setShowErrorPhone(false) : event) }
                            onChange={e => {
                                if (e.target.value === '' || pattern.test(e.target.value)) {
                                    setPhone(e.target.value);
                                    setCall({...call, phone: e.target.value});
                                }

                            }}
                            className={classNames('add-call__input',{'error': showErrorPhone}) }
                            placeholder="00XXXXXXXXXXXX"
                            minLength={14}
                            maxLength={14}
                        />
                        {showErrorPhone ?  <span className="add-call__error-message">Example of correct phone: <br/>00385937591047</span> : <></>}

                    </div>
                    <div className="add-call__input-block time">
                        <input type="time"
                               required
                               value={time}
                               onFocus={event => (showErrorTime ? setShowErrorTime(false) : event)}
                               onChange={e => {setTime(e.target.value);  setCall({...call, time: e.target.value}) }}
                               className={classNames('add-call__input',{'error': showErrorTime}) }
                        />
                        {showErrorTime ?  <span className="add-call__error-message">enter time (e.g. 14:10)</span> : <></> }
                    </div>

                </div>
                <Button click={addCall} type={"button"} classes={"add-call__button"} text={"Add call"}/>
            </form>
        </div>
    )
}