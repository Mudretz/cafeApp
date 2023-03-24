import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import styles from "./addDish.module.scss";
import styleButton from "../buttons/button.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { dishesUpdate } from "../../../../store/dishes";
import FormInputText from "../formInputText";
import FormSelect from "../formSelect";

interface Form {
    name: string,
    description: string,
    price: string,
    weight: string,
    img: string,
    select: string
}

const AddDishComp: FC = () => {
    const dispatch = useAppDispatch();
    const categoriesList = useAppSelector(state => state.categoriesObj.entities);

    const methods = useForm<Form>({
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
                    price: Number(price),
                    description: description,
                    weight: String(weight),
                    category: category
                }
            ));
        }
        methods.reset();
    };

    return (
        <>
            <div className={styles.container}>
                <h2>Добавить блюдо</h2>
                <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
                    <FormProvider {...methods}>
                        <FormInputText
                            name="name"
                            label="Имя"
                        />
                        <FormInputText
                            name="description"
                            label="Описание"
                        />
                        <div style={{ 
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gridColumnGap: "30px"
                            }}
                        >
                            <FormInputText
                                name="price"
                                label="Цена"
                                width="185px"
                                height="100px"
                            />
                            <FormInputText
                                name="weight"
                                label="Вес"
                                width="185px"
                                height="100px"
                            />
                        </div>
                        <FormInputText
                            name="img"
                            label="Картинка"
                        />
                        <FormSelect
                            name="select"
                            label="Категории"
                            list={categoriesList}
                        />                                                                        
                    </FormProvider>
                    <button onClick={methods.handleSubmit(onSubmit)} className={styleButton.button}>Отправить</button>
                </form>
            </div>
        </>
    );
}
 
export default AddDishComp;