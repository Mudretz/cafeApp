import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import styleButton from "../buttons/button.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { dishEditUpdate } from "../../../../store/dishes";
import FormInputText from "../formInputText";
import FormSelect from "../formSelect";
import styles from "../addDish/addDish.module.scss";
import { useHistory } from "react-router-dom";
import BackButton from "../backButton/backButton";

interface Form {
    id: string,
    name: string,
    description: string,
    price: string,
    weight: string,
    img: string,
    select: string
}


const EditDish: FC<Form> = ({ id, name, description, price, weight, img, select }) => {
    const history = useHistory();
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
            dispatch(dishEditUpdate(
                {
                    id: id,
                    name: name,
                    img: img,
                    price: Number(price),
                    description: description,
                    weight: String(weight),
                    category: category
                }
            ));
        }
        history.replace("/dashboard");
    };

    return (
        <>
            <BackButton />
            <div className={styles.container}>
                <h2>Изменить блюдо</h2>
                <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
                    <FormProvider {...methods}>
                        <FormInputText
                            name="name"
                            label="Имя"
                            defaultValue={name}
                        />
                        <FormInputText
                            name="description"
                            label="Описание"
                            defaultValue={description}
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
                                defaultValue={price}
                            />
                            <FormInputText
                                name="weight"
                                label="Вес, грамм"
                                width="185px"
                                height="100px"
                                defaultValue={weight}
                            />
                        </div>
                        <FormInputText
                            name="img"
                            label="Картинка"
                            defaultValue={img}
                        />
                        <FormSelect
                            name="select"
                            label="Категории"
                            defaultValue={select}
                            list={categoriesList}
                        />                                                                        
                    </FormProvider>
                    <button onClick={methods.handleSubmit(onSubmit)} className={styleButton.button}>Изменить</button>
                </form>
            </div>
        </>
    );
}
 
export default EditDish;