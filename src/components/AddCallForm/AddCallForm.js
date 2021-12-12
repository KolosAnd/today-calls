import React, { useState} from "react";
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";
import "./addCallForm.scss";
import {TimeFunc} from "../../timeFunc";
import classNames from "classnames";

export const AddCallForm = ({create}) => {
    const [call,setCall] = useState({id: '',name: '',phone: '',time: '',milisec: ''})

    const [validation, setValidation] = useState({validationName: false,validationPhone: false,validationTime: false  })

    const [showErrorName,setShowErrorName] = useState(false);
    const [showErrorPhone,setShowErrorPhone] = useState(false);
    const [showErrorTime,setShowErrorTime] = useState(false);



    function validationFunc () {
        if(call.name.length > 1 && call.name.length <= 30) {
            setValidation({...validation, validationName: true });
            setShowErrorName(false);
        }else {
            setShowErrorName(true);
            setValidation({...validation, validationName: false });
        }
        if(call.phone.length === 14) {
            setShowErrorPhone(false);
            setValidation({...validation, validationPhone: true });
        }else {
            setShowErrorPhone(true);
            setValidation({...validation, validationPhone: false });
        }
        if(call.time !== undefined && call.time !== '') {
            setShowErrorTime(false);
            setValidation({...validation, validationTime: true });
        }else {
            setShowErrorTime(true);
            setValidation({...validation, validationTime: false });
        }
        return validation.validationName && validation.validationPhone && validation.validationTime;
    }

    function addCall(e){
        e.preventDefault();
        let valid = validationFunc();

        console.log('validation', valid);
        if(valid) {
            const timeInMilisec = TimeFunc(call.time, Date.now());
            setCall({...call, id: Date.now() });
            setCall({...call, milisec: timeInMilisec });
            create(call);
            setCall({id: '',name: '',phone: '',time: '',milisec: ''})
            setValidation({validationName: false,validationPhone: false,validationTime: false  });
        }
    }

    const pattern = /^[0-9\b]+$/;

    return (
        <div className="add-call">
            <Title text={"Add call"} />
            <form action="" onSubmit={addCall}>
                <div className="add-call__inputs-wrap">
                    <div className="add-call__input-block name">
                        <input
                            type="text"
                            value={call.name}
                            onFocus={ event => (showErrorName ? setShowErrorName(false) : event)}
                            onChange={e => { setCall({...call, name: e.target.value}) }}
                            className={classNames('add-call__input',{'error': showErrorName}) }
                            placeholder="Name"
                            maxLength={30}
                        />
                        {showErrorName &&  <span className="add-call__error-message">Name length from 2 to 30</span> }
                    </div>
                    <div className="add-call__input-block phone">
                        <input
                            type="text"
                            value={call.phone}
                            onFocus={ event => (showErrorPhone ? setShowErrorPhone(false) : event) }
                            onChange={e => {
                                if (e.target.value === '' || pattern.test(e.target.value)) {
                                    setCall({...call, phone: e.target.value});
                                }

                            }}
                            className={classNames('add-call__input',{'error': showErrorPhone}) }
                            placeholder="00XXXXXXXXXXXX"
                            minLength={14}
                            maxLength={14}
                        />
                        {showErrorPhone && <span className="add-call__error-message">Example of correct phone: <br/>00385937591047</span>}

                    </div>
                    <div className="add-call__input-block time">
                        <input type="time"
                               value={call.time}
                               onFocus={event => (showErrorTime ? setShowErrorTime(false) : event)}
                               onChange={e => {setCall({...call, time: e.target.value}) }}
                               className={classNames('add-call__input',{'error': showErrorTime}) }
                        />
                        {showErrorTime &&  <span className="add-call__error-message">enter time (e.g. 14:10)</span> }
                    </div>

                </div>
                <Button click={addCall} classes={"add-call__button"} text={"Add call"}/>
            </form>
        </div>
    )
}