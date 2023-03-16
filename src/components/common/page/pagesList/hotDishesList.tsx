import { FC, useEffect } from "react";
import hot_dishes from "../../../../api/api.hot_dishes";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { hotDishesReceved } from "../../../../store/hotDishesStore";
import { isOutdated } from "../../../../utils/isOutdated";
import CardDish from "../../ui/cardDish/cardDish";

const HotDishesList: FC = () => {
    const hotDishesList = useAppSelector(state => state.hotDishes.entities);
    const lastFetch = useAppSelector(state => state.hotDishes.lastFetch);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isOutdated(lastFetch))
        {
            dispatch(hotDishesReceved(hot_dishes));
        }
    })
    
    return (
        <main>
            <div className="container">
                {hotDishesList.map((item) => (
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
 
export default HotDishesList;