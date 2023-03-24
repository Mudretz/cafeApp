import { FC } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from "react-hook-form";
import { Categories } from "../../../types/types";

interface Props {
    name: string,
    label: string,
    defaultValue?: string,
    width?: string,
    height?: string,
    list: Categories[]
}

const FormSelect: FC<Props> = ({ name, label, defaultValue, width, height, list}) => {
    const { control } = useFormContext();

    return (
         <Controller
            name={name}
            rules={{ required: "Поле обязательно к заполнению" }}
            control={control}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth error={!!error} sx={{ width: {width}, height: {height} }}>
                    <InputLabel id="demo-simple-select-label">Категории</InputLabel>
                    <Select
                        { ...field }
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={label}
                        name="select"
                    >
                        {list.map((item) => (
                            <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>{error?.message || ""}</FormHelperText>
                </FormControl>
            )}
        />
    );
};

FormSelect.defaultProps = { width: "400px", height: "100px", defaultValue: "" };

export default FormSelect;