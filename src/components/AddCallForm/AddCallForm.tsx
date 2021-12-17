import React, {FC, useState} from "react";
import {Title} from "../Title/Title";
import "./addCallForm.scss";
import {TimeFunc} from "../../timeFunc";
import * as yup from "yup";
import MaskedInput from "react-text-mask";
import ICallScheme from "./typesAddCall";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


const initialState: ICallScheme = {
    id: '',name: '',phone: '',time: '',milisec: 0
}

const schema = yup.object({
    // @ts-ignore
    name: yup.string("Только текст").min(2, 'Минимум 2 символа').max(30, 'Максимум 30 символов'),
    // @ts-ignore
    phone: yup.string("Только текст").typeError('Введиет коректный номер'),
    // @ts-ignore
    time: yup.date,
}).required();

// @ts-ignore
export const AddCallForm: FC = ({create}) => {
    const [call,setCall] = useState(initialState);
    const phoneNumberMask = ["(", /[0]/, /\d/, /\d/, ")", " ", /\d/, /\d/,"-", /\d/,  /\d/, "-", /\d/, /\d/, /\d/];

    const defaultValues = {
        resolver: yupResolver(schema)
    }
    const {register, formState: {errors}, handleSubmit, reset} = useForm(defaultValues);


    const addCall = async (data: any) =>{

        const form = new FormData();
        form.append("name", data.name);
        form.append("phone", data.phone);
        form.append("time", data.time);

        const timeInMilisec = TimeFunc(call.time, Date.now());
        setCall({...call, id: Date.now() });
        setCall({...call, milisec: timeInMilisec });
        await  create(call).then( res => {
            if (res) reset(defaultValues);
            setCall({id: '',name: '',phone: '',time: '',milisec: 0});
        });
    }

    return (
        <div className="add-call">
            <Title text={"Add call"} />

            <form onSubmit={handleSubmit(addCall)}>
                <div className="add-call__inputs-wrap">
                    <div className="add-call__input-block name">
                        <input
                            {...register("name")}
                            name="name"
                            type="text"
                            className={errors.phone
                                    ? "add-call__input error" : "add-call__input"
                            }
                            placeholder="Name"
                            maxLength={30}
                        />
                        {errors.name && <span className="add-call__error-message">{errors.name}</span>}
                    </div>

                    <div className="add-call__input-block phone">
                        <MaskedInput
                            {...register("phone")}
                            name="phone"
                            mask={phoneNumberMask}
                            placeholder="(0ХХ) ХХ-ХХ-ХХХ"
                            type="text"
                            className={errors.phone
                                ? "add-call__input error" : "add-call__input"
                            }
                        />
                        {errors.phone && <span className="add-call__error-message">{errors.phone}</span>}
                    </div>

                    <div className="add-call__input-block time">
                        <input type="time"
                               name="time"
                               {...register("time")}
                               className={errors.time
                                   ? "add-call__input error" : "add-call__input"
                               }
                        />
                        {errors.time && <span className="add-call__error-message">{errors.time}</span>}
                    </div>
                </div>
                <button type="submit" className="button add-call__button">Add call</button>
            </form>

        </div>
    )
}