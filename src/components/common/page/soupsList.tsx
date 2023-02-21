import { FC, useEffect } from "react";
import soups from "../../../api/api.soups";
import { soupsReceved } from "../../../store/soupsStore";
import { isOutdated } from "../../../utils/isOutdated";
import { useAppDispatch, useAppSelector } from "../../hook";
import CardDish from "../cardDish";

const SoupsList: FC = () => {
    const soupsList = useAppSelector(state => state.soups.entities);
    const lastFetch = useAppSelector(state => state.soups.lastFetch);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isOutdated(lastFetch))
        {
            dispatch(soupsReceved(soups));
        }
    })
    return (
        <>
            <div className="container">
                {soupsList.map((item) => (
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
 
export default SoupsList;