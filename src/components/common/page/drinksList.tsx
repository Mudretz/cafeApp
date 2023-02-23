import { FC, useEffect } from "react";
import drinks from "../../../api/api.drinks";
import { drinksReceved } from "../../../store/drinks";
import { isOutdated } from "../../../utils/isOutdated";
import { useAppDispatch, useAppSelector } from "../../hook";
import CardDish from "../cardDish";

const DrinksList: FC = () => {
    const drinksList = useAppSelector(state => state.drinks.entities);
    const lastFetch = useAppSelector(state => state.drinks.lastFetch);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isOutdated(lastFetch))
        {
            dispatch(drinksReceved(drinks));
        }
    })
    return (
        <main>
            <div className="container">
                {drinksList.map((item) => (
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
 
export default DrinksList;