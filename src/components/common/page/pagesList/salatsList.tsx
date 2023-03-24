import React, { FC } from "react";
import { useAppSelector } from "../../../../hooks/hook";
import DishesList from "../../ui/dishesList";


const SalatsList: FC = () => {
    const salatsDishesList = useAppSelector(state => state.dishes.entities)
        .filter(item => item.category.name === "Салаты");

    return (
        <DishesList list={salatsDishesList}/>
    );
}
 
export default React.memo(SalatsList);