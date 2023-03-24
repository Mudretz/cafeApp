import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./addDish.module.scss";
import styleButton from "../buttons/button.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import FormHelperText from '@mui/material/FormHelperText';
import { dishesUpdate } from "../../../../store/dishes";

interface Form {
    name: string,
    description: string,
    price: string,
    weight: string,
    img: string,
    select: string
}

const AddDish: FC = () => {
    const dispatch = useAppDispatch();
    const categoriesList = useAppSelector(state => state.categoriesObj.entities);

    const { 
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<Form>({
        mode: "all"
    });

    const findCategoryByName = (name: string) => {
        return Object.values(categoriesList).find((item) => 
            item.name === name
        )
    };

    const onSubmit = (data: any) => {
        const { name, description, img, price, weight } = data;
        const category = findCategoryByName(data.select); 
        if (category) {
            dispatch(dishesUpdate(
                {
                    id: String(Date.now()),
                    name: name,
                    img: img,
                    price: price,
                    description: description,
                    weight: String(weight),
                    category: category
                }
            ));
        }
        reset();
    };

    return (
        <>
            <div className={styles.container}>
                <h2>Добавить блюдо</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <Controller
                        name="name"
                        rules={{ 
                            required: "Введите название блюда",
                            pattern: { value: /^(?!\s*$).+/, message: "Введите название блюда" }
                        }}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                { ...field }
                                id="1"
                                label="Имя"
                                variant="outlined"
                                sx={{ width: "400px", height: "80px"}}
                                name="name"
                                error={!!errors.name}
                                helperText={errors.name?.message || ""}
                            />
                        )}
                    />
                    <Controller
                        name="description"
                        rules={{ 
                            required: "Введите название блюда",
                            pattern: { value: /^(?!\s*$).+/, message: "Введите название блюда" }
                        }}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                { ...field }
                                id="2"
                                label="Описание"
                                variant="outlined"
                                sx={{ width: "400px", height: "125px"}}
                                name="description"
                                error={!!errors.description}
                                helperText={errors.description?.message || ""}
                                multiline
                                rows={3}
                            />
                        )}
                    />
                    <div className={styles.price__weight}>
                        <Controller
                            name="price"
                            rules={{
                                required: "Поле обязательно к заполнению",
                                pattern: { value: /^[0-9]/, message: "Введите цифры"}
                            }}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    { ...field }
                                    id="4"
                                    label="Цена, руб."
                                    variant="outlined"
                                    sx={{ width: "185px", height: "100px"}}
                                    name="price"
                                    error={!!errors.price}
                                    helperText={errors.price ? errors.price.message : ""}
                                />
                            )}
                        />
                        <Controller
                            name="weight"
                            rules={{ required: "Поле обязательно к заполнению", pattern: { value: /^[0-9]/, message: "Введите цифры" } }}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    { ...field }
                                    id="5"
                                    label="Вес, гр."
                                    variant="outlined"
                                    sx={{ width: "185px", height: "100px"}}
                                    name="weight"
                                    error={!!errors.weight}
                                    helperText={errors.weight ? errors.weight.message : ""}
                                />
                            )}
                        />
                    </div>
                    <Controller
                        name="img"
                        rules={{ 
                            required: "Введите название блюда",
                            pattern: { value: /^(?!\s*$).+/, message: "Введите название блюда" }
                        }}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                { ...field }
                                id="1"
                                label="Картинка"
                                variant="outlined"
                                sx={{ width: "400px", height: "80px"}}
                                name="img"
                                error={!!errors.img}
                                helperText={errors.img ? errors.img.message : ""}
                            />
                        )}
                    />
                    <Controller
                        name="select"
                        rules={{ required: "Поле обязательно к заполнению" }}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <FormControl fullWidth error={!!errors.select}>
                                <InputLabel id="demo-simple-select-label">Категории</InputLabel>
                                <Select
                                    { ...field }
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Категории"
                                    name="select"
                                    sx={{ width: "400px", height: "80px"}}
                                >
                                    {categoriesList.map((item) => (
                                        <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>{errors.select ? errors.select.message : ""}</FormHelperText>
                            </FormControl>
                        )}
                    />
                    <button onClick={handleSubmit(onSubmit)} className={styleButton.button}>Отправить</button>
                </form>
            </div>
        </>
    );
}
 
export default AddDish;