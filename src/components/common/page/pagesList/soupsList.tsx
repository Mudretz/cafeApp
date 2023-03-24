import React, { FC } from "react";
import { useAppSelector } from "../../../../hooks/hook";
import DishesList from "../../ui/dishesList";


const SoupsList: FC = () => {
    const soupsDishesList = useAppSelector(state => state.dishes.entities)
        .filter(item => item.category.name === "Супы");

    return (
        <DishesList list={soupsDishesList}/>
    );
}
 
export default React.memo(SoupsList);