import React, {useContext, useEffect, useState} from "react";
import {Title} from "../Title/Title";
import "./addCallForm.scss";
import {getTimeCall} from "../../utils/timeFunc";
import * as yup from "yup";
import ICallScheme from "./typesAddCall";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ContractContext} from "../../context/context";


const initialState: ICallScheme = {
    id: 0,name: '',phone: '',time: '',milisec: 0
}

const textOnly = (value) => /^\D+$/.test(value);
const dateReg = (value) => /^\d\d:\d\d+$/.test(value);
const phoneNumberReg = (value) => /^\+|(0{2})|[\(]?\d{3}[\)]?[-\s]?\d{3}[-\s]?\d{3}[-\s]?\d{3}$/.test(value);

const schema = yup.object({
    // @ts-ignore
    name: yup.string().required('Обязательное поле')
        .test('Только текст', 'Только текст', textOnly).min(2, 'Минимум 2 символа').max(30, 'Максимум 30 символов')
        .typeError('Только текст'),
    // @ts-ignore
    phone: yup.string().required('Обязательное поле')
        .test('+(xxx)-xxx-xxx-xxx', '+(xxx)-xxx-xxx-xxx', phoneNumberReg).min(13, 'Телефон минимум 13 символов').max(18, 'Телефон максимум 18 символов')
        .typeError('Введите коректный номер'),
    // @ts-ignore
    time: yup.string().required('Обязательное поле').test('Некоректная дата', 'Некоректная дата', dateReg).typeError('Только дата'),
}).required();

export const AddCallForm = ({addOneCall, typeForm, updatedCall, closePopup}) => {
    const [call,setCall] = useState(initialState);

    const context:Record<string,any> = useContext(ContractContext);
    const calls = context.calls;
    const updateCalls = context.updateCalls;

    const [typeFormMainPhrase, setTypeFormMainPhrase] = useState('Add');

    const defaultValues = {resolver: yupResolver(schema)}

    const {register, formState: {errors}, handleSubmit} = useForm(defaultValues);

    const addCall =  (data: any) => {
        const timeInMilisec:number = getTimeCall(call.time, Date.now());
        let newCall = {
            id:  typeForm === 'update' ? updatedCall.id : Date.now(),
            milisec: timeInMilisec,
            phone: '00'+call.phone.replaceAll(/[\(\)\-\+\s]/g,'').replaceAll(/^(0{2})/g,'')
        }
        newCall = { ...call, ...newCall};

        if(typeForm === 'update') {
            writeUpdateCall(newCall);
        }
        else {
            writeAddCall(newCall);
        }
    }

    const writeAddCall = (new_call) => {
        let finalArr = calls.concat([new_call]);
        localStorage.setItem('list', JSON.stringify(finalArr));
        addOneCall(new_call);
        setCall(initialState);
    }

    const writeUpdateCall = (new_call) => {
        calls.forEach((call) => {
            if(call.id === new_call.id){
                call.name = new_call.name;
                call.time = new_call.time;
                call.phone = new_call.phone;
                call.milisec = new_call.milisec;
            }
        });
        localStorage.setItem('list', JSON.stringify(calls));
        updateCalls(calls);
        setCall(initialState);
        closePopup();
    }

    useEffect( () => {
        if(updatedCall) {
            setTypeFormMainPhrase('Update');
            setCall({
                id: updatedCall.id,name: updatedCall.name,phone: updatedCall.phone,time: updatedCall.time,milisec: updatedCall.milisec
            });
        }
    }, [updatedCall]);

    return (
        <div className="add-call">
            <Title text={`${typeFormMainPhrase} call`} />

            <form onSubmit={handleSubmit(addCall)}>
                <div className="add-call__inputs-wrap">
                    <div className="add-call__input-block name">
                        <input
                            {...register("name")}
                            value={call.name}
                            onChange={e => {setCall({...call, name: e.target.value}) }}
                            name="name"
                            type="text"
                            className={errors.name
                                    ? "add-call__input error" : "add-call__input"
                            }
                            placeholder="Name"
                            maxLength={30}
                        />
                        { <span className="add-call__error-message">{errors.name?.message}</span>}
                    </div>

                    <div className="add-call__input-block phone">
                        <input
                            {...register("phone")}
                            onChange={e => {setCall({...call, phone: e.target.value}) }}
                            name="phone"
                            value={call.phone}
                            placeholder="+(ХХX)-XXХ-XХХ-ХХХ"
                            type="text"
                            className={errors.phone
                                ? "add-call__input error" : "add-call__input"
                            }
                        />
                        { <span className="add-call__error-message">{errors.phone?.message}</span>}
                    </div>

                    <div className="add-call__input-block time">
                        <input type="time"
                               name="time"
                               {...register("time")}
                               value={call.time}
                               onChange={e => {setCall({...call, time: e.target.value}) }}
                               className={errors.time
                                   ? "add-call__input error" : "add-call__input"
                               }
                        />
                        { <span className="add-call__error-message">{errors.time?.message}</span>}
                    </div>
                </div>
                <button type="submit"
                        className={"button add-call__button"}>{typeFormMainPhrase} call</button>
            </form>

        </div>
    )
}