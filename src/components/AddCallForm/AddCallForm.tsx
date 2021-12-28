import React, {useContext, useEffect, useState} from "react";
import {Title} from "../Title/Title";
import "./addCallForm.scss";
import {TimeFunc} from "../../timeFunc";
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
const phoneNumberReg = (value) => /^[0]\d\d\-\d\d\-\d\d\-\d\d\d+$/.test(value);

const schema = yup.object({
    // @ts-ignore
    name: yup.string().required('Обязательное поле')
        .test('Только текст', 'Только текст', textOnly).min(2, 'Минимум 2 символа').max(30, 'Максимум 30 символов')
        .typeError('Только текст'),
    // @ts-ignore
    phone: yup.string().required('Обязательное поле')
        .test('0xx-xx-xx-xxx', '0xx-xx-xx-xxx', phoneNumberReg).min(13, 'Телефон 15 символов').max(13, 'Телефон 15 символов')
        .typeError('Введите коректный номер'),
    // @ts-ignore
    time: yup.string().required('Обязательное поле').test('Некоректная дата', 'Некоректная дата', dateReg).typeError('Только дата'),
}).required();

export const AddCallForm = ({addOneCall}) => {
    const [call,setCall] = useState(initialState);

    const context:Record<string,any> = useContext(ContractContext);
    const calls = context.calls;

    const defaultValues = {
        resolver: yupResolver(schema)
    }
    const {register, formState: {errors}, handleSubmit, reset} = useForm(defaultValues);

    const addCall =  (data: any) => {

        const form = new FormData();
        form.append("name", data.name);
        form.append("phone", data.phone);
        form.append("time", data.time);

        const timeInMilisec:number = TimeFunc(call.time, Date.now());
        setCall({...call, id:  Date.now(), milisec: timeInMilisec  });

    }

    useEffect( () => {
        if(call.id){
            let finalArr = calls.concat([call]);
            localStorage.setItem('list', JSON.stringify(finalArr));
            addOneCall(call);
            // reset(defaultValues);
            setCall(initialState);
        }
    },[call]);

    return (
        <div className="add-call">
            <Title text={"Add call"} />

            <form onSubmit={handleSubmit(addCall)}>
                <div className="add-call__inputs-wrap">
                    <div className="add-call__input-block name">
                        <input
                            {...register("name")}
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
                            placeholder="0ХХ-ХХ-ХХ-ХХХ"
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
                               onChange={e => {setCall({...call, time: e.target.value}) }}
                               className={errors.time
                                   ? "add-call__input error" : "add-call__input"
                               }
                        />
                        { <span className="add-call__error-message">{errors.time?.message}</span>}
                    </div>
                </div>
                <button type="submit" className="button add-call__button">Add call</button>
            </form>

        </div>
    )
}