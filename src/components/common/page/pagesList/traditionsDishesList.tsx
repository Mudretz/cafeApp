import React, { FC } from "react";
import { useAppSelector } from "../../../../hooks/hook";
import DishesList from "../../ui/dishesList";

const BuryatCuisineList: FC = () => {
    const traditionsDishesList = useAppSelector(state => state.dishes.entities)
        .filter(item => item.category.name === "Традиционная кухня");

    return (
        <DishesList list={traditionsDishesList}/>
    );
}
 
export default React.memo(BuryatCuisineList);