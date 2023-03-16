import { FC, useEffect } from "react";
import salatsApi from "../../../../api/api.salats";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { salatsReceved } from "../../../../store/salats";
import { isOutdated } from "../../../../utils/isOutdated";
import CardDish from "../../ui/cardDish/cardDish";


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
        <main>
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
        </main>
    );
}
 
export default SalatsList;