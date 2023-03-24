import React, { FC } from "react";
import { useAppSelector } from "../../../../hooks/hook";
import DishesList from "../../ui/dishesList";

const DrinksList: FC = () => {
    const hotDishesList = useAppSelector(state => state.dishes.entities)
        .filter(item => item.category.name === "Напитки");

    return (
        <DishesList list={hotDishesList}/>
    );
}
 
export default React.memo(DrinksList);