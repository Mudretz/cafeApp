import { FC, useEffect } from "react";
import salatsApi from "../../../api/api.salats";
import { salatsReceved } from "../../../store/salats";
import { isOutdated } from "../../../utils/isOutdated";
import { useAppDispatch, useAppSelector } from "../../hook";
import CardDish from "../cardDish";

const SalatsList: FC = () => {
    const salatsList = useAppSelector(state => state.salats.entities);
    const lastFetch = useAppSelector(state => state.salats.lastFetch);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isOutdated(lastFetch))
        {
            dispatch(salatsReceved(salatsApi));
        }
    })
    return (
        <>
            <div className="container">
                {salatsList.map((item) => (
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
        </>
    );
}
 
export default SalatsList;