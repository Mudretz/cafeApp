import { FC } from "react";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
    name: string,
    label: string,
    defaultValue?: string,
    width?: string,
    height?: string,
    reg?: {
        value: RegExp,
        message: string
    }
}

const FormInputText: FC<Props> = ({ name, label, defaultValue, width, height, reg}) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={name} 
            rules={{ 
                required: "Поле обязательно к заполнению",
                pattern: { value: /^(?!\s*$).+/, message: "Введите название блюда" }
            }}
            control={control}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    { ...field }
                    label={label}
                    variant="outlined"
                    sx={{ width: {width}, height: {height}}}
                    name={name}
                    error={!!error}
                    helperText={error?.message || ""}
                />
            )}
        />
    );
}

FormInputText.defaultProps = {
    width: "400px",
    height: "80px",
    defaultValue: "",
    reg: { value: /^(?!\s*$).+/, message: "Введите название блюда" }
};

export default FormInputText;