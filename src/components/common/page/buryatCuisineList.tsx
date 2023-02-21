import { FC, useEffect } from "react";
import buryatCuisineApi from "../../../api/api.buryatCuisine";
import { buryatCuisineReceved } from "../../../store/buryatCuisine";
import { isOutdated } from "../../../utils/isOutdated";
import { useAppDispatch, useAppSelector } from "../../hook";
import CardDish from "../cardDish";

const BuryatCuisineList: FC = () => {
    const buryatCuisineList = useAppSelector(state => state.buryatCuisine.entities);
    const lastFetch = useAppSelector(state => state.buryatCuisine.lastFetch);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isOutdated(lastFetch))
        {
            dispatch(buryatCuisineReceved(buryatCuisineApi));
        }
    })
    
    return (
        <main>
            <div className="container">
                {buryatCuisineList.map((item) => (
                    <CardDish
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        weight={item.weight}
                        key={item.id}
                    />
                ))}
            </div>
        </main>
    );
}
 
export default BuryatCuisineList;