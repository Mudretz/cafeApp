import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { deleteDish } from "../../../../store/dishes";
import CardDishEdit from "../../ui/cardDish/cardDishEdit";
import SkeletonListDishes from "../../ui/skeletonList/skeletonListDishes/skeletonListDishes";

const AllDishes: FC = () => {
    const dispatch = useAppDispatch();
    const dishesList = useAppSelector(state => state.dishes.entities);

    const handleDelete = (id: string, name: string) => {
        let status = window.confirm(`Вы действительно хотите удалить блюдо ${name}?`);
        if (status) {
            dispatch(deleteDish(id));
        };
    };

    return (
        <Grid
            container 
            maxWidth="75%"
            m="0 auto"
            spacing={3}
        >
            {dishesList.length < 1 && <SkeletonListDishes  count={4}/>}
            {dishesList.map((item) => (
                <Grid xs={4} item key={item.id}>
                    <CardDishEdit
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        weight={item.weight}
                        handleDelete={handleDelete}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
 
export default React.memo(AllDishes);