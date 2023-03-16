import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import HeaderDashboard from "../../../layouts/headerDashboard/headerDashboard";
import styles from "./addDish.module.scss";

interface Form {
    name: string,
    desription: string,
    price: string,
    weight: string,
    img: string,
    select: string
}

const AddDish: FC = () => {
    const { 
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<Form>({
        mode: "all"
    });

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

    const onSubmit = (data: any) => alert(`${data.name} ${data.desription} ${data.price} ${data.weight} ${data.img}`);

    return (
        <>
            <HeaderDashboard />
            <div className={styles.container}>
                <h2>Добавить блюдо</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div>
                        <h2>Укажите название</h2>
                        <Controller
                            name="name"
                            rules={{ required: "Введите название блюда" }}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    { ...field }
                                    id="1"
                                    label="Имя"
                                    variant="outlined"
                                    sx={{ width: "400px"}}
                                    name="name"
                                    error={!!errors.name}
                                    helperText={errors.name ? errors.name?.message : ""}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <h2>Напишите описание</h2>
                        <Controller
                            name="desription"
                            rules={{ required: "Поле обязательно к заполнению",  }}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    { ...field }
                                    id="2"
                                    label="Описание"
                                    variant="outlined"
                                    sx={{ width: "400px"}}
                                    name="description"
                                    error={!!errors.desription}
                                    helperText={errors.desription ? errors.desription?.message : ""}
                                    multiline
                                    rows={3}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <h2>Введите цену</h2>
                        <Controller
                            name="price"
                            rules={{ required: "Поле обязательно к заполнению", pattern: { value: /^[0-9]/, message: "Введите цифры" } }}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    { ...field }
                                    id="1"
                                    label="Цена"
                                    variant="outlined"
                                    sx={{ width: "400px"}}
                                    name="price"
                                    error={!!errors.price}
                                    helperText={errors.price ? errors.price?.message : ""}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <h2>Введите вес</h2>
                        <Controller
                            name="weight"
                            rules={{ required: "Поле обязательно к заполнению", pattern: { value: /^[0-9]/, message: "Введите цифры" } }}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    { ...field }
                                    id="1"
                                    label="Вес"
                                    variant="outlined"
                                    sx={{ width: "400px"}}
                                    name="weight"
                                    error={!!errors.weight}
                                    helperText={errors.weight ? errors.weight?.message : ""}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <h2>Введите URL картинки</h2>
                        <Controller
                            name="img"
                            rules={{ required: "Поле обязательно к заполнению" }}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    { ...field }
                                    id="1"
                                    label="Картинка"
                                    variant="outlined"
                                    sx={{ width: "400px"}}
                                    name="img"
                                    error={!!errors.img}
                                    helperText={errors.img ? errors.img?.message : ""}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <h2>Выберите категорию</h2>
                        <Controller
                            name="select"
                            rules={{ required: "Поле обязательно к заполнению" }}
                            control={control}
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        { ...field }
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        name="select"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <button onClick={handleSubmit(onSubmit)}>Отправить</button>
                </form>
            </div>
        </>
    );
}
 
export default AddDish;