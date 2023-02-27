import { TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import Steper from "../steper";
import BackButton from "../backButton";
import validator from "validator";

interface Value {
    [key: string]: string
}
interface Errors {
    [key: string]: string
}

interface Dirty {
    [key: string]: boolean
}

const AddressPage: FC = () => {
    const [value, setvalue] = useState<Value>({ name: "", address: "", phone: ""});
    const [nameDirty, setNameDirty] = useState<Dirty>({ name: false, address: false, phone: false });
    const [errors, setErrors] = useState<Errors>();

    const validateBlur = (item: string) => {
        const errorsObj: Errors = {};
        if (value[item].trim() !== "") {
            setNameDirty({...nameDirty, [item] : false});
        }
        if (value[item].trim() === "") {
            errorsObj[item] = "Поле обязательно для заполнения";
            setNameDirty({...nameDirty, [item] : true});
        }
        if (item === "phone" && !validator.isMobilePhone(value[item], ["ru-RU"])) {
            console.log(value[item]);
            errorsObj[item] = "Введите номер телефона";
            setNameDirty({...nameDirty, [item] : true});
        } 
        setErrors(errorsObj);
        return Object.keys(errorsObj).length === 0;
    }
    const validateOnChange = (item: string, e?: string) => {
        const errorsObj: Errors = {};
        if (e!.trim() !== "") {
            setNameDirty({...nameDirty, [item] : false});
        }
        if (e!.trim() === "") {
            errorsObj[item] = "Поле обязательно для заполнения";
            setNameDirty({...nameDirty, [item] : true});
        }
        if (item === "phone" && !validator.isMobilePhone(e!, ["ru-RU"])) {
            errorsObj[item] = "Введите номер телефона";
            setNameDirty({...nameDirty, [item] : true});
        } 
        setErrors(errorsObj);
        return Object.keys(errorsObj).length === 0;
    }
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
        console.log(value);
    };
    return (
        <main>
            <BackButton />
            <form className="container address__page" onSubmit={handleSubmit}>
                <Steper step={1}/>
                <div>
                    <h2>Укажите ваше имя</h2>
                    <TextField
                        id="filled-basic"
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
                        id="filled-basic"
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
                        id="filled-basic"
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
                    className="button"
                    disabled={true}
                    type="submit"
                >
                    Заказать
                </button>
            </form>
        </main>
    );
}
 
export default AddressPage;