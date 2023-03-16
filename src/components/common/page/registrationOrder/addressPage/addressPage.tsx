import { TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import Steper from "../../../ui/steper";
import BackButton from "../../../ui/backButton/backButton";
import validator from "validator";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hook";
import { addOrders } from "../../../../../store/orders";
import styles from "./addressPage.module.scss";

interface State {
    [key: string]: string
}

interface Dirty {
    [key: string]: boolean
}

const AddressPage: FC = () => {
    const [value, setvalue] = useState<State>({ name: "", address: "", phone: ""});
    const [nameDirty, setNameDirty] = useState<Dirty>({ name: false, address: false, phone: false });
    const [errors, setErrors] = useState<State>({ name: "", address: "", phone: "" });

    const basket = useAppSelector(state => state.basket.entities);
    const countBasket = useAppSelector(state => state.countBasket.entities);
    const countOrders = useAppSelector(state => state.orders.count);
    const dispatch = useAppDispatch();
    const history = useHistory();

    const removeProperty = (prop:string) => ({ [prop]: _, ...rest }) => rest;

    const validateBlur = (item: string) => {
        const errorsObj: State = {};
        if (value[item].trim() !== "") {
            const removeItem = removeProperty(item);
            setErrors(removeItem(errors));
            setNameDirty({...nameDirty, [item] : false});
        }
        if (value[item].trim() === "") {
            setErrors({ ...errors, [item]: "Поле обязательно для заполнения" })
            setNameDirty({...nameDirty, [item] : true});
        }
        if (item === "phone" && !validator.isMobilePhone(value[item], ["ru-RU"])) {
            setErrors({ ...errors, [item]: "Введите номер телефона" })
            setNameDirty({...nameDirty, [item] : true});
        } 
        return Object.keys(errorsObj).length === 0;
    };

    const validateOnChange = (item: string, e?: string) => {
        const errorsObj: State = {};
        if (e!.trim() === "" && (item === "name" || item === "address")) {
            setErrors({ ...errors, [item]: "Поле обязательно для заполнения" })
            setNameDirty({...nameDirty, [item] : true});
        } else {
            const removeItem = removeProperty(item);
            setErrors(removeItem(errors));
            setNameDirty({...nameDirty, [item] : false});
        }
        if (item === "phone" && !validator.isMobilePhone(e!, ["ru-RU"])) {
            setErrors({ ...errors, [item]: "Введите номер телефона" })
            setNameDirty({...nameDirty, [item] : true});
        }
        return Object.keys(errorsObj).length === 0;
    };

    const handleChange = (item: string) => (e: ChangeEvent<HTMLInputElement>) => {
        setvalue((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
        validateOnChange(item, e.target.value);

    };

    const handleBlure = (item: string) => {
        validateBlur(item);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addOrders(
            {
                id: String(Date.now()),
                count: countOrders,
                name: value.name,
                address: value.address,
                phone: value.phone,
                totalPrice: countBasket,
                order: basket
            }
        ))
        history.push("/сonfirmation");
    };

    const isValid = Object.keys(errors).length === 0;
    
    return (
        <main>
            <BackButton />
            <form className={styles.container} onSubmit={handleSubmit}>
                <Steper step={1}/>
                <div>
                    <h2>Укажите ваше имя</h2>
                    <TextField
                        id="1"
                        label="Имя"
                        variant="outlined"
                        sx={{ width: "300px"}}
                        onChange={handleChange("name")}
                        name="name"
                        onBlur={() => handleBlure("name")}
                        error={nameDirty.name}
                        helperText={nameDirty.name ? errors!.name || "Поле обязательно для заполнения" : ""}
                    />
                </div>
                <div>
                    <h2>Укажите адрес доставки</h2>
                    <TextField
                        id="2"
                        label="Адрес"
                        variant="outlined"
                        sx={{ width: "300px"}}
                        onChange={handleChange("address")}
                        name="address"
                        onBlur={() => handleBlure("address")}
                        error={nameDirty.address}
                        helperText={nameDirty.address ? errors!.address || "Поле обязательно для заполнения" : ""}
                    />
                </div>
                <div>
                    <h2>Укажите номер телефона</h2>
                    <TextField
                        id="3"
                        label="Номер телефона"
                        variant="outlined" sx={{ width: "300px"}}
                        onChange={handleChange("phone")}
                        name="phone"
                        onBlur={() => handleBlure("phone")}
                        error={nameDirty.phone}
                        helperText={nameDirty.phone ? errors!.phone || "Введите номер телефона" : ""}
                    />    
                </div>
                <button
                    className={styles.button}
                    disabled={!isValid}
                    type="submit"
                >
                    Заказать
                </button>
            </form>
        </main>
    );
}
 
export default AddressPage;